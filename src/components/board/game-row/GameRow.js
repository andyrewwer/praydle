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
      <div className="game-row" data-animation={this.props.animation}>
        <GameTile tile={!!this.props.row && this.props.row.length > 0 && this.props.row[0]}/>
        <GameTile tile={!!this.props.row && this.props.row.length > 1 && this.props.row[1]}/>
        <GameTile tile={!!this.props.row && this.props.row.length > 2 && this.props.row[2]}/>
      </div>
    )}
  }
export default GameRow;
