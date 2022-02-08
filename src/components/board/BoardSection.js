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
          <GameRow icons={this.props.icons[0]} animation={this.props.animations[0]}/>
          <GameRow icons={this.props.icons[1]} animation={this.props.animations[1]}/>
          <GameRow icons={this.props.icons[2]} animation={this.props.animations[2]}/>
          <GameRow icons={this.props.icons[3]} animation={this.props.animations[3]}/>
          <GameRow icons={this.props.icons[4]} animation={this.props.animations[4]}/>
        </div>
      </div>
    )}
  }
export default BoardSection;
