import React, { useState } from "react";
import Input from "../../components/Input/Input";
import Boton from "../../components/Boton/Boton";
import { PRINCIPAL } from "../../components/Boton/styles";
import { FormProvider, useForm } from "react-hook-form";
import DropDown from "../../components/DropDown/DropDown";
import TextArea from "../../components/Input/TextArea";
import UploadPic from "../../components/UploadPic/UploadPic";

const Create_Art = () => {
  const methods = useForm();

  const handleSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="flex flex-col content-start justify-start p-12 bg-white ">
      <h1 className="text-orange text-4xl font-extrabold">
        Crear Obra de Arte
      </h1>
      <div className="flex flex-col gap-4 p-12 w-full  content-center lg:flex-row">
        <FormProvider {...methods}>
          <UploadPic />
          <div className="flex flex-col justify-around w-full sm:flex-row">
            <div className="w-full md:pl-10">
              {/*Aqui van a ir los inputs de nombre del Tour, identificador, capacidad y fecha de disponibilidad*/}
              <form className="flex flex-col gap-8 md:justify-start">
                <div className="flex flex-col gap-8  md:flex-row md:justify-start">
                  <div className="md:w-2/5">
                    <Input
                      label="Nombre de la Obra"
                      type="text"
                      name="nombre_obra"
                      id="nombre_obra"
                      outlined
                      validation={{
                        required: { value: true, message: "Obligatorio" },
                      }}
                    />
                    <Input
                      label="Tipo de obra"
                      type="text"
                      name="tipo"
                      id="tipo"
                      outlined
                      validation={{
                        required: { value: true, message: "Obligatorio" },
                      }}
                    />
                    <Input
                      label="Autor"
                      type="text"
                      name="autor"
                      id="autor"
                      outlined
                      validation={{
                        required: { value: true, message: "Obligatorio" },
                        pattern: {
                          value: /[A-Za-z]/,
                          message: "Por favor, introduzca un nombre valido",
                        },
                      }}
                    />
                    <Input
                      label="Ubicacion"
                      type="text"
                      name="ubicacion"
                      id="ubicacion"
                      outlined
                      validation={{
                        required: { value: true, message: "Obligatorio" },
                        pattern: {
                          value: /[A-Za-z]/,
                          message: "Por favor, introduzca un nombre valido",
                        },
                      }}
                    />
                  </div>
                  <DropDown />
                </div>
                <TextArea
                  display="Descripcion"
                  name="descripcion"
                  validation={{
                    required: { value: true, message: "Obligatorio" },
                    pattern: {
                      value: /[A-Za-z]/,
                      message: "Por favor, introduzca una descripcion valida",
                    },
                  }}
                />
              </form>
            </div>
          </div>
        </FormProvider>
      </div>
      <Boton
        display="Crear Obra"
        style={PRINCIPAL}
        action={methods.handleSubmit(handleSubmit)}
      />
    </div>
  );
};

export default Create_Art;
