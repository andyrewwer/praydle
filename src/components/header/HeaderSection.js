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
        <div className="header-container">
          <div className="hint"> <FontAwesomeIcon icon={HEADER_ICONS.HINT.iconName} className={'header-icon'}/></div>
          <div className="title"> PRAY-DLE </div>
          <div className="statistics"> <FontAwesomeIcon icon={HEADER_ICONS.STATISTICS.iconName} className={'header-icon'}/></div>
          <div className="settings"> <FontAwesomeIcon icon={HEADER_ICONS.SETTINGS.iconName} className={'header-icon'}/></div>
        </div>
    )}
}
export default HeaderSection;
