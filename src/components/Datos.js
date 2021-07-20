import axios from 'axios';
import React from "react";
import Table from 'react-bootstrap/Table';
import './Table.css';
import { Container, Pagination } from 'react-bootstrap';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import BotonDetalles from './Buttons/ButtonDetails'
import BotonCode from './Buttons/ButtonCode';
//import Paginacion from './Pagination';

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
                    <div className="card text-center m-3">
                    <h5 className="card-header">Listado de pacientes</h5>
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
                                    <td><div className="btn-group"><BotonDetalles paciente={item} /> <BotonCode  /></div></td>
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














