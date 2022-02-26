import React, { Component } from 'react';
import './Keyboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {CONTROL_ICONS} from '../../utils/Enums.js'

class Keyboard extends Component {
  constructor(props) {
    super(props);
    this.render.bind(this);
  }

  render = () => {
    return (
        <div className="keyboard">
          <div className="row">
            <div className="key flex-center" data-state={this.props.keys['Q']} onClick={() => {this.props.keyPressCallback('Q')}}> Q </div>
            <div className="key flex-center" data-state={this.props.keys['W']} onClick={() => {this.props.keyPressCallback('W')}}> W </div>
            <div className="key flex-center" data-state={this.props.keys['E']} onClick={() => {this.props.keyPressCallback('E')}}> E </div>
            <div className="key flex-center" data-state={this.props.keys['R']} onClick={() => {this.props.keyPressCallback('R')}}> R </div>
            <div className="key flex-center" data-state={this.props.keys['T']} onClick={() => {this.props.keyPressCallback('T')}}> T </div>
            <div className="key flex-center" data-state={this.props.keys['Y']} onClick={() => {this.props.keyPressCallback('Y')}}> Y </div>
            <div className="key flex-center" data-state={this.props.keys['U']} onClick={() => {this.props.keyPressCallback('U')}}> U </div>
            <div className="key flex-center" data-state={this.props.keys['I']} onClick={() => {this.props.keyPressCallback('I')}}> I </div>
            <div className="key flex-center" data-state={this.props.keys['O']} onClick={() => {this.props.keyPressCallback('O')}}> O </div>
            <div className="key flex-center" data-state={this.props.keys['P']} onClick={() => {this.props.keyPressCallback('P')}}> P </div>
          </div>
          <div className="row">
            <div className="key flex-center" data-state={this.props.keys['A']} onClick={() => {this.props.keyPressCallback('A')}}> A </div>
            <div className="key flex-center" data-state={this.props.keys['S']} onClick={() => {this.props.keyPressCallback('S')}}> S </div>
            <div className="key flex-center" data-state={this.props.keys['D']} onClick={() => {this.props.keyPressCallback('D')}}> D </div>
            <div className="key flex-center" data-state={this.props.keys['F']} onClick={() => {this.props.keyPressCallback('F')}}> F </div>
            <div className="key flex-center" data-state={this.props.keys['G']} onClick={() => {this.props.keyPressCallback('G')}}> G </div>
            <div className="key flex-center" data-state={this.props.keys['H']} onClick={() => {this.props.keyPressCallback('H')}}> H </div>
            <div className="key flex-center" data-state={this.props.keys['J']} onClick={() => {this.props.keyPressCallback('J')}}> J </div>
            <div className="key flex-center" data-state={this.props.keys['K']} onClick={() => {this.props.keyPressCallback('K')}}> K </div>
            <div className="key flex-center" data-state={this.props.keys['L']} onClick={() => {this.props.keyPressCallback('L')}}> L </div>
          </div>
          <div className="row">
            <div className="key control-key flex-center" onClick={this.props.enterCallback}> ENTER </div>
              <div className="key flex-center" data-state={this.props.keys['Z']} onClick={() => {this.props.keyPressCallback('Z')}}> Z </div>
              <div className="key flex-center" data-state={this.props.keys['X']} onClick={() => {this.props.keyPressCallback('X')}}> X </div>
              <div className="key flex-center" data-state={this.props.keys['C']} onClick={() => {this.props.keyPressCallback('C')}}> C </div>
              <div className="key flex-center" data-state={this.props.keys['V']} onClick={() => {this.props.keyPressCallback('V')}}> V </div>
              <div className="key flex-center" data-state={this.props.keys['B']} onClick={() => {this.props.keyPressCallback('B')}}> B </div>
              <div className="key flex-center" data-state={this.props.keys['N']} onClick={() => {this.props.keyPressCallback('N')}}> N </div>
              <div className="key flex-center" data-state={this.props.keys['M']} onClick={() => {this.props.keyPressCallback('M')}}> M </div>
            <div className="key control-key flex-center" onClick={this.props.backspaceCallback}> <FontAwesomeIcon icon={CONTROL_ICONS.BACKSPACE.iconName} className={'key-icon ' + CONTROL_ICONS.BACKSPACE.color}/></div>
          </div>
        </div>
    )}
}
export default Keyboard;
