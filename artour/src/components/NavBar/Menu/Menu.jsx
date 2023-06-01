import React from "react";
import MenuItem from "./MenuItem";

function Menu() {
  return (
    <div className="flex flex-wrap flex-col sm:flex-row sm:justify-center">
      <MenuItem display="Inicio" path="/" />
      <MenuItem display="Buscador" path="/buscar" />
      <MenuItem display="Calendario" path="/calendario" />
      <MenuItem display="Contacto" path="/contacto" />
    </div>
  );
}

export default Menu;
