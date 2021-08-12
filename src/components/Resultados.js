import axios from 'axios';
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileMedicalAlt } from '@fortawesome/free-solid-svg-icons';


export default class PostRequest extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            results: []
        };
    }

    async componentDidMount() {

        axios.post('https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/hhuuvr/innovacion/GIT/getPatientData', { NUHSA: this.props.NUHSA })
            .then(response => this.setState({
                results: response.data
            }))
            .catch(error => {
                console.log(error.response);
                console.log(this.props)
            });
    }

    render() {
        //acceso a los elementos del array de forma individual
        return (
            <div>
                <h5 className="card-header text-center m-3">Validación <FontAwesomeIcon icon={faFileMedicalAlt}/></h5>
                <div className="card-body">
                    <section>
                        <div>
                            <p><b>Nombre:  </b>
                             PAC {this.state.results.Nombre}.</p>
                        </div>
                        <div>
                            <p><b>CIE-10:</b></p>
                            <p>{this.state.results['CIE_10']}.</p>
                            <p>Descripción:</p>
                            <p><i>{this.state.results['CIE_10_description']}</i>.</p>
                        </div>
                        <div>
                            <p><b>CIE-O-3:</b></p>
                            <p>{this.state.results['CIE_O_3']}.</p>
                            <p>{this.state.results['CIE_O_3_description']}.</p>
                        </div>
                        <div>
                            <p><b>Texto:</b></p>
                            <p>{this.state.results['Texto']}.</p>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

//código para obtener los datos de forma dinámica

/*<div className="card-body">
                    <section>
                        {Object.keys(this.state.results).map(item => (
                            <p key={item.NUHSA}>
                                {item} : {this.state.results[item]}
                            </p>
                        ))}
                    </section>
                    </div> "card text-center m-3"*/