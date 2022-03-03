import React, { Component } from 'react';
import './StatisticsContent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// TODO Finish this view
// TODO share button
export default class StatisticsContent extends Component {

  render () {
    return (
      <>
      <FontAwesomeIcon onClick={this.props.closeModal} icon={"times"} className={'close-icon'}/>
      <div className="statistics-container" onClick={this.props.closeModal}>
        <h4 className="modal-title bottom-border" style={{textAlign: "center"}}> STATISTICS </h4>
        <div className="statistics-summary">
          <div className="statistic">
            <p> 4 </p>
            <span className="statistic-title">Games Played</span>
          </div>
          <div className="statistic">
            <p> 100% </p>
            <span className="statistic-title">Win %</span>
          </div>
          <div className="statistic">
            <p> 4 </p>
            <span className="statistic-title">Current Streak</span>
          </div>
        </div>
        <h4 className="modal-title" style={{textAlign: "center", marginTop: "20px"}}> GUESS DISTRIBUTION </h4>
      </div>
    </>
    )
  }
}
