import React, { useReducer } from "react";
import uuid from "uuid";
import TareaContext from "./tareaContext";
import tareaReducer from "./tareaReducer";

import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
  TAREA_ACTUAL,
  ACTUALIZAR_ACTUAL,
  LIMPIAR_TAREA,
} from "../../types";

const TareaState = (props) => {
  const initialState = {
    tareas: [
      { id: 0, nombre: "Elegir Palataforma", estado: true, proyectoId: 1 },
      { id: 1, nombre: "Elegir colores", estado: true, proyectoId: 2 },
      {
        id: 2,
        nombre: "Elegir Plataformad e pago",
        estado: false,
        proyectoId: 3,
      },
      { id: 3, nombre: "Elegir Hosting", estado: false, proyectoId: 4 },
      { id: 4, nombre: "Elegir Palataforma", estado: true, proyectoId: 2 },
      { id: 5, nombre: "Elegir colores", estado: true, proyectoId: 3 },
      {
        id: 6,
        nombre: "Elegir Plataformas de pago",
        estado: false,
        proyectoId: 2,
      },
      { id: 7, nombre: "Elegir Hosting", estado: false, proyectoId: 1 },
      { id: 8, nombre: "Elegir Palataforma", estado: true, proyectoId: 3 },
      { id: 9, nombre: "Elegir colores", estado: true, proyectoId: 4 },
      {
        id: 10,
        nombre: "Elegir Plataformad e pago",
        estado: false,
        proyectoId: 3,
      },
      { id: 11, nombre: "Elegir Hosting", estado: false, proyectoId: 4 },
    ],
    tareasproyecto: null,
    errortarea: false,
    tareaseleccionada: null,
  };

  //Crear state y dispatch
  const [state, dispatch] = useReducer(tareaReducer, initialState);

  //crear las funciones

  //Obtener las tareas de un proyecto
  const obtenerTareas = (proyectoId) => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId,
    });
  };

  //Validar formulario de agregar tarea
  const validarTarea = () => {
    dispatch({
      type: VALIDAR_TAREA,
    });
  };

  // Agregar tarea a proyecto seleccionado
  const agregarTarea = (tarea) => {
    tarea.id = uuid.v4();
    dispatch({
      type: AGREGAR_TAREA,
      payload: tarea,
    });
  };
  // ELIMINAR  tarea a proyecto seleccionado
  const eliminarTarea = (id) => {
    dispatch({
      type: ELIMINAR_TAREA,
      payload: id,
    });
  };

  // Cambi el estado de una tarea
  const cambiaEstadoTarea = (tarea) => {
    dispatch({
      type: ESTADO_TAREA,
      payload: tarea,
    });
  };
  // Extrae una tarea para edicion
  const guardarTareaActual = (tarea) => {
    dispatch({
      type: TAREA_ACTUAL,
      payload: tarea,
    });
  };
  // Extrae una tarea para edicion
  const actualizarTarea = (tarea) => {
    dispatch({
      type: ACTUALIZAR_ACTUAL,
      payload: tarea,
    });
  };
  // Elimina la tareaseleccionada
  const limparTarea = () => {
    dispatch({
      type: LIMPIAR_TAREA,
    });
  };

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasproyecto: state.tareasproyecto,
        errortarea: state.errortarea,
        tareaseleccionada: state.tareaseleccionada,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea,
        cambiaEstadoTarea,
        guardarTareaActual,
        actualizarTarea,
        limparTarea,
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
