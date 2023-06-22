import React, { useEffect, useState } from "react";

export default function DatePicker() {
  const [date, setDate] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  useEffect(() => {
    setDate(`${start}-${end}`);
    console.log(date);
  }, [start, end]);

  return (
    <div className="flex flex-col  gap-6 p-4">
      <h6>Fecha de Disponibilidad</h6>
      <div className="flex flex-row  gap-4">
        <div className="flex flex-col">
          <label className="text-sm" htmlFor="inicio">
            Inicio
          </label>
          <input
            className="w-fit border-2 border-bluegray px-4 rounded-2xl "
            type="date"
            id="inicio"
            onChange={(e) => {
              setStart(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm" htmlFor="fin">
            Fin
          </label>
          <input
            className="w-fit border-2 border-bluegray px-4 rounded-2xl "
            type="date"
            id="fin"
            onChange={(e) => {
              setEnd(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}
