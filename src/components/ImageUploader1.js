import React, { useState } from 'react';
import axios from 'axios';
import './hero9.css';

const ImageUploader = () => {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState('');
  const [imagePreviewUrl, setImagePreviewUrl] = useState('');
  const [buttonLabel, setButtonLabel] = useState('Velg bilde'); // State for button label
  const [captionGenerated, setCaptionGenerated] = useState(false); // State to track if a caption has been generated

  const onFileChange = event => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
      setButtonLabel('Velg nytt bilde'); // Change button text when file is chosen
      setCaption(''); // Reset the caption
      setCaptionGenerated(false); // Reset caption generated status on new file selection
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setCaption(`${response.data}`);
      setCaptionGenerated(true); // Set caption generated to true after receiving response
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div className="image-uploader-container">
      <form onSubmit={onSubmit}>
        <input type="file" onChange={onFileChange} required id="fileInput" style={{ display: 'none' }} />
        <label htmlFor="fileInput" className="thq-button-filled hero9-button">
          <span>{buttonLabel}</span>
        </label>
        {imagePreviewUrl && (
          <div className="image-preview-container">
            <img src={imagePreviewUrl} alt="Preview" className="uploaded-image"/>
            <button type="submit" className="thq-button-filled hero9-button submit-button">
              {captionGenerated ? 'Regenerer beskrivelse' : 'Generer beskrivelse'}
            </button>
          </div>
        )}
      </form>
      <h3>
        <div className="caption">{caption}</div>
        <br></br>
      </h3>
    </div>
  );
};

export default ImageUploader;
