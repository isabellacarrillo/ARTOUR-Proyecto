import React from "react";
import { useFormContext } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { findInputError, isFormInvalid } from "./utils";

export default function TextArea({ display, name, validation }) {
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
          className="peer h-full w-full rounded-[7px] border border-black border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-black outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-black placeholder-shown:border-t-black focus:border-2 focus:border-blue focus:border-t-transparent focus:outline-0 invalid:border-red invalid:border-2"
          name={name}
          placeholder=" "
          {...register("descripcion", validation)}
        ></textarea>
        <label className="before:content[' '] after:content[' '] bg-transparent pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-black transition-all before:pointer-events-none before:block before:h-0.5 before:w-2.5   before:transition-all after:pointer-events-none after:mt-[6.5px] after:box-border after:block  after:w-1.5 after:flex-grow   after:border-bluegray after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-bluegray peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent  peer-focus:leading-tight peer-focus:text-blue  peer-focus:bg-white peer-focus:w-fit peer-focus:h-fit peer-focus:text-[11px] peer-invalid:leading-tight peer-invalid:text-red  peer-invalid:bg-white peer-invalid:w-fit peer-invalid:h-fit peer-invalid:before:w-0.5 peer-invalid:font-semibold">
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
