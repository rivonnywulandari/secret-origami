import React from 'react';

function NoteItemImage({ imageUrl, title }) {
  return (
    <div className="note-item__image">
      <div className="note-item__overlay-text">To: {title}</div>
      <img src={imageUrl || './images/default.png'} alt="note avatar" />
     
    </div>
  );
}

export default NoteItemImage;
