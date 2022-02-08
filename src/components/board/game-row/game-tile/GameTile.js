import React, { Component } from 'react';
import './GameTile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class GameTile extends Component {
  constructor(props) {
    super(props);
    this.render.bind(this);
    console.log(this.props)
  }

  render = () => {
    return (
      <React.Fragment>
        {!!this.props.title ?
        <div className='tile tile-title'>
            <span> {this.props.title}</span>
        </div> :
        <div className={'tile ' + this.props.tileClass} data-state={this.props.icon.status} data-animation={this.props.icon.animation}>
          {!!this.props.icon &&
          <FontAwesomeIcon icon={this.props.icon.iconName} className={'icon ' + this.props.icon.color}/>}
        </div>}

      </React.Fragment>
    )}
  }
export default GameTile;
