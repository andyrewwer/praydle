import React, { Component } from 'react';
import './ModalContainer.css';
import Modal from 'react-modal';
import {customStyles} from '../../utils/Styles.js'
import InstructionContent from './instruction-content/InstructionContent'

// TODO prevent scroll behind modal
export default class ModalContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isOpen: props.openModal
    }
  }

  closeModal() {
    this.setState({
      isOpen: false
    });
  }

  render () {
    return (
      <React.Fragment>
        <Modal
          isOpen={this.state.isOpen}
          onRequestClose={this.closeModal.bind(this)}
          style={customStyles}
          ariaHideApp={false}
          centered
          >
          <InstructionContent/>
        </Modal>
      </React.Fragment>
    )
  }
}
