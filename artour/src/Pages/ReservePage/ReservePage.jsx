import React, { useEffect, useState } from "react";
import Boton from "../../components/Boton/Boton";
import { PRINCIPAL } from "../../components/Boton/styles";
import TextArea from "../../components/Input/TextArea";
import { FormProvider, set, useForm } from "react-hook-form";
import DropDates from "../../components/DropDown/DropDates";
import NumberPicker from "../../components/NumberPicker/NumberPicker";
import { useNavigate, useParams } from "react-router-dom";
import useTours from "../../hooks/useTours";
import { useUserContext } from "../../contexts/UserContext";
import { Bars } from "react-loader-spinner";
import { saveReserve } from "../../firebase/firestore/firestore-user";
import PopUp from "../../components/PopUp/PopUp";
import PopUpLoading from "../../components/PopUp/PopUpLoading";
import PopUpMore from "../../components/PopUp/PopUpMore";
import PopUpCheckout from "../../components/PopUp/PopUpCheckout";
import { HOME_URL } from "../../constants/URLS";

export default function ReservePage() {
  const { tourID } = useParams();
  const { user } = useUserContext();
  const { getTour, tour, isLoading } = useTours();
  const [loadingReserve, setLoadingReserve] = useState(false);
  const [reserved, setReserved] = useState(false);
  const [contribute, setContribute] = useState(false);
  const [reserveID, setReservedID] = useState();
  const [payment, setPayment] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const methods = useForm();

  useEffect(() => {
    if (!isLoading && tourID) {
      getTour(tourID);
    }
  }, [getTour]);
  const onFail = () => {
    navigate("*");
  };

  const onError = () => {
    setLoadingReserve(false);
    setError(true);
  };

  const handleSubmit = async (data, e) => {
    setLoadingReserve(true);
    e.preventDefault();
    const result = await saveReserve(data, user, tourID, onError);
    setReservedID(result);
    setReserved(true);
    setLoadingReserve(false);
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
    <div className="flex flex-col gap-3 justify-start px-12 py-6 bg-white ">
      <h1 className="text-orange text-4xl font-extrabold">Reservar Tour</h1>
      <div className="bg-bluegray p-8 rounded-2xl flex flex-col gap-5 w-fit drop-shadow-xl max-w-[1200px] self-center lg:flex-row">
        <FormProvider {...methods}>
          <div className="lg:w-3/5 flex flex-col gap-3">
            <h1 className="text-blue text-3xl font-extrabold w-fit">
              {tour.nombre_tour}
            </h1>
            <img
              className=" object-cover rounded-2xl"
              src={
                tour.img
                  ? tour.img
                  : "https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
              }
            />
          </div>
          <div className="flex flex-col py-10 gap-12 w-full h-full">
            <div className="flex flex-col lg:flex-row justify-around">
              <NumberPicker
                capacidad={parseInt(tour.capacidad)}
                fecha={methods.getValues().fecha_reserva}
                fechas={tour.fecha}
              />
              <DropDates dates={tour.fecha} />
            </div>
            <div className="flex flex-col gap-4">
              <h6 className="text-sm text-blue">
                Si necesitas alguna asistencia especial o consideracion, dejanos
                tu comentario
              </h6>
              <TextArea display="Comentarios" name="comentarios" />
            </div>
            <Boton
              display="Reservar"
              style={PRINCIPAL}
              action={methods.handleSubmit(handleSubmit)}
            />
          </div>
        </FormProvider>
      </div>
      {loadingReserve ? <PopUpLoading /> : <></>}
      {reserved ? (
        <PopUp
          type="done"
          message="La reserva se completo existosamente"
          next
          display="Seguir"
          action={(e) => {
            setReserved(false);
            setContribute(true);
          }}
        />
      ) : (
        <></>
      )}
      {completed ? (
        <PopUp
          type="done"
          message="Tu pago se ha registrado exitosamente"
          display="Seguir"
          action={HOME_URL}
        />
      ) : (
        <></>
      )}

      {contribute ? (
        <PopUpMore
          message="Ayudanos a mejorar y crecer"
          helper="Nuestros servicios son completamente mantenidos por colaboraciones de nuestros visitantes por el servicio de Paypal.  ¡ Ninguna ayuda es muy pequeña !"
          display="Contribuir"
          action={(e) => {
            setContribute(false);
            setPayment(true);
          }}
        />
      ) : (
        <></>
      )}
      {payment ? (
        <PopUpCheckout
          message="Introduzca el monto deseado"
          helper="Cualquier contribucion es apreciada por parte del equipo, seleccione el monto que desee"
          setter={setPayment}
          resID={reserveID}
          loading={setLoadingReserve}
          completed={setCompleted}
        />
      ) : (
        <></>
      )}
      {error ? (
        <PopUp
          type="error"
          message="Ocurrio un error con la reserva"
          display="Cerrar"
          action={HOME_URL}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
