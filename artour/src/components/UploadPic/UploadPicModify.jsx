{
  /* Componente para modificar la foto asociada al perfil en modificacion, recibe la foto registrada en el perfil */
}

import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

export default function UploadPicModify({ img }) {
  const [file, setFile] = useState();
  const [upl, setUpl] = useState();

  const { setValue } = useFormContext();

  const handleChange = (e) => {
    try {
      setFile(URL.createObjectURL(e.target.files[0]));
      setUpl(e.target.files[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (file) {
      setValue("img", upl);
    }
  }, [file]);

  const handleShow = () => {
    if (file) {
      return file;
    } else {
      if (img != null) {
        return img;
      } else {
        return "https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";
      }
    }
  };

  return (
    <div className="md:w-2/5 gap-2 flex flex-col md:flex-row flex-wrap justify-around items-center">
      {/*Aqui va a ir la imagen y el boton para modificarla*/}
      <img src={handleShow()} className="rounded-2xl drop-shadow-lg" />
      <button className=" text-white py-2 px-4 rounded space-y-2">
        <label
          htmlFor="photo"
          className="w-fit h-fit cursor-pointer bg-blue px-8 py-2 rounded-2xl text-white font-semibold transition ease-in-out duration-300 delay-0 hover:bg-orange"
        >
          Subir Foto
        </label>
        <input
          id="photo"
          className="hidden"
          type="file"
          accept="image/*"
          onChange={handleChange}
        />
      </button>
    </div>
  );
}
