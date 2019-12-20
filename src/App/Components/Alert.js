import Modal from 'react-bootstrap4-modal';

const Alert = (props) => {
    return (
        <Modal visible={props.en} onClickBackdrop={props.close}>
            <div className="modal-header">
                <h5 className="modal-title">{props.message.title}</h5>
            </div>
            <div className="modal-body">
                <p>{props.message.body}</p>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={props.close}>
                    close
                </button>
            </div>
        </Modal>
    );
}

export default Alert;

