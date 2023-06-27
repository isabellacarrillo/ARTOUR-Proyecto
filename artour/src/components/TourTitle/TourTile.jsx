import React, { useEffect, useState } from "react";
import Boton from "../Boton/Boton";
import { PRINCIPAL } from "../Boton/styles";
import { useUserContext } from "../../contexts/UserContext";

export default function TourTile({ tour }) {
  const { role } = useUserContext();
  const [split, setSplit] = useState([]);
  const handleDates = () => {
    setSplit(tour.fecha.split("/"));
  };

  useEffect(() => {
    handleDates();
  }, [tour]);
  
  return (
    <div className="bg-lightorange p-14 rounded-3xl drop-shadow-lg flex flex-col gap-4 h-fit max-w-[1200px] self-center">
      <h2 className="text-[44px] font-extrabold text-orange">
        {tour.nombre_tour}
      </h2>
      <div className="flex flex-col gap-14 md:flex-row">
        <div className="flex flex-col gap-6 md:w-2/5">
          <img
            src={
              tour.img
                ? tour.img
                : "https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
            }
            className="rounded-2xl md:h-fit"
          />
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-12 shadow-inner bg-white/60 rounded-3xl w-fit h-fit px-6 py-2">
              <div className="flex flex-row gap-2">
                <svg
                  className="w-[20px] h-[20px] text-bluegray dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="gray"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M4.008 8.714c1-.097 1.96-.45 2.792-1.028a25.112 25.112 0 0 0 4.454-5.72 1.8 1.8 0 0 1 .654-.706 1.742 1.742 0 0 1 1.65-.098 1.82 1.82 0 0 1 .97 1.128c.075.248.097.51.065.767l-1.562 4.629M4.008 8.714H1v9.257c0 .273.106.535.294.728a.99.99 0 0 0 .709.301h1.002a.99.99 0 0 0 .71-.301c.187-.193.293-.455.293-.728V8.714Zm8.02-1.028h4.968c.322 0 .64.08.925.232.286.153.531.374.716.645a2.108 2.108 0 0 1 .242 1.883l-2.36 7.2c-.288.813-.48 1.354-1.884 1.354-2.59 0-5.39-1.06-7.504-1.66"
                  />
                </svg>
                <p>{tour.rating[0]}</p>
              </div>
              <div className="flex flex-row gap-2">
                <svg
                  className="w-[20px] h-[20px] text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="gray"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M15.992 11.287c-1 .097-1.96.45-2.792 1.029a25.118 25.118 0 0 0-4.454 5.721 1.803 1.803 0 0 1-.655.705 1.742 1.742 0 0 1-1.648.096 1.786 1.786 0 0 1-.604-.457 1.874 1.874 0 0 1-.432-1.439l1.562-4.626m9.023-1.03H19V2.03c0-.273-.106-.535-.294-.728A.99.99 0 0 0 17.997 1h-1.002a.99.99 0 0 0-.71.301 1.042 1.042 0 0 0-.293.728v9.258Zm-8.02 1.03H3.003c-.322 0-.64-.08-.925-.233a2.022 2.022 0 0 1-.716-.645 2.108 2.108 0 0 1-.242-1.883l2.36-7.2C3.769 1.54 3.96 1 5.365 1c2.59 0 5.39 1.06 7.504 1.66"
                  />
                </svg>
                <p>{tour.rating[1]}</p>
              </div>
            </div>
            <div className="p-2 px-6 bg-bluegray/80 h-fit text-blue rounded-2xl font-semibold w-fit ">
              <h4>
                {tour.disponibilidad === "full" ? "Disponible" : "Agotado"}
              </h4>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <h4 className="text-lg text-orange font-semibold md:text-2xl">
              Fechas disponibles
            </h4>
            <p className="md:text-lg">
              {split[0]} hasta {split[1]}
            </p>
          </div>
          <div>
            <h4 className="text-lg text-orange font-semibold md:text-2xl">
              Duracion
            </h4>
            <p className="md:text-lg">{tour.duracion} min</p>
          </div>
          <div>
            <h4 className="text-lg text-orange font-semibold md:text-2xl">
              Puntos de Interes
            </h4>
            <ul className="md:text-lg">
              {tour.puntos_de_interes.map(function (a) {
                return <li key={a.nombre}>{a.nombre}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
      {role === "admin" ? (
        <Boton display="Modificar" style={PRINCIPAL} />
      ) : tour.disponibilidad === "full" ? (
        <Boton display="Reservar" style={PRINCIPAL} />
      ) : (
        <></>
      )}
    </div>
  );
}
