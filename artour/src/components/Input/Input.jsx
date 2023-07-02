{
  /*Componente para las entradas del usuario, recibe el label, el tipo de entrada, el nombre y id, si debe cumplir alguna validacion, y el estilo que cumple (si es con borde o no)
  La validacion y registro del valor se basa en el uso de React Hook Form por lo que para que funcione debe estar dentro de un FormProvider */
}

import React from "react";
import { EMPTY, OUTLINE } from "./styles";
import { useFormContext } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { findInputError, isFormInvalid } from "./utils";

export default function Input({ label, type, name, id, validation, outlined }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputError = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputError);

  return (
    <div className="m-4">
      <div className="relative text-black z-0">
        <input
          type={type}
          name={name}
          id={id}
          className={outlined ? OUTLINE.input : EMPTY.input}
          placeholder=" "
          {...register(name, validation)}
        />
        <label htmlFor={id} className={outlined ? OUTLINE.label : EMPTY.label}>
          {label}
        </label>
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
