import Button from 'react-bootstrap/Button';
import './styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Resultados from '../Resultados';

export default function ButtonCode(props) {
    console.log(props);
    const [show, setShow] = useState(false);

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
            }} variant="outline-dark"><FontAwesomeIcon icon={faCheckCircle} /></Button>

            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title><h5>Validación</h5></Modal.Title>
                </Modal.Header>
                <Modal.Body><div><Resultados /><p></p></div></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            {/*<Modal show={show} onHide={handleClose} className="modal">
                <Modal.Header closeButton>
                    <Modal.Title>{props.paciente.NHC}</Modal.Title>
                </Modal.Header>
                <Modal.Body><div><h3>{props.paciente.SNOMED}</h3><p>{props.paciente.JUICIO_CLINICO_Y_RESUMEN}</p></div></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
            Save Changes
    </Button>
                </Modal.Footer>
            </Modal>*/}
        </div>
    );
}
