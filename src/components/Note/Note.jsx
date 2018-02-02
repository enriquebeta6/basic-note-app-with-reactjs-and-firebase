//Dependencies
import React, { Component } from 'react';

//Styled
import './Note.css';

export default class Note extends Component {

  constructor(props) {
    super(props);
  }

  handleRemove = () => {
    this.props.removeNote(this.note.id);
  }

  render() {
    return (
      <li 
        className="note" 
        id={this.props.id}
        ref={note => this.note = note}
      >
        <span>
          <i className="delete" onClick={this.handleRemove}>
            &times;
          </i>
        </span>

        <div className="content">
          {this.props.content}
        </div>
      </li> 
    )
  }
}