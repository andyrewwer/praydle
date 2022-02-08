import React, { Component } from 'react';
import './App.css';
import HeaderSection from './components/header/HeaderSection.js';
import BoardSection from './components/board/BoardSection.js';
import Keyboard from './components/keyboard/Keyboard.js';
import {Icon} from './model/Icon';
import {BUILDING_ICONS, WEAPON_ICONS, PEOPLE_ICONS} from './utils/Enums';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBuilding, faCampground, faStore, faHome, faIgloo } from '@fortawesome/free-solid-svg-icons';
import { faBomb, faDrum, faBacterium, faDragon, faGuitar} from '@fortawesome/free-solid-svg-icons';
import { faUserAstronaut, faUserGraduate, faUserMd, faUserNinja, faUserSecret} from '@fortawesome/free-solid-svg-icons';
import { faBackspace, faCheckCircle} from '@fortawesome/free-solid-svg-icons';
// requires FA Premium :( import { faAxe} from '@fortawesome/free-solid-svg-icons';

class App extends Component {

  constructor() {
    super()
    this.render.bind(this);
    this.state = {
      icons: [[], [], [], [], []],
      current_row: 0
    }
  }

  answerIsRight(icon) {
    let answer = [BUILDING_ICONS.THREE.iconName, WEAPON_ICONS.FOUR.iconName, PEOPLE_ICONS.FIVE.iconName];
    let colors = [answer[0].color, answer[1].color, answer[2].color];
    if (answer.indexOf(icon.iconName) > -1) {
      return 'correct';
    }
    if (colors.indexOf(icon.color) > -1) {
      // TODO check if the "RIGHT" answer is not implemented
      return 'present';
    }
    return 'absent'
  }

  removeLastItem(_current_row) {
    const list = this.state.icons;
    list[_current_row] = list[_current_row].slice(0, -1);
    this.setState({icons: list});
  }

  animateAndSetItem(list, row, i, _current_row) {
    setTimeout(function() {
      row[i].animation = 'flip-in';
      list[_current_row] = row;
      this.setState({icons: list});

      setTimeout(function() {
        row[i].animation = 'flip-out';
        row[i].status = this.answerIsRight(row[i]);
        list[_current_row] = row;
        this.setState({icons: list});

          setTimeout(function() {
            row[i].animation = 'idle';
            list[_current_row] = row;
            this.setState({icons: list});
            }.bind(this), 250);
        }.bind(this), 250);
    }.bind(this), 50+(50*i));
  }

  canAddNewRow() {
    return this.state.icons[this.state.current_row].length === 3
  }

  render = () => {
    library.add(faBackspace, faCheckCircle);
    library.add(faBuilding, faCampground, faStore, faHome, faIgloo);
    library.add(faBomb, faDrum, faBacterium, faDragon, faGuitar);
    library.add(faUserAstronaut, faUserGraduate, faUserMd, faUserNinja, faUserSecret);

    const keyPress = (icon) => {
      const _current_row = this.state.current_row;
      if (icon.iconName === 'backspace') { // TODO ENUMify
        this.removeLastItem(_current_row);
        return;
      }
      if (icon.iconName === 'check-circle') { // todo prettiy iconName
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
        return
      }
      if (this.state.icons[_current_row].length < 3) {
        const list = this.state.icons;
        list[_current_row] = list[_current_row].concat(new Icon(icon.iconName, icon.color))
        this.setState({icons: list});
        setTimeout(function() {
          list[_current_row].at(-1).animation = 'idle'
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
