import React, { Component } from 'react';
import './GameTile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class GameTile extends Component {
  constructor(props) {
    super(props);
    this.render.bind(this);
  }

// TODO 1 - RIGHT / WRONG
//      2 - animation

  render = () => {
    return (
      <div className="tile">
        {!!this.props.icon &&
          <FontAwesomeIcon icon={this.props.icon.iconName} className={'icon ' + this.props.icon.color}/>}
      </div>
    )}
  }
export default GameTile;
