import React, { useCallback, useState } from "react";
import {
  getPuntos,
  getTourDetail,
  pullAllTours,
  pullObra,
} from "../firebase/firestore/firestore_pull";

/* Hook creado para el manejo y obtencion de los tours, detalles del tour, obras, y detalles de las obras */

export default function useTours() {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingObras, setLoadingObras] = useState(true);

  const [tours, setTours] = useState([]);
  const [tour, setTour] = useState();
  const [obras, setObras] = useState([]);
  const [obra, setObra] = useState();

  const getTours = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await pullAllTours();
      setTours(data);
      setIsLoading(false);
      return tours;
    } catch (error) {}
  }, []);

  const getTour = useCallback(async (tourID) => {
    try {
      setIsLoading(true);
      const data = await getTourDetail(tourID);
      setTour(data);
      setIsLoading(false);

      return tour;
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getObras = useCallback(async (puntos) => {
    try {
      for (let index = 0; index < puntos.length; index++) {
        const data = await getPuntos(puntos[index].ref);
        if (obras.length < puntos.length) {
          setObras((current) => [...current, data]);
        }
      }
      setLoadingObras(false);
      return obras;
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getObra = useCallback(async (obraID) => {
    try {
      setIsLoading(true);
      const data = await pullObra(obraID);
      setObra(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return {
    isLoading,
    tours,
    getTours,
    tour,
    getTour,
    obras,
    getObras,
    obra,
    getObra,
    loadingObras,
  };
}
