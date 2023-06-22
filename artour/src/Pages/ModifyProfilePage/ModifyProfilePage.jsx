import React, { useState } from "react";
import Input from "../../components/Input/Input";
import Boton from "../../components/Boton/Boton";
import { PRINCIPAL } from "../../components/Boton/styles";
import { FormProvider, useForm } from "react-hook-form";
import DropDown from "../../components/DropDown/DropDown";
import TextArea from "../../components/Input/TextArea";

const Modify_Profile = () => {
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
      <h1 className="text-orange text-4xl font-extrabold">
        Modificar Perfil
      </h1>
      <div className="flex flex-col gap-4 p-12 w-full  content-center lg:flex-row">
        <div className="md:w-2/5 flex flex-col md:flex-row flex-wrap justify-around items-center">
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
                      label="Nombre del Usuario"
                      type="text"
                      name="nombre_obra"
                      id="nombre_obra"
                      outlined
                    />
                    <Input
                      label="Email"
                      type="text"
                      name="tipo"
                      id="tipo"
                      outlined
                    />
                    <Input
                      label="Telefono"
                      type="text"
                      name="autor"
                      id="autor"
                      outlined
                    />
                    <Input
                      label="Contraseña"
                      type="text"
                      name="ubicacion"
                      id="ubicacion"
                      outlined
                    />
                  </div>
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

export default Modify_Profile;

