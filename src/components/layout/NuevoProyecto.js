import React, { Fragment, useState } from "react";

const NuevoProyecto = () => {
  const [proyecto, setProyecto] = useState({
    nombre: "",
  });
  const { nombre } = proyecto;

  const onCachangeProyecto = (e) => {
    setProyecto({ ...proyecto, [e.target.name]: e.target.value });
  };

  const onSubmitProyecto = (e) => {
    e.preventDefault();
  };

  return (
    <Fragment>
      <input
        className="btn btn-primario btn-block"
        type="button"
        value="Nuevo Proyecto"
      />
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
      </form>
    </Fragment>
  );
};

export default NuevoProyecto;
