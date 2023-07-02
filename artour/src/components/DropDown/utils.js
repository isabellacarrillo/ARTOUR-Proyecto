{
  /* Funcion que se utiliza para obtener una lista de las fechas con disponibilidad del tour a reservar, recibe la lista de objetos de fecha del tour*/
}

export const getDateArray = (fechasObjs) => {
  let fechas = [];
  const today = new Date();
  fechasObjs.forEach((f) => {
    let day = new Date(f.fecha);
    if (
      parseInt(f.capacidad) > 0 &&
      (today < day || today.toLocaleDateString() === day.toLocaleDateString())
    ) {
      fechas.push(f.fecha);
    }
  });
  return fechas;
};
