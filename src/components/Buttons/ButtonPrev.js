import Button from 'react-bootstrap/Button';
import React, { Component } from "react";
import styled, { css } from "styled-components";

 function ButtonYes(props) {

  const next = ()=>{};
  return (
    <div>
      <Button href="#" style={{
          height: 42,
          width: 90,
          marginTop: -30,
          marginLeft: 1125
        }} variant="outline-primary">Sí</Button> 
    </div>
  );
}

export default ButtonYes;