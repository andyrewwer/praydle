import React, { Component } from 'react';
import './GameTile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const classNames = require('classnames');


class GameTile extends Component {
  constructor(props) {
    super(props);
    this.render.bind(this);
  }

  render = () => {
    return (
      <div className={classNames('tile flex-center', {'lock': this.props.lock})} data-state={this.props.tile.status} data-animation={this.props.tile.animation}>
        <span className={"letter"}> {this.props.tile.letter}</span>
        {this.props.lock &&
          <FontAwesomeIcon icon={'lock'}/>}
      </div>
    )}
  }
export default GameTile;
