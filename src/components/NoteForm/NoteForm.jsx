//Dependencies
import React, { Component } from 'react';

//Styled
import './NoteForm.css';

export default class NoteForm extends Component {

  constructor(props) {
    super(props);
  }

  handleClick = e => {
    this.props.addNote(this.input.value);
    this.input.value = '';
    this.input.focus();
  }

  render() {
    return (
      <div className="form-container">
        <input 
          type="text" 
          ref={input => this.input = input}
        />

        <button 
          type="submit"
          onClick={this.handleClick}
        >
          Add Now
        </button>
      </div>
    )
  }
}