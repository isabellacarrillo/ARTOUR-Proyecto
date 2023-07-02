{
  /*Componente para el menu dependiendo del rol del usuario */
}

import React from "react";
import MenuItem from "./MenuItem";
import { useUserContext } from "../../../contexts/UserContext";
import {
  CONTACT_URL,
  CREATE_ART,
  CREATE_TOUR,
  HOME_URL,
  SEARCH_URL,
  CALENDAR_URL,
} from "../../../constants/URLS";

function Menu() {
  const { role } = useUserContext();

  const handleCredentials = () => {
    if (role === "user") {
      return (
        <div className="w-full h-full flex mx-2 flex-wrap flex-row justify-center m- content-center sm:gap-3 mr-8 gap-2 md:justify-end">
          <MenuItem display="Inicio" path={HOME_URL} />
          <MenuItem display="Buscador" path={SEARCH_URL} />
          <MenuItem display="Calendario" path={CALENDAR_URL} />
          <MenuItem display="Contacto" path={CONTACT_URL} />
        </div>
      );
    } else if (role === "admin") {
      return (
        <div className="w-full h-full flex mx-2 flex-wrap flex-row justify-center m- content-center sm:gap-3 mr-8 gap-2 md:justify-end">
          <MenuItem display="Inicio" path={HOME_URL} />
          <MenuItem display="Buscador" path={SEARCH_URL} />
          <MenuItem display="Crear Obra" path={CREATE_ART} />
          <MenuItem display="Crear Tour" path={CREATE_TOUR} />
          <MenuItem display="Calendario" path={CALENDAR_URL} />
          <MenuItem display="Contacto" path={CONTACT_URL} />
        </div>
      );
    } else {
      return (
        <div className="w-full h-full flex mx-2 flex-wrap flex-row justify-center m- content-center sm:gap-3 mr-8 gap-2 md:justify-end">
          <MenuItem display="Inicio" path={HOME_URL} />
          <MenuItem display="Buscador" path={SEARCH_URL} />
          <MenuItem display="Calendario" path={CALENDAR_URL} />
          <MenuItem display="Contacto" path={CONTACT_URL} />
        </div>
      );
    }
  };

  return <>{handleCredentials()}</>;
}

export default Menu;
