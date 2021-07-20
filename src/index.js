import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export { default as Observacions } from "./components/Observaciones.js";
export { default as Datos } from "./components/Datos.js"; 
export {default as ButtonSave} from "./components/Buttons/ButtonSave.js"
export {default as NotFound} from "./components/NotFound404.js";
export {default as AppRouter} from "../src/routers/AppRouter.js";
export {default as Validacion} from "./components/ValidacionDiagnostico.js";
export {default as Login} from "./components/Login.js";
export {default as Register} from "./components/Register.js";
export {default as NavBar} from "./components/NavBar.js";
export {default as Header} from "./components/Header/index.js";
export {default as DateTime} from "./components/DateTime.js"
export {default as ButtonValidar } from "./components/Buttons/ButtonNext.js"
export {default as PostRequest } from "./components/Resultados.js"
export {default as ButtonYes } from "./components/Buttons/ButtonPrev.js"
export {default as ButtonNo } from "./components/Buttons/ButtonNo.js"
export {default as Detalles} from "./components/Details.js"
export {default as BotonDetalles} from "./components/Buttons/ButtonDetails.js"
export {default as BotonCodificar} from "./components/Buttons/ButtonCode.js"
export {default as AccessHeader} from "./components/AccessHeader.js"
export {default as useAuth} from "./auth/useAuth.js"
export {default as AuthProvider} from "./auth/AuthProvider.js"
export {default as Paginacion} from "./components/Pagination.js"