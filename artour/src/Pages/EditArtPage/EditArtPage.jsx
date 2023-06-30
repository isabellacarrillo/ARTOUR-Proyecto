import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useTours from "../../hooks/useTours";
import Boton from "../../components/Boton/Boton";
import { PRINCIPAL, SECOND } from "../../components/Boton/styles";
import { FormProvider, useForm } from "react-hook-form";
import DropDown from "../../components/DropDown/DropDown";
import { Bars } from "react-loader-spinner";
import InputModify from "../../components/Input/InputModify";
import UploadPicModify from "../../components/UploadPic/UploadPicModify";
import TextAreaModify from "../../components/Input/TextAreaModify";
import PopUpConfirm from "../../components/PopUp/PopUpConfirm";
import {
  updateObra,
  deleteObra,
} from "../../firebase/firestore/firestore-update";
import PopUpLoading from "../../components/PopUp/PopUpLoading";
import PopUp from "../../components/PopUp/PopUp";
import { HOME_URL } from "../../constants/URLS";
import DropDownModify from "../../components/DropDown/DropDownModify";

const Create_Art = () => {
  const methods = useForm();
  const { obraID } = useParams();
  const navigate = useNavigate();
  const { obra, isLoading, getObra } = useTours();
  const [save, setSave] = useState(false);
  const [del, setDel] = useState(false);
  const [loadingChange, setloadingChange] = useState(false);
  const [changed, setChanged] = useState("not");

  useEffect(() => {
    if (!isLoading && obraID) {
      getObra(obraID);
    }
  }, [getObra]);

  const onFail = () => {
    navigate("*");
  };
  const onSuccess = () => {
    setloadingChange(false);
    setChanged("success");
  };
  const onSuccessDelete = () => {
    setloadingChange(false);
    setChanged("deleted");
  };
  const onNothing = () => {
    setloadingChange(false);
    setChanged("none");
  };
  const onError = () => {
    setloadingChange(false);
    setChanged("error");
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
    const result = await updateObra(obra, data, onSuccess, onNothing, onError);
    setloadingChange(false);
  };
  const handleDelete = async () => {
    setDel(false);
    setloadingChange(true);
    const result = await deleteObra(
      obraID,
      obra.punto_de_interes,
      obra.nombre_obra,
      onSuccessDelete,
      onError
    );
    setloadingChange(false);
  };

  if (isLoading && !obra) {
    return (
      <div className="w-full h-screen flex flex-wrap justify-center content-center">
        <Bars color="#4F759B" />
      </div>
    );
  }
  if (!isLoading && !obra) {
    return onFail();
  }

  return (
    <div className="flex flex-col content-start justify-start p-12 bg-white">
      <h1 className="text-orange text-4xl font-extrabold">
        Modificar Obra de Arte
      </h1>
      <FormProvider {...methods}>
        <div className="flex flex-col gap-4 p-12 w-full  content-center lg:flex-row">
          <UploadPicModify img={obra.img} />
          <div className="flex flex-col justify-around w-full sm:flex-row">
            <div className="w-full md:pl-10">
              {/*Aqui van a ir los inputs de nombre del Tour, identificador, capacidad y fecha de disponibilidad*/}
              <form className="flex flex-col gap-8 md:justify-start">
                <div className="flex flex-col gap-8  md:flex-row md:justify-start">
                  <div className="md:w-2/5">
                    <InputModify
                      label="Nombre de la Obra"
                      type="text"
                      name="nombre_obra"
                      id="nombre_obra"
                      outlined
                      placeholder={obra.nombre_obra}
                    />
                    <InputModify
                      label="Tipo de obra"
                      type="text"
                      name="tipo"
                      id="tipo"
                      outlined
                      placeholder={obra.tipo}
                    />
                    <InputModify
                      label="Autor"
                      type="text"
                      name="nombre_autor"
                      id="nombre_autor"
                      outlined
                      placeholder={obra.nombre_autor}
                    />
                    <InputModify
                      label="Ubicacion"
                      type="text"
                      name="ubicacion"
                      id="ubicacion"
                      outlined
                      placeholder={obra.ubicacion}
                    />
                  </div>
                  <DropDownModify punto={obra.punto_de_interes} />
                </div>
                <TextAreaModify
                  display="Descripcion"
                  placeholder={obra.descripcion}
                />
              </form>
            </div>
          </div>
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
            display="Eliminar Obra"
            style={SECOND}
            action={(e) => {
              e.preventDefault();
              setDel(true);
            }}
          />
        </div>
      </FormProvider>
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
          message="¿Seguro que quiere eliminar la obra de arte?"
          display="Confirmar"
          del={true}
          setter={setDel}
          helper="Eliminar el perfil va a remover toda su informacion del sistema"
          action={methods.handleSubmit(handleDelete)}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Create_Art;
