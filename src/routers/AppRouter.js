import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";

import Datos from "../components/Datos";
import Login from "../components/Login";
import Register from "../components/Register";
import Validacion from "../components/ValidacionDiagnostico";
import NavBar from "../components/NavBar";

export default function AppRouter() {
    return (
        <Router>
            <div>
                <NavBar />
            </div>
            <div style={{ flex: 1, padding: "0px" }}>
                <Switch>
                    
                    <Route exact path="/" component={Datos} />

                    <Route exact path="/acceso" component={Login} />

                    <Route exact path="/registro" component={Register} />

                    <Route exact path="/validacion" component={Validacion} />

                </Switch>
            </div>
        </Router>
    );
}