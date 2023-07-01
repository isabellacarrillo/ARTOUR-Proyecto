import React from "react";

export default function ContactPage() {
  const Containers = ({
    image,
    title,
    descripcion,
    left_image,
    description,
  }) => {
  
      return (
        <div className="h-fit w-fit bg-white	flex flex-col m-8 p-8 overflow-hidden  rounded-2xl drop-shadow-xl max-w-xl">
          <img className="h:2/5  object-cover rounded-2xl" src={image} />
          <div className="container p-8 flex flex-col gap-8">
            <h1 className="text-orange font-extrabold text-2xl ">{title}</h1>
            <p className="inline">{descripcion}</p>
            <p className="">{description}</p>
          </div>
        </div>
      );
    
  };
  return (
    <div className="w-full bg-white">
      <div className="bg-white flex flex-wrap flex-row justify-center">
        <Containers
          image="https://www.unimet.edu.ve/wp-content/uploads/2018/08/foto_cultura2.jpg"
          title="Dirección de Cultura"
          descripcion="Bartolomé Díaz Sahagún, director de Cultura: bdiaz@unimet.edu.ve / (0212)-240.32.63
    José Pérez, coordinador de Selecciones Artísticas: jeperez@unimet.edu.ve
    Nubia Sojo Martínez, coordinadora de eventos: nsojo@unimet.edu.ve
    Nancy Chaurán, asistente: nchauran@unimet.edu.ve"
        />

        <Containers
          image="https://www.unimet.edu.ve/wp-content/uploads/2017/06/unimet-biblioteca.jpg"
          title="Biblioteca Pedro Grases"
          descripcion="Telefono: 0212-2403433"
          description="Correo:  bibliotecacontigo@unimet.edu.ve"
        />
      </div>
    </div>
  );
}
