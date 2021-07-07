import Button from 'react-bootstrap/Button';
import React, { Component } from "react";
import styled, { css } from "styled-components";

 function ButtonSave(props) {

  const next = ()=>{};
  return (
    <div>
      <Button href="#" style={{
          height: 42,
          width: 90,
          marginTop: -65,
          marginLeft: 445
        }} variant="danger">Guardar</Button> 
    </div>
  );
}

export default ButtonSave;
