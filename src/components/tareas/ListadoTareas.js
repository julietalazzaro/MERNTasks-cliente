import React, { Fragment } from "react";
import Tarea from "./Tarea";

const ListadoTareas = () => {
  const tareasProyecto = [
    { nombre: "Elejir Palataforma", estado: true },
    { nombre: "Elejir colores", estado: true },
    { nombre: "Elejir Plataformad e pago", estado: false },
    { nombre: "Elejir Hosting", estado: false },
  ];

  return (
    <Fragment>
      <h2>Proyecto: @#$^%^#$%2</h2>
      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          tareasProyecto.map((tarea) => <Tarea tarea={tarea} />)
        )}
        <button type="button" className="btn btn-eliminar">
          Eliminar Proyecto &times;
        </button>
      </ul>
    </Fragment>
  );
};

export default ListadoTareas;
