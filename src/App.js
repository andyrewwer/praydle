import React, { Component } from 'react';
import './App.css';
import HeaderSection from './components/header/HeaderSection.js';
import {GameService, MILLISECONDS_IN_A_DAY} from './service/GameService';
import {MODALS, PUZZLE_TYPE} from './utils/Enums';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLock, faBackspace, faCheckCircle, faCog, faQuestionCircle, faChartBar, faTimes, faBible, faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
import ModalContainer from './components/modal/ModalContainer'
import PuzzleContent from './components/puzzle-content/PuzzleContent'

class App extends Component {

  confirmation_icons = [faBackspace, faCheckCircle]
  header_icons = [faCog, faQuestionCircle, faChartBar, faBible, faCalendarAlt]
  modal_icons = [faTimes, faLock]

  constructor() {
    super();
    this.render.bind(this);
    this.gameService = new GameService();
    this.todays_answer = this.gameService.getTodaysAnswerObject();
    this.weeks_answer = this.gameService.getThisWeeksAnswersObject();
    let modalShown = localStorage.getItem('modalShown');
    this.state = {
      modal: !!modalShown ? null : MODALS.INSTRUCTION,
      active_puzzle: PUZZLE_TYPE.DAILY,
      settings: {
        highContrast: false
      }
    }
    this.setLabelsForWeeklyPuzzle()
  }

  componentDidMount() {
    localStorage.setItem('modalShown', true)
  }

  setLabelsForWeeklyPuzzle() {
    const daysIntoTheWeek = this.gameService.getDaysSinceFirstDay() % 7;
    const startDate = new Date(new Date().getTime() - daysIntoTheWeek * MILLISECONDS_IN_A_DAY);
    const labels = []
    for (let i = 0; i < 7; i ++) {
      const date = new Date(startDate.getTime() + i * MILLISECONDS_IN_A_DAY);
      labels.push(date.toLocaleString('en-us', { month: 'short', day: 'numeric' }));
    }
    this.labels = labels
  }
  
  restoredHistory(puzzle_type) {
    const history = JSON.parse(localStorage.getItem(puzzle_type));
    const today = this.gameService.getTodaysDate().getTime();
    if (!!history) {
      const daysSinceLastSave = Math.floor((today - history['date']) / MILLISECONDS_IN_A_DAY)
      switch (puzzle_type) {
        case PUZZLE_TYPE.DAILY:
          if (daysSinceLastSave === 0) {
            return history;
          } else {
            return null
          }
        case PUZZLE_TYPE.WEEKLY:
          // check how many days since the week started
          // check was the last save date "this week"
          // TODO validate this if this works
          const daysIntoTheWeek = this.gameService.getDaysSinceFirstDay() % 7;
          if (daysSinceLastSave > 6 || daysIntoTheWeek < daysSinceLastSave) {
            return null
          } else {
            return history
          }
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

  saveState(type, state) {
    state['date'] = this.gameService.getTodaysDate().getTime();
    localStorage.setItem(type, JSON.stringify(state));
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
        <PuzzleContent gameService={this.gameService} answer={this.todays_answer} lock={this.state.lock} puzzleType={PUZZLE_TYPE.DAILY} saveState={this.saveState} history={this.restoredHistory(PUZZLE_TYPE.DAILY)}/>}
        {this.state.active_puzzle === PUZZLE_TYPE.WEEKLY &&
        <PuzzleContent gameService={this.gameService} answer={this.weeks_answer} lock={this.state.lock} puzzleType={PUZZLE_TYPE.WEEKLY} saveState={this.saveState} history={this.restoredHistory(PUZZLE_TYPE.WEEKLY)} labels={this.labels}/>}
        <ModalContainer modal={this.state.modal} closeModal={closeModal}
            highContrast={this.state.settings.highContrast} toggleHighContrast={this.toggleHighContrast.bind(this)}/>
      </div>
    );
  }
}

export default App;
