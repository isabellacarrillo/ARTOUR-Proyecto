{
  /*Componente para mostrar informacion resumida de la obra en el perfil del tour, recibe el objeto de la obra y el nombre del punto de interes al que pertenece */
}

import React from "react";
import { Link } from "react-router-dom";
import Boton from "../Boton/Boton";
import { MINI } from "../Boton/styles";
import { OBRA_DETAIL } from "../../constants/URLS";

export default function MiniObra({ obra, p }) {
  return (
    <div>
      <div className="w-48 md:w-72 h-[500px] bg-bluegray p-5 rounded-2xl flex flex-col gap-2 drop-shadow-sm hover:-translate-y-4 hover:-translate-x-1 hover:drop-shadow-xl transition ease-in-out duration-300 delay-0">
        <img
          src={
            obra.img
              ? obra.img
              : "https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
          }
          className="w-full h-2/5 object-cover rounded-2xl "
        />
        <div className="flex flex-col gap-1 mt-2 overflow-hidden text-ellipsis">
          <h2 className="font-extrabold text-2xl text-blue w-full text-ellipsis">
            {obra.nombre_obra}
          </h2>
          <div className="flex justify-around flex-col gap-2">
            <div className="flex h-inherit flex-wrap content-start justify-startr flex-row gap-1">
              <h6 className="font-semibold">Autor:</h6>
              <p className="text-md ">{obra.nombre_autor}</p>
            </div>
            <div className="flex h-inherit flex-wrap content-start justify-startr flex-row gap-1">
              <h6 className="font-semibold text-left w-fit">
                Punto de Interes:
              </h6>
              <p className="text-md ">{p}</p>
            </div>
          </div>
        </div>
        <Link to={OBRA_DETAIL(obra.id)}>
          <Boton display="Detallar" style={MINI} />
        </Link>
      </div>
    </div>
  );
}
