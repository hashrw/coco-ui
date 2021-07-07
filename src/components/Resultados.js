import React from "react";
import '../App.css';
import Table from 'react-bootstrap/Table';
import './Table.css';
import { Container } from 'react-bootstrap';
import ButtonYes  from "../components/Buttons/ButtonPrev";
import ButtonNo from "../components/Buttons/ButtonNo";

export default class Resultados extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <>
                <Container>
                    <h5>Resultados</h5>
                    <Table id="resultados" striped borderless hover>
                        <thead>
                            <tr>
                                <th>Código</th>
                                <th>Texto</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>CIE-X</td>
                                <td>Texto diagnóstico</td>
                            </tr>
                        </tbody>
                    </Table>
                    <div className="botones">
                        <ButtonYes />
                        <ButtonNo />                    
                        </div>
                </Container>
            </>
        )
    
    }

}