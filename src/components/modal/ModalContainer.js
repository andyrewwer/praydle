import React, { Component } from 'react';
import './ModalContainer.css';
import Modal from 'react-modal';
import {customStyles} from '../../utils/Styles.js'
import InstructionContent from './instruction-content/InstructionContent'

// TODO prevent scroll behind modal
export default class ModalContainer extends Component {

  closeModal() {
    this.props.closeModal();
  }

  render () {
    return (
      <React.Fragment>
        <Modal
          isOpen={this.props.modalIsOpen}
          onRequestClose={this.closeModal.bind(this)}
          style={customStyles}
          ariaHideApp={false}>
          <InstructionContent closeModal={this.closeModal.bind(this)}/>
        </Modal>
      </React.Fragment>
    )
  }
}
