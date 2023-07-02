{
  /*Componente de POPUP para mostrar informacion de la finalizacion de un proceso, recibe el mensaje a mostrar, la accion al presionar el boton, el texto del boton, el tipo de informacion a mostrar (done, error, info), y si debe mostrar un segundo POPUP */
}

import React from "react";
import { Link } from "react-router-dom";

export default function PopUp({ message, action, display, type, next, helper }) {
  const handleIcon = () => {
    switch (type) {
      case "info":
        return (
          <svg
            className="w-[56px] h-[56 px] fill-blue"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
          </svg>
        );

      case "error":
        return (
          <svg
            className="w-[56px] h-[56px] fill-blue"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
          </svg>
        );
      case "done":
        return (
          <svg
            className="w-[56px] h-[56px] text-gray-800 fill-blue "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
        );

      default:
        return <></>;
    }
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative bg-white shadow-lg w-fit h-fit px-20 py-16 rounded-2xl flex flex-col flex-wrap items-center justify-center gap-6">
          {handleIcon()}
          <h1 className="text-lg font-extrabold">{message}</h1>
          <p>{helper}</p>
          {next ? (
            <button
              className="bg-bluegray px-6 py-2 rounded-2xl font font-semibold text-blue transition ease-in-out duration-300 delay-0 hover:bg-blue hover:text-bluegray"
              onClick={action}
            >
              {display}
            </button>
          ) : (
            <Link
              className="bg-bluegray px-6 py-2 rounded-2xl font font-semibold text-blue transition ease-in-out duration-300 delay-0 hover:bg-blue hover:text-bluegray"
              to={action}
            >
              {display}
            </Link>
          )}
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
