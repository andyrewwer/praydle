import React, { Component } from 'react';
import './BoardSection.css';
import GameRow from './game-row/GameRow';
import {BUILDING_ICONS, WEAPON_ICONS, PEOPLE_ICONS} from '../../utils/Enums.js'

class BoardSection extends Component {
  constructor(props) {
    super(props);
    this.render.bind(this);
  }

  render = () => {
    return (
      <div className="board-container">
        <div className="board">
          <GameRow icons={this.props.icons[0]}/>
          <GameRow icons={this.props.icons[1]}/>
          <GameRow icons={this.props.icons[2]}/>
          <GameRow icons={this.props.icons[3]}/>
          <GameRow icons={this.props.icons[4]}/>
        </div>
      </div>
    )}
  }
export default BoardSection;
