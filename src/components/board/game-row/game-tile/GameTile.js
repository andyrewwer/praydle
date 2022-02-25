import React, { Component } from 'react';
import './GameTile.css';

class GameTile extends Component {
  constructor(props) {
    super(props);
    this.render.bind(this);
  }

  render = () => {
    return (
      <div className={'tile flex-center ' + this.props.tileClass} data-state={this.props.tile.status} data-animation={this.props.tile.animation}>
        <span className={"letter"}> {this.props.tile.letter}</span>
      </div>
    )}
  }
export default GameTile;
