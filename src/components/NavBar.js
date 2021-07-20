import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React from 'react';
import '../App.css';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import AccessHeader from './AccessHeader';
import Card from 'react-bootstrap/Card';


function NavBar(props) {
    const { classes } = props;
    return (
        <>
        <header>
            <Card.Header position="static"><AccessHeader/> </Card.Header>
            <AppBar className={classes.NavColor} position="static">
                <Toolbar className="barra" variant="dense">
                    <Typography variant="h6" component="p">Gestión de pacientes</Typography>
                </Toolbar>
            </AppBar>
            <Navbar className="navbar-light" bg="light" variant="light">
                <Nav className="mr-auto">
                    <Navbar.Brand href="/datos"> <h6>Inicio</h6></Navbar.Brand>
                    <Navbar.Brand href="/validacion"> <h6>Validación</h6></Navbar.Brand>
                    <Navbar.Brand href="/resultados"> <h6>Resultados</h6></Navbar.Brand>
                </Nav>
            </Navbar>
            </header>
        </>
    )
}

export default withStyles({
    NavColor: {
        backgroundColor: '#EF5350',
        font: 'Fira Sans',
    }
})(NavBar);