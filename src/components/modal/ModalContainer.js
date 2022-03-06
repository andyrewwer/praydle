import React, { Component } from 'react';
import './ModalContainer.css';
import Modal from 'react-modal';
import {customStyles} from '../../utils/Styles.js'
import {MODALS} from '../../utils/Enums.js'
import InstructionContent from './instruction-content/InstructionContent'
import WeeklyInstructionContent from './weekly-instruction-content/WeeklyInstructionContent'
import BibleContent from './bible-content/BibleContent'
import SettingsContent from './settings-content/SettingsContent'
import StatisticsContent from './statistics-content/StatisticsContent'

// TODO prevent scroll behind modal
export default class ModalContainer extends Component {

  closeModal() {
    this.props.closeModal();
  }

  displayModal() {
    switch(this.props.modal) {
      case MODALS.INSTRUCTION:
        return <InstructionContent closeModal={this.closeModal.bind(this)}/>
      case MODALS.BIBLE:
        return <BibleContent closeModal={this.closeModal.bind(this)} answer={this.props.answer} puzzleNumber={this.props.puzzleNumber} puzzleIsSolved={this.props.puzzleIsSolved}/>
      case MODALS.SETTINGS:
        return <SettingsContent closeModal={this.closeModal.bind(this)} highContrast={this.props.highContrast} toggleHighContrast={this.props.toggleHighContrast}/>
      case MODALS.STATISTICS:
        return <StatisticsContent />
      case MODALS.INSTRUCTION_WEEKLY:
        return <WeeklyInstructionContent />
    }
  }

  render () {
    return (
      <React.Fragment>
        <Modal
          isOpen={!!this.props.modal}
          onRequestClose={this.closeModal.bind(this)}
          style={customStyles}
          ariaHideApp={false}
          closeTimeoutMS={400}>
          {this.displayModal()}
        </Modal>
      </React.Fragment>
    )
  }
}
