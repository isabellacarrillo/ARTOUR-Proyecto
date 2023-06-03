import React from "react";
import { Link } from "react-router-dom";
import logo from "../NavBar/foto/1.png";
import Menu from "./Menu";

export default function AdminNavbar() {
  return (
    <div>
      <div className="w-screen h-fit  overflow-clip">
        <div className="bg-orange h-10 flex content-center justify-end px-12 py-2">
          <Link
            className="text-sm underline underline-offset-2 font-semibold text-white hover:text-blue"
            to="/login"
          >
            Iniciar Sesion
          </Link>
        </div>
        <div className="h-fit bg-white border-b-2 md:h-32 border-blue p-4 place-content-end grid grid-rows-2 grid-cols-1 sm:grid-rows-1 sm:grid-cols-2  md:flex md:flex-row md:justify-between">
          <div className="h-16 self-center sm:w-64  overflow-hidden flex content-center justify-center m-2">
            <img className="h-inherit md:w-56 object-cover" src={logo} />
          </div>
          <Menu />
        </div>
      </div>
    </div>
  );
}
