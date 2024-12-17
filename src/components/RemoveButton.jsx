import React from 'react';
 
function RemoveButton({ id, onRemove }) {
  return <button className='note-item__archive' onClick={() => onRemove(id)}>Remove</button>
  // return <button className='note-item__archive' onClick={() => onRemove(id)}><i class="fa-solid fa-rotate-back"></i></button>
}
 
export default RemoveButton;