import React, { useEffect, useState } from "react";
import { EMPTY, OUTLINE } from "./styles";
import { useFormContext } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { findInputError, isFormInvalid } from "./utils";

export default function InputModify({
  label,
  type,
  name,
  id,
  validation,
  disabled,
  placeholder,
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputError = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputError);

  return (
    <div className="m-4">
      <div className="relative z-0">
        <input
          type={type}
          name={name}
          id={id}
          disabled={disabled}
          className="peer block min-h-[auto] w-full  border border-black bg-white px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear rounded-2xl focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none focus:border-blue focus:ring-1 focus:ring-blue"
          placeholder={placeholder ? placeholder : ""}
          {...register(name, validation)}
        />
        <label
          htmlFor={id}
          className="pointer-events-none absolute left-3 px-2 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[0.9rem] scale-[0.8] text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] bg-white peer-focus:text-blue"
        >
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
