{
  /* Componente para desplegar la informacion principal del tour mostrando las opciones de interaccion segun las credenciales del usuario, recibe el tour a mostrar */
}

import React from "react";
import Boton from "../Boton/Boton";
import { PRINCIPAL } from "../Boton/styles";
import { useUserContext } from "../../contexts/UserContext";
import { EDIT_TOUR, RESERVE_URL } from "../../constants/URLS";
import Rating from "../Rating/Rating";
import { FormProvider, useForm } from "react-hook-form";

export default function TourTile({ tour }) {
  const methods = useForm();
  const { role } = useUserContext();

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
            <FormProvider {...methods}>
              <Rating rating={tour.rating} dis={true} />
            </FormProvider>
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
              {tour.fecha[0].fecha} hasta {tour.fecha.slice(-1)[0].fecha}
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
        <Boton display="Modificar" style={PRINCIPAL} to={EDIT_TOUR(tour.id)} />
      ) : tour.disponibilidad === "full" ? (
        <Boton display="Reservar" style={PRINCIPAL} to={RESERVE_URL(tour.id)} />
      ) : (
        <></>
      )}
    </div>
  );
}
