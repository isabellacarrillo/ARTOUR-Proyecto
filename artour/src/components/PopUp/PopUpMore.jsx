{
  /*Componente de POPUP para mostrar un siguiente paso al usuario. Recibe el mensaje a mostrar, la accion a realzar, lo que muestra el boton, y el texto de ayuda. */
}

import React from "react";
import { useNavigate } from "react-router-dom";
import { HOME_URL } from "../../constants/URLS";

export default function PopUpMore({ message, action, display, helper }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none px-24 lg:px-80">
        <div className="relative bg-white shadow-lg w-fit h-fit px-20 py-16 rounded-2xl flex flex-col flex-wrap items-center justify-center gap-6">
          <svg
            className="w-[56px] h-[56px] fill-blue text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z" />
            <path d="M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z" />
          </svg>

          <h1 className="text-lg font-extrabold">{message}</h1>
          <p>{helper}</p>
          <div className="flex flex-row gap-2">
            <button
              className="bg-bluegray px-6 py-2 rounded-2xl font font-semibold text-blue transition ease-in-out duration-300 delay-0 hover:bg-blue hover:text-bluegray"
              onClick={action}
            >
              {display}
            </button>
            <button
              className="px-6 py-2 rounded-2xl border-2 border-blue font font-semibold text-blue transition ease-in-out duration-300 delay-0 hover:bg-blue hover:text-bluegray"
              onClick={(e) => {
                e.preventDefault();
                navigate(HOME_URL);
              }}
            >
              No, gracias
            </button>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
