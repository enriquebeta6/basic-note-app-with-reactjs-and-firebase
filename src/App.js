//Dependencies
import React, { Component } from 'react';
import firebase from 'firebase';
import { DB_CONFIG } from './config/config';
import 'firebase/database';

//Styled
import './App.css';

//Components
import NoteList from './components/NoteList/NoteList';
import NoteForm from './components/NoteForm/NoteForm';

export default class App extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      notes: [
        // {id: 1, content: 'note 1'},
        // {id: 2, content: 'note 2'},
        // {id: 3, content: 'note 3'},
      ]
    }

    this.app = firebase.initializeApp(DB_CONFIG);
    this.db = this.app.database().ref().child('notes');
  }

  addNote = note => {
    // const { notes } = this.state;
    // notes.push({
    //   id: notes.lenght,
    //   content: note
    // });

    // this.setState({
    //   notes
    // });

    this.db.push().set({content: note});
  }

  removeNote = id => {
    const response = window.confirm('Are you sure to delete the note?');

    if (response) {
      this.db.child(id).remove();
    }
  }

  componentDidMount() {
    const { notes } = this.state;
    
    this.db.on('child_added', snap => {
      notes.push({
        id: snap.key,
        content: snap.val().content
      });
      
      this.setState({
        notes
      });
    });

    this.db.on('child_removed', snap => {
      notes.forEach((note, index) => {
        if (note.id == snap.key) {
          notes.splice(index, 1);
        }
      });

      this.setState({
        notes
      });
    });
  }

  render() {
    return (
      <div className="notes-container">
        <div className="notes-header">
          App Notes with React and Firebase
        </div>
        
        <div className="notes-body">
          <NoteList notes={this.state.notes} removeNote={this.removeNote}/>
        </div>
        
        <div className="notes-footer">
          <NoteForm addNote={this.addNote} />
        </div>
      </div>
    );
  }
}