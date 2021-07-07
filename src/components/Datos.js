import axios from 'axios';
import React from "react";
import '../App.css';
import Table from 'react-bootstrap/Table';
import './Table.css';
import { Container } from 'react-bootstrap';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import Detalles from './Details';
import BotonDetalles from './Buttons/ButtonDetails'
import BotonCodificar from './Buttons/ButtonCode';

export default class Datos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pacientes: []
        };
    }

    async componentDidMount() {
        await axios.get('https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/hhuuvr/innovacion/GIT/sampledata')
            .then(response => this.setState({
                pacientes: response.data.default
            }))
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <>
                <Container className="container">
                    <h5>Listado de pacientes</h5>
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
                                    <td>***************</td>
                                    <td>{item.NHC}</td>
                                    <td><div className="btn-group">{<BotonDetalles />} {<BotonCodificar/>}</div></td>
                                </tr>
                            )
                        })}</tbody>
                    </Table>
                </Container>
            </>
        )
    }

}














