import React, { Component } from 'react';
import './TitleRow.css';
import GameTile from './game-tile/GameTile';

class TitleRow extends Component {
  constructor(props) {
    super(props);
    this.render.bind(this);
  }

  render = () => {
    return (
      <div className="title-row" >
        <GameTile title='WHO'/>
        <GameTile title='WHERE'/>
        <GameTile title='HOW'/>
      </div>
    )}
  }
export default TitleRow;
