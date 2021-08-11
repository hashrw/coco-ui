import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React from 'react';
import '../App.css';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import AccessHeader from './AccessHeader';
import Card from 'react-bootstrap/Card';
import DateTime from './DateTime';
import ProgressBar from 'react-bootstrap/ProgressBar';


function NavBar(props) {
    const { classes } = props;
    return (
        <>
        <header>
            <Card.Header position="static"><AccessHeader/> </Card.Header>
            <AppBar className={classes.NavColor} position="static">
                <div><ProgressBar variant="success" now ={100}/></div>
            </AppBar>
            <Navbar className="navbar-light" bg="light" variant="light">
                <Nav className="mr-auto">
                    <Navbar.Brand href="/datos"> <h6></h6></Navbar.Brand>
                    <Navbar.Brand href="/datos"> <h5>Inicio</h5></Navbar.Brand>
                    <Navbar.Brand href="/validacion"> <h5>Validación</h5></Navbar.Brand>
                    
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
