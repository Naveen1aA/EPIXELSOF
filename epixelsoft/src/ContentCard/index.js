import React from 'react';
import './index.css';

const ContentCard = ({ title, text,userTag, tagColor }) => {
  return (
    <div className="card">
      {userTag && (
        <span className="user-tag" style={{ backgroundColor: tagColor || 'gray' }}>
          {userTag}
        </span>
      )}
      <h3>{title}</h3>
      <p className='text'>{text}</p>
      <button className="learn-more-btn">Learn more</button>
    </div>
  );
}

export default ContentCard;
