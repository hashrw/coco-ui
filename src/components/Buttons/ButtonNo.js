import Button from 'react-bootstrap/Button';
import React, { Component } from "react";
import styled, { css } from "styled-components";

 function ButtonNo(props) {

  const next = ()=>{};
  return (
    <div>
      <Button href="/observaciones" style={{
          height: 42,
          width: 90,
          marginTop: -0.9,
          marginLeft: 1125
        }} variant="outline-dark">No</Button> 
    </div>
  );
}

export default ButtonNo;