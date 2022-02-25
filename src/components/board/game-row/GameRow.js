import React, { Component } from 'react';
import './GameRow.css';
import GameTile from './game-tile/GameTile';

class GameRow extends Component {
  constructor(props) {
    super(props);
    this.render.bind(this);
    this.createGameTiles()
  }

  createGameTiles() {
    var tiles = [];
    for (let i = 0; i < this.props.answerLength; i++) {
      tiles.push(<GameTile tile={!!this.props.row && this.props.row.length > i && this.props.row[i]} key={i}/>)
    }
    return tiles
  }
  render = () => {
    return (
      <div className="game-row" style={{gridTemplateColumns: "repeat(" + this.props.answerLength + ", var(--tile-size))"}} data-animation={this.props.animation}>
        {this.createGameTiles()}
      </div>
    )}
  }
export default GameRow;
