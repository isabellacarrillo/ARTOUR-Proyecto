import React, { useEffect, useState } from "react";
import { created, creating, deselected, selected } from "./styles";
import { useFormContext } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { findInputError, isFormInvalid } from "../Input/utils";

export default function DropDown() {
  const {
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useFormContext();
  const [select, setSelect] = useState("");
  const [create, setCreate] = useState("");
  const [done, setDone] = useState(false);
  const inputError = findInputError(errors, "punto_de_interes");
  const isInvalid = isFormInvalid(inputError);

  const onClick = (e) => {
    e.preventDefault();
    setSelect(e.target.value);
    setDone(false);
  };
  const handleCreate = (e) => {
    e.preventDefault();
    setSelect(create);
    setDone(true);
  };

  const handleChange = (e) => {
    setCreate(e.target.value);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    setCreate("");
    setSelect("");
    setDone(false);
  };

  const handleError = (e) => {
    if (select === "" || select === "crear") {
      setError("punto_de_interes", {
        type: "required",
        message: "Obligatorio",
      });
    } else {
      clearErrors();
    }
  };

  useEffect(() => {
    setValue("punto_de_interes", select, { shouldValidate: true });
    handleError();
  }, [select]);

  return (
    <div className="flex flex-col cotent-start gap-2">
      <div className="flex flex-row gap-4">
        <h5>Punto de Interes</h5>
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError
              message={inputError.error.message}
              key={inputError.error.message}
            />
          )}
        </AnimatePresence>
      </div>
      <button
        className={select === "sala_mendoza" ? selected : deselected}
        value="sala_mendoza"
        onClick={onClick}
      >
        Sala Mendoza
      </button>
      <button
        className={select === "biblioteca" ? selected : deselected}
        value="biblioteca"
        onClick={onClick}
      >
        Biblioteca
      </button>
      <button
        className={select === "jardines" ? selected : deselected}
        value="jardines"
        onClick={onClick}
      >
        Jardines
      </button>
      <button
        className={select === "crear" || done ? selected : deselected}
        value="crear"
        onClick={onClick}
      >
        Crear
      </button>
      {select === "crear" || done ? (
        <div className="flex flex-row gap-2">
          <input
            onChange={handleChange}
            className={done ? created : creating}
            type="text"
            value={create}
          />
          {!done ? (
            <button
              onClick={handleCreate}
              className="text-xs text-white bg-blue hover:bg-white border-2 border-blue transition ease-in-out duration-300 delay-0 hover:text-blue px-2 py-1 rounded-2xl"
            >
              Guardar
            </button>
          ) : (
            <button
              onClick={handleDelete}
              className="text-xs text-blue bg-bluegray hover:bg-white border-2 border-bluegray font-medium transition ease-in-out duration-300 delay-0 hover:text-bluegray px-2 py-1 rounded-2xl"
            >
              Borrar
            </button>
          )}
        </div>
      ) : (
        <></>
      )}
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
