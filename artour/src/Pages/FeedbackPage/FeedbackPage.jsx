import React from "react";
import Boton from "../../components/Boton/Boton";
import { PRINCIPAL } from "../../components/Boton/styles";
import TextArea from "../../components/Input/TextArea";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { BACK } from "../../components/Boton/styles";
import Rating from "../../components/Rating/Rating";
import { findInputError, isFormInvalid } from "../../components/Input/utils";
import { AnimatePresence, motion } from "framer-motion";

export default function Feedback() {
  const methods = useForm();
  const navigate = useNavigate();

  const handleSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
  };

  const inputError = findInputError(methods.formState.errors, "like");
  const isInvalid = isFormInvalid(inputError);

  return (
    <div className="flex flex-col flex-wrap p-6 content-center justify-center gap-8">
      <h1 className="text-orange text-5xl font-extrabold">Feedback</h1>

      <div className="bg-lightorange p-14 rounded-3xl drop-shadow-lg flex flex-col gap-4 h-fit lg:flex-row max-w-[1200px] self-center">
        <FormProvider {...methods}>
          <div className="flex flex-col gap-2 lg:w-3/5">
            <h1 className="text-orange text-4xl font-extrabold">
              Nombre del Tour
            </h1>

            <img
              className="object-cover rounded-2xl"
              src="https://cdn.bitlysdowssl-aws.com/wp-content/uploads/2020/10/Diplomados-Arte-Contempor%C3%A1neoo-Archivo.jpg"
            />
          </div>
          <div className="flex flex-col p-8 py-12 gap-3 w-full">
            <Rating rating={[0, 2]} />
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
              name="comentarios"
              validation={{
                pattern: {
                  value: /[A-Za-z]/,
                  message: "Por favor, introduzca una descripcion valida",
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
