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
    let answer = [BUILDING_ICONS.THREE, WEAPON_ICONS.FOUR, PEOPLE_ICONS.FIVE];
    let colors = [answer[0].color, answer[1].color, answer[2].color];
    if (answer.indexOf(icon) > -1) {
      console.log('ANSWER IS THERE');
      return 'correct';
    }
    if (colors.indexOf(icon.color) > -1) {
      // TODO check if the "RIGHT" answer is not implemented
      console.log('COLOR IS THERE');
      return 'present';
    }
    return 'absent'

  }

  render = () => {
    library.add(faBackspace, faCheckCircle);
    // hard coded in utils/Enums.js
    library.add(faBuilding, faCampground, faStore, faHome, faIgloo);
    library.add(faBomb, faDrum, faBacterium, faDragon, faGuitar);
    library.add(faUserAstronaut, faUserGraduate, faUserMd, faUserNinja, faUserSecret);
    const keyPress = (icon) => {
      if (icon.iconName === 'backspace') { // TODO ENUMify
        const list = this.state.icons
        list[this.state.current_row] = list[this.state.current_row].slice(0, -1)
        this.setState({
            icons: list
          })
        return;
      }
      if (icon.iconName === 'check-circle') { // todo prettiy iconName
        // TODO implement some checking logic here
        const list = this.state.icons;
        const row = list[this.state.current_row]
        for (let i = 0; i < row.length; i ++) {

          // TODO
          row[i] = new Icon(row[i].iconName, row[i].color, this.answerIsRight(row[i]));
        }
        list[this.state.current_row] = row

        this.setState({
            icons: list,
            current_row: this.state.current_row + 1
          })
        return
      }
      if (this.state.icons[this.state.current_row].length < 3) {
        const list = this.state.icons
        list[this.state.current_row] = list[this.state.current_row].concat(icon)
        console.log(list)
        this.setState({
            icons: list
          })

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
