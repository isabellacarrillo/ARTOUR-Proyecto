import React, { useState, useEffect } from "react";
import Boton from "../../components/Boton/Boton";
import { Link, useNavigate } from "react-router-dom";
import {
  PRINCIPAL,
  AUXILIAR,
  FACEBOOK,
  GOOGLE,
  TWITTER,
} from "../../components/Boton/styles";
import Input from "../../components/Input/Input";
import {
  loginWithEmailAndPassword,
  signInWithFacebook,
  signInWithGoogle,
  signInWithTwitter,
} from "../../firebase/auth-service";
import { HOME_URL } from "../../constants/URLS";
import { FormProvider, useForm } from "react-hook-form";

export default function LoginPage() {
  const navigate = useNavigate();
  const methods = useForm();
  const [error, setError] = useState(null);

  const handleSignInWithGoogle = async () => {
    const result = await signInWithGoogle({
      onSuccess: () => {
        navigate(HOME_URL);
      },
    });
    setError(result);
  };
  const handleSignInWithFacebook = async () => {
    const result = await signInWithFacebook({
      onSuccess: () => {
        navigate(HOME_URL);
      },
    });
    setError(result);
  };
  const handleSignInWithTwitter = async () => {
    const result = await signInWithTwitter({
      onSuccess: () => {
        navigate(HOME_URL);
      },
    });
    setError(result);
  };

  const onSubmit = async (data, e) => {
    const { email, password } = data;
    const result = await loginWithEmailAndPassword(
      {
        onSuccess: () => {
          navigate(HOME_URL);
        },
      },
      email,
      password
    );
    setError(result);
  };

  const handleError = () => {
    if (error) {
      switch (error) {
        case "auth/wrong-password":
          return (
            <p className="text-sm bg-orange/25 text-orange font-semibold text-center rounded-2xl py-1">
              Contraseña Incorrecta
            </p>
          );
        case "auth/user-not-found":
          return (
            <p className="text-sm bg-orange/25 text-orange font-semibold text-center rounded-2xl py-1">
              No existe usuario con esa informacion
            </p>
          );
        case "auth/popup-closed-by-user":
          return <></>;
        case "auth/account-exists-with-different-credential":
          return (
            <p className="text-sm bg-orange/25 text-orange font-semibold text-center rounded-2xl py-1">
              Ya existe un usuario con esta informacion
            </p>
          );
        default:
          return (
            <p className="text-sm bg-orange/25 text-orange font-semibold text-center rounded-2xl py-1">
              Hubo un error intentelo, de nuevo
            </p>
          );
      }
    } else {
      return <></>;
    }
  };

  useEffect(() => {
    if (error != null) {
      setTimeout(() => {
        setError(null);
      }, 10000);
    }
  }, [error]);

  return (
    <>
      <div className="flex flex-overlay justify-center bg-[url(https://www.unimet.edu.ve/wp-content/uploads/2019/09/IMG_0437.jpg)] bg-cover m-0 ">
        <div className="bg-white  flex flex-col gap-8 max-w-2xl justify-center content-center m-16 w-3/4 p-8 z-10 rounded-3xl ">
          <h4 className="text-3xl text-center font-extrabold text-orange">
            Ingresa a tu cuenta
          </h4>
          <div className=" w-full grid grid-rows-2 justify-around sm:grid-cols-2 sm:grid-rows-none gap-0 ">
            <FormProvider {...methods}>
              <form
                className="flex flex-col place-content-center gap-4 border-b-blue border-b  sm:border-r-blue sm:border-r sm:border-b-0"
                onSubmit={(e) => {
                  e.preventDefault;
                }}
                noValidate
                autoComplete="off"
              >
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
                  type="password"
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
                <Boton
                  style={PRINCIPAL}
                  display="Ingresar"
                  action={methods.handleSubmit(onSubmit)}
                />
              </form>
            </FormProvider>
            <div className="flex flex-col flex-wrap justify-center gap-0 border-t-blue border-t sm:border-l-blue sm:border-l sm:border-t-0">
              <Boton
                style={FACEBOOK}
                display="Continuar con Facebook"
                action={handleSignInWithFacebook}
              />
              <Boton
                style={GOOGLE}
                display="Continuar con Google"
                action={handleSignInWithGoogle}
              />
              <Boton
                style={TWITTER}
                display="Continuar con Twitter"
                action={handleSignInWithTwitter}
              />
            </div>
          </div>
          {handleError()}
          <div>
            <h6 className="text-center">Si aun no se ha registrado,</h6>
            <Link to="/registro">
              <Boton style={AUXILIAR} display="Registrarse" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
