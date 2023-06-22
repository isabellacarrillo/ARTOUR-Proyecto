import React, { useEffect, useState } from "react";
import { created, creating, deselected, selected } from "./styles";

export default function DropDown() {
  const [select, setSelect] = useState("");
  const [create, setCreate] = useState("");
  const [done, setDone] = useState(false);

  const onClick = (e) => {
    e.preventDefault();
    setSelect(e.target.value);
    setDone(false);
  };
  const handleCreate = (e) => {
    e.preventDefault();
    setSelect(create);
    setDone(true);
  };

  const handleChange = (e) => {
    setCreate(e.target.value);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    setCreate("");
    setDone(false);
  };

  return (
    <div className="flex flex-col cotent-start gap-2">
      <h5>Punto de Interes</h5>
      <button
        className={select === "sala_mendoza" ? selected : deselected}
        value="sala_mendoza"
        onClick={onClick}
      >
        Sala Mendoza
      </button>
      <button
        className={select === "biblioteca" ? selected : deselected}
        value="biblioteca"
        onClick={onClick}
      >
        Biblioteca
      </button>
      <button
        className={select === "jardines" ? selected : deselected}
        value="jardines"
        onClick={onClick}
      >
        Jardines
      </button>
      <button
        className={select === "crear" || done ? selected : deselected}
        value="crear"
        onClick={onClick}
      >
        Crear
      </button>
      {select === "crear" || done ? (
        <div className="flex flex-row gap-2">
          <input
            onChange={handleChange}
            className={done ? created : creating}
            type="text"
            value={create}
          />
          {!done ? (
            <button
              onClick={handleCreate}
              className="text-xs text-white bg-blue hover:bg-white border-2 border-blue transition ease-in-out duration-300 delay-0 hover:text-blue px-2 py-1 rounded-2xl"
            >
              Guardar
            </button>
          ) : (
            <button
              onClick={handleDelete}
              className="text-xs text-blue bg-bluegray hover:bg-white border-2 border-bluegray font-medium transition ease-in-out duration-300 delay-0 hover:text-bluegray px-2 py-1 rounded-2xl"
            >
              Borrar
            </button>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
