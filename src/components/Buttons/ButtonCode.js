import Button from 'react-bootstrap/Button';
import './styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { faStethoscope } from '@fortawesome/free-solid-svg-icons';
import Resultados from '../Resultados';
import Observacions from '../Observaciones';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/Toast';

export default function ButtonCode(props) {
    /*console.log(props);*/

    const [show, setShow] = useState(false);
    const [validado, setValidado] = useState(false);

    function handleClick() {
        setShow(true);

    }

    function handleClose() {
        setShow(false);
    }

    return (
        <div>
            <Button className="btn" onClick={handleClick} style={{
                height: 5,
                width: 5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }} variant="outline-dark">< FontAwesomeIcon icon={faStethoscope} /></Button>

            <Modal scrollable size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.paciente.NUHSA}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Resultados NUHSA={props.paciente.NUHSA} />

                        <Observacions setValidado={setValidado} NUHSA={props.paciente.NUHSA} />
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <div>{validado && <ToastContainer position="middle-center"><Toast bg="Info">
                        <Toast.Body>Validación registrada</Toast.Body>
                    </Toast></ToastContainer>}</div>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {/*<Button variant="primary" onClick={handleClose}>
            Save Changes
        </Button>*/}
                </Modal.Footer>
            </Modal>
        </div>
    );
}
