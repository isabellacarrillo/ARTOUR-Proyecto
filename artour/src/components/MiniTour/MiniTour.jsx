import React from "react";
import Boton from "../Boton/Boton";
import { MINI } from "../Boton/styles";

export default function MiniTour({ tour }) {
  return (
    <div>
      <div className="w-full h-fit sm:w-72 bg-bluegray p-5 rounded-2xl flex flex-col gap-2 drop-shadow-sm hover:-translate-y-4 hover:-translate-x-1 hover:drop-shadow-xl transition ease-in-out duration-300 delay-0">
        <img
          src={tour.image}
          className="w-full h-2/5 object-cover rounded-xl"
        />
        <div className="flex flex-col gap-1 mt-2">
          <h2 className="font-extrabold text-2xl text-blue">Nombre</h2>
          <div className="flex justify-around flex-col px-8 gap-2">
            <div className="flex flex-col h-inherit flex-wrap content-start justify-startr sm:flex-row gap-1">
              <h6 className="font-semibold">Duracion:</h6>
              <p className="text-md ">{tour.duracion}</p>
            </div>
            <div className="flex flex-col justify-around gap-2">
              <h6 className="font-semibold text-left w-fit whitespace-nowrap">
                A visitar:
              </h6>
              <ul className="list-disc list-inside w-full text-md overflow-ellipsis sm:indent-4">
                {tour.puntos_de_interes.map(function (a) {
                  return <li key={a}>{a}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
        <Boton action="Detallar" style={MINI} />
      </div>
    </div>
  );
}
