import React, { useEffect } from "react";
import Boton from "../../components/Boton/Boton";
import { AUXILIAR, BACK } from "../../components/Boton/styles";
import { useNavigate, useParams } from "react-router-dom";
import useTours from "../../hooks/useTours";
import { Bars } from "react-loader-spinner";
import { useUserContext } from "../../contexts/UserContext";

export default function ObraProfile() {
  const { role } = useUserContext();
  const { obraID } = useParams();
  const navigate = useNavigate();
  const { obra, isLoading, getObra } = useTours();

  useEffect(() => {
    getObra(obraID);
  }, [getObra]);

  if (isLoading && !obra) {
    return (
      <div className="w-full h-screen flex flex-wrap justify-center content-center">
        <Bars color="#4F759B" />
      </div>
    );
  }
  if (!isLoading && !obra) {
    return navigate("*");
  }

  return (
    <div className="p-8 flex flex-col flex-wrap content-center justify-center">
      <div className="bg-bluegray p-14 rounded-3xl drop-shadow-lg flex flex-col gap-4 h-fit max-w-[1200px] ">
        <h2 className="text-[44px] font-extrabold text-blue">
          {obra.nombre_obra}
        </h2>
        <div className="flex flex-col gap-14 md:flex-row">
          <div className="flex flex-col gap-6 md:w-2/5">
            <img
              src={
                obra.img
                  ? obra.img
                  : "https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
              }
              className="rounded-2xl md:h-fit"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="grid grid-rows-2 grid-cols-2 gap-2 md:gap-8">
              <div>
                <h4 className="text-lg text-blue font-semibold md:text-2xl">
                  Autor
                </h4>
                <p className="md:text-lg">{obra.nombre_autor}</p>
              </div>
              <div>
                <h4 className="text-lg text-blue font-semibold md:text-2xl">
                  Tipo de obra
                </h4>
                <p className="md:text-lg">{obra.tipo}</p>
              </div>
              <div>
                <h4 className="text-lg text-blue font-semibold md:text-2xl">
                  Punto de Interes
                </h4>
                <p className="md:text-lg">{obra.punto_de_interes}</p>
              </div>
              <div>
                <h4 className="text-lg text-blue font-semibold md:text-2xl">
                  Ubicacion
                </h4>
                <p className="md:text-lg">{obra.ubicacion}</p>
              </div>
            </div>
            <h4 className="text-lg text-blue font-semibold md:text-2xl">
              Descripcion
            </h4>
            <p className="md:text-lg">{obra.descripcion}</p>
          </div>
        </div>
        {role === "admin" ? (
          <Boton display="Modificar" style={AUXILIAR} />
        ) : (
          <></>
        )}
      </div>
      <Boton
        display="Regresar al tour"
        style={BACK}
        action={() => {
          navigate(-1);
        }}
      />
    </div>
  );
}
