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
          <GameRow icons={[BUILDING_ICONS.THREE, BUILDING_ICONS.ONE, BUILDING_ICONS.FIVE]}/>
          <GameRow icons={[BUILDING_ICONS.TWO, BUILDING_ICONS.FOUR]}/>
          <GameRow icons={[WEAPON_ICONS.ONE, WEAPON_ICONS.FIVE]}/>
          <GameRow icons={[WEAPON_ICONS.TWO, WEAPON_ICONS.FOUR, WEAPON_ICONS.THREE]}/>
          <GameRow icons={[PEOPLE_ICONS.ONE, PEOPLE_ICONS.FIVE]}/>
        </div>
      </div>
    )}
  }
export default BoardSection;
