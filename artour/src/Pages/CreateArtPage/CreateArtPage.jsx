import React, { useState } from "react";
import Input from "../../components/Input/Input";
import Boton from "../../components/Boton/Boton";
import { PRINCIPAL } from "../../components/Boton/styles";
import { FormProvider, useForm } from "react-hook-form";
import DropDown from "../../components/DropDown/DropDown";
import TextArea from "../../components/Input/TextArea";
import UploadPic from "../../components/UploadPic/UploadPic";
import PopUp from "../../components/PopUp/PopUp";
import PopUpLoading from "../../components/PopUp/PopUpLoading";
import { HOME_URL } from "../../constants/URLS";
import { createNewObra } from "../../firebase/firestore/firestore-add";
const Create_Art = () => {
  const methods = useForm();
  const [state, setState] = useState(false);
  const [creating, setCreating] = useState(false);

  const handleSubmit = async (data, e) => {
    setCreating(true);
    e.preventDefault();
    const result = await createNewObra(data);
    setState(result);
    setCreating(false);
  };

  return (
    <>
      {creating ? <PopUpLoading /> : <></>}
      {state === "success" ? (
        <PopUp
          message="Se ha creado la obra de arte con éxito"
          action={HOME_URL}
          display="Cerrar"
        />
      ) : (
        <></>
      )}
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
                        name="nombre_autor"
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
        {state === "error" ? (
          <div className="w-full flex flex-row justify-center">
            <p className=" w-fit text-lg bg-orange/25 text-orange font-semibold text-center rounded-2xl px-8 py-1">
              Ya existe una obra con esta información
            </p>
          </div>
        ) : (
          <></>
        )}
        <Boton
          display="Crear Obra"
          style={PRINCIPAL}
          action={methods.handleSubmit(handleSubmit)}
        />
      </div>
    </>
  );
};

export default Create_Art;
