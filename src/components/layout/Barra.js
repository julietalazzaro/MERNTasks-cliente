import React from "react";

const Barra = () => {
  return (
    <header className="app-header">
      <p className="nombre-usuario">
        Hola <span>Julieta</span>
      </p>
      <nav className="nav-principal">
        <a href="#!">Cerrar Seeion</a>
      </nav>
    </header>
  );
};

export default Barra;
