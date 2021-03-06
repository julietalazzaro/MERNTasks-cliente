import React, { Fragment, useContext } from "react";
import Tarea from "./Tarea";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const ListadoTareas = () => {
  const proyectosContext = useContext(proyectoContext);
  const { proyecto, eliminarProyecto } = proyectosContext;

  const tareasContext = useContext(tareaContext);
  const { tareasproyecto } = tareasContext;

  //Si no hay proyecto seleccionado
  if (!proyecto) return <h2>Selecciona un proyecto</h2>;

  const [proyectoActual] = proyecto;

  return (
    <Fragment>
      <h2>Proyecto: {proyectoActual.nombre}</h2>
      <ul className="listado-tareas">
        {tareasproyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          <TransitionGroup>
            {tareasproyecto.map((tarea) => (
              <CSSTransition key={tarea.id} timeout={200} classNames="tarea">
                <Tarea key={tarea.id} tarea={tarea} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
        <button
          type="button"
          className="btn btn-eliminar"
          onClick={() => eliminarProyecto(proyectoActual.id)}
        >
          Eliminar Proyecto &times;
        </button>
      </ul>
    </Fragment>
  );
};

export default ListadoTareas;
