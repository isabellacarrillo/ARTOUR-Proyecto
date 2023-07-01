{
  /*Componente para seleccionar el punto de interes o crear uno nuevo correspondiente a la CREACION de la obra  */
}

import React, { useEffect, useState } from "react";
import { created, creating, deselected, selected } from "./styles";
import { useFormContext } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { findInputError, isFormInvalid } from "../Input/utils";
import { pullAllPuntos } from "../../firebase/firestore/firestore_pull";
import { Bars } from "react-loader-spinner";

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
  const [puntos_dis, setPuntos_dis] = useState();
  const inputError = findInputError(errors, "punto_de_interes");
  const isInvalid = isFormInvalid(inputError);

  const getPuntos = async () => {
    const result = await pullAllPuntos();
    setPuntos_dis(result);
  };

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
    } else if (
      puntos_dis.some((p) => p.nombre.toLowerCase() === create.toLowerCase())
    ) {
      console.log(puntos_dis.some((p) => p.nombre === create));
      setError("punto_de_interes", {
        type: "already exists",
        message: "Seleccione el punto de interes prexistente",
      });
    } else {
      clearErrors();
    }
  };

  useEffect(() => {
    setValue("punto_de_interes", select, { shouldValidate: true });
    handleError();
  }, [select]);

  useEffect(() => {
    getPuntos();
  }, []);

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
      {puntos_dis ? (
        puntos_dis.map((p) => {
          return (
            <button
              className={select === `${p.nombre}` ? selected : deselected}
              value={p.nombre}
              onClick={onClick}
            >
              {p.nombre}
            </button>
          );
        })
      ) : (
        <div className="w-full h-1/5 p-10 flex flex-wrap justify-center content-center">
          <Bars color="#4F759B" />
        </div>
      )}
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
