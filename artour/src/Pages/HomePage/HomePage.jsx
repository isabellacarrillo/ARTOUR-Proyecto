import {
  Route,
  Routes,
  NavLink,
  Link,
  useParams,
  Outlet,
} from "react-router-dom";

const Containers = ({ image, title, descripcion }) => {
  return (
    <div className="font-mono bg-slate-300 flex flex-row m-8  bg-blue-grey max-h-30">
      <img className="w-2/4" src={image} />
      <div className="w-2/4 container p-8 flex flex-col space-y-8">
        <h1 className="text-orange-500 font-bold text-3xl ">{title}</h1>
        <p className="text-left p-8">{descripcion}</p>
      </div>
    </div>
  );
};

function HomePage() {
  return (
    <div className="bg-white">
      <img
        className="w-full "
        src="https://www.unimet.edu.ve/wp-content/uploads/2020/10/Campus-galer%C3%ADa-51.jpg"
      />

      <Containers
        image="https://www.unimet.edu.ve/wp-content/uploads/2019/09/DSC96635666-2.jpg"
        title="Mision"
        descripcion="Lorem ipsum dolor sit amet , consectetur adipiscing elit. Vivamus id velit efficitur, mattis quam nec, vehicula odio. Proin ut elit sit amet lectus laoreet placerat. Fusce sit amet cursus nulla, non malesuada arcu. Curabitur posuere ipsum ut gravida imperdiet. Maecenas aliquam ut purus vel sollicitudin. Aenean malesuada leo nunc, sed rutrum velit lacinia vel. Nam sollicitudin sapien nec justo iaculis fermentum. Aliquam consequat, orci ut molestie bibendum, ipsum lorem feugiat odio, eu maximus tellus enim vitae ex."
      />
      <Containers
        image="https://www.unimet.edu.ve/wp-content/uploads/2020/10/Campus-galer%C3%ADa-12.jpg"
        title="Vision"
        descripcion="Lorem ipsum dolor sit amet , consectetur adipiscing elit. Vivamus id velit efficitur, mattis quam nec, vehicula odio. Proin ut elit sit amet lectus laoreet placerat. Fusce sit amet cursus nulla, non malesuada arcu. Curabitur posuere ipsum ut gravida imperdiet. Maecenas aliquam ut purus vel sollicitudin. Aenean malesuada leo nunc, sed rutrum velit lacinia vel. Nam sollicitudin sapien nec justo iaculis fermentum. Aliquam consequat, orci ut molestie bibendum, ipsum lorem feugiat odio, eu maximus tellus enim vitae ex."
      />
      <Containers
        image="https://www.unimet.edu.ve/wp-content/uploads/2020/10/Campus-galer%C3%ADa-29.jpg"
        title="Objetivo"
        descripcion="Lorem ipsum dolor sit amet , consectetur adipiscing elit. Vivamus id velit efficitur, mattis quam nec, vehicula odio. Proin ut elit sit amet lectus laoreet placerat. Fusce sit amet cursus nulla, non malesuada arcu. Curabitur posuere ipsum ut gravida imperdiet. Maecenas aliquam ut purus vel sollicitudin. Aenean malesuada leo nunc, sed rutrum velit lacinia vel. Nam sollicitudin sapien nec justo iaculis fermentum. Aliquam consequat, orci ut molestie bibendum, ipsum lorem feugiat odio, eu maximus tellus enim vitae ex."
      />
    </div>
  );
}

export default HomePage;
import React from "react";
import NavBar from "../../components/NavBar/NavBar";
