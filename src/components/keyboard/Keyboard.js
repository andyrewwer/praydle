import React, { Component } from 'react';
import './Keyboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {BUILDING_ICONS, WEAPON_ICONS, PEOPLE_ICONS} from '../../utils/Enums.js'

class Keyboard extends Component {
  constructor(props) {
    super(props);
    this.render.bind(this);
  }

  render = () => {
    return (
        <div className="keyboard">
          <div className="row">
            <div className="key"> <FontAwesomeIcon icon={BUILDING_ICONS.ONE.name} className={'key-icon ' + BUILDING_ICONS.ONE.color}/></div>
            <div className="key"> <FontAwesomeIcon icon={BUILDING_ICONS.TWO.name} className={'key-icon ' + BUILDING_ICONS.TWO.color}/></div>
            <div className="key"> <FontAwesomeIcon icon={BUILDING_ICONS.THREE.name} className={'key-icon ' + BUILDING_ICONS.THREE.color}/></div>
            <div className="key"> <FontAwesomeIcon icon={BUILDING_ICONS.FOUR.name} className={'key-icon ' + BUILDING_ICONS.FOUR.color}/></div>
            <div className="key"> <FontAwesomeIcon icon={BUILDING_ICONS.FIVE.name} className={'key-icon ' + BUILDING_ICONS.FIVE.color}/></div>
            <div className="key control-key"> <FontAwesomeIcon icon="backspace" className="key-icon grey"/></div>
          </div>
          <div className="row">
            <div className="key"> <FontAwesomeIcon icon={WEAPON_ICONS.ONE.name} className={'key-icon ' + WEAPON_ICONS.ONE.color}/></div>
            <div className="key"> <FontAwesomeIcon icon={WEAPON_ICONS.TWO.name} className={'key-icon ' + WEAPON_ICONS.TWO.color}/></div>
            <div className="key"> <FontAwesomeIcon icon={WEAPON_ICONS.THREE.name} className={'key-icon ' + WEAPON_ICONS.THREE.color}/></div>
            <div className="key"> <FontAwesomeIcon icon={WEAPON_ICONS.FOUR.name} className={'key-icon ' + WEAPON_ICONS.FOUR.color}/></div>
            <div className="key"> <FontAwesomeIcon icon={WEAPON_ICONS.FIVE.name} className={'key-icon ' + WEAPON_ICONS.FIVE.color}/></div>
          </div>
          <div className="row">
            <div className="key"> <FontAwesomeIcon icon={PEOPLE_ICONS.ONE.name} className={'key-icon ' + PEOPLE_ICONS.ONE.color}/></div>
            <div className="key"> <FontAwesomeIcon icon={PEOPLE_ICONS.TWO.name} className={'key-icon ' + PEOPLE_ICONS.TWO.color}/></div>
            <div className="key"> <FontAwesomeIcon icon={PEOPLE_ICONS.THREE.name} className={'key-icon ' + PEOPLE_ICONS.THREE.color}/></div>
            <div className="key"> <FontAwesomeIcon icon={PEOPLE_ICONS.FOUR.name} className={'key-icon ' + PEOPLE_ICONS.FOUR.color}/></div>
            <div className="key"> <FontAwesomeIcon icon={PEOPLE_ICONS.FIVE.name} className={'key-icon ' + PEOPLE_ICONS.FIVE.color}/></div>
            <div className="key control-key"> <FontAwesomeIcon icon="check-circle" className="key-icon grey"/></div>
          </div>
        </div>
    )}
}
export default Keyboard;
