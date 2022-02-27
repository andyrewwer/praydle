import React, { Component } from 'react';
import './HeaderSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {HEADER_ICONS} from '../../utils/Enums.js'

class HeaderSection extends Component {
  constructor(props) {
    super(props);
    this.render.bind(this);
  }

// TODO implement buttons lol
  render = () => {
    return (
        <div className="header-container flex-center">
          <div className="hint" onClick={this.props.showInstructionModal}> <FontAwesomeIcon icon={HEADER_ICONS.HINT.iconName} className={'header-icon'}/></div>
          <div className="title"> <span className="title-color-span">PRAY</span>DLE </div>
          <div className="bible" onClick={this.props.showBibleModal}> <FontAwesomeIcon icon={HEADER_ICONS.BIBLE.iconName} className={'header-icon'}/></div>
          <div className="statistics"> <FontAwesomeIcon icon={HEADER_ICONS.STATISTICS.iconName} className={'header-icon'}/></div>
          <div className="settings"> <FontAwesomeIcon icon={HEADER_ICONS.SETTINGS.iconName} className={'header-icon'}/></div>
        </div>
    )}
}
export default HeaderSection;
