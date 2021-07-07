import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';

function NavBar(props) {
    const { classes } = props;
    return (
        <>
            <Col xs={6} md={4}>
                <Image src="https://www.hospitaluvrocio.es/wp-content/uploads/2019/01/positivoHUVR.png" style={{width:110, marginTop: -10}} fluid roundedCircle />
            </Col>
            <AppBar className={classes.NavColor} position="static">
                <Toolbar variant="dense">
                    <Typography variant="h6" component="p">Gestión de pacientes</Typography>
                </Toolbar>
            </AppBar>
            <Navbar className="navbar-light" bg="light" variant="light">
                <Navbar.Brand href="/"> <h5>Inicio</h5></Navbar.Brand>

                <Nav className="mr-auto">
                    <Navbar.Brand className="auth" href="/acceso"> <h6>Acceder</h6></Navbar.Brand>
                    <Navbar.Brand className="auth" href="/registro"> <h6>Registro</h6></Navbar.Brand>
                    <Navbar.Brand href="/datos"> <h6>Listado de pacientes</h6></Navbar.Brand>
                    <Navbar.Brand href="/validacion"> <h6>Validación</h6></Navbar.Brand>
                    <Navbar.Brand href="/resultados"> <h6>Resultados</h6></Navbar.Brand>
                    <Navbar.Brand href="/details"> <h6>Detalles</h6></Navbar.Brand>
                </Nav>
            </Navbar>
        </>
    )
}

export default withStyles({
    NavColor: {
        backgroundColor: '#EF5350',
        font: 'Fira Sans',
    }
})(NavBar);