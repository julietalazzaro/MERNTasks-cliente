import React from "react";
import Proyecto from "./Proyecto.js";

const ListadoProyectos = () => {
  const proyectos = [
    { nombre: "Tienda virtual" },
    { nombre: "Sitio web" },
    { nombre: "API" },
  ];

  return (
    <ul className="listado-proyectos">
      {proyectos.map((proyecto) => (
        <Proyecto proyecto={proyecto} />
      ))}
    </ul>
  );
};

export default ListadoProyectos;
