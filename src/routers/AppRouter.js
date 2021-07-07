import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";

import Datos from "../components/Datos";
import Login from "../components/Login";
import Observacions from "../components/Observaciones";
import Register from "../components/Register";
import Validacion from "../components/ValidacionDiagnostico";
import NavBar from "../components/NavBar";
import Resultados from "../components/Resultados";
import Detalles from "../components/Details";

export default function AppRouter() {
    return (
        <Router>
            <div>
                <NavBar />
            </div>
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <Switch>
                        <Route exact path="/acceso" component={Login} />

                        <Route exact path="/registro" component={Register} />
                    </Switch>
                </div>
            </div>
            <div style={{ flex: 1, padding: "15px" }}>
                <Switch>

                    <Route exact path="/datos" component={Datos} />

                    <Route exact path="/observaciones" component={Observacions} />

                    <Route exact path="/validacion" component={Validacion} />

                    <Route exact path="/resultados" component={Resultados} />

                    <Route exact path="/details" component={Detalles} />
                </Switch>
            </div>
        </Router>
    );
}