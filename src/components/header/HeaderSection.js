import React, { Component } from 'react';
import './HeaderSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {HEADER_ICONS, MODALS} from '../../utils/Enums.js'

class HeaderSection extends Component {
  constructor(props) {
    super(props);
    this.render.bind(this);
  }
// TODO implement STATISTICS
  render = () => {
    return (
        <div className="header-container flex-center">
          <div className="header-icon" onClick={() => {this.props.openModal(MODALS.INSTRUCTION)}}> <FontAwesomeIcon icon={HEADER_ICONS.HINT.iconName} className={'header-icon'}/></div>
          <div className="header-icon" onClick={() => {this.props.openModal(MODALS.SETTINGS)}}> <FontAwesomeIcon icon={HEADER_ICONS.SETTINGS.iconName} className={'header-icon'}/></div>
          <div className="header-title"> <span className="title-color-span">PRAY</span>DLE </div>
          <div className="header-icon" onClick={() => {this.props.openModal(MODALS.BIBLE)}}> <FontAwesomeIcon icon={HEADER_ICONS.BIBLE.iconName} className={'header-icon'}/></div>
          <div className="header-icon" onClick={() => {this.props.openModal(MODALS.STATISTICS)}}> <FontAwesomeIcon icon={HEADER_ICONS.STATISTICS.iconName} className={'header-icon'}/></div>
          <div className="header-icon" onClick={() => {this.props.changeActivePuzzle()}}> <FontAwesomeIcon icon={HEADER_ICONS.WEEKLY_PUZZLE.iconName} className={'header-icon'}/></div>
        </div>
    )}
}
export default HeaderSection;
