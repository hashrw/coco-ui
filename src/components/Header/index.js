import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

export default function Header (){
    return(
        <div className="wrapper">
        <header className="lg-header">
            <Link to ='/acceso'>
                <h6>Acceder</h6>
            </Link>
        </header>

        <header2 className="lg-header">
            <Link to ='/registro'>
                <h6>Registro</h6>
            </Link>
        </header2>

        </div>
        
    )
}