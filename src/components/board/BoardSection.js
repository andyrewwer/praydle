import React, { Component } from 'react';
import './BoardSection.css';
import GameRow from './game-row/GameRow';
const classNames = require('classnames');

class BoardSection extends Component {
  constructor(props) {
    super(props);
    this.render.bind(this);
  }

  createGameRow() {
    var row = [];
    if (!!this.props.labels) {
      for (let i = 0; i < this.props.rows.length; i++) {
        row.push(
          <React.Fragment key={i}>
            <div className="gameRowLabel flex-center">{this.props.labels[i]}</div>
            <GameRow row={this.props.rows[i]} animation={this.props.animations[i]} answerLength={this.props.answerLength}/>
          </React.Fragment>)
      }
    }
    else {
      for (let i = 0; i < this.props.rows.length; i++) {
        row.push(
          <GameRow key={i} row={this.props.rows[i]} animation={this.props.animations[i]} answerLength={this.props.answerLength}/>
        )
      }
    }
    return row
  }

  render = () => {
    return (
      <div className={classNames('board', {'board-with-label': !!this.props.labels})} style={{gridTemplateRows: "repeat(" + this.props.rows.length + ", var(--tile-size))"}}>
        {this.createGameRow()}
      </div>
    )}
  }
export default BoardSection;
