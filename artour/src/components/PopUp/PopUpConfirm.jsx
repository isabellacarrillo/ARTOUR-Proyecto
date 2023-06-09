{
  /*Componente de POPUP para requerir confirmacion de parte del usuario para realzar un proceso, recibe el mensaje a mostrar, la accion al presionar el boton, el texto del boton, si es confirmacion para borrar, el setter de su propio estado, y el texto de ayuda a mostrar */
}

import React from "react";

export default function PopUpConfirm({
  message,
  action,
  display,
  del,
  setter,
  helper,
}) {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative bg-white shadow-lg w-fit h-fit px-20 py-16 rounded-2xl flex flex-col flex-wrap items-center justify-center gap-6">
          {del ? (
            <svg
              className="w-[48px] h-[48px] fill-blue text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z" />
            </svg>
          ) : (
            <svg
              className="w-[56px] h-[56px] fill-blue text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z" />
              <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z" />
            </svg>
          )}

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
                setter(false);
              }}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
