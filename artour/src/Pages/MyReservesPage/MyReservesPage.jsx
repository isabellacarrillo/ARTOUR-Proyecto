import React, { useEffect } from "react";
import { UserContext, useUserContext } from "../../contexts/UserContext";
import MiniReserva from "../../components/MiniReserva/MiniReserva";
import { Navigate } from "react-router-dom";
import { HOME_URL } from "../../constants/URLS";
import { Bars } from "react-loader-spinner";

export default function () {
  const { user, isLoading } = useUserContext();

  useEffect(() => {
    console.log(user);
  }, []);

  if (isLoading && !user) {
    return (
      <div className="w-full h-screen flex flex-wrap justify-center content-center">
        <Bars color="#4F759B" />
      </div>
    );
  }
  if (!isLoading && !user) {
    return <Navigate to={HOME_URL} />;
  }

  return (
    <div>
      <h1 className="mx-8 mt-4 font-extrabold text-4xl text-orange md:text-4xl">
        Mis reservas
      </h1>
      <div className="w-full justify-center flex flex-wrap flex-row gap-8 p-8 h-screen overflow-auto m-2 drop-shadow-lg">
        {user.reservas.map((reservas) => {
          return <MiniReserva key={reservas.tour_id} reserva={reservas} />;
        })}
      </div>
    </div>
  );
}
