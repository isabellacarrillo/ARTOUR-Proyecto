{/* Componente del Footer de la pagina*/}

import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialMIcons";

export default function Footer() {
  return (
    <footer className="bg-bluegray text-black">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-orange-500"></div>
      <ItemsContainer />
    </footer>
  );
}
