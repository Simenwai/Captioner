import React, { useState } from 'react';
import axios from 'axios';
import './hero9.css';

const ImageUploader = () => {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState('');
  const [imagePreviewUrl, setImagePreviewUrl] = useState('');
  const [captionGenerated, setCaptionGenerated] = useState(false);
  const [modelIndex, setModelIndex] = useState(0);

  const modelNames = ['20', 'large', 'desc2'];

  const onFileChange = event => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
      setCaption('');
      setCaptionGenerated(false);
      setModelIndex(0);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const cycleModel = () => {
    setModelIndex((current) => (current + 1) % modelNames.length);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post(`/predict?model=${modelNames[modelIndex]}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setCaption(response.data);
      setCaptionGenerated(true);
      cycleModel();
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div className="image-uploader-container">
      <form onSubmit={onSubmit}>
        {imagePreviewUrl && (
          <button
            type="button"
            className="thq-button-filled hero9-button"
            onClick={() => document.getElementById('fileInput').click()}
          >
            Velg nytt bilde
          </button>
        )}
        <div className="dotted-box">
          <input
            type="file"
            onChange={onFileChange}
            required
            id="fileInput"
            style={{ display: 'none' }}
          />
          {!imagePreviewUrl && (
            <label htmlFor="fileInput" className="thq-button-filled hero9-button">
              <span>Velg bilde</span>
            </label>
          )}
          {imagePreviewUrl && (
            <div className="image-preview-container">
              <img src={imagePreviewUrl} alt="Preview" className="uploaded-image" />
            </div>
          )}
        </div>
        {imagePreviewUrl && (
          <button
            type="submit"
            className="thq-button-filled hero9-button submit-button"
          >
            {captionGenerated ? 'Regenerer beskrivelse' : 'Generer beskrivelse'}
          </button>
        )}
      </form>
      <h3>
        <div className="caption">{caption}</div>
        <br />
      </h3>
    </div>
  );
};

export default ImageUploader;
