import React, { Component } from 'react';
import './Toggle.css';
import './SettingsContent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Toggle from 'react-toggle'

// TODO more settings -- nightmode, hardmode, ???
// TODO more formal email
// TODO custom domain
// TODO persist changes in localStorage
export default class SettingsContent extends Component {

  render () {
    return (
      <div className="settings-container">
      <FontAwesomeIcon onClick={this.props.closeModal} icon={"times"} className={'close-icon'}/>
        <h4 className="modal-title" style={{textAlign: "center", marginBottom: "15px"}}> SETTINGS </h4>
        <div className="setting bottom-border setting-first">
          <div className="description">
            <h5 className="setting-title">High Contrast Mode</h5>
            <p className="setting-subtitle">For improved color vision</p>
          </div>
          <div className="control">
            <label>
              <Toggle
                defaultChecked={this.props.highContrast}
                onChange={this.props.toggleHighContrast} />
            </label>
          </div>
        </div>
        <div className="setting bottom-border">
          <div className="description">
            <h5 className="setting-title">Feedback</h5>
          </div>
          <div className="control">
            <a className="email-link" href='mailto:andyrewwer+praydle@gmail.com?subject=Feedback%20on%20Praydle'>Email</a>
          </div>
        </div>
      </div>
    )
  }
}
