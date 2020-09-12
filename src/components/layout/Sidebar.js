import React from "react";
import NuevoProyecto from "./NuevoProyecto.js";
import ListadoProyectos from "../proyectos/ListadoProyectos.js";

const Sidebar = () => {
  return (
    <aside>
      <h1>
        MERN<span>Tasks</span>
      </h1>
      <NuevoProyecto />
      <div className="proyectos">
        <h2>Tus Proyectos</h2>
        <ListadoProyectos />
      </div>
    </aside>
  );
};

export default Sidebar;
