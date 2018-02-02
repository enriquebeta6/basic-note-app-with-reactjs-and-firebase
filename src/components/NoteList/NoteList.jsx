//Dependencies
import React, { Component } from 'react';

//Styled
import './NoteList.css';

//Components
import Note from '../Note/Note';

export default class NoteList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { notes } = this.props;
    const notesList = notes.map(note => {
      return (
        <Note 
          key={note.id} 
          id={note.id} 
          content={note.content}
          removeNote={this.props.removeNote} 
        />
      );
    });

    return (
      <ul id='noteList'>
        {notesList}
      </ul>
    )
  }
}