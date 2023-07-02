import React from "react";
import Boton from "../Boton/Boton";
import { MINI } from "../Boton/styles";

export default function MiniReserva({ reserva }) {
  return (
    <div className="w-full h-[480px] justify-between sm:w-72 bg-bluegray p-5 rounded-2xl flex flex-col gap-2 drop-shadow-sm hover:-translate-y-4 hover:-translate-x-1 hover:drop-shadow-xl transition ease-in-out duration-300 delay-0">
      <img
        src={
          reserva.img
            ? reserva.img
            : "https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
        }
        className="object-cover rounded-xl"
      />
      <div className="w-full flex flex-col gap-1 p-4">
        <h3 className="font-extrabold text-2xl text-blue">Hola</h3>

        <div className="flex flex-row gap-2 leading-none break-words">
          <h6 className="font-semibold text-left w-fit whitespace-nowrap">
            Fecha de la reserva:
          </h6>
          <p>{reserva.fecha_reserva}</p>
        </div>
        <div className="flex flex-row gap-2 leading-none break-words">
          <h6 className="font-semibold text-left w-fit whitespace-nowrap">
            Numero de entradas
          </h6>
          <p>{reserva.num_entradas}</p>
        </div>
        <div className="flex flex-col gap-2 leading-none overflow-clip">
          <h6 className="font-semibold text-left w-fit whitespace-nowrap">
            Descripcion
          </h6>
          <p className="truncate">{reserva.descripcion}</p>
          
        </div>
      </div>
      <Boton display="Dar feedback" style={MINI} />
    </div>
  );
}
