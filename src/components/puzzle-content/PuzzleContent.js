import React, { Component } from 'react';
import './PuzzleContent.css';
import BoardSection from '../board/BoardSection.js';
import Keyboard from '../keyboard/Keyboard.js';
import {ANIMATION_TYPE} from '../../utils/Enums';
import {PUZZLE_TYPE} from '../../utils/Enums';

import {createEmptyKeyboard, handleKeyDown} from '../../utils/GameUtils';

// TODO only allow one per day
export default class PuzzleContent extends Component {

  constructor(props) {
    super(props);
    this.gameService = this.props.gameService;
    this.current_answer = this.props.answer;
    let puzzleType = this.props.puzzleType;
    let initialState = this.createInitialState(puzzleType);
    initialState['lockedRows'] = this.setLockedRow(puzzleType);
    this.state = initialState;
  }

  createInitialState(puzzleType) {
    // TODO animate dynamically?
    if (!!this.props.history) {
      return this.props.history;
    } else {
      return {
        answerLength: this.current_answer['word'].length,
        rows:[...Array(this.getSizeForPuzzleType(puzzleType))].map(e => []),
        keys: createEmptyKeyboard(),
        animations: [...Array(this.getSizeForPuzzleType(puzzleType))].map(e => ANIMATION_TYPE.IDLE),
        current_row: 0,
        lock: false,
        gameOver: false,
      }
    }
  }

  setLockedRow(puzzleType) {
    if (puzzleType === PUZZLE_TYPE.DAILY) {
      return [...Array(this.getSizeForPuzzleType(this.props.puzzleType))].map(e => false);
    } else if (puzzleType === PUZZLE_TYPE.WEEKLY) {
      const daysIntoTheWeek = this.gameService.getDaysSinceFirstDay() % 7;
      let lockedRow = []
      for (let i = 0; i < daysIntoTheWeek + 1; i++) {
        lockedRow.push(false)
      }
      for (let i = 0; i < 7-daysIntoTheWeek; i++) {
        lockedRow.push(true)
      }
      return lockedRow;
    }
  }

  getSizeForPuzzleType(puzzleType) {
    if (puzzleType === PUZZLE_TYPE.DAILY) {
      return 6;
    } else if (puzzleType === PUZZLE_TYPE.WEEKLY) {
      return 7;
    }

  }

  componentDidMount() {
    document.addEventListener("keydown", handleKeyDown.bind(this,
      this.gameIsLocked.bind(this),
      this.removeLastItem.bind(this),
      this.enterPressed.bind(this),
      this.keyPressed.bind(this)));
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", handleKeyDown);
  }


  gameIsLocked() {
    return this.state.lock || this.state.gameOver || this.props.lock || this.state.lockedRows[this.state.current_row]
  }

  removeLastItem() {
    if (this.gameIsLocked()) {
      return
    }
    this.setState(this.gameService.removeLastItem(this.state));
  }

  enterButtonIsEnabled() {
    return this.gameService.rowIsComplete(this.state.rows[this.state.current_row], this.current_answer['word']) && this.gameService.wordIsValid(this.state.rows[this.state.current_row]);
  }

  animateAndSetItem(list, row, i, _current_row) {
    setTimeout(function() {
      this.setState(this.gameService.startFlipAnimation(list, row, i, _current_row));
      setTimeout(function() {
        this.setState(this.gameService.continueFlipAnimationAndSetStatus(list, row, i, _current_row));
        if (i === this.state.answerLength - 1) {
          this.handleRowFinishedAnimating(list, row, i, _current_row)
        }
      }.bind(this), 250);
    }.bind(this), 500*i);
  }

  handleRowFinishedAnimating(list, row, i, _current_row) {
    if (this.gameService.rowIsCorrect(row)) {
      for (let j = 0; j < this.state.answerLength; j ++) {
        setTimeout(function() {
          this.setState(this.gameService.performBounceAnimation(list, row, j, _current_row));
        }.bind(this), 450+(150*j));
        setTimeout(function() {
          // TODO some success
        }, 450+(150*this.state.answerLength)+500)
      }
      this.setState({
        gameOver: true
      });
    } else {
      this.setState({
        lock: false,
      });
    }
    const _keys = this.state.keys
    this.gameService.updateKeys(row, _keys);
    this.setState({
      keys: _keys
    }, (() => {
      this.props.saveState(this.props.puzzleType, this.state);
    }));
  }

  enterPressed() {
    if (this.gameIsLocked()) {
      return
    }
    const _current_row = this.state.current_row
    if (this.enterButtonIsEnabled()) {
      const _rows = this.state.rows;
      const row = _rows[_current_row];
      this.gameService.checkRowValidity(row, this.current_answer['word']);
      for (let i = 0; i < row.length; i ++) {
        this.animateAndSetItem(_rows, row, i, _current_row);
      }
      return this.setState({
        current_row: _current_row + 1,
        lock: true
      })
    }
    // TODO message based either "too small" or "not a real word"
    const _animations = this.state.animations
    this.setState(this.gameService.performShakeAnimation(_animations, _current_row));
    setTimeout(function() {
      _animations[_current_row] = ANIMATION_TYPE.IDLE;
      this.setState({animations: _animations});
    }.bind(this), 200);
  }

  keyPressed(letter) {
    if (this.gameIsLocked()) {
      return
    }
    if (!this.gameService.rowIsComplete(this.state.rows[this.state.current_row], this.current_answer['word'])) {
      const _rows = this.state.rows;
      this.setState(this.gameService.addItemToRow(_rows, this.state.current_row, letter));
      setTimeout(function() {
        // catch race condition... probably
        if(_rows[this.state.current_row].length === 0) {
          return ;
        }
        _rows[this.state.current_row].at(-1).animation = ANIMATION_TYPE.IDLE
        this.setState({rows: _rows});
      }.bind(this), 100);
    }
  }

  backspacePressed() {
    this.removeLastItem();
  }

  render () {
    return (
      <div className="flex-center puzzle-container">
          <BoardSection rows={this.state.rows}
             animations={this.state.animations}
             answerLength={this.state.answerLength}
             lockedRows={this.state.lockedRows}
             labels={this.props.labels}/>
          <Keyboard
                keyPressCallback={this.keyPressed.bind(this)}
                backspaceCallback={this.backspacePressed.bind(this)}
                enterCallback={this.enterPressed.bind(this)}
                enterButtonIsEnabled={this.enterButtonIsEnabled()}
                keys={this.state.keys}/>
        </div>
    )
  }
}
