import React, { useEffect, useState } from "react";
import { selected, deselected, clear } from "./styles";

export default function SearchBar() {
  const [filter, setFilter] = useState("");

  const handleFilter = (e) => {
    if (filter === e.target.value) {
      setFilter("");
    } else {
      setFilter(e.target.value);
    }
  };

  const handleClear = (e) => {
    setFilter("");
  };

  const handleLook = () => {
    return (
      <>
        <button
          className={filter === "obra" ? selected : deselected}
          value="obra"
          onClick={handleFilter}
        >
          Obra de Arte
        </button>
        <button
          className={filter === "fecha" ? selected : deselected}
          value="fecha"
          onClick={handleFilter}
        >
          Fecha
        </button>
        <button
          className={filter === "punto_de_interes" ? selected : deselected}
          value="punto_de_interes"
          onClick={handleFilter}
        >
          Punto de Interes
        </button>
        {filter ? (
          <button
            className={clear}
            value="punto_de_interes"
            onClick={handleClear}
          >
            X
          </button>
        ) : (
          <></>
        )}
      </>
    );
  };

  useEffect(() => {
    handleLook();
  }, [filter]);

  return (
    <>
      <div className="flex flex-row flex-wrap gap-4 w-full content-center">
        <div className="relative w-2/3 md:w-2/5 flex flex-wrap content-center">
          <div className="absolute h-fit inset-y-center left-0 flex items-center pl-3 pointer-events-none self-center">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            className="w-full h-10 rounded-2xl bg-white indent-10 text-black focus:outline-none  focus:ring placeholder-shown:text-bluegray focus:ring-offset-2 focus:ring-blue/80"
            placeholder="Ingrese su búsqueda..."
          />
        </div>
        <button
          className="font-semibold w-fit h-fit px-8 py-2 text-white rounded-2xl border-2 border-white hover:border-transparent hover:bg-white hover:text-orange transition ease-in-out duration-300 delay-0"
          id="name"
        >
          Buscar
        </button>
      </div>
      <div className="flex flex-row gap-1 m-2">{handleLook()}</div>
    </>
  );
}
