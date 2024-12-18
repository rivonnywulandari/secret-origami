import React from 'react';

function NoteItemImage({ imageUrl, title }) {
  return (
    <div className="note-item__image">
      <div className="note-item__overlay-text">To: {title}</div>
      <img src={imageUrl || './images/default.png'} alt="note avatar" />
      <style>
        {`
          .note-item__image:hover::after {
            content: 'Click to unfold';
            position: absolute;
            background-color: rgba(0, 0, 0, 0.75);
            color: white;
            padding: 5px;
            border-radius: 5px;
            bottom: 0;
            top: 60%;
            bottom: 27%;
            left: 50%;
            transform: translateX(-50%);
            white-space: nowrap;
          }
        `}
      </style>
    </div>
  );
}

export default NoteItemImage;
