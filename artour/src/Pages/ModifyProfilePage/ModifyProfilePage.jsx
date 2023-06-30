import React, { useState } from "react";
import Input from "../../components/Input/Input";
import Boton from "../../components/Boton/Boton";
import { PRINCIPAL, SECOND } from "../../components/Boton/styles";
import { FormProvider, useForm } from "react-hook-form";
import { useUserContext } from "../../contexts/UserContext";
import { Bars } from "react-loader-spinner";
import InputModify from "../../components/Input/InputModify";
import UploadPicModify from "../../components/UploadPic/UploadPicModify";
import {
  updateUser,
  deleteUser,
} from "../../firebase/firestore/firestore-update";
import PopUpConfirm from "../../components/PopUp/PopUpConfirm";
import PopUpLoading from "../../components/PopUp/PopUpLoading";
import PopUp from "../../components/PopUp/PopUp";
import { HOME_URL } from "../../constants/URLS";

const Modify_Profile = () => {
  const methods = useForm();
  const { role, user, isLoading, setUser } = useUserContext();
  const [save, setSave] = useState(false);
  const [loadingChange, setloadingChange] = useState(false);
  const [changed, setChanged] = useState("not");
  const [del, setDel] = useState(false);

  const onSuccess = () => {
    setloadingChange(false);
    setChanged("success");
  };
  const onNothing = () => {
    setloadingChange(false);
    setChanged("none");
  };
  const onError = () => {
    setloadingChange(false);
    setChanged("error");
  };
  const onSuccessDelete = () => {
    setloadingChange(false);
    setChanged("deleted");
  };

  const handlePop = () => {
    switch (changed) {
      case "success":
        return (
          <PopUp
            type="done"
            message="Se han guardado los cambios con exito"
            display="Cerrar"
            action={HOME_URL}
          />
        );
      case "none":
        return (
          <PopUp
            type="info"
            message="No hubo cambios a guardar"
            display="Cerrar"
            action={HOME_URL}
          />
        );

      case "error":
        return (
          <PopUp
            type="error"
            message="Hubo un error, intentelo de nuevo mas tarde"
            display="Cerrar"
            action={HOME_URL}
          />
        );
      case "deleted":
        return (
          <PopUp
            type="done"
            message="Se ha eliminado con exito"
            display="Cerrar"
            action={HOME_URL}
          />
        );
      default:
        return <></>;
    }
  };

  const handleSubmit = async (data, e) => {
    setSave(false);
    setloadingChange(true);
    e.preventDefault();
    console.log(data);
    const result = await updateUser(user, data, onSuccess, onNothing, onError);
    setloadingChange(false);
  };
  const handleDelete = async () => {
    setDel(false);
    setloadingChange(true);
    const result = await deleteUser(user, onSuccessDelete, onError);
    setloadingChange(false);
  };

  if (isLoading) {
    return (
      <div className="w-full h-screen flex flex-wrap justify-center content-center">
        <Bars color="#4F759B" />
      </div>
    );
  }

  return (
    <div className="flex flex-col content-start gap-4 justify-start p-12 bg-white">
      <h1 className="text-orange text-4xl font-extrabold">Modificar Perfil</h1>
      <div className="flex flex-col w-full items-center md:flex-row self-center">
        <FormProvider {...methods}>
          <UploadPicModify img={user.img} />
          <div className="w-full md:pl-10">
            <form className="flex flex-col gap-8 md:justify-start">
              <div className="flex flex-col gap-8   md:flex-row md:justify-start">
                <div className="md:w-2/5">
                  <div className="m-4">
                    <div className="relative z-0">
                      <input
                        type="text"
                        id="email"
                        disabled
                        className="peer block min-h-[auto] w-full  border border-black bg-white px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear rounded-2xl focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none focus:border-blue focus:ring-1 focus:ring-blue"
                        placeholder={user.email}
                      />
                      <label
                        htmlFor="email"
                        className="pointer-events-none absolute left-3 px-2 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[0.9rem] scale-[0.8] text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] bg-white peer-focus:text-blue"
                      >
                        Email
                      </label>
                    </div>
                  </div>
                  <div className="m-4">
                    <div className="relative z-0">
                      <input
                        type="text"
                        id="password"
                        disabled
                        className="peer block min-h-[auto] w-full  border border-black bg-white px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear rounded-2xl focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none focus:border-blue focus:ring-1 focus:ring-blue"
                        placeholder={user.password}
                      />
                      <label
                        htmlFor="password"
                        className="pointer-events-none absolute left-3 px-2 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[0.9rem] scale-[0.8] text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] bg-white peer-focus:text-blue"
                      >
                        Contraseña
                      </label>
                    </div>
                  </div>

                  <InputModify
                    label="Nombre del Usuario"
                    type="text"
                    name="name"
                    id="name"
                    placeholder={user.name}
                    outlined
                    validation={{
                      pattern: {
                        value: /[A-Za-z]/,
                        message: "Por favor, introduzca un nombre valido",
                      },
                    }}
                  />
                  <InputModify
                    label="Telefono"
                    type="text"
                    name="telefono"
                    id="telefono"
                    outlined
                    placeholder={user.telefono}
                    validation={{
                      pattern: {
                        value:
                          /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                        message: "Por favor, introduzca un numero valido",
                      },
                    }}
                  />
                  <InputModify
                    label={
                      role === "user" ? "Numero de Carnet" : "Departamento"
                    }
                    type="text"
                    name={role === "user" ? "numero_carnet" : "departamento"}
                    id={role === "user" ? "numero_de_carnet" : "departamento"}
                    outlined
                    placeholder={
                      role === "user" ? user.numero_carnet : user.departamento
                    }
                  />
                </div>
              </div>
            </form>
          </div>
        </FormProvider>
      </div>
      <div className="flex flex-row justify-center">
        <Boton
          display="Guardar Cambios"
          style={PRINCIPAL}
          action={(e) => {
            e.preventDefault();
            setSave(true);
          }}
        />
        <Boton
          display="Eliminar Cuenta"
          style={SECOND}
          action={(e) => {
            e.preventDefault();
            setDel(true);
          }}
        />
      </div>
      {handlePop()}
      {loadingChange ? <PopUpLoading /> : <></>}
      {save ? (
        <PopUpConfirm
          message="¿Seguro que quiere guardar los nuevos datos?"
          display="Confirmar"
          helper="Los cambios guardados son permanentes y no pueden ser deshechos"
          action={methods.handleSubmit(handleSubmit)}
        />
      ) : (
        <></>
      )}
      {del ? (
        <PopUpConfirm
          message="¿Seguro que quiere eliminar esta cuenta?"
          helper="Eliminar el usuario va a descartar toda su informacion del sistema"
          display="Confirmar"
          setter={setDel}
          del={true}
          action={methods.handleSubmit(handleDelete)}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Modify_Profile;
