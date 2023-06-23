import React from "react";
import Boton from "../Boton/Boton";
import { MINI } from "../Boton/styles";

export default function MiniObra({ obra }) {
  return (
    <div>
      <div className="w-48 md:w-72 h-fit bg-bluegray p-5 rounded-2xl flex flex-col gap-2 drop-shadow-sm hover:-translate-y-4 hover:-translate-x-1 hover:drop-shadow-xl transition ease-in-out duration-300 delay-0">
        <img
          src={obra.image}
          className="w-full h-2/5 object-cover rounded-2xl "
        />
        <div className="flex flex-col gap-1 mt-2">
          <h2 className="font-extrabold text-2xl text-blue">{obra.nombre}</h2>
          <div className="flex justify-around flex-col gap-2">
            <div className="flex h-inherit flex-wrap content-start justify-startr flex-row gap-1">
              <h6 className="font-semibold">Autor:</h6>
              <p className="text-md ">{obra.autor}</p>
            </div>
            <div className="flex h-inherit flex-wrap content-start justify-startr flex-row gap-1">
              <h6 className="font-semibold text-left w-fit">Ubicacion:</h6>
              <p className="text-md ">{obra.punto_de_interes}</p>
            </div>
          </div>
        </div>
        <Boton display="Detallar" style={MINI} />
      </div>
    </div>
  );
}
