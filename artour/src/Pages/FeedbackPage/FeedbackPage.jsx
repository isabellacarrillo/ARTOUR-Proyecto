import React, { useEffect, useState } from "react";
import Boton from "../../components/Boton/Boton";
import { PRINCIPAL } from "../../components/Boton/styles";
import TextArea from "../../components/Input/TextArea";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import { BACK } from "../../components/Boton/styles";
import Rating from "../../components/Rating/Rating";
import { findInputError, isFormInvalid } from "../../components/Input/utils";
import { AnimatePresence, motion } from "framer-motion";
import useTours from "../../hooks/useTours";
import { Bars } from "react-loader-spinner";
import { addFeedback } from "../../firebase/firestore/firestore-user";
import { useUserContext } from "../../contexts/UserContext";
import PopUpLoading from "../../components/PopUp/PopUpLoading";
import PopUp from "../../components/PopUp/PopUp";
import { HOME_URL } from "../../constants/URLS";

export default function Feedback() {
  const { user } = useUserContext();
  const { tourID, reservaID } = useParams();
  const { getTour, tour, isLoading } = useTours();
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState("not");

  const methods = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && tourID) {
      getTour(tourID);
    }
  }, [getTour]);

  const handleSubmit = async (data, e) => {
    setLoading(true);
    e.preventDefault();
    const result = await addFeedback(
      tour.id,
      user,
      data,
      reservaID,
      onSuccess,
      onError
    );
    setLoading(false);
  };

  const onSuccess = () => {
    setLoading(false);
    setState("success");
  };
  const onError = () => {
    setLoading(false);
    setState("error");
  };

  const inputError = findInputError(methods.formState.errors, "rating");
  const isInvalid = isFormInvalid(inputError);
  const handlePop = () => {
    switch (state) {
      case "success":
        return (
          <PopUp
            type="done"
            message="Se ha guardado tu comentario con éxito"
            display="Cerrar"
            action={HOME_URL}
          />
        );
      case "error":
        return (
          <PopUp
            type="error"
            message="Hubo un error, inténtelo de nuevo más tarde"
            display="Cerrar"
            action={HOME_URL}
          />
        );
      default:
        return <></>;
    }
  };

  if (isLoading && !tour) {
    return (
      <div className="w-full h-screen flex flex-wrap justify-center content-center">
        <Bars color="#4F759B" />
      </div>
    );
  }
  if (!isLoading && !tour) {
    return navigate("*");
  }

  return (
    <div className="flex flex-col flex-wrap p-6 content-center justify-center gap-8">
      <h1 className="text-orange text-5xl font-extrabold">Feedback</h1>

      <div className="bg-lightorange p-14 rounded-3xl drop-shadow-lg flex flex-col gap-4 h-fit lg:flex-row max-w-[1200px] self-center">
        <FormProvider {...methods}>
          <div className="flex flex-col gap-2 lg:w-3/5">
            <h1 className="text-orange text-4xl font-extrabold">
              {tour.nombre_tour}
            </h1>

            <img
              className="object-cover rounded-2xl"
              src={
                tour.img
                  ? tour.img
                  : "https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
              }
            />
          </div>
          <div className="flex flex-col p-8 py-12 gap-3 w-full">
            <Rating rating={tour.rating} />
            <AnimatePresence mode="wait" initial={false}>
              {isInvalid && (
                <InputError
                  message={inputError.error.message}
                  key={inputError.error.message}
                />
              )}
            </AnimatePresence>
            <TextArea
              display="Escribir sus Comentarios"
              name="comentario"
              validation={{
                pattern: {
                  value: /[A-Za-z]/,
                  message: "Por favor, introduzca una descripción válida",
                },
              }}
            />
            <Boton
              display="Enviar"
              style={PRINCIPAL}
              action={methods.handleSubmit(handleSubmit)}
            />
          </div>
        </FormProvider>
      </div>

      <Boton
        display="Regresar"
        style={BACK}
        action={() => {
          navigate(-1);
        }}
      />
      {handlePop()}
      {loading ? <PopUpLoading /> : <></>}
    </div>
  );
}

const InputError = ({ message }) => {
  return (
    <motion.p
      className="flex items-center text-xs gap-1 px-2 py-1 w-fit mt-1 font-semibold text-blue bg-blue/25 rounded-2xl"
      {...framer_error}
    >
      {message}
    </motion.p>
  );
};

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};
