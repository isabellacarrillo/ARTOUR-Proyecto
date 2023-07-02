{
  /*Componente de Checkbox de los puntos de interes disponibles para la MODIFICACION de un tour, recibe los puntos de interes que tiene el tour cargados */
}

import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { findInputError, isFormInvalid } from "../Input/utils";
import { pullAllPuntos } from "../../firebase/firestore/firestore_pull";
import { Bars } from "react-loader-spinner";

const CheckBoxModify = ({ tour_puntos }) => {
  const {
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useFormContext();
  const [puntos, setPuntos] = useState([]);
  const [puntos_dis, setPuntos_dis] = useState();
  const inputError = findInputError(errors, "punto_de_interes");
  const isInvalid = isFormInvalid(inputError);

  const getPuntos = async () => {
    const result = await pullAllPuntos();
    setPuntos_dis(result);
  };

  const handleOnChange = (e) => {
    if (!e.target.checked) {
      setPuntos(puntos.filter((v) => v !== e.target.value));
    } else {
      setPuntos([...puntos, e.target.value]);
    }
  };

  useEffect(() => {
    setValue("puntos_de_interes", puntos);
  }, [puntos]);

  useEffect(() => {
    tour_puntos.forEach((p) => {
      setPuntos([...puntos, p.nombre]);
    });
    getPuntos();
  }, []);

  return (
    <div>
      <h3 className="mb-1">Puntos de Interes a Visitar</h3>

      <fieldset>
        <legend className="sr-only">Checkbox variants</legend>

        {puntos_dis ? (
          puntos_dis.map((p) => {
            return (
              <div
                className="flex items-center mb-2  bg-orange rounded-2xl p-2 px-4"
                key={p.nombre}
              >
                <input
                  id={p.name}
                  type="checkbox"
                  defaultChecked={tour_puntos.some(
                    (tp) => tp.nombre === p.nombre
                  )}
                  value={p.nombre}
                  className="w-4 h-4 text-blue bg-bluegray border-bluegrayrounded focus:ring-blue focus:ring-2 "
                  onChange={handleOnChange}
                />
                <label
                  htmlFor={p.name}
                  className="ml-2 text-sm font-medium text-white"
                >
                  {p.nombre}
                </label>
              </div>
            );
          })
        ) : (
          <div className="w-full h-1/5 p-10 flex flex-wrap justify-center content-center">
            <Bars color="#4F759B" />
          </div>
        )}
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

export default CheckBoxModify;
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
