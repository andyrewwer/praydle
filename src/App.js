import React, { Component } from 'react';
import './App.css';
import HeaderSection from './components/header/HeaderSection.js';
import BoardSection from './components/board/BoardSection.js';
import Keyboard from './components/keyboard/Keyboard.js';
import {ENTER_KEY, BACKSPACE_KEY, GameService} from './service/GameService';
import {ANIMATION_TYPE, MODALS, PUZZLE_TYPE} from './utils/Enums';
import {createEmptyKeyboard, handleKeyDown} from './utils/GameUtils';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBackspace, faCheckCircle, faCog, faQuestionCircle, faChartBar, faTimes, faBible, faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
import ModalContainer from './components/modal/ModalContainer'
import PuzzleContent from './components/puzzle-content/PuzzleContent'

// TODO save progress to localStorage
class App extends Component {

  confirmation_icons = [faBackspace, faCheckCircle]
  header_icons = [faCog, faQuestionCircle, faChartBar, faBible, faCalendarAlt]
  modal_icons = [faTimes]

  constructor() {
    super();
    this.render.bind(this);
    this.gameService = new GameService();
    this.todays_answer = this.gameService.getTodaysAnswerObject();
    this.weeks_answer = this.gameService.getThisWeeksAnswersObject();

    this.state = {
      modal: MODALS.INSTRUCTION,
      active_puzzle: PUZZLE_TYPE.DAILY,
      settings: {
        highContrast: false
      }
    }
  }


  openModal(modal) {
    this.setState({
      modal: modal,
      lock: true
    })
  }

  toggleHighContrast() {
    const _settings = this.state.settings;
    _settings.highContrast = !_settings.highContrast;
    if (_settings.highContrast) {
      document.body.classList.add('contrast-mode');
    } else {
      document.body.classList.remove('contrast-mode');
    }
    this.setState({
      settings: _settings
    });
  }

  render = () => {
    library.add(this.confirmation_icons, this.header_icons, this.modal_icons);
    let closeModal = () => {
      this.setState({
        modal: false,
        lock: false
      })
    }

    let changeActivePuzzle = () => {
      let puzzle = this.state.active_puzzle === PUZZLE_TYPE.DAILY ? PUZZLE_TYPE.WEEKLY : PUZZLE_TYPE.DAILY;
      this.setState({
        active_puzzle: puzzle
      })
    }
// TODO freeze second-third rows
    return (
      <div className="App">
        <HeaderSection openModal={this.openModal.bind(this)} changeActivePuzzle={changeActivePuzzle}/>
        {this.state.active_puzzle === PUZZLE_TYPE.DAILY &&
        <PuzzleContent gameService={this.gameService} answer={this.todays_answer} lock={this.state.lock}/>}
        {this.state.active_puzzle === PUZZLE_TYPE.WEEKLY &&
        <PuzzleContent gameService={this.gameService} answer={this.weeks_answer} lock={this.state.lock} labels={['3/28', '3/29', '3/30', '3/31', '4/1', '4/2', '4/3']}/>}

        <button onClick={changeActivePuzzle}> change puzzle</button>
        <ModalContainer modal={this.state.modal} closeModal={closeModal}
            highContrast={this.state.settings.highContrast} toggleHighContrast={this.toggleHighContrast.bind(this)}/>
      </div>
    );
  }
}

export default App;
