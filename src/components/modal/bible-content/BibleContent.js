import React, { Component } from 'react';
import './BibleContent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default class BibleContent extends Component {

  render () {
    return (
      <div onClick={this.props.closeModal}>
      <FontAwesomeIcon icon={"times"} className={'close-icon'}/>
        <h4 className="bottom-border" style={{textAlign: "center", paddingBottom: "10px"}}> Prayer Encouragement: <b> GRACE </b></h4>

        <div className="bible-verse">
          <p className="verse-text"> "Here I am! I stand at the door and knock. If anyone hears my voice and opens the door, I will come in and eat with that person, and they with me.""</p>
          <p className="verse-number"> Revelation 3:20 (NIV) </p>
        </div>
      </div>
    )
  }
}
