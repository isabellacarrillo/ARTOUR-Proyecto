import React from "react";
import { useUserContext } from "../../contexts/UserContext";
import Carrousel from "../../components/Carrousel/Carrousel";
import Boton from "../../components/Boton/Boton";
import { AUXILIAR, FEEDBACK } from "../../components/Boton/styles";

const Containers = ({ image, title, descripcion, left_image }) => {
  if (left_image) {
    return (
      <div className="h-fit bg-bluegray flex flex-col m-8 rounded-md overflow-hidden  md:max-h-96 sm:flex-row">
        <img className="h:2/5  sm:w-2/4 object-cover " src={image} />
        <div className="h:2/5  sm:w-2/4 container p-8 flex flex-col gap-8">
          <h1 className="text-orange font-extrabold text-2xl ">{title}</h1>
          <p className="text-left m-0 text-sm">{descripcion}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="h-fit bg-bluegray flex flex-col m-8 rounded-md overflow-hidden  md:max-h-96 sm:flex-row-reverse">
        <img className="h:2/5  sm:w-2/4 object-cover " src={image} />
        <div className="h:2/5 sm:w-2/4 container p-8 flex flex-col gap-8">
          <h1 className="text-orange font-extrabold text-2xl ">{title}</h1>
          <p className="text-left m-0 text-sm">{descripcion}</p>
        </div>
      </div>
    );
  }
};

export default function HomePage() {
  const { user, isLoading, role } = useUserContext();

  const handleUser = () => {
    console.log(user);
    if (!isLoading && !user) {
      return <></>;
    } else if (user && role === "user") {
      return (
        <div className="bg-orange p-10 flex flex-row justify-between text-white">
          <div className="">
            <h1 className="text-xl font-extrabold">¡Ayúdanos a mejorar!</h1>
            <h6>
              Comparte tus comentarios acerca de los tours que has realizado
            </h6>
          </div>
          <Boton display="Dar Feedback" style={FEEDBACK} />
        </div>
      );
    }
  };

  return (
    <div className="w-full bg-white">
      <div className="bg-white flex flex-wrap flex-col justify-center">
        <div className="w-full h-1/8">
          <Carrousel />
        </div>
        {handleUser()}
        <Containers
          image="https://www.unimet.edu.ve/wp-content/uploads/2019/09/DSC96635666-2.jpg"
          title="Mision"
          descripcion="Lorem ipsum dolor sit amet , consectetur adipiscing elit. Vivamus id velit efficitur, mattis quam nec, vehicula odio. Proin ut elit sit amet lectus laoreet placerat. Fusce sit amet cursus nulla, non malesuada arcu. Curabitur posuere ipsum ut gravida imperdiet. Maecenas aliquam ut purus vel sollicitudin. Aenean malesuada leo nunc, sed rutrum velit lacinia vel. Nam sollicitudin sapien nec justo iaculis fermentum. Aliquam consequat, orci ut molestie bibendum, ipsum lorem feugiat odio, eu maximus tellus enim vitae ex."
          left_image={true}
        />
        <Containers
          image="https://www.unimet.edu.ve/wp-content/uploads/2020/10/Campus-galer%C3%ADa-12.jpg"
          title="Vision"
          left_image={false}
          descripcion="Lorem ipsum dolor sit amet , consectetur adipiscing elit. Vivamus id velit efficitur, mattis quam nec, vehicula odio. Proin ut elit sit amet lectus laoreet placerat. Fusce sit amet cursus nulla, non malesuada arcu. Curabitur posuere ipsum ut gravida imperdiet. Maecenas aliquam ut purus vel sollicitudin. Aenean malesuada leo nunc, sed rutrum velit lacinia vel. Nam sollicitudin sapien nec justo iaculis fermentum. Aliquam consequat, orci ut molestie bibendum, ipsum lorem feugiat odio, eu maximus tellus enim vitae ex."
        />
        <Containers
          image="https://www.unimet.edu.ve/wp-content/uploads/2020/10/Campus-galer%C3%ADa-29.jpg"
          title="Objetivo"
          left_image={true}
          descripcion="Lorem ipsum dolor sit amet , consectetur adipiscing elit. Vivamus id velit efficitur, mattis quam nec, vehicula odio. Proin ut elit sit amet lectus laoreet placerat. Fusce sit amet cursus nulla, non malesuada arcu. Curabitur posuere ipsum ut gravida imperdiet. Maecenas aliquam ut purus vel sollicitudin. Aenean malesuada leo nunc, sed rutrum velit lacinia vel. Nam sollicitudin sapien nec justo iaculis fermentum. Aliquam consequat, orci ut molestie bibendum, ipsum lorem feugiat odio, eu maximus tellus enim vitae ex."
        />
      </div>
    </div>
  );
}
