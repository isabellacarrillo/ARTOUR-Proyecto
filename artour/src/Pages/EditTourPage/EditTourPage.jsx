import React, { useState, useEffect } from "react";
import Boton from "../../components/Boton/Boton";
import { PRINCIPAL, SECOND } from "../../components/Boton/styles";
import { FormProvider, useForm } from "react-hook-form";
import CheckBoxModify from "../../components/CheckBox/CheckBoxModify";
import DatePickerModify from "../../components/DatePicker/DatePickerModify";
import { useNavigate, useParams } from "react-router-dom";
import useTours from "../../hooks/useTours";
import { Bars } from "react-loader-spinner";
import InputModify from "../../components/Input/InputModify";
import UploadPicModify from "../../components/UploadPic/UploadPicModify";
import PopUpConfirm from "../../components/PopUp/PopUpConfirm";
import {
  updateTour,
  deleteTour,
} from "../../firebase/firestore/firestore-update";
import PopUpLoading from "../../components/PopUp/PopUpLoading";
import PopUp from "../../components/PopUp/PopUp";
import { HOME_URL } from "../../constants/URLS";

const Create_Art = () => {
  const { tourID } = useParams();
  const navigate = useNavigate();
  const methods = useForm();
  const { getTour, tour, isLoading } = useTours();
  const [save, setSave] = useState(false);
  const [del, setDel] = useState(false);
  const [loadingChange, setloadingChange] = useState(false);
  const [changed, setChanged] = useState("not");

  useEffect(() => {
    if (!isLoading && tourID) {
      getTour(tourID);
    }
  }, [getTour]);

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
    const result = await updateTour(tour, data, onSuccess, onNothing, onError);
    setloadingChange(false);
  };
  const handleDelete = async () => {
    setDel(false);
    setloadingChange(true);
    const result = await deleteTour(
      tourID,
      tour.nombre_tour,
      onSuccessDelete,
      onError
    );
    setloadingChange(false);
  };

  if (isLoading && !tour) {
    return (
      <div className="w-full h-screen flex flex-wrap justify-center content-center">
        <Bars color="#4F759B" />
      </div>
    );
  }
  if (!isLoading && !tour) {
    return onFail();
  }
  return (
    <div className="flex flex-col content-start justify-start p-12 bg-white">
      <h1 className="text-orange text-4xl font-extrabold">Modificar Tour</h1>
      <FormProvider {...methods}>
        <div className="flex flex-col p-12 w-full lg:flex-row">
          <UploadPicModify img={tour.img} />
          <div className="flex flex-col justify-around w-full sm:flex-row">
            <div className="w-full md:pl-10">
              {/*Aqui van a ir los inputs de nombre del Tour, identificador, capacidad y fecha de disponibilidad*/}
              <form className="flex flex-col gap-8 md:justify-start">
                <div className="flex flex-col gap-8  md:flex-row md:justify-start">
                  <div className="md:w-2/5">
                    <InputModify
                      label="Nombre del Tour"
                      type="text"
                      name="nombre_tour"
                      id="nombre_tour"
                      placeholder={tour.nombre_tour}
                      outlined
                    />
                    <InputModify
                      label="Capacidad"
                      type="text"
                      name="capacidad"
                      id="capacidad"
                      placeholder={tour.capacidad}
                      outlined
                    />
                    <InputModify
                      label="Duracion"
                      type="text"
                      name="duracion"
                      id="duracion"
                      placeholder={tour.duracion}
                      outlined
                    />
                  </div>
                  <CheckBoxModify tour_puntos={tour.puntos_de_interes} />
                </div>
                <DatePickerModify fecha={tour.fecha.split("/")} />
              </form>
            </div>
          </div>
        </div>
        <Boton
          display="Guardar Cambios"
          style={PRINCIPAL}
          action={(e) => {
            e.preventDefault();
            setSave(true);
          }}
        />
        <Boton
          display="Eliminar Tour"
          style={SECOND}
          action={(e) => {
            e.preventDefault();
            setDel(true);
          }}
        />
      </FormProvider>
      {handlePop()}
      {loadingChange ? <PopUpLoading /> : <></>}
      {save ? (
        <PopUpConfirm
          message="¿Seguro que quiere guardar los nuevos datos?"
          display="Confirmar"
          action={methods.handleSubmit(handleSubmit)}
        />
      ) : (
        <></>
      )}
      {del ? (
        <PopUpConfirm
          message="¿Seguro que quiere eliminar el tour?"
          display="Confirmar"
          action={methods.handleSubmit(handleDelete)}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Create_Art;
