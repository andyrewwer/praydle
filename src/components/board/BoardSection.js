import React, { Component } from 'react';
import './BoardSection.css';
import GameRow from './game-row/GameRow';

class BoardSection extends Component {
  constructor(props) {
    super(props);
    this.render.bind(this);
  }

  render = () => {
    return (
      <div className="board-container">
        <div className="board">
          <GameRow/>
          <GameRow/>
          <GameRow/>
          <GameRow/>
          <GameRow/>
        </div>
      </div>
    )}
  }
export default BoardSection;
