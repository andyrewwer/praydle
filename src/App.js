import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react';
import HeaderSection from './components/header/HeaderSection.js';
import BoardSection from './components/board/BoardSection.js';
import Keyboard from './components/keyboard/Keyboard.js';
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

  render = () => {
    library.add(faBackspace, faCheckCircle);
    // hard coded in utils/Enums.js
    library.add(faBuilding, faCampground, faStore, faHome, faIgloo);
    library.add(faBomb, faDrum, faBacterium, faDragon, faGuitar);
    library.add(faUserAstronaut, faUserGraduate, faUserMd, faUserNinja, faUserSecret);
    const keyPress = (icon) => {
      console.log('start', this.state.icons)
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
        this.setState({
            current_row: this.state.current_row + 1
          })
        return
      }
      if (this.state.icons[this.state.current_row].length < 3) {
        const list = this.state.icons
        list[this.state.current_row] = list[this.state.current_row].concat(icon)
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
