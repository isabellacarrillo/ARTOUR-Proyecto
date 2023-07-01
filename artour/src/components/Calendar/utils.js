{
  /*Funcion utilizada en el componente calendario para discernir las fechas de tour en el mes que se esta visualizado, recibe todas las fechas donde hay tours y el mes que se esta visualizando */
}
import dayjs from "dayjs";

export const getMonthlyTours = (allDates, month, setter) => {
  let monthly = [];
  console.log(allDates);
  if (allDates) {
    allDates.forEach((d) => {
      const aux = dayjs(d);
      if (aux.month() === month) {
        monthly.push(aux.date());
      }
    });
  }

  setter(monthly);
};
