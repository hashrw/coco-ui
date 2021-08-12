import axios from 'axios';
import React from "react";
import '../App.css';
import Table from 'react-bootstrap/Table';
import './Table.css';
import { Container } from 'react-bootstrap';


export default class Validacion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pacientes: []
        };
    }
    componentDidMount() {
        axios.get('https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/hhuuvr/innovacion/GIT/sampledata')
            .then(response => this.setState({
                pacientes: response.data
            }))
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <>
                <Container>
                    <Table striped borderless hover size="sm">
                                <thead>
                                    <tr>
                                        <th>Diagnósticos</th>
                                    </tr>
                                </thead>

                        <tbody>{this.state.pacientes.map(function (paciente, key) {

                            return (
                                <tr key={key}>
                                    <td>{paciente.JUICIO_CLINICO_Y_RESUMEN}</td>
                                </tr>
                            )
                        })}</tbody>
                        
                    </Table>
                    
                </Container>
            </>
        )
    }

}









