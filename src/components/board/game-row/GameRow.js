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
        <GameTile icon={!!this.props.icons && this.props.icons.length > 0 && this.props.icons[0]} tileClass={!!this.props.icons && this.props.icons.length > 0 && this.props.icons[0].status}/>
        <GameTile icon={!!this.props.icons && this.props.icons.length > 1 && this.props.icons[1]} tileClass={!!this.props.icons && this.props.icons.length > 1 && this.props.icons[1].status}/>
        <GameTile icon={!!this.props.icons && this.props.icons.length > 2 && this.props.icons[2]} tileClass={!!this.props.icons && this.props.icons.length > 2 && this.props.icons[2].status}/>
      </div>
    )}
  }
export default GameRow;
