import os
import io
import torch
from flask import Flask, send_from_directory, request, jsonify
from werkzeug.utils import secure_filename
from transformers import AutoProcessor, BlipForConditionalGeneration
from PIL import Image
from flask_cors import CORS

app = Flask(__name__, static_folder='../build')
CORS(app)

device = torch.device('cpu')

# Dictionary mapping model names to their sizes and weights
model_info = {
    '20': {'size': 'base', 'weights': 'model_weights_20.pth'},
    'large': {'size': 'large', 'weights': 'model_weights_large.pth'},
    'desc2': {'size': 'base', 'weights': 'model_weights_desc2.pth'}
}

models = {}
processors = {}

# Function to load a model and its processor
def load_model_and_processor(model_name, model_size, model_weights_path):
    processor = AutoProcessor.from_pretrained(f"Salesforce/blip-image-captioning-{model_size}")
    model = BlipForConditionalGeneration.from_pretrained(f"Salesforce/blip-image-captioning-{model_size}")
    model.load_state_dict(torch.load(model_weights_path, map_location=device))
    model.to(device)
    model.eval()
    models[model_name] = model
    processors[model_name] = processor

# Preload all models and processors
for name, info in model_info.items():
    load_model_and_processor(name, info['size'], info['weights'])

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

@app.route('/predict', methods=['POST'])
def predict():
    print("Received request at /predict")
    if 'file' not in request.files:
        print("No file part in the request")
        return 'No file part', 400
    file = request.files['file']
    if file.filename == '':
        print("No selected file")
        return 'No selected file', 400
    if file:
        model_name = request.args.get('model', '20')
        print(f"Model requested: {model_name}")
        if model_name not in models:
            print("Model not found")
            return jsonify("Model not found"), 400

        # Load image
        image = Image.open(io.BytesIO(file.read())).convert("RGB")
        processor = processors[model_name]
        inputs = processor(images=image, return_tensors="pt").to(device)
        pixel_values = inputs.pixel_values

        # Generate caption
        model = models[model_name]
        generated_ids = model.generate(pixel_values=pixel_values, max_length=250)
        generated_caption = processor.batch_decode(generated_ids, skip_special_tokens=True)[0]

        print(f"Generated caption: {generated_caption}")
        return jsonify(generated_caption)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
