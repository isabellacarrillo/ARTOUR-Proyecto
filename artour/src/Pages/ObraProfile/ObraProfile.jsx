import React from "react";
import Boton from "../../components/Boton/Boton";
import { BACK } from "../../components/Boton/styles";
export default function ObraProfile() {
  return (
    <div className="p-8 flex flex-col flex-wrap content-center justify-center">
      <div className="bg-bluegray p-14 rounded-3xl drop-shadow-lg flex flex-col gap-4 h-fit max-w-[1200px] ">
        <h2 className="text-[44px] font-extrabold text-blue">Nombre</h2>
        <div className="flex flex-col gap-14 md:flex-row">
          <div className="flex flex-col gap-6 md:w-2/5">
            <img
              src="https://cdn.bitlysdowssl-aws.com/wp-content/uploads/2023/06/SUBASTA-SALA-MENDOZA-1.jpg"
              className="rounded-2xl md:h-fit"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="grid grid-rows-2 grid-cols-2 gap-2 md:gap-8">
              <div>
                <h4 className="text-lg text-blue font-semibold md:text-2xl">
                  Autor
                </h4>
                <p className="md:text-lg">Alguien</p>
              </div>
              <div>
                <h4 className="text-lg text-blue font-semibold md:text-2xl">
                  Tipo de obra
                </h4>
                <p className="md:text-lg">Pintura</p>
              </div>
              <div>
                <h4 className="text-lg text-blue font-semibold md:text-2xl">
                  Punto de Interes
                </h4>
                <p className="md:text-lg">Bibliotecq</p>
              </div>
              <div>
                <h4 className="text-lg text-blue font-semibold md:text-2xl">
                  Ubicacion
                </h4>
                <p className="md:text-lg">Sala Humanidades</p>
              </div>
            </div>
            <h4 className="text-lg text-blue font-semibold md:text-2xl">
              Descripcion
            </h4>
            <p className="md:text-lg">Sala Humanidades</p>
          </div>
        </div>
      </div>
      <Boton display="Regresar al tour" style={BACK} />
    </div>
  );
}
