import React from "react";

import Text from "./Text";
import Modal from "./Modal";
import "./styles.css";

class ModalApp extends React.Component {
    modalProps = {
        triggerText: "Launch Modal"
    }
    render() {
        return (
            <div className="App">
                <Text />
                <Text />
                <Modal modalProps={this.modalProps}>
                    <h1>Hey there,</h1>
                    <h4>This is the modal content</h4>
                </Modal>
                <Text />
                <Text />
            </div>
        );
    }
}

export default ModalApp;