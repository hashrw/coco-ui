import Button from 'react-bootstrap/Button';
import './styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { faEye } from '@fortawesome/free-solid-svg-icons';


export default function ButtonDetails(props) {

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
      }} variant="outline-dark"><FontAwesomeIcon icon={faEye} /></Button>

      <Modal aria-labelledby="contained-modal-title-vcenter" show={show} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.paciente.NUHSA}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 className="card-header text-center m-3">Diagnóstico</h5>
          <div className="card-body">
          <p>{props.paciente.JUICIO_CLINICO_Y_RESUMEN}</p></div></Modal.Body>
        <Modal.Footer>
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
