import React from 'react';
import NoteList from './NoteList';
import { getData } from '../utils/data';
import NoteInput from './NoteInput';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getData(),
      searchQuery: '',
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onRemoveHandler = this.onRemoveHandler.bind(this);
    this.onFlipHandler = this.onFlipHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);

  }


  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    this.setState((prevState) => ({
      notes: prevState.notes.map(note =>
        note.id === id ? { ...note, archived: true } : note
      )
    }));
  }

  onRemoveHandler(id) {
    this.setState((prevState) => ({
      notes: prevState.notes.map(note =>
        note.id === id ? { ...note, archived: false } : note
      )
    }));
  }

  onFlipHandler(id) {
    this.setState((prevState) => ({
      notes: prevState.notes.map((note) =>
        note.id === id ? { ...note, flip: !note.flip } : note
      ),
    }));
  }

  

  onAddNoteHandler({ title, body, imageUrl }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            createdAt: new Date().toISOString(),
            title,
            body,
            archived: false,
            flip: true,
            imageUrl,
          }
        ]
      }
    });
  }

  onSearchHandler(event) {
    this.setState({ searchQuery: event.target.value });
  }

  render() {
    const { notes, searchQuery } = this.state;

    const filteredNotes = notes.filter((note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase())
    );


    const activeNotes = filteredNotes.filter(note => !note.archived);
    const archivedNotes = filteredNotes.filter(note => note.archived);
    const year = new Date().getFullYear();

    return (
      <div id="root">
        <div className="note-app__header">
          <h1>Secret Origami</h1>
          <div className="note-search">
            <input type="text" placeholder="Search letters..." value={this.state.searchQuery} onChange={this.onSearchHandler} />
          </div>
        </div>
        <div className="note-app__body">
          <div className="note-input">
            <h2 className='sour-gummy'>Write an origami letter</h2>
            <NoteInput addNote={this.onAddNoteHandler} />
          </div>
          <div>
            <h2>Active letters</h2>
            <NoteList notes={activeNotes} onFlip={this.onFlipHandler} onArchive={this.onArchiveHandler} onDelete={this.onDeleteHandler} />
          </div>
          <div>
            <h2>Archived letters</h2>
            <NoteList notes={archivedNotes} onFlip={this.onFlipHandler} onRemove={this.onRemoveHandler} onDelete={this.onDeleteHandler} />
          </div>
        </div>
        <footer>
          <p className='footer'> {year} &copy; Rivonny</p>
        </footer>
      </div>
    );
  }
}

export default NoteApp;