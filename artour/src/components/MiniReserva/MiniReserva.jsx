
import React from "react";

export default function MiniReserva({ reserva, row }) {
  if (row) {
    return (
      <div className="flex flex-row h-[200px] bg-bluegray rounded-2xl p-5 gap-3 w-[360px] hover:-translate-y-4 drop-shadow-sm hover:-translate-x-1 hover:drop-shadow-xl transition ease-in-out duration-300 delay-0">
        <img
          src={
            reserva.img
              ? reserva.img
              : "https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
          }
          className="w-2/5 object-cover rounded-xl"
        />
        <div className="w-full flex flex-col gap-1">
          <h3 className="font-extrabold text-2xl text-blue">
            {reserva.nombre_tour}
          </h3>
          <div className="flex flex-row gap-2 leading-none break-words">
            <h6 className="font-semibold text-left w-fit whitespace-nowrap">
              {reserva.fecha_reserva}
            </h6>
            <h6 className="font-semibold text-left w-fit whitespace-nowrap">
              {reserva.descripcion}
            </h6>
          </div>
        </div>
      </div>
    );
  } else {
    return (
        <div className="flex flex-row h-[200px] bg-bluegray rounded-2xl p-5 gap-3 w-[360px] hover:-translate-y-4 drop-shadow-sm hover:-translate-x-1 hover:drop-shadow-xl transition ease-in-out duration-300 delay-0">
        <img
          src={
            reserva.img
              ? reserva.img
              : "https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
          }
          className="w-2/5 object-cover rounded-xl"
        />
        <div className="w-full flex flex-col gap-1">
          <h3 className="font-extrabold text-2xl text-blue">
            {reserva.nombre_tour}
          </h3>
          <div className="flex flex-row gap-2 leading-none break-words">
            <h6 className="font-semibold text-left w-fit whitespace-nowrap">
              {reserva.fecha_reserva}
            </h6>
            <h6 className="font-semibold text-left w-fit whitespace-nowrap">
              {reserva.descripcion}
            </h6>
          </div>
        
        </div>
      </div>
      
    );
  }
}