import React, { useContext, useState } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const FormTarea = () => {
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  const tareasContext = useContext(tareaContext);
  const {
    errortarea,
    tareaseleccionada,
    agregarTarea,
    validarTarea,
    obtenerTareas,
    actualizarTarea,
    limparTarea,
  } = tareasContext;

  React.useEffect(() => {
    if (tareaseleccionada !== null) {
      setTarea(tareaseleccionada);
    } else {
      setTarea({ nombre: "" });
      limparTarea();
    }
    // eslint-disable-next-line
  }, [tareaseleccionada, proyecto]);

  //state del form
  const [tarea, setTarea] = useState({ nombre: "" });
  const { nombre } = tarea;
  //Si no hay proyecto seleccionado

  if (!proyecto) return null;
  const [proyectoActual] = proyecto;

  //leerValores del form
  const handleChange = (e) => {
    setTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    //validar
    if (nombre.trim() === "") {
      validarTarea();
      return;
    }

    //eidcion o nueva tarea
    if (tareaseleccionada === null) {
      //agregar nueva tarea al state de tareas
      tarea.proyectoId = proyectoActual.id;
      tarea.estado = false;
      agregarTarea(tarea);
    } else {
      actualizarTarea(tarea);
      limparTarea();
    }
    //obtener y filtrar tareas
    obtenerTareas(proyectoActual.id);
    //reiniciar el form
    setTarea({ nombre: "" });
  };

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Tarea..."
            name="nombre"
            onChange={handleChange}
            value={nombre}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value={
              tareaseleccionada !== null ? "Editar Tarea" : "Agregar Tarea"
            }
          />
        </div>
      </form>
      {errortarea ? (
        <p className="mensaje error">El nombre de la tarea es obligatorio</p>
      ) : null}
    </div>
  );
};

export default FormTarea;
