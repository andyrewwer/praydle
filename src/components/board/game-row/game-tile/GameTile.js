import React, { Component } from 'react';
import './GameTile.css';

class GameTile extends Component {
  constructor(props) {
    super(props);
    this.render.bind(this);
  }

  render = () => {
    return (
      <React.Fragment>
        {<div className={'tile ' + this.props.tileClass} data-state={this.props.tile.status} data-animation={this.props.tile.animation}>
          {!!this.props.tile &&
            <span className={"icon"}> {this.props.tile.letter}</span>}
        </div>}

      </React.Fragment>
    )}
  }
export default GameTile;
