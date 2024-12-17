import React from 'react';
import NoteItemBody from './NoteItemBody';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';
import RemoveButton from './RemoveButton';
import NoteItemImage from './NoteItemImage';
import { showFormattedDate } from '../utils/data';

function NoteItem({
  title,
  createdAt,
  body,
  id,
  onDelete,
  archived,
  onArchive,
  onRemove,
  onFlip,
  flip,
  imageUrl,
}) {
  return (
    <div
      className="note-item"
      onClick={() => onFlip(id)} // Toggle flip state when clicked
      style={{ cursor: 'pointer' }}
    >
      {flip ? (
        <NoteItemImage title={title} imageUrl={imageUrl} />
      ) : (
        <>
          {/* Membungkus elemen dengan Fragment */}
          <div className="note-item__content">
            <NoteItemBody
              title={title}
              createdAt={showFormattedDate(createdAt)}
              body={body}
            />
          </div>
          <div className="note-item__action">
            <DeleteButton id={id} onDelete={onDelete} />
            {archived ? (
              <RemoveButton id={id} onRemove={onRemove} />
            ) : (
              <ArchiveButton id={id} onArchive={onArchive} />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default NoteItem;
