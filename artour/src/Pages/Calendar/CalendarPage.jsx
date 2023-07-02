import React, { useEffect, useState } from "react";
import Calendar from "../../components/Calendar/Calendar";
import {
  getDateTours,
  pullAllDates,
} from "../../firebase/firestore/firestore_pull";
import MiniTour from "../../components/MiniTour/MiniTour";
import { Bars } from "react-loader-spinner";
import dayjs from "dayjs";

export default function CalendarPage() {
  const [allDates, setAlldates] = useState();
  const [selected, setSelected] = useState();
  const [dateTours, setDateTours] = useState();

  const getAllDates = async () => {
    const result = await pullAllDates();
    setAlldates(result);
  };

  const getTours = async () => {
    const result = await getDateTours(selected);
    setDateTours(result);
  };

  useEffect(() => {
    setSelected(
      `${parseInt(dayjs().month()) + 1}/${dayjs().date()}/${dayjs().year()}`
    );
    getAllDates();
  }, []);

  useEffect(() => {
    getTours();
  }, [selected]);

  return (
    <div className="flex flex-col bg-white p-12">
      <h1 className="text-orange text-4xl font-extrabold">
        Ver Tours por Fecha
      </h1>
      <div className="h-fit flex flex-col md:flex-row gap-5 px-4 py-8 bg-white">
        <div className="max-w-2/5 bg-white drop-shadow-lg rounded-2xl p-5">
          <h5 className="text-blue/60 font-bold">
            Selecciona una fecha marcada para detallar los tours disponibles
          </h5>
          <Calendar allDates={allDates} setter={setSelected} />
        </div>
        {dateTours ? (
          dateTours.length > 0 ? (
            <div className="flex flex-col gap-3 ">
              <h2 className="text-xl font-bold text-orange/80">
                Tours disponibles en {selected}
              </h2>
              <div className="flex justify-start flex-row flex-wrap gap-2 p-2">
                {dateTours.map((t) => {
                  return <MiniTour tour={t} row />;
                })}
              </div>
            </div>
          ) : (
            <div className="p-8 gap-5 flex flex-col">
              <h2 className="text-xl font-bold text-orange/80">
                No hay tours disponibles en {selected}
              </h2>
              <p className="text-blue/60 font-bold">
                Seleccione los dias marcados para visualizar tours disponibles
              </p>
            </div>
          )
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
