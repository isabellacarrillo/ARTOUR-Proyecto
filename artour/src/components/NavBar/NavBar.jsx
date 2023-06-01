import React from "react";
import Menu from "./Menu/Menu";
import { Link } from "react-router-dom";
import logo from "./foto/1.png";

export default function NavBar() {
  return (
    <div className="w-screen h-44 sm:32 overflow-clip">
      <div className="bg-orange h-8 flex justify-end px-12 py-2">
        <Link
          className="text-xs underline underline-offset-1 font-semibold text-white hover:text-blue"
          to="/login"
        >
          Iniciar Sesion
        </Link>
      </div>
      <div className="h-36 border-b sm:h-24 border-blue place-content-end grid grid-cols-2  lg:grid-cols-3">
        <div className="h-16 self-center sm:w-64  overflow-hidden flex content-center justify-center m-2">
          <img className="h-inherit sm:w-56 object-cover" src={logo} />
        </div>
        <Menu />
      </div>
    </div>
  );
}
