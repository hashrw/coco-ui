import React from 'react';
import './auth.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Login() {
    return (
        <form>
            <div className="auth-wrapper">
                <div className="auth-inner">
            <h5><FontAwesomeIcon icon={faSignInAlt} /> Acceso</h5>
            <div className="form-group">
                <label></label>
                <input type="email" className="form-control" placeholder="Correo electrónico" />
            </div>
            
            <div className="form-group">
                <label></label>
                <input type="password" className="form-control" placeholder="Contraseña" />
                <label></label>
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Recuérdame</label>
                </div>
                <label></label>
            </div>
            <label></label>
            <ButtonGroup>
                
                <Button variant="danger">Acceder</Button>{}
  
                <Button variant="danger" href="/registro">Registrarse</Button>{}
                
            </ButtonGroup>
            <p className="forgot-password text-right">
                ¿Olvidó su <a href="#">contraseña?</a>
            </p>
            </div>
            </div>
        </form >
    )
}