import React from 'react';
 
function ArchiveButton({ id, onArchive }) {
  return <button className='note-item__archive' onClick={() => onArchive(id)}>Archive</button>
  // return <button className='note-item__archive' onClick={() => onArchive(id)}><i class="fa-solid fa-folder-open"></i></button>
}
 
export default ArchiveButton;