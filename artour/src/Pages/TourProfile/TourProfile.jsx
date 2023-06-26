import React, { useEffect, useState } from "react";
import TourTile from "../../components/TourTitle/TourTile";
import MiniObra from "../../components/MiniObra/MiniObra";
import Comment from "../../components/Comment/Comment";
import { useParams } from "react-router-dom";
import useTours from "../../hooks/useTours";
import { Bars } from "react-loader-spinner";


export default function TourProfile() {

  const { tourID } = useParams();
  const { getTour, tour, isLoading, obras, getObras } = useTours();
  const [loadingObras, setLoadingObras] = useState(true);

  useEffect(() => {
    if (!isLoading && tourID) {
      getTour(tourID);
    }
    if (tour) {
      getObras(tour.puntos_de_interes);
    }
  }, [getTour]);

  useEffect(() => {
    if (tour) {
      setLoadingObras(true);
      getObras(tour.puntos_de_interes);
    }
    if (obras) {
      setLoadingObras(false);
    }
  }, [getObras, tour]);

  if (isLoading && !tour) {
    return (
      <div className="w-full h-screen flex flex-wrap justify-center content-center">
        <Bars color="#4F759B" />
      </div>
    );
  }
  if (!isLoading && !tour) {
    return <h1>No se hallo la info</h1>;
  }

  return (
    <div className="flex flex-col flex-wrap p-6 content-center justify-center gap-8">
      <TourTile tour={tour} />
      <h3 className="text-2xl text-orange font-extrabold md:text-[32px] md:ml-2">
        Obras a Visitar
      </h3>
      <div className="w-full justify-center pt-8 flex flex-wrap flex-row gap-3 h-screen max-h-[600px] overflow-auto drop-shadow-lg">
        {!loadingObras ? (
          obras.map((obra) => {
            return (
              <>
                {obra.obras.map((o) => {
                  return <MiniObra obra={o} p={obra.nombre} />;
                })}
              </>
            );
          })
        ) : (
          <div className="w-full h-1/4 flex flex-wrap justify-center content-center">
            <Bars color="#4F759B" />
          </div>
        )}
      </div>
      <h3 className="text-2xl text-orange font-extrabold md:text-[32px] md:ml-2">
        Comentarios de los Visitantes
      </h3>
      <div className="bg-bluegray p-8 gap-4 flex flex-col rounded-2xl max-h- drop-shadow-md  overflow-auto md:w-[700px] xl:w-[1200px]  self-center">
        {tour.comentarios ? (
          tour.comentarios.map((c) => {
            return <Comment comment={c} />;
          })
        ) : (
          <div className="text-blue">No hay comentarios disponibles</div>
        )}
      </div>
    </div>
  );
}
