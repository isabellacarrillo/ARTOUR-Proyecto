{
  /*Componente para una entrada multilinea del usuario a MODIFICAR, recibe el label, el nombre, y el valor preexistente de la entrada
  La validacion y registro del valor se basa en el uso de React Hook Form por lo que para que funcione debe estar dentro de un FormProvider */
}

import React from "react";
import { useFormContext } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { findInputError, isFormInvalid } from "./utils";

export default function TextAreaModify({ display, name, placeholder }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputError = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputError);
  return (
    <div>
      <div className="relative w-full min-w-[200px]">
        <textarea
          className="peer block min-h-[auto] w-full  border border-black bg-white px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear rounded-2xl focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none focus:border-blue focus:ring-1 focus:ring-blue"
          name={name}
          placeholder={placeholder ? placeholder : ""}
          {...register("descripcion")}
        ></textarea>
        <label className="pointer-events-none absolute left-3 px-2 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[0.9rem] scale-[0.8] text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] bg-white peer-focus:text-blue">
          {display}
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
