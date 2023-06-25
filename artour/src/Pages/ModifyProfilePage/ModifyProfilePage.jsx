import React, { useState } from "react";
import Input from "../../components/Input/Input";
import Boton from "../../components/Boton/Boton";
import { PRINCIPAL } from "../../components/Boton/styles";
import { FormProvider, useForm } from "react-hook-form";
import UploadPic from "../../components/UploadPic/UploadPic";

const Modify_Profile = () => {
  const methods = useForm();

  const handleOnSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="flex flex-col content-start gap-4 justify-start p-12 bg-white">
      <h1 className="text-orange text-4xl font-extrabold">Modificar Perfil</h1>
      <div className="flex flex-col w-full md:flex-row">
        <FormProvider {...methods}>
          <UploadPic />
          <div className="w-full md:pl-10">
            {/*Aqui van a ir los inputs de nombre del Tour, identificador, capacidad y fecha de disponibilidad*/}
            <form className="flex flex-col gap-8 md:justify-start">
              <div className="flex flex-col gap-8   md:flex-row md:justify-start">
                <div className="md:w-2/5">
                  <Input
                    label="Nombre del Usuario"
                    type="text"
                    name="nombre_obra"
                    id="nombre_obra"
                    outlined
                    validation={{
                      pattern: {
                        value: /[A-Za-z]/,
                        message: "Por favor, introduzca un nombre valido",
                      },
                    }}
                  />
                  <Input
                    label="Email"
                    type="text"
                    name="tipo"
                    id="tipo"
                    outlined
                    validation={{
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: "Por favor, introduzca un correo valido",
                      },
                    }}
                  />
                  <Input
                    label="Telefono"
                    type="text"
                    name="autor"
                    id="autor"
                    outlined
                    validation={{
                      pattern: {
                        value:
                          /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                        message: "Por favor, introduzca un numero valido",
                      },
                    }}
                  />
                  <Input
                    label="Contraseña"
                    type="text"
                    name="ubicacion"
                    id="ubicacion"
                    outlined
                    validation={{
                      minLength: {
                        value: 5,
                        message: "Su clave debe tener al menos 5 caracteres",
                      },
                    }}
                  />
                </div>
              </div>
            </form>
          </div>
        </FormProvider>
      </div>

      <Boton
        display="Guardar Cambios"
        style={PRINCIPAL}
        action={methods.handleSubmit(handleOnSubmit)}
      />
    </div>
  );
};

export default Modify_Profile;