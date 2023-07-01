{
  /*Componente de POPUP para mostrar que un proceso se esta cargando */
}

import React from "react";
import { Bars } from "react-loader-spinner";

export default function PopUpLoading() {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative bg-white shadow-lg w-[360 px] h-fit px-20 py-16 rounded-2xl flex flex-col flex-wrap items-center justify-center gap-6">
          <Bars color="#4F759B" />
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
