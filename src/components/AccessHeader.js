import React from "react";
import styled from "styled-components";
import { faUser, faHouseUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import '../App.css';
import icono from '../images/iconored.png';

function AccessHeader(props) {
  
  return (
    <Container {...props}>
      <TextWrapper>
        <Title numberOfLines={1}><div>
          <img src={icono} className="icono" /></div></Title>
      </TextWrapper>
      <TextWrapperFiller></TextWrapperFiller>
      <RightIconButtonRow>
        <RightIconButton>
          <Link to="/registro">
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </RightIconButton>
        <RightIconButton1>
          <Link to="/acceso">
            <FontAwesomeIcon icon={faHouseUser} />
          </Link>
        </RightIconButton1>
      </RightIconButtonRow>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(255,255,255,100);
  flex-direction: row;
  align-items: center;
  padding: 4px;
  justify-content: space-between;
  box-shadow:  ;
`;

const TextWrapper = styled.div`
  flex-direction: column;
  display: flex;
  align-self: flex-end;
  margin-left: 64px;
  margin-bottom: 0px;
`;

const Title = styled.span`
  font-family: Roboto;
  font-size: 20px;
  color: rgba(249,4,4,1);
  background-color: transparent;
  line-height: 18px;
  font-weight: 400;
  font-style: normal;
`;

const TextWrapperFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  display: flex;
`;

const RightIconButton = styled.div`
  padding: 11px;
  align-items: center;
  width: 50px;
  height: 50px;
  flex-direction: column;
  display: flex;
  margin-right: -112px;
  border: none;
  color: #EF5350;
`;

const RightIconButton1 = styled.div`
  padding: 11px;
  align-items: center;
  width: 50px;
  height: 50px;
  flex-direction: column;
  display: flex;
  margin-right: 62px;
  border: none;
  color: #EF5350;
`;

const RightIconButtonRow = styled.div`
  height: 50px;
  flex-direction: row;
  margin-right: 1px;
  margin-top: 5px;
  display: flex;
`;

export default AccessHeader;
