import React, { useEffect, useState } from "react";
import Boton from "../../components/Boton/Boton";
import { FormProvider, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AUXILIAR, GOOGLE, TODO } from "../../components/Boton/styles";
import Input from "../../components/Input/Input";
import {
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase/auth-service";
import { HOME_URL } from "../../constants/URLS";

export default function RegisterPage() {
  const navigate = useNavigate();
  const methods = useForm();
  const [error, setError] = useState(null);
  

  const onSubmit = async (data, e) => {
    const { email, password, ...extraData } = data;
    const result = await registerWithEmailAndPassword(
      {
        onSuccess: () => {
          navigate(HOME_URL);
        },
      },
      email,
      password,
      extraData
    );
    setError(result);
  };

  const handleError = () => {
    if (error) {
      if (error === "auth/email-already-in-use") {
        return (
          <p className="text-xs bg-orange/25 text-orange font-semibold text-center rounded-2xl py-1">
            Ya existe una cuenta con esta informacion
          </p>
        );
      } else {
        return (
          <p className="text-xs bg-orange/25 text-orange font-semibold text-center rounded-2xl py-1">
            Hubo un error intentelo, de nuevo
          </p>
        );
      }
    } else {
      return <></>;
    }
  };

  useEffect(() => {}, [error]);

  return (
    <>
      <div className="flex flex-overlay justify-center bg-[url(https://www.unimet.edu.ve/wp-content/uploads/2019/09/IMG_0437.jpg)] bg-cover m-0 ">
        <div className="bg-white drop-shadow-4xl flex flex-col gap-2 max-w-xl justify-center content-center m-16 w-3/4 p-12 z-10 rounded-3xl">
          <h4 className="text-3xl text-left font-extrabold text-orange">
            Crea tu cuenta
          </h4>

          <div className=" w-full flex flex-col justify-around sm:grid-cols-2 sm:grid-rows-none gap-0 ">
            <FormProvider {...methods}>
              <form
                className="flex flex-col place-content-center gap-0"
                onSubmit={(e) => {
                  e.preventDefault;
                }}
                noValidate
                autoComplete="off"
              >
                <div className="w-full h-fit grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-none ">
                  <Input
                    label="Nombre"
                    type="text"
                    name="name"
                    id="name"
                    validation={{
                      required: { value: true, message: "Obligatorio" },
                      pattern: {
                        value: /[A-Za-z]/,
                        message: "Por favor, introduzca un nombre valido",
                      },
                    }}
                  />
                  <Input
                    label="Teléfono"
                    type="text"
                    name="telefono"
                    id="telefono"
                    validation={{
                      required: { value: true, message: "Obligatorio" },
                      pattern: {
                        value:
                          /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                        message: "Por favor, introduzca un numero valido",
                      },
                    }}
                  />
                </div>
                <div className="w-3/4 flex flex-col gap-3">
                  <Input
                    label="Correo Electrónico"
                    type="email"
                    name="email"
                    id="email"
                    validation={{
                      required: { value: true, message: "Obligatorio" },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: "Por favor, introduzca un correo valido",
                      },
                    }}
                  />
                  <Input
                    label="Contraseña"
                    type="text"
                    name="password"
                    id="password"
                    validation={{
                      required: { value: true, message: "Obligatorio" },
                      minLength: {
                        value: 5,
                        message: "Su clave debe tener al menos 5 caracteres",
                      },
                    }}
                  />
                </div>
                <Boton
                  style={TODO}
                  display="Crear Cuenta"
                  action={methods.handleSubmit(onSubmit)}
                />
              </form>
            </FormProvider>
          </div>

          {handleError()}

          <div className="flex flex-col justify-center">
            <h6 className="text-center">¿Ya tienes cuenta?</h6>
            <Link to="/login">
              <Boton style={AUXILIAR} display="Iniciar Sesión" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
