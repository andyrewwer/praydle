import React, { Component } from 'react';
import './Keyboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {BUILDING_ICONS, WEAPON_ICONS, PEOPLE_ICONS, CONTROL_ICONS} from '../../utils/Enums.js'

class Keyboard extends Component {
  constructor(props) {
    super(props);
    this.render.bind(this);
  }

  render = () => {
    return (
        <div className="keyboard">
          <div className="row">
            <div className="key" onClick={() => {this.props.keyPressCallback(BUILDING_ICONS.ONE)}}> <FontAwesomeIcon icon={BUILDING_ICONS.ONE.iconName} className={'key-icon ' + BUILDING_ICONS.ONE.color}/></div>
            <div className="key" onClick={() => {this.props.keyPressCallback(BUILDING_ICONS.TWO)}}> <FontAwesomeIcon icon={BUILDING_ICONS.TWO.iconName} className={'key-icon ' + BUILDING_ICONS.TWO.color}/></div>
            <div className="key" onClick={() => {this.props.keyPressCallback(BUILDING_ICONS.THREE)}}> <FontAwesomeIcon icon={BUILDING_ICONS.THREE.iconName} className={'key-icon ' + BUILDING_ICONS.THREE.color}/></div>
            <div className="key" onClick={() => {this.props.keyPressCallback(BUILDING_ICONS.FOUR)}}> <FontAwesomeIcon icon={BUILDING_ICONS.FOUR.iconName} className={'key-icon ' + BUILDING_ICONS.FOUR.color}/></div>
            <div className="key" onClick={() => {this.props.keyPressCallback(BUILDING_ICONS.FIVE)}}> <FontAwesomeIcon icon={BUILDING_ICONS.FIVE.iconName} className={'key-icon ' + BUILDING_ICONS.FIVE.color}/></div>
            <div className="key control-key" onClick={() => {this.props.keyPressCallback(CONTROL_ICONS.BACKSPACE)}}> <FontAwesomeIcon icon={CONTROL_ICONS.BACKSPACE.iconName} className={'key-icon ' + CONTROL_ICONS.BACKSPACE.color}/></div>
          </div>
          <div className="row">
            <div className="key" onClick={() => {this.props.keyPressCallback(WEAPON_ICONS.ONE)}}> <FontAwesomeIcon icon={WEAPON_ICONS.ONE.iconName} className={'key-icon ' + WEAPON_ICONS.ONE.color}/></div>
            <div className="key" onClick={() => {this.props.keyPressCallback(WEAPON_ICONS.TWO)}}> <FontAwesomeIcon icon={WEAPON_ICONS.TWO.iconName} className={'key-icon ' + WEAPON_ICONS.TWO.color}/></div>
            <div className="key" onClick={() => {this.props.keyPressCallback(WEAPON_ICONS.THREE)}}> <FontAwesomeIcon icon={WEAPON_ICONS.THREE.iconName} className={'key-icon ' + WEAPON_ICONS.THREE.color}/></div>
            <div className="key" onClick={() => {this.props.keyPressCallback(WEAPON_ICONS.FOUR)}}> <FontAwesomeIcon icon={WEAPON_ICONS.FOUR.iconName} className={'key-icon ' + WEAPON_ICONS.FOUR.color}/></div>
            <div className="key" onClick={() => {this.props.keyPressCallback(WEAPON_ICONS.FIVE)}}> <FontAwesomeIcon icon={WEAPON_ICONS.FIVE.iconName} className={'key-icon ' + WEAPON_ICONS.FIVE.color}/></div>
          </div>
          <div className="row">
            <div className="key" onClick={() => {this.props.keyPressCallback(PEOPLE_ICONS.ONE)}}> <FontAwesomeIcon icon={PEOPLE_ICONS.ONE.iconName} className={'key-icon ' + PEOPLE_ICONS.ONE.color}/></div>
            <div className="key" onClick={() => {this.props.keyPressCallback(PEOPLE_ICONS.TWO)}}> <FontAwesomeIcon icon={PEOPLE_ICONS.TWO.iconName} className={'key-icon ' + PEOPLE_ICONS.TWO.color}/></div>
            <div className="key" onClick={() => {this.props.keyPressCallback(PEOPLE_ICONS.THREE)}}> <FontAwesomeIcon icon={PEOPLE_ICONS.THREE.iconName} className={'key-icon ' + PEOPLE_ICONS.THREE.color}/></div>
            <div className="key" onClick={() => {this.props.keyPressCallback(PEOPLE_ICONS.FOUR)}}> <FontAwesomeIcon icon={PEOPLE_ICONS.FOUR.iconName} className={'key-icon ' + PEOPLE_ICONS.FOUR.color}/></div>
            <div className="key" onClick={() => {this.props.keyPressCallback(PEOPLE_ICONS.FIVE)}}> <FontAwesomeIcon icon={PEOPLE_ICONS.FIVE.iconName} className={'key-icon ' + PEOPLE_ICONS.FIVE.color}/></div>
            <div className="key control-key" onClick={() => {this.props.keyPressCallback(CONTROL_ICONS.ENTER)}}> <FontAwesomeIcon icon={CONTROL_ICONS.ENTER.iconName} className={'key-icon ' + CONTROL_ICONS.ENTER.color}/></div>
          </div>
        </div>
    )}
}
export default Keyboard;
