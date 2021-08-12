import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Buttons/Button";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import '../App.css';
import './Buttons/styles.css';
import axios from 'axios';



function Observacions(props) {

  const [isValid, setIsValid] = useState(false);

  const [observaciones, setObservaciones] = useState("");

  function handleClick() {
    setIsValid(true);
  }

  function handleTextArea(event) {
    //console.log(event.target.value)
    setObservaciones(event.target.value);
  }

  function handleSubmit() {
    axios.post('https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/hhuuvr/innovacion/GIT/saveData',
      { NUHSA: props.NUHSA, resultado: isValid, observaciones: observaciones })
      .then(response => {
        props.setValidado(true)
        /*setTimeout(() => { props.setValidado(false) }, 2000)*/
      })
      .catch(error => {
        console.log(error.response);
      });
  }

  return (
    <>
      <div>
        
        {!isValid && <Buttons><Button title="Validar" variant="outline-success" onClick={handleSubmit} />
          <Button title="Revisar" variant="outline-danger" onClick={handleClick} />
        </Buttons>}
        {isValid && <div>
          <h5 className="comments">Observaciones</h5>
          <Observaciones2 onChange={handleTextArea}></Observaciones2><Button title="Guardar" onClick={handleSubmit} variant="outline-dark" /></div>}
      </div>
    </>
  );
}

const Buttons = styled.div`
   display: flex;
`;

const Observaciones2 = styled.textarea`

  font-family: Roboto;
  font-style: normal;
  font-weight: 450;
  color: #121212;
  width: 95%;
  height: 90px;
  margin-top: 95 px;
  margin-left: 17px;
  display: flex;

`;

export default Observacions;
