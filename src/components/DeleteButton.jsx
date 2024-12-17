import React from 'react';
 
function DeleteButton({ id, onDelete }) {
  return <button className='note-item__delete' onClick={() => onDelete(id)}>Delete</button>
  // return <button className='note-item__delete' onClick={() => onDelete(id)}><i class="fas fa-trash"></i></button>

}
 
export default DeleteButton;