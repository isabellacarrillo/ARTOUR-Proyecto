import React from 'react'
import { UserContext, useUserContext } from '../../contexts/UserContext';
import MiniReserva from '../../components/MiniReserva/MiniReserva';



export default function () {
    const { user } = useUserContext();

  return (
    <div>
          <h1 className="mx-8 mt-4 font-extrabold text-4xl text-orange md:text-4xl">
            Mis reservas
          </h1>
          <div className="w-full justify-center flex flex-wrap flex-row gap-8 p-8 h-screen overflow-auto m-2 drop-shadow-lg">
          {user.reservas.map((reservas) => {
            return <MiniReserva reserva={reservas} row={true} />;
          }
          )}

        </div>
    </div>
  )
}
