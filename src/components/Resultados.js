import axios from 'axios';
import React from "react";
import '../App.css';
import Table from 'react-bootstrap/Table';
import './Table.css';

export default class PostRequest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            results: []
        };
    }

    async componentDidMount() {
    
        await axios.post('https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/hhuuvr/innovacion/GIT/getPatientData', { nuhsa : 'Paciente 1'})
            .then(response => this.setState({
                results: response.data.Nombre
            }))
            .catch(error => {
                console.log(error.response);
            });
    }

    render() {
    const results = this.state.results;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Resultados de codificación</h5>
                <div className="card-body">
                    Paciente Info: {results}
                </div>
            </div>
        )
    }
}

 