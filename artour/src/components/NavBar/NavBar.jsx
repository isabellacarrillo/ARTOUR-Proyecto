import React from "react";
import Menu from "./Menu/Menu";
import { Link } from "react-router-dom";
import logo from "./foto/1.png";

export default function NavBar() {
  return (
    <div className="w-screen h-fit  overflow-clip">
      <div className="bg-orange h-10 flex content-center justify-end px-12 py-2">
        <Link
          className="text-sm underline underline-offset-1 font-semibold text-white hover:text-blue"
          to="/login"
        >
          Iniciar Sesion
        </Link>
      </div>
      <div className="h-fit border-b-2 md:h-32 border-blue place-content-end grid grid-cols-2  xl:grid-cols-3">
        <div className="h-16 self-center sm:w-64  overflow-hidden flex content-center justify-center m-2">
          <img className="h-inherit md:w-56 object-cover" src={logo} />
        </div>
        <Menu />
      </div>
    </div>
  );
}
