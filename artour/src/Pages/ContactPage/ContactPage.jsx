import React from 'react'

export default function ContactPage() {

  const Containers = ({image, title, descripcion,left_image, description}) =>{
    if (left_image){
      return(

    <div className="h-fit bg-orange-300	flex flex-col m-8 rounded-md overflow-hidden md:max-h-96 sm:flex-row">
    <img className="h:2/5  sm:w-2/4 object-cover " src={image} />
    <div className="h:2/5  sm:w-2/4 container p-8 flex flex-col gap-8">
          <h1 className="text-orange font-extrabold text-2xl ">{title}</h1>
          <p className="inline">{descripcion}</p>
          <p className="">{description}</p>

        </div>

    </div>
      );
    }else{
      return(

        <div className="h-fit bg-orange-300	flex flex-col m-8 rounded-md overflow-hidden md:max-h-96 sm:flex-row">
        <img className="h:2/5  sm:w-2/4 object-cover " src={image} />
        <div className="h:2/5  sm:w-2/4 container p-8 flex flex-col gap-8">
              <h1 className="text-orange font-extrabold text-2xl ">{title}</h1>
              <p className="inline">{descripcion}</p>
              <p className="">{description}</p>

            </div>
    
        </div>
          );

    }
  }
  return (
    <div className="w-full bg-white">
    <div className="bg-white flex flex-wrap flex-col justify-center">
    <Containers 
    image="https://www.unimet.edu.ve/wp-content/uploads/2018/08/foto_cultura2.jpg"
    title = "Dirección de Cultura"
    descripcion="Bartolomé Díaz Sahagún, director de Cultura: bdiaz@unimet.edu.ve / (0212)-240.32.63
    José Pérez, coordinador de Selecciones Artísticas: jeperez@unimet.edu.ve
    Nubia Sojo Martínez, coordinadora de eventos: nsojo@unimet.edu.ve
    Nancy Chaurán, asistente: nchauran@unimet.edu.ve"
    
    />

    <Containers
     image = "https://www.unimet.edu.ve/wp-content/uploads/2017/06/unimet-biblioteca.jpg"
     title = "Biblioteca Pedro Grases"
     descripcion = "Telefono: 0212-2403433"
     description = "Correo:  bibliotecacontigo@unimet.edu.ve"
    />
    </div>
  </div>

  )
}

