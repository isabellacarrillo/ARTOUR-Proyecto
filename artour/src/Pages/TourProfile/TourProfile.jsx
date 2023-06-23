import React from "react";
import TourTile from "../../components/TourTitle/TourTile";
import MiniObra from "../../components/MiniObra/MiniObra";
import Comment from "../../components/Comment/Comment";

const obra = {
  image:
    "https://www.unimet.edu.ve/wp-content/uploads/2020/10/Exposici%C3%B3n-4.jpg",
  nombre: "serie guri",
  autor: "Alguine",
  punto_de_interes: "biblioteca",
};

export default function TourProfile() {
  return (
    <div className="flex flex-col flex-wrap p-6 content-center justify-center gap-8">
      <TourTile />
      <h3 className="text-2xl text-orange font-extrabold md:text-[32px] md:ml-2">
        Obras a Visitar
      </h3>
      <div className="w-full justify-center flex flex-wrap flex-row gap-3 h-screen max-h-[600px] overflow-auto drop-shadow-lg">
        <MiniObra obra={obra} />
        <MiniObra obra={obra} />
        <MiniObra obra={obra} />
        <MiniObra obra={obra} />
        <MiniObra obra={obra} />
        <MiniObra obra={obra} />
      </div>
      <h3 className="text-2xl text-orange font-extrabold md:text-[32px] md:ml-2">
        Comentarios de los Visitantes
      </h3>
      <div className="bg-bluegray p-8 gap-4 flex flex-col rounded-2xl max-h- drop-shadow-md  overflow-auto md:w-[700px] xl:w-[1200px]  self-center">
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  );
}
