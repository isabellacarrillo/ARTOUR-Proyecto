export const getCapacidad = (fechaObjs, fecha) => {
  let capacidad;
  fechaObjs.forEach((f) => {
    if (f.fecha === fecha) {
      console.log(f.capacidad);
      capacidad = f.capacidad;
    }
  });
  console.log(capacidad);
  return parseInt(capacidad);
};
