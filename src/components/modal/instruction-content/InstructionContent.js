import React, { Component } from 'react';
import './InstructionContent.css';
import {ANSWER_TYPE, ANIMATION_TYPE} from '../../../utils/Enums';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GameTile from '../../board/game-row/game-tile/GameTile'
export default class InstructionContent extends Component {

  constructor() {
    super();
    this.state = {
      animation: ANIMATION_TYPE.TBD,
      correct: ANSWER_TYPE.TBD,
      present: ANSWER_TYPE.TBD,
      absent: ANSWER_TYPE.TBD,
    }
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    setTimeout(function() {
      this.setState({animation: ANIMATION_TYPE.FLIP_IN});
      setTimeout(function() {
        this.setState({
          animation: ANIMATION_TYPE.FLIP_OUT,
          correct: ANSWER_TYPE.CORRECT,
          present: ANSWER_TYPE.PRESENT,
          absent: ANSWER_TYPE.ABSENT
        });
      }.bind(this), 250);
    }.bind(this), 300);
  }

  render () {
    return (
      <div onClick={this.props.closeModal}>
      <FontAwesomeIcon icon={"times"} className={'close-icon'}/>
        <div className="instructions bottom-border">
          <p> Guess the <b className="praydle-span">PRAY</b><b>DLE</b> in six attempts.</p>
          <p> Each guess must be a valid word. Hit the enter button to submit.</p>
          <p> After each guess, the color of the tiles will change to show how close your guess was to the word</p>
        </div>
        <div className="instructions bottom-border">
          <h5> Examples</h5>
          <div className="instruction-game-row">
            <GameTile tile={{letter: 'H', status: this.state.correct, animation: this.state.animation}} />
            <GameTile tile={{letter: 'O', status: ANSWER_TYPE.TBD}} />
            <GameTile tile={{letter: 'P', status: ANSWER_TYPE.TBD}} />
            <GameTile tile={{letter: 'E', status: ANSWER_TYPE.TBD}} />
          </div>
          <p>The letter <b>H</b> is in the word and in the right spot.</p>
          <div className="instruction-game-row">
            <GameTile tile={{letter: 'G', status: ANSWER_TYPE.TBD}} />
            <GameTile tile={{letter: 'R', status: this.state.present, animation: this.state.animation}} />
            <GameTile tile={{letter: 'A', status: ANSWER_TYPE.TBD}} />
            <GameTile tile={{letter: 'C', status: ANSWER_TYPE.TBD}} />
            <GameTile tile={{letter: 'E', status: ANSWER_TYPE.TBD}} />
          </div>
          <p>The letter <b>R</b> is in the word but in a difference spot.</p>
          <div className="instruction-game-row">
            <GameTile tile={{letter: 'J', status: ANSWER_TYPE.TBD}} />
            <GameTile tile={{letter: 'O', status: ANSWER_TYPE.TBD}} />
            <GameTile tile={{letter: 'Y', status: this.state.absent, animation: this.state.animation}} />
          </div>
          <p>The letter <b>Y</b> is in not in the word in any spot.</p>
        </div>
        <div className="instructions">
          <p className='new'> Once you've guessed the word, there will be a short <b>pray</b>er encouragement based on todays word to help us focus on God</p>
          <b> A new PRAYDLE will be available every day</b>
        </div>
      </div>
    )
  }
}
