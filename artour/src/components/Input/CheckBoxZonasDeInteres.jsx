import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { findInputError, isFormInvalid } from "../Input/utils";

const CheckBoxZonasDeInteres = () => {
  const {
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useFormContext();
  const [puntos, setPuntos] = useState([]);
  const inputError = findInputError(errors, "punto_de_interes");
  const isInvalid = isFormInvalid(inputError);

  const handleOnChange = (e) => {
    if (!e.target.checked) {
      console.log(e.target.value);
      setPuntos(puntos.filter((v) => v !== e.target.value));
    } else {
      setPuntos([...puntos, e.target.value]);
    }
  };
  const handleError = (e) => {
    if (puntos.length == 0) {
      setError("punto_de_interes", {
        type: "required",
        message: "Obligatorio",
      });
    } else {
      clearErrors("punto_de_interes");
    }
  };

  useEffect(() => {
    setValue("puntos_de_interes", puntos);
    handleError();
  }, [puntos]);

  return (
    <div>
      <h3 className="mb-1">Puntos de Interes a Visitar</h3>

      <fieldset>
        <legend className="sr-only">Checkbox variants</legend>

        <div className="flex items-center mb-2  bg-orange rounded-2xl p-2 px-4">
          <input
            id="checkbox-1"
            type="checkbox"
            value="biblioteca"
            className="w-4 h-4 text-blue bg-bluegray border-bluegrayrounded focus:ring-blue dark:focus:ring-blue dark:ring-offset-bluegray dark:focus:ring-offset-bluegray focus:ring-2 dark:bg-blue dark:border-blue"
            onChange={handleOnChange}
          />
          <label
            htmlFor="checkbox-1"
            className="ml-2 text-sm font-medium text-white"
          >
            Biblioteca
          </label>
        </div>

        <div className="flex items-center mb-2  bg-orange rounded-2xl p-2 px-4">
          <input
            id="checkbox-2"
            type="checkbox"
            value="jardines"
            className="w-4 h-4 text-blue bg-bluegray border-bluegrayrounded focus:ring-blue dark:focus:ring-blue dark:ring-offset-bluegray dark:focus:ring-offset-bluegray focus:ring-2 dark:bg-blue dark:border-blue"
            onChange={handleOnChange}
          />
          <label
            htmlFor="checkbox-2"
            className="ml-2 text-sm font-medium  text-white"
          >
            Jardines
          </label>
        </div>

        <div className="flex items-center mb-2  bg-orange rounded-2xl p-2 px-4">
          <input
            id="checkbox-3"
            type="checkbox"
            value="modulo_de_aulas"
            className="w-4 h-4 text-blue bg-bluegray border-bluegrayrounded focus:ring-blue dark:focus:ring-blue dark:ring-offset-bluegray dark:focus:ring-offset-bluegray focus:ring-2 dark:bg-blue dark:border-blue"
            onChange={handleOnChange}
          />
          <label
            htmlFor="checkbox-3"
            className="ml-2 text-sm font-medium  text-white"
          >
            Módulo de Aulas
          </label>
        </div>

        <div className="flex items-center mb-2  bg-orange rounded-2xl p-2 px-4">
          <input
            id="checkbox-3"
            type="checkbox"
            value="sala_mendoza"
            className="w-4 h-4 text-blue bg-bluegray border-bluegrayrounded focus:ring-blue dark:focus:ring-blue dark:ring-offset-bluegray dark:focus:ring-offset-bluegray focus:ring-2 dark:bg-blue dark:border-blue"
            onChange={handleOnChange}
          />
          <label
            htmlFor="checkbox-3"
            className="ml-2 text-sm font-medium  text-white"
          >
            Sala Mendoza
          </label>
        </div>
      </fieldset>
      <AnimatePresence mode="wait" initial={false}>
        {isInvalid && (
          <InputError
            message={inputError.error.message}
            key={inputError.error.message}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default CheckBoxZonasDeInteres;
const InputError = ({ message }) => {
  return (
    <motion.p
      className="flex items-center text-xs gap-1 px-2 py-1 w-fit mt-1 font-semibold text-orange bg-orange/25 rounded-2xl"
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
