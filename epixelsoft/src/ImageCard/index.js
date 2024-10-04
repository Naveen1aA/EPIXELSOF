import React from 'react';
import './index.css';

const ImageCard = ({ imgSrc, title, description }) => {
  return (
    <div className="image-card">
      <div className="image-container">
        <img src={imgSrc} alt={title} className="card-image" />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ImageCard;
