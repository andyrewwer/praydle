import React, { Component } from 'react';
import './App.css';
import HeaderSection from './components/header/HeaderSection.js';
import BoardSection from './components/board/BoardSection.js';
import Keyboard from './components/keyboard/Keyboard.js';
import {ENTER_KEY, BACKSPACE_KEY, GameService} from './service/GameService';
import {ANIMATION_TYPE} from './utils/Enums';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBackspace, faCheckCircle, faCog, faQuestionCircle, faChartBar, faTimes} from '@fortawesome/free-solid-svg-icons';
import ModalContainer from './components/modal/ModalContainer'

class App extends Component {

  confirmation_icons = [faBackspace, faCheckCircle]
  header_icons = [faCog, faQuestionCircle, faChartBar]
  modal_icons = [faTimes]

// TODO don't allow typing during animation & when game is over
  constructor() {
    super()
    this.render.bind(this);
    this.gameService = new GameService();
    this.removeLastItem.bind(this);
    const current_answer = this.gameService.getTodaysAnswer();

    this.state = {
      answerLength: current_answer.length,
      rows: [[], [], [], [], [], []],
      keys: this.createEmptyLetters(),
      animations: [ANIMATION_TYPE.IDLE, ANIMATION_TYPE.IDLE, ANIMATION_TYPE.IDLE, ANIMATION_TYPE.IDLE, ANIMATION_TYPE.IDLE],
      current_row: 0,
      openInstructionModal: true
    }
  }

  createEmptyLetters() {
    return {A: 'none', B: 'none', C: 'none', D: 'none', E: 'none', F: 'none', G: 'none',
            H: 'none', I: 'none', J: 'none', K: 'none', L: 'none', M: 'none', N: 'none',
            O: 'none', P: 'none', Q: 'none', R: 'none', S: 'none', T: 'none', U: 'none',
            V: 'none', W: 'none', X: 'none', Y: 'none', Z: 'none'}
  }

  componentDidMount() {
    document.addEventListener("keydown", this._handleKeyDown.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this._handleKeyDown.bind(this));
  }

  _handleKeyDown (e) {
      if (e.keyCode === BACKSPACE_KEY) {
        this.removeLastItem();
      } else if (e.keyCode === ENTER_KEY) {
        this.enterPressed();
        // check if letter
      } else if (String.fromCharCode(e.keyCode).toUpperCase() !== String.fromCharCode(e.keyCode).toLowerCase()) {
        this.keyPressed(String.fromCharCode(e.keyCode).toUpperCase());
      }
  }

  removeLastItem() {
    this.setState(this.gameService.removeLastItem(this.state));
  }

  animateAndSetItem(list, row, i, _current_row) {
    setTimeout(function() {
      this.setState(this.gameService.startFlipAnimation(list, row, i, _current_row));
      setTimeout(function() {
        this.setState(this.gameService.continueFlipAnimationAndSetStatus(list, row, i, _current_row));

        if (i === this.state.answerLength - 1 && this.gameService.rowIsCorrect(row)) {
          for (let j = 0; j < this.state.answerLength; j ++) {
            setTimeout(function() {
              this.setState(this.gameService.performBounceAnimation(list, row, j, _current_row));
            }.bind(this), 450+(150*j));
          }
        }
      }.bind(this), 250);
    }.bind(this), 500*i);
  }

  enterPressed() {
    const _current_row = this.state.current_row
    if (this.gameService.rowIsComplete(this.state.rows[this.state.current_row]) && this.gameService.wordIsValid(this.state.rows[this.state.current_row])) {
      const _rows = this.state.rows;
      const row = _rows[_current_row];
      // TODO this animation for keys should be AFTER the animation not before. NBD
      const _keys = this.state.keys
      this.gameService.checkRowValidity(row);
      this.gameService.updateKeys(row, _keys);
      for (let i = 0; i < row.length; i ++) {
        this.animateAndSetItem(_rows, row, i, _current_row);
      }
      return this.setState({
        current_row: _current_row + 1,
        keys: _keys
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
    if (!this.gameService.rowIsComplete(this.state.rows[this.state.current_row])) {
      const _rows = this.state.rows;
      this.setState(this.gameService.addItemToRow(_rows, this.state.current_row, letter));
      setTimeout(function() {
        _rows[this.state.current_row].at(-1).animation = ANIMATION_TYPE.IDLE
        this.setState({rows: _rows});
      }.bind(this), 100);
    }
  }

  backspacePressed() {
    this.removeLastItem();
  }

  render = () => {
    library.add(this.confirmation_icons, this.header_icons, this.modal_icons);
    let closeModal = () => {
      this.setState({
        openInstructionModal: false
      })
    }

    let openModal = () => {
      this.setState({
        openInstructionModal: true
      })
    }

    return (
      <div className="App nightmode">
        <HeaderSection showInstructionModal={openModal}/>
        <BoardSection rows={this.state.rows} animations={this.state.animations} answerLength={this.state.answerLength}/>
        <Keyboard keyPressCallback={this.keyPressed.bind(this)}
            backspaceCallback={this.backspacePressed.bind(this)}
            enterCallback={this.enterPressed.bind(this)}
            keys={this.state.keys}/>
          <ModalContainer modalIsOpen={this.state.openInstructionModal} closeModal={closeModal}/>
      </div>
    );
  }
}

export default App;
