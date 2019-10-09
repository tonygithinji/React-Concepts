import React from 'react';
import ModalContent from "./ModalContent";

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal() {
        this.setState({ showModal: true });
    }

    hideModal() {
        this.setState({ showModal: false });
    }

    render() {
        const { modalProps } = this.props;
        return (
            <React.Fragment>
                <button className="modal-button" onClick={this.showModal}>{modalProps.triggerText}</button>
                <ModalContent showModal={this.state.showModal} hideModal={this.hideModal} >
                    {this.props.children}
                </ModalContent>
            </React.Fragment>
        )
    }
}

export default Modal;