import React, { Fragment, useState, useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const NuevoProyecto = () => {
  //Obtener el state del form
  const proyectosContext = useContext(proyectoContext);
  const {
    formulario,
    errorformulario,
    mostrarFormulario,
    agregarProyecto,
    mostrarError,
  } = proyectosContext;

  const [proyecto, setProyecto] = useState({
    nombre: "",
  });
  const { nombre } = proyecto;

  const onCachangeProyecto = (e) => {
    setProyecto({ ...proyecto, [e.target.name]: e.target.value });
  };

  const onSubmitProyecto = (e) => {
    e.preventDefault();

    //Validar el proyecto
    if (nombre === "") {
      mostrarError();
      return;
    }

    //Agregar al state
    agregarProyecto(proyecto);

    //Reiniciar form
    setProyecto({ nombre: "" });
  };

  return (
    <Fragment>
      <input
        className="btn btn-primario btn-block"
        type="button"
        value="Nuevo Proyecto"
        onClick={() => mostrarFormulario()}
      />

      {formulario ? (
        <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProyecto}>
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Proyecto"
            name="nombre"
            value={nombre}
            onChange={onCachangeProyecto}
          />
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Agregar Proyecto"
          />
          {errorformulario ? (
            <p className="mensaje error">
              El nombre del Proyecto es obligatorio
            </p>
          ) : null}
        </form>
      ) : null}
    </Fragment>
  );
};

export default NuevoProyecto;
