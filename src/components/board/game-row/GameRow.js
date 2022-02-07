import React, { Component } from 'react';
import './GameRow.css';
import GameTile from './game-tile/GameTile';

class GameRow extends Component {
  constructor(props) {
    super(props);
    this.render.bind(this);
  }

  render = () => {
    return (
      <div className="game-row">
        <GameTile />
        <GameTile />
        <GameTile />
      </div>
    )}
  }
export default GameRow;
