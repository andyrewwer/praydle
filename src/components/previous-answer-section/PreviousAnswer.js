import React, { Component } from 'react';
import './PreviousAnswer.css';
import {ANSWER_TYPE} from '../../utils/Enums';
import {Tile} from '../../model/Tile';
import GameTile from '../board/game-row/game-tile/GameTile'

export default class PreviousAnswer extends Component {

  createGameTile(letter, i) {
    return <GameTile key={i} tile={new Tile(letter)} />
  }

  createAnswerRow(answer) {
    const row = [];
    for (let i = 0; i < answer.length; i ++) {
      row.push(this.createGameTile(answer[i], i));
    }
    return (
    <div className="previous-game-row" style={{gridTemplateColumns: 'repeat(' + answer.length + ', calc(var(--tile-size) * 0.5))'}}>
      {row}
    </div>)
  }

  createAnswerRows() {
    let rows = []
    for (let i = 0; i < this.props.answers.length; i++) {
      if (i+1 < this.props.answers.length || this.props.todaysPuzzleIsSolved) {
        rows.push(this.createAnswerRow(this.props.answers[i]));
      }
    }
    return rows;
  }

  render () {
    return(
    <div className="previous-game-container">
      {this.createAnswerRows()}
    </div>)
  }
}
