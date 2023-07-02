{
  /*Componente para mostrar informacion resumida del tour para seleccionar su perfil, recibe el objeto del tour y si se debe mostrar en fila o columna */
}

import React from "react";
import Boton from "../Boton/Boton";
import { MINI } from "../Boton/styles";
import { Link } from "react-router-dom";
import { TOUR_DETAIL } from "../../constants/URLS";

export default function MiniTour({ tour, row }) {
  if (row) {
    return (
      <div className="flex flex-row h-[200px] bg-bluegray rounded-2xl p-5 gap-3 w-[360px] hover:-translate-y-4 drop-shadow-sm hover:-translate-x-1 hover:drop-shadow-xl transition ease-in-out duration-300 delay-0">
        <img
          src={
            tour.img
              ? tour.img
              : "https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
          }
          className="w-2/5 object-cover rounded-xl"
        />
        <div className="w-full flex flex-col justify-between gap-1">
          <h3 className="font-extrabold text-xl text-blue leading-none">
            {tour.nombre_tour}
          </h3>
          <div className="flex flex-col gap-1 leading-none break-words">
            <h6 className="font-semibold text-left w-fit whitespace-nowrap text-sm">
              A visitar:
            </h6>
            <div className="flex flex-col text-xs">
              {tour.puntos_de_interes.map(function (a) {
                return <p key={a.nombre}>{a.nombre}</p>;
              })}
            </div>
          </div>
          <Boton display="Detallar" style={MINI} to={TOUR_DETAIL(tour.id)} />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="w-full h-[530px] justify-between sm:w-72 bg-bluegray p-5 rounded-2xl flex flex-col gap-2 drop-shadow-sm hover:-translate-y-4 hover:-translate-x-1 hover:drop-shadow-xl transition ease-in-out duration-300 delay-0">
          <img
            src={
              tour.img
                ? tour.img
                : "https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
            }
            className="w-full h-2/5 object-cover rounded-xl"
          />
          <div className="flex flex-col gap-1 mt-2">
            <h2 className="font-extrabold text-2xl text-blue">
              {tour.nombre_tour}
            </h2>
            <div className="flex justify-around flex-col px-8 gap-2">
              <div className="flex flex-col h-inherit flex-wrap content-start justify-startr sm:flex-row gap-1">
                <h6 className="font-semibold">Duracion:</h6>
                <p className="text-md ">{tour.duracion} minutos </p>
              </div>
              <div className="flex flex-col justify-around gap-2">
                <h6 className="font-semibold text-left w-fit whitespace-nowrap">
                  A visitar:
                </h6>
                <ul className="list-disc list-inside w-full text-md overflow-ellipsis sm:indent-4">
                  {tour.puntos_de_interes.map(function (a) {
                    return <li key={a.nombre}>{a.nombre}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
          <Link to={TOUR_DETAIL(tour.id)}>
            <Boton display="Detallar" style={MINI} />
          </Link>
        </div>
      </div>
    );
  }
}
