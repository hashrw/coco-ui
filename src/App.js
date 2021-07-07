import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
/*import AuthProvider from "./auth/AuthProvider";
import AppRouter from "./routers/AppRouter";
import Datos from './components/Datos';
import Button1 from './components/Buttons/ButtonNext';
import Observacions from './components/Observaciones';*/
import AppRouter from './routers/AppRouter';
//import DateTime from './components/DateTime';

import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
    return (
        /*<div className='App'>   
            <AppNav ></AppNav>
            <Datos ></Datos>
        </div>*/
        <div>
            <AppRouter/>
        </div>
    );
}

export default App;
