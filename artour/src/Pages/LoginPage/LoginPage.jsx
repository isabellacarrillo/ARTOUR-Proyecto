import React from "react";
import Boton from "../../components/Boton/Boton";
import { Link } from "react-router-dom";
import {
  PRINCIPAL,
  AUXILIAR,
  FACEBOOK,
  GOOGLE,
  TWITTER,
} from "../../components/Boton/styles";
import Input from "../../components/Input/Input";

export default function LoginPage() {
  return (
    <>
      <div className="flex flex-overlay justify-center bg-[url(https://www.unimet.edu.ve/wp-content/uploads/2019/09/IMG_0437.jpg)] bg-cover m-0 ">
        <div className="bg-white  flex flex-col gap-8 max-w-2xl justify-center content-center m-16 w-3/4 p-8 z-10 rounded-3xl ">
          <h4 className="text-3xl text-center font-extrabold text-orange">
            Ingresa a tu cuenta
          </h4>
          <div className=" w-full grid grid-rows-2 justify-around sm:grid-cols-2 sm:grid-rows-none gap-0 ">
            <form className="flex flex-col place-content-center gap-4 border-b-blue border-b  sm:border-r-blue sm:border-r sm:border-b-0">
              <Input
                label="Correo Electrónico"
                type="email"
                name="email"
                id="email"
              />
              <Input
                label="Contraseña"
                type="password"
                name="password"
                id="password"
              />
              <Boton style={PRINCIPAL} action="Ingresar" />
            </form>
            <div className="flex flex-col flex-wrap justify-center gap-0 border-t-blue border-t sm:border-l-blue sm:border-l sm:border-t-0">
              <Boton style={FACEBOOK} action="Continuar con Facebook" />
              <Boton style={GOOGLE} action="Continuar con Google" />
              <Boton style={TWITTER} action="Continuar con Twitter" />
            </div>
          </div>
          <div>
            <h6 className="text-center">Si aun no se ha registrado,</h6>
            <Link to="/registro">
              <Boton style={AUXILIAR} action="Registrarse" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
