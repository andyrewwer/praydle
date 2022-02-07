import React, { Component } from 'react';
import './HeaderSection.css';

class HeaderSection extends Component {
  constructor(props) {
    super(props);
    this.render.bind(this);
  }

  render = () => {
    return (
        <div className="header-container">
          <div className="hint"> hint icon</div>
          <div className="title"> THREE MINUTE MYSTERY</div>
          <div className="statistics"> statistics</div>
          <div className="settings"> settings cog</div>
          <div className="break"></div>
          <div className="divider"></div>
        </div>
    )}
}
export default HeaderSection;
