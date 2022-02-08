import React, { Component } from 'react';
import './GameTile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class GameTile extends Component {
  constructor(props) {
    super(props);
    this.render.bind(this);
  }

  render = () => {
    return (
      <div className={'tile ' + this.props.tileClass} data-state={this.props.icon.status} data-animation={this.props.icon.animation}>
        {!!this.props.icon &&
          <FontAwesomeIcon icon={this.props.icon.iconName} className={'icon ' + this.props.icon.color}/>}
      </div>
    )}
  }
export default GameTile;
