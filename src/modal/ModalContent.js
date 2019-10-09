import React from 'react';
import ReactDOM from "react-dom";

class ModalContent extends React.Component {

    render() {
        const { showModal, hideModal } = this.props;
        if (!showModal) {
            return null;
        }

        return (
            ReactDOM.createPortal(
                <aside className="modal-cover" onClick={hideModal}>
                    <div className="modal">
                        <div className="modal-header"></div>
                        <div className="modal-body">
                            {this.props.children}
                        </div>
                    </div>
                </aside>,
                document.body
            )
        );
    }
}

export default ModalContent;