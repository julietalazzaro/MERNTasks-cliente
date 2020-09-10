import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login.js";
import NuevaCuenta from "./components/auth/NuevaCuenta.js";
import Proyectos from "./components/proyectos/Proyectos.js";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
        <Route exact path="/proyectos" component={Proyectos} />
      </Switch>
    </Router>
  );
}

export default App;
