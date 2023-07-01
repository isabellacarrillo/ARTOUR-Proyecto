import dayjs from "dayjs";

export const getMonthlyTours = (allDates, month) => {
  let monthly = [];
  console.log(allDates)
  if (allDates) {
    allDates.forEach((d) => {
      const aux = dayjs(d);
      if (aux.month() === month) {
        monthly.push(aux.date());
      }
    });
  }

  return monthly;
};
