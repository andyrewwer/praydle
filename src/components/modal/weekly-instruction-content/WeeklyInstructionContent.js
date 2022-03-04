import React, { Component } from 'react';
import './WeeklyInstructionContent.css';
import {ANSWER_TYPE, ANIMATION_TYPE} from '../../../utils/Enums';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GameTile from '../../board/game-row/game-tile/GameTile'

export default class WeeklyInstructionContent extends Component {

  constructor() {
    super();
  }
  // TODO add rules and handling if we do answers like "I AM THE" instead of just one word!

  render () {
    return (
      <div onClick={this.props.closeModal}>
      <FontAwesomeIcon icon={"times"} className={'close-icon'}/>
        <h4 className="modal-title bottom-border" style={{textAlign: "center"}}> WEEKLY PUZZLE </h4>

        <div className="instructions bottom-border">
          <p> Now what makes <b className="praydle-span">PRAY</b><b>DLE</b> is that we don't just have a daily puzzle and prayer encouragement...</p>
          <p> Every week the guesses have a common theme, and each day you can make <b> one </b> guess to find our weekly theme!</p>
          <p> Otherwise all other rules are the same... for now! </p>
        </div>
        <div className="instructions">
          <p className='new'> Once you've guessed the word, there will be a longer <b>pray</b>er encouragement tying the weeks' theme!</p>
          <b> The weekly theme resets every Sunday!</b>
        </div>
      </div>
    )
  }
}
