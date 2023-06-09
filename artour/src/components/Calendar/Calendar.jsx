{
  /*Componente de Calendario que muestra los dias con tours disponibles, recibe todas las fechas en las que hay un tour y la funcion setter para el estado de seleccionado */
}

import React, { useRef, useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import Badge from "@mui/material/Badge";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DayCalendarSkeleton } from "@mui/x-date-pickers/DayCalendarSkeleton";
import { getMonthlyTours } from "./utils";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function ServerDay(props) {
  const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

  const isSelected =
    !props.outsideCurrentMonth &&
    highlightedDays.indexOf(props.day.date()) >= 0;

  return (
    <Badge
      key={props.day.toString()}
      overlap="circular"
      badgeContent={isSelected ? "🔵" : undefined}
    >
      <PickersDay
        {...other}
        outsideCurrentMonth={outsideCurrentMonth}
        day={day}
      />
    </Badge>
  );
}
const initialValue = dayjs();

export default function Calendar({ allDates, setter }) {
  const requestAbortController = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [highlightedDays, setHighlightedDays] = useState([initialValue.date()]);

  useEffect(() => {
    const result = getMonthlyTours(
      allDates,
      initialValue.month(),
      setHighlightedDays
    );
    setIsLoading(false);
  }, [getMonthlyTours]);

  const handleSelect = (value) => {
    setter(`${parseInt(value.month()) + 1}/${value.date()}/${value.year()}`);
  };

  const handleMonthChange = (date) => {
    if (requestAbortController.current) {
      requestAbortController.current.abort();
    }

    setIsLoading(true);
    const result = getMonthlyTours(allDates, date.month(), setHighlightedDays);

    setIsLoading(false);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        defaultValue={initialValue}
        onChange={handleSelect}
        loading={isLoading}
        onMonthChange={handleMonthChange}
        renderLoading={() => <DayCalendarSkeleton />}
        slots={{
          day: ServerDay,
        }}
        slotProps={{
          day: {
            highlightedDays,
          },
        }}
      />
    </LocalizationProvider>
  );
}
