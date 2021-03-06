import React, { Component } from "react";
import './auth.css';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { faHospitalUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Register extends Component {
    render() {
        return (
            <form>
                <div className="auth-wrapper">
                    <div className="auth-inner">
                <h5><FontAwesomeIcon icon= {faHospitalUser} /> Registro</h5>

                <div className="form-group">
                    <label></label>
                    <input type="text" className="form-control" placeholder="Nombre" />
                </div>

                <div className="form-group">
                    <label></label>
                    <input type="text" className="form-control" placeholder="Apellidos" />
                </div>

                <div className="form-group">
                    <label></label>
                    <input type="email" className="form-control" placeholder="Correo electrónico" />
                </div>

                <div className="form-group">
                    <label></label>
                    <input type="password" className="form-control" placeholder="Contraseña" />
                </div>

                <Form.Text id="passwordHelpInline" muted>
                    Longitud mínima: 8-20 caracteres
                </Form.Text>

                <div>
                    <Button variant="danger">Registrarse</Button>{' '}
                    <div>
                        <p className="forgot-password text-right">
                            ¿Registrado? <a href="/acceso">Acceder</a>
                        </p>
                    </div>
                </div>
                </div>
                </div>
            </form>
        );
    }
}