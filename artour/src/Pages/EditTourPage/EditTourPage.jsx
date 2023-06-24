import React, { useState } from "react";
import Input from "../../components/Input/Input";
import Boton from "../../components/Boton/Boton";
import { PRINCIPAL } from "../../components/Boton/styles";
import { FormProvider, useForm } from "react-hook-form";
import CheckBoxZonasDeInteres from "../../components/Input/CheckBoxZonasDeInteres";
import DatePicker from "../../components/DatePicker/DatePicker";

const Create_Art = () => {
  const methods = useForm();
  const [file, setFile] = useState();

  const handleChange = (e) => {
    try {
      setFile(URL.createObjectURL(e.target.files[0]));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col content-start justify-start p-12 bg-white">
      <h1 className="text-orange text-4xl font-extrabold">Modificar Tour</h1>
      <div className="flex flex-col p-12 w-full lg:flex-row">
        <div className="md:w-2/5 flex flex-col  gap-4 justify-around items-center">
          {/*Aqui va a ir la imagen y el boton para modificarla*/}
          <img src={file} className="rounded-2xl drop-shadow-lg" />
          <button className=" text-white py-2 px-4 rounded space-y-2">
            <label
              htmlFor="photo"
              className="w-fit h-fit bg-blue px-8 py-2 rounded-2xl text-white font-semibold transition ease-in-out duration-300 delay-0 hover:bg-orange"
            >
              Subir Foto
            </label>
            <input
              id="photo"
              className="hidden"
              type="file"
              accept="image/*"
              onChange={handleChange}
            />
          </button>
        </div>
        <div className="flex flex-col justify-around w-full sm:flex-row">
          <div className="w-full md:pl-10">
            {/*Aqui van a ir los inputs de nombre del Tour, identificador, capacidad y fecha de disponibilidad*/}
            <FormProvider {...methods}>
              <form className="flex flex-col gap-8 md:justify-start">
                <div className="flex flex-col gap-8  md:flex-row md:justify-start">
                  <div className="md:w-2/5">
                    <Input
                      label="Nombre del Tour"
                      type="text"
                      name="nombre_tour"
                      id="nombre_tour"
                      outlined
                    />
                    <Input
                      label="Capacidad"
                      type="text"
                      name="capacidad"
                      id="capacidad"
                      outlined
                    />
                    <Input
                      label="Duracion"
                      type="text"
                      name="diracion"
                      id="duracion"
                      outlined
                    />
                    <DatePicker />
                  </div>
                  <CheckBoxZonasDeInteres />
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
      <Boton display="Guardar Cambios" style={PRINCIPAL} />
    </div>
  );
};

export default Create_Art;
