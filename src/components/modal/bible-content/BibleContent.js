import React, { Component } from 'react';
import './BibleContent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const classNames = require('classnames');

// TODO add encouragement?
// TODO instead of hiding answer do we just show yesterdays
// TODO button to take to next screen (statistics likely)
export default class BibleContent extends Component {

  render () {
    return (
      <div className="bible-container">
      <FontAwesomeIcon icon={"times"} className={'close-icon'}/>
        <h4 className="bottom-border modal-title"> Prayer Encouragement ({this.props.puzzleNumber}): <b className={classNames({'fuzzy': !this.props.puzzleIsSolved })}> {this.props.answer.word} </b></h4>
        <div className={classNames('bible-verse', {'fuzzy': !this.props.puzzleIsSolved})}>
          <p className="verse-text"> "{this.props.answer.verse}"</p>
          <div className="flex-row">
            <p className="verse-number"> {this.props.answer.verse_number} </p>
            {!!this.props.puzzleIsSolved && <button onClick={this.props.openStatisticsCallback}>Statistics</button>}
          </div>
        </div>
        {!this.props.puzzleIsSolved &&
        <p className="hint">Solve todays Praydle to see the corresponding prayer encouragement</p>}
      </div>
    )
  }
}
