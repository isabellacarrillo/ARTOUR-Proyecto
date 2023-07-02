{
  /*Componente para mostrar la lista de todas las fechas con disponiblidad de un tour en su reserva, recibe la lista de objetos de fecha del tour seleccionado */
}

import React, { useEffect, useState } from "react";
import { deselected, selected } from "./styles";
import { useFormContext } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { findInputError, isFormInvalid } from "../Input/utils";
import { Bars } from "react-loader-spinner";
import { getDateArray } from "./utils";

export default function DropDown({ dates }) {
  const {
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useFormContext();
  const [select, setSelect] = useState("");
  const [fechas_dis, setFechas] = useState();
  const inputError = findInputError(errors, "fechas_dis");
  const isInvalid = isFormInvalid(inputError);

  const onClick = (e) => {
    e.preventDefault();
    setSelect(e.target.value);
  };

  const handleError = (e) => {
    if (select === "") {
      setError("fechas_dis", {
        type: "required",
        message: "Obligatorio",
      });
    } else {
      clearErrors("fechas_dis");
    }
  };
  useEffect(() => {
    const fechas = getDateArray(dates);
    setFechas(fechas);
  }, []);

  useEffect(() => {
    setValue("fecha_reserva", select, { shouldValidate: true });
    handleError();
  }, [select]);

  return (
    <div className="flex flex-col items-start lg:w-2/5 cotent-start gap-2">
      <div className="flex flex-row gap-4 justify-start">
        <h5 className="w-fit  text-left font-semibold">Fecha del Tour</h5>
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError
              message={inputError.error.message}
              key={inputError.error.message}
            />
          )}
        </AnimatePresence>
      </div>
      <div className="flex flex-row gap-1 flex-wrap">
        {fechas_dis ? (
          fechas_dis.map((d) => {
            return (
              <button
                key={d}
                className={select === `${d}` ? selected : deselected}
                value={d}
                onClick={onClick}
              >
                {d}
              </button>
            );
          })
        ) : (
          <div className="w-full h-1/5 p-10 flex flex-wrap justify-center content-center">
            <Bars color="#4F759B" />
          </div>
        )}
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
