import React from 'react';
import './index.css';

const TextBlock = ({ title, text }) => {
  return (
    <div className="text-block">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default TextBlock;
