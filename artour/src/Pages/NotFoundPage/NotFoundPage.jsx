import React from "react";

export default function UnauthorizedPage() {
  return (
    <div className="w-screen h-fit p-16 flex justify-center content-center flex-wrap">
      <div className=" w-fit max-w-md h-80 bg-white rounded-2xl flex flex-wrap flex-col gap-6 p-6 justify-center content-center drop-shadow-2xl">
        <h2 className="text-3xl text-center font-bold text-orange">
          PÁGINA NO ENCONTRADA
        </h2>
        <p className="text-center">
          Parece que estas intentado acceder a una pagina que no existe
        </p>
      </div>
    </div>
  );
}
