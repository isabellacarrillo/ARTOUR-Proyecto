import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { findInputError, isFormInvalid } from "../Input/utils";
import { AnimatePresence, motion } from "framer-motion";

export default function DatePicker() {
  const today = () => {
    const d = new Date();
    return `${d.getFullYear()}-${
      d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : `${d.getMonth() + 1}`
    }-${d.getDate()}`;
  };
  const {
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useFormContext();
  const [date, setDate] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const inputError = findInputError(errors, "fecha");
  const isInvalid = isFormInvalid(inputError);

  const handleError = (e) => {
    if (start === "" || end === "") {
      setError("fecha", {
        type: "fecha_required",
        message: "Obligatorio",
      });
    } else {
      clearErrors("fecha");
    }
  };

  useEffect(() => {
    setDate(`${start}-${end}`);
  }, [start, end]);

  useEffect(() => {
    setValue("fecha", date);
    handleError();
  }, [date]);

  return (
    <div className="flex flex-col w-fit  gap-1 p-4">
      <h6 className="font-medium">Fecha de Disponibilidad</h6>
      <div className="flex flex-row  gap-4 bg-orange p-4 rounded-2xl ">
        <div className="flex flex-col">
          <label className="text-sm text-white" htmlFor="inicio">
            Inicio
          </label>
          <input
            className="w-fit border-2 border-blue px-4 rounded-2xl "
            type="date"
            id="inicio"
            min={today()}
            onChange={(e) => {
              setStart(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm text-white" htmlFor="fin">
            Fin
          </label>
          <input
            className="w-fit border-2 border-blue px-4 rounded-2xl "
            type="date"
            id="fin"
            min={today()}
            onChange={(e) => {
              setEnd(e.target.value);
            }}
          />
        </div>
      </div>
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
