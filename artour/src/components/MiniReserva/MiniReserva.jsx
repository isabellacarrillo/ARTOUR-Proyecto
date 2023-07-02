import React, { useEffect, useState } from "react";
import Boton from "../Boton/Boton";
import { DONE, MINI } from "../Boton/styles";
import dayjs, { Dayjs } from "dayjs";
import { FEEDBACK_URL } from "../../constants/URLS";

export default function MiniReserva({ reserva }) {
  const [past, setPast] = useState(false);

  useEffect(() => {
    const today = new Date();
    const date = new Date(reserva.fecha_reserva);
    if (date < today) {
      setPast(true);
    }
  }, []);

  return (
    <div className="w-full h-[480px] justify-between  sm:w-72 bg-bluegray p-5 rounded-2xl flex flex-col drop-shadow-sm hover:-translate-y-4 hover:-translate-x-1 hover:drop-shadow-xl transition ease-in-out duration-300 delay-0">
      <img
        src={
          reserva.img
            ? reserva.img
            : "https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
        }
        className="object-cover rounded-xl"
      />
      <div className="w-full flex flex-col gap-1 py-1 px-4">
        <h3 className="font-extrabold text-2xl text-blue leading-none">
          {reserva.nombre_tour}
        </h3>

        <div className="flex flex-row gap-2 leading-none break-words">
          <h6 className="font-semibold text-left w-fit whitespace-nowrap">
            Fecha de la reserva:
          </h6>
          <p>{reserva.fecha_reserva}</p>
        </div>
        <div className="flex flex-row gap-2 leading-none break-words">
          <h6 className="font-semibold text-left w-fit whitespace-nowrap">
            Número de entradas
          </h6>
          <p>{reserva.num_entradas}</p>
        </div>
        <div className="flex flex-col gap-2 leading-none overflow-clip">
          <h6 className="font-semibold text-left w-fit whitespace-nowrap">
            Descripción
          </h6>
          <p className="truncate">{reserva.descripcion}</p>
        </div>
      </div>

      {past ? (
        reserva.feedback ? (
          <div className={DONE}>Feedback dado</div>
        ) : (
          <Boton
            display="Dar feedback"
            style={MINI}
            to={FEEDBACK_URL(reserva.tour_id, reserva.reserva_id)}
          />
        )
      ) : (
        <div className={DONE}>Próximo</div>
      )}
    </div>
  );
}
