import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const Proyecto = ({ proyecto }) => {
  const proyectosContext = useContext(proyectoContext);
  const { proyectoActual } = proyectosContext;

  const tareasContext = useContext(tareaContext);
  const { obtenerTareas, limparTarea } = tareasContext;

  //Funcion para agregar proy actual
  const selecionarProyecto = (id) => {
    limparTarea();
    proyectoActual(id); //Fijar proyecto actual
    obtenerTareas(id); //Filtra tareas de  proyecto actual
  };

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => selecionarProyecto(proyecto.id)}
      >
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;
