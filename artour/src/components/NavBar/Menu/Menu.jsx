import React from "react";
import MenuItem from "./MenuItem";
import { useUserContext } from "../../../contexts/UserContext";

function Menu() {
  const { role } = useUserContext();

  const handleCredentials = () => {
    if (role === "user") {
      return (
        <div className="w-full h-full flex mx-2 flex-wrap flex-row justify-center m- content-center sm:gap-3 mr-8 gap-2 md:justify-end">
          <MenuItem display="Inicio" path="/" />
          <MenuItem display="Buscador" path="/buscar" />
          <MenuItem display="Calendario" path="/calendario" />
          <MenuItem display="Contacto" path="/contacto" />
        </div>
      );
    } else if (role === "admin") {
      return (
        <div className="w-full h-full flex mx-2 flex-wrap flex-row justify-center m- content-center sm:gap-3 mr-8 gap-2 md:justify-end">
          <MenuItem display="Inicio" path="/" />
          <MenuItem display="Buscador" path="/buscar" />
          <MenuItem display="Crear Obra" path="/crear_obra" />
          <MenuItem display="Crear Tour" path="/crear_tour" />
          <MenuItem display="Calendario" path="/calendario" />
          <MenuItem display="Contacto" path="/contacto" />
        </div>
      );
    } else {
      return (
        <div className="w-full h-full flex mx-2 flex-wrap flex-row justify-center m- content-center sm:gap-3 mr-8 gap-2 md:justify-end">
          <MenuItem display="Inicio" path="/" />
          <MenuItem display="Buscador" path="/buscar" />
          <MenuItem display="Calendario" path="/calendario" />
          <MenuItem display="Contacto" path="/contacto" />
        </div>
      );
    }
  };

  return <>{handleCredentials()}</>;
}

export default Menu;
