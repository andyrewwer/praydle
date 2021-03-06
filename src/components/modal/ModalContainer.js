import React, { Component } from 'react';
import './ModalContainer.css';
import Modal from 'react-modal';
import {customStyles} from '../../utils/Styles.js'
import {MODALS} from '../../utils/Enums.js'
import InstructionContent from './instruction-content/InstructionContent'
import BibleContent from './bible-content/BibleContent'
import SettingsContent from './settings-content/SettingsContent'

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
        return <BibleContent closeModal={this.closeModal.bind(this)} answer={this.props.answer}/>
      case MODALS.SETTINGS:
        return <SettingsContent closeModal={this.closeModal.bind(this)} highContrast={this.props.highContrast} toggleHighContrast={this.props.toggleHighContrast}/>
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
