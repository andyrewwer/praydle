import React, { Component } from 'react';
import './App.css';
import HeaderSection from './components/header/HeaderSection.js';
import BoardSection from './components/board/BoardSection.js';
import Keyboard from './components/keyboard/Keyboard.js';
import {ENTER_KEY, BACKSPACE_KEY, GameService} from './service/GameService';
import {ANIMATION_TYPE} from './utils/Enums';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBuilding, faCampground, faStore, faHome, faIgloo } from '@fortawesome/free-solid-svg-icons';
import { faBomb, faDrum, faVirus, faDragon, faGuitar} from '@fortawesome/free-solid-svg-icons';
import { faUserAstronaut, faUserGraduate, faUserMd, faUserNinja, faUserSecret} from '@fortawesome/free-solid-svg-icons';
import { faBackspace, faCheckCircle, faCog, faQuestionCircle, faChartBar} from '@fortawesome/free-solid-svg-icons';
// requires FA Premium e.g. for weapons :( import { faAxe} from '@fortawesome/free-solid-svg-icons';

class App extends Component {

  building_icons = [faBuilding, faCampground, faStore, faHome, faIgloo]
  weapon_icons = [faBomb, faDrum, faVirus, faDragon, faGuitar]
  people_icons = [faUserAstronaut, faUserGraduate, faUserMd, faUserNinja, faUserSecret]
  confirmation_icons = [faBackspace, faCheckCircle]
  header_icons = [faCog, faQuestionCircle, faChartBar]

  constructor() {
    super()
    this.render.bind(this);
    this.gameService = new GameService();
    this.state = {
      icons: [[], [], [], [], []],
      animations: [ANIMATION_TYPE.IDLE, ANIMATION_TYPE.IDLE, ANIMATION_TYPE.IDLE, ANIMATION_TYPE.IDLE, ANIMATION_TYPE.IDLE],
      current_row: 0
    }
    this.handleEnterPressed.bind(this);
    this.removeLastItem.bind(this);
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
        this.handleEnterPressed();
      }
    this.gameService.handleKeyDown(e);
  }

  removeLastItem() {
    this.setState(this.gameService.removeLastItem(this.state));
  }

  animateAndSetItem(list, row, i, _current_row) {
    setTimeout(function() {
      this.setState(this.gameService.startFlipAnimation(list, row, i, _current_row));
      setTimeout(function() {
        this.setState(this.gameService.continueFlipAnimationAndSetStatus(list, row, i, _current_row));

        if (i === 2 && this.gameService.rowIsCorrect(row)) {
          for (let j = 0; j < 3; j ++) {
            setTimeout(function() {
              this.setState(this.gameService.performBounceAnimation(list, row, j, _current_row));
            }.bind(this), 450+(150*j));
          }
        }
      }.bind(this), 250);
    }.bind(this), 100+(500*i));
  }

  handleEnterPressed() {
    const _current_row = this.state.current_row
    if (this.gameService.currentRowIsComplete(this.state)) {
      const list = this.state.icons;
      const row = list[_current_row]
      for (let i = 0; i < row.length; i ++) {
        this.animateAndSetItem(list, row, i, _current_row);
      }
      return this.setState({current_row: _current_row + 1})
    }
    const list = this.state.animations
    this.setState(this.gameService.performShakeAnimation(list, _current_row));
    setTimeout(function() {
      list[_current_row] = ANIMATION_TYPE.IDLE;
      this.setState({animations: list});
    }.bind(this), 200);
  }

  render = () => {
    library.add(this.building_icons, this.weapon_icons, this.people_icons,
      this.confirmation_icons, this.header_icons);

    const keyPress = (icon) => {
      const _current_row = this.state.current_row;
      if (icon.iconName === 'backspace') { // TODO ENUMify
        this.removeLastItem();
        return;
      }
      if (icon.iconName === 'check-circle') { // todo prettiy iconName
        this.handleEnterPressed()
        return
      }
      if (!this.gameService.currentRowIsComplete(this.state)) {
        const list = this.state.icons;
        this.setState(this.gameService.addItemToRow(list, this.state.current_row, icon));
        setTimeout(function() {
          list[_current_row].at(-1).animation = ANIMATION_TYPE.IDLE
          this.setState({icons: list});
        }.bind(this), 100);
        return
      }
    }

    return (
      <div className="App">
        <HeaderSection />
        <BoardSection icons={this.state.icons} animations={this.state.animations}/>
        <Keyboard keyPressCallback={keyPress}/>
      </div>
    );
  }
}

export default App;
