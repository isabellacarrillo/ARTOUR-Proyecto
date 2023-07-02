{
  /* Funcion utllizada para obtener la capacidad disponible en la fecha seleccionada */
}

export const getCapacidad = (fechaObjs, fecha) => {
  let capacidad;
  fechaObjs.forEach((f) => {
    if (f.fecha === fecha) {
      capacidad = f.capacidad;
    }
  });
  return parseInt(capacidad);
};
