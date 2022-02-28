import React, { Component } from 'react';
import './ModalContainer.css';
import Modal from 'react-modal';
import {customStyles} from '../../utils/Styles.js'
import {MODALS} from '../../utils/Enums.js'
import InstructionContent from './instruction-content/InstructionContent'
import BibleContent from './bible-content/BibleContent'

// TODO prevent scroll behind modal
export default class ModalContainer extends Component {

  constructor(props) {
    super(props);
  }
  closeModal() {
    this.props.closeModal();
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
          {this.props.modal === MODALS.INSTRUCTION ?
            <InstructionContent closeModal={this.closeModal.bind(this)}/> :
              this.props.modal === MODALS.BIBLE ?
            <BibleContent closeModal={this.closeModal.bind(this)}/> : 'yrdy'
          }
        </Modal>
      </React.Fragment>
    )
  }
}
