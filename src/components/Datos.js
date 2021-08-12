import axios from 'axios';
import React from "react";
import '../App.css';
import Table from 'react-bootstrap/Table';
import './Table.css';
import {Container}  from 'react-bootstrap';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import BotonDetalles from './Buttons/ButtonDetails'
import BotonCode from './Buttons/ButtonCode';

export default class Datos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pacientes: []
        };
    }

    async componentDidMount() {
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
                <Container className="container">
                    <div>
                        <div className="card-body" >
                            <Table className="table" striped borderless hover size="sm">
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>NUHSA</th>
                                        <th>Detalles</th>
                                    </tr>
                                </thead>
                                <tbody>{this.state.pacientes.map(function (item, key) {
                                    return (
                                        <tr key={key}>
                                            <td>{item.NUHSA}</td>
                                            <td>{item.Nombre}</td>
                                            <td><div className="btn-group"><BotonDetalles paciente={item} /> <BotonCode paciente={item} /></div></td>
                                        </tr>
                                    )
                                })}</tbody>
                            </Table>
                        </div>
                    </div>
                </Container>
            </>
        )
    }

}














