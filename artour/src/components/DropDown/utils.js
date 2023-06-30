export const getDateArray = (fechasObjs) => {
  let fechas = [];
  console.log(fechasObjs);
  fechasObjs.forEach((f) => {
    console.log(parseInt(f.capacidad), "int");
    if (parseInt(f.capacidad) > 0) {
      console.log("if")
      fechas.push(f.fecha);
    }
  });
  return fechas;
};
