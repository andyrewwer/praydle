import React, { Component } from 'react';
import './BibleContent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class BibleContent extends Component {

  render () {
    return (
      <div className="bible-container" onClick={this.props.closeModal}>
      <FontAwesomeIcon icon={"times"} className={'close-icon'}/>
        <h4 className="bottom-border" style={{textAlign: "center", paddingBottom: "10px"}}> Prayer Encouragement: <b> {this.props.answer.word} </b></h4>
        <div className="bible-verse">
          <p className="verse-text"> "{this.props.answer.verse}"</p>
          <p className="verse-number"> {this.props.answer.verse_number} </p>
        </div>
      </div>
    )
  }
}
