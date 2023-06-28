import React, { useState } from "react";
import Input from "../../components/Input/Input";
import Boton from "../../components/Boton/Boton";
import { PRINCIPAL } from "../../components/Boton/styles";
import { FormProvider, useForm } from "react-hook-form";
import CheckBoxZonasDeInteres from "../../components/CheckBox/CheckBoxZonasDeInteres";
import DatePicker from "../../components/DatePicker/DatePicker";
import UploadPic from "../../components/UploadPic/UploadPic";
import PopUp from "../../components/PopUp/PopUp";
import PopUpLoading from "../../components/PopUp/PopUpLoading";
import { HOME_URL } from "../../constants/URLS";
import { createNewTour } from "../../firebase/firestore/firestore-add";

const Create_Art = () => {
  const methods = useForm();
  const [state, setState] = useState(false);
  const [creating, setCreating] = useState(false);

  const handleSubmit = async (data, e) => {
    setCreating(true);
    e.preventDefault();
    const result = await createNewTour(data);
    setState(result);
    setCreating(false);
  };

  return (
    <>
      {creating ? <PopUpLoading /> : <></>}
      {state === "success" ? (
        <PopUp
          message="Se ha creado el tour con éxito"
          action={HOME_URL}
          display="Cerrar"
        />
      ) : (
        <></>
      )}
      <div className="flex flex-col content-start justify-start p-12 bg-white">
        <h1 className="text-orange text-4xl font-extrabold">Crear Tour</h1>
        <div className="flex flex-col p-12 w-full lg:flex-row">
          <FormProvider {...methods}>
            <UploadPic />

            <div className="flex flex-col justify-around w-full sm:flex-row">
              <div className="w-full md:pl-10">
                {/*Aqui van a ir los inputs de nombre del Tour, identificador, capacidad y fecha de disponibilidad*/}
                <form className="flex flex-col gap-8 md:justify-start">
                  <div className="flex flex-col gap-8  md:flex-row md:justify-start">
                    <div className="w-fit">
                      <Input
                        label="Nombre del Tour"
                        type="text"
                        name="nombre_tour"
                        id="nombre_tour"
                        outlined
                        validation={{
                          required: { value: true, message: "Obligatorio" },
                        }}
                      />
                      <Input
                        label="Capacidad"
                        type="text"
                        name="capacidad"
                        id="capacidad"
                        outlined
                        validation={{
                          required: { value: true, message: "Obligatorio" },
                          pattern: {
                            value: /^((80)|([1-7][0-9]{1})|([1-9]))$/,
                            message:
                              "Un tour debe tener capacidad entre 1 y 80 personas",
                          },
                        }}
                      />
                      <Input
                        label="Duracion (en minutos)"
                        type="text"
                        name="duracion"
                        id="duracion"
                        outlined
                        validation={{
                          required: { value: true, message: "Obligatorio" },
                          pattern: {
                            value: /^((180)|(1[0-7][0-9]{1})|([1-9][0-9]{1}))$/,
                            message: "Un tour debe durar entre 10 y 180 min",
                          },
                        }}
                      />
                      <DatePicker />
                    </div>
                    <CheckBoxZonasDeInteres />
                  </div>
                </form>
              </div>
            </div>
          </FormProvider>
        </div>
        {state === "error" ? (
          <div className="w-full flex flex-row justify-center">
            <p className=" w-fit text-lg bg-orange/25 text-orange font-semibold text-center rounded-2xl px-8 py-1">
              Ya existe un tour con esta información
            </p>
          </div>
        ) : (
          <></>
        )}
        <Boton
          display="Crear Tour"
          style={PRINCIPAL}
          action={methods.handleSubmit(handleSubmit)}
        />
      </div>
    </>
  );
};

export default Create_Art;
