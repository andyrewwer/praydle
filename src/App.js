import React, { Component } from 'react';
import './App.css';
import HeaderSection from './components/header/HeaderSection.js';
import BoardSection from './components/board/BoardSection.js';
import Keyboard from './components/keyboard/Keyboard.js';
import {Icon} from './model/Icon';
import {BUILDING_ICONS, WEAPON_ICONS, PEOPLE_ICONS, ANSWER_TYPE, ANIMATION_TYPE} from './utils/Enums';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBuilding, faCampground, faStore, faHome, faIgloo } from '@fortawesome/free-solid-svg-icons';
import { faBomb, faDrum, faVirus, faDragon, faGuitar} from '@fortawesome/free-solid-svg-icons';
import { faUserAstronaut, faUserGraduate, faUserMd, faUserNinja, faUserSecret} from '@fortawesome/free-solid-svg-icons';
import { faBackspace, faCheckCircle, faCog, faQuestionCircle, faChartBar} from '@fortawesome/free-solid-svg-icons';
// requires FA Premium e.g. for weapons :( import { faAxe} from '@fortawesome/free-solid-svg-icons';

const ENTER_KEY = 13;
const BACKSPACE_KEY = 8;

class App extends Component {

  building_icons = [faBuilding, faCampground, faStore, faHome, faIgloo]
  weapon_icons = [faBomb, faDrum, faVirus, faDragon, faGuitar]
  people_icons = [faUserAstronaut, faUserGraduate, faUserMd, faUserNinja, faUserSecret]
  confirmation_icons = [faBackspace, faCheckCircle]
  header_icons = [faCog, faQuestionCircle, faChartBar]

  constructor() {
    super()
    this.render.bind(this);
    this.state = {
      icons: [[], [], [], [], []],
      current_row: 0
    }
    this.handleEnterPressed.bind(this);
    this.removeLastItem.bind(this);
  }

  _handleKeyDown (e) {
    if (e.keyCode === BACKSPACE_KEY) {
      this.removeLastItem();
    } else if (e.keyCode === ENTER_KEY) {
      this.handleEnterPressed();
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this._handleKeyDown.bind(this));
  }
  answerIsRight(icon) {
    let answer = [BUILDING_ICONS.THREE, WEAPON_ICONS.FOUR, PEOPLE_ICONS.FIVE];
    let icons = [answer[0].iconName, answer[1].iconName, answer[2].iconName];
    let colors = [answer[0].color, answer[1].color, answer[2].color];
    if (icons.indexOf(icon.iconName) > -1) {
      return ANSWER_TYPE.CORRECT;
    }
    if (colors.indexOf(icon.color) > -1) {
      // TODO check if the "RIGHT" answer is not implemented
      return ANSWER_TYPE.PRESENT;
    }
    return ANSWER_TYPE.ABSENT;
  }

  removeLastItem() {
    const _current_row = this.state.current_row
    const list = this.state.icons;
    list[_current_row] = list[_current_row].slice(0, -1);
    this.setState({icons: list});
  }

  animateAndSetItem(list, row, i, _current_row) {
    setTimeout(function() {
      row[i].animation = ANIMATION_TYPE.FLIP_IN;
      list[_current_row] = row;
      this.setState({icons: list});

      setTimeout(function() {
        row[i].animation = ANIMATION_TYPE.FLIP_OUT;
        row[i].status = this.answerIsRight(row[i]);
        list[_current_row] = row;
        this.setState({icons: list});

          setTimeout(function() {
            row[i].animation = ANIMATION_TYPE.IDLE;
            list[_current_row] = row;
            this.setState({icons: list});
            }.bind(this), 250);
        }.bind(this), 250);
    }.bind(this), 50+(50*i));
  }

  handleEnterPressed() {
    const _current_row = this.state.current_row
    if (this.canAddNewRow()) {
      const list = this.state.icons;
      const row = list[_current_row]
      for (let i = 0; i < row.length; i ++) {
        this.animateAndSetItem(list, row, i, _current_row);
      }
      this.setState({current_row: _current_row + 1})
    } else {
      // TODO animate NOT ADDING
    }
  }
  canAddNewRow() {
    return this.state.icons[this.state.current_row].length === 3
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
      if (this.state.icons[_current_row].length < 3) {
        const list = this.state.icons;
        list[_current_row] = list[_current_row].concat(new Icon(icon.iconName, icon.color))
        this.setState({icons: list});
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
        <BoardSection icons={this.state.icons}/>
        <Keyboard keyPressCallback={keyPress}/>
      </div>
    );
  }
}

export default App;
