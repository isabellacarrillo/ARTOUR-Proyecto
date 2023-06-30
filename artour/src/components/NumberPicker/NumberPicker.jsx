import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { findInputError, isFormInvalid } from "../Input/utils";
import { AnimatePresence, motion } from "framer-motion";
import { getCapacidad } from "./utils";

export default function NumberPicker({ capacidad, fecha, fechas }) {
  const {
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useFormContext();
  const [number, setNumber] = useState(0);
  const [max, setMax] = useState(capacidad);
  const inputError = findInputError(errors, "num_entradas");
  const isInvalid = isFormInvalid(inputError);
  const handleError = (e) => {
    if (number === 0) {
      setError("num_entradas", {
        type: "required",
        message: "Obligatorio",
      });
    } else {
      clearErrors("num_entradas");
    }
  };

  useEffect(() => {
    if (fecha == "") {
      setMax(capacidad);
    } else {
      const cap_fecha = getCapacidad(fechas, fecha);
      if (number > cap_fecha) {
        setNumber(cap_fecha);
      }
      setMax(cap_fecha);
    }
    setValue("num_entradas", number, { shouldValidate: true });
    handleError();
  }, [number, fecha]);

  return (
    <div className="flex flex-col items-start flex-wrap ">
      <div className="flex flex-row gap-3 justify-start">
        <h6 className="w-full text-left font-semibold">Numero de Entradas</h6>
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError
              message={inputError.error.message}
              key={inputError.error.message}
            />
          )}
        </AnimatePresence>
      </div>
      <div className="flex flex-row h-10 w-3/4 justify-center self-center rounded-lg relative bg-transparent my-4">
        <button
          className=" bg-blue border-2 border-blue  text-bluegray hover:text-blue hover:bg-bluegray h-full px-3 rounded-l-2xl transition ease-in-out font-semibold duration-300 delay-0 cursor-pointer outline-none"
          onClick={(e) => {
            if (number > 0) {
              setNumber(number - 1);
            } else {
              setNumber(0);
            }
          }}
        >
          <span className="m-auto text-2xl font-thin">−</span>
        </button>
        <p className=" text-center px-8  text-md  md:text-basecursor-default flex items-center font-semibold border-y-2 border-blue">
          {number}
        </p>
        <button
          className=" bg-blue border-2 border-blue  text-bluegray hover:text-blue hover:bg-bluegray h-full px-3 rounded-r-2xl transition ease-in-out font-semibold duration-300 delay-0 cursor-pointer outline-none"
          onClick={(e) => {
            if (number < max) {
              setNumber(number + 1);
            } else {
              setNumber(max);
            }
          }}
        >
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  );
}

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
