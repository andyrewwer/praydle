import React, { Component } from 'react';
import './GameRow.css';
import GameTile from './game-tile/GameTile';

class GameRow extends Component {
  constructor(props) {
    super(props);
    this.render.bind(this);
    console.log(this.props)
  }

  render = () => {
    return (
      <div className="game-row">
        <GameTile icon={!!this.props.icons && this.props.icons.length > 0 && this.props.icons[0]}/>
        <GameTile icon={!!this.props.icons && this.props.icons.length > 1 && this.props.icons[1]}/>
        <GameTile icon={!!this.props.icons && this.props.icons.length > 2 && this.props.icons[2]}/>
      </div>
    )}
  }
export default GameRow;
