import React from "react";
import styled, { css } from "styled-components";
import ButtonSave from "../components/Buttons/ButtonSave";
import '../App.css';

function Observacions(props) {

  return (
    <>
      <div>
      <h5>Observaciones</h5>
        <Observaciones2></Observaciones2>
        <div><ButtonSave>Guardar</ButtonSave></div>
      </div>
    </>
  );
}

const Observaciones2 = styled.textarea`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 280px;
  width: 437px;
  margin-top: 90 px;
  margin-left: 1px;
  display: flex;
`;

export default Observacions;
