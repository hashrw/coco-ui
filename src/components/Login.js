import React from 'react';
import './auth.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

export default function Login() {
    return (
        <form>
            <h5> Acceso UI</h5>
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
                
                <Button variant="light">Acceder</Button>{' '}
  
                <Button variant="danger">Registrarse</Button>{' '}
                
            </ButtonGroup>
            <p className="forgot-password text-right">
                ¿Olvidó su <a href="#">contraseña?</a>
            </p>
        </form >
    )
}