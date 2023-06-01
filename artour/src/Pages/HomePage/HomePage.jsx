import {
  Route,
  Routes,
  NavLink,
  Link,
  useParams,
  Outlet,
} from "react-router-dom";

const Containers = ({ image, title, descripcion , left_image}) => {
  if (left_image){
  return (
    <div className="h-fit bg-bluegray flex flex-col m-8 rounded-md overflow-hidden  sm:max-h-80 sm:flex-row">
      <img className="h:2/5  sm:w-2/4 object-cover " src={image} />
      <div className="h:2/5  sm:w-2/4 container p-8 flex flex-col gap-8">
        <h1 className="text-orange font-extrabold text-2xl ">{title}</h1>
        <p className="text-left m-0 text-sm">{descripcion}</p>
      </div>
    </div>
  );
}else{
    return (
    <div className="h-fit bg-bluegray flex flex-col m-8 rounded-md overflow-hidden  sm:max-h-80 sm:flex-row-reverse">
      <img className="h:2/5  sm:w-2/4 object-cover " src={image} />
      <div className="h:2/5 sm:w-2/4 container p-8 flex flex-col gap-8">
        <h1 className="text-orange font-extrabold text-2xl ">{title}</h1>
        <p className="text-left m-0 text-sm">{descripcion}</p>
      </div>
    </div>
  );

}
};

function HomePage() {
  return (
    <div className="bg-white flex flex-wrap flex-col justify-center">
      <div className="flex flex-row flex-wrap justify-center content-center overflow-clip h-1/8">
      <img
        className="w-full object-cover"
        src="https://www.unimet.edu.ve/wp-content/uploads/2020/10/Campus-galer%C3%ADa-51.jpg"
        />
      </div>

      <Containers
        image="https://www.unimet.edu.ve/wp-content/uploads/2019/09/DSC96635666-2.jpg"
        title="Mision"
        descripcion="Lorem ipsum dolor sit amet , consectetur adipiscing elit. Vivamus id velit efficitur, mattis quam nec, vehicula odio. Proin ut elit sit amet lectus laoreet placerat. Fusce sit amet cursus nulla, non malesuada arcu. Curabitur posuere ipsum ut gravida imperdiet. Maecenas aliquam ut purus vel sollicitudin. Aenean malesuada leo nunc, sed rutrum velit lacinia vel. Nam sollicitudin sapien nec justo iaculis fermentum. Aliquam consequat, orci ut molestie bibendum, ipsum lorem feugiat odio, eu maximus tellus enim vitae ex."
        left_image={true}
      />
      <Containers
        image="https://www.unimet.edu.ve/wp-content/uploads/2020/10/Campus-galer%C3%ADa-12.jpg"
        title="Vision"
        descripcion="Lorem ipsum dolor sit amet , consectetur adipiscing elit. Vivamus id velit efficitur, mattis quam nec, vehicula odio. Proin ut elit sit amet lectus laoreet placerat. Fusce sit amet cursus nulla, non malesuada arcu. Curabitur posuere ipsum ut gravida imperdiet. Maecenas aliquam ut purus vel sollicitudin. Aenean malesuada leo nunc, sed rutrum velit lacinia vel. Nam sollicitudin sapien nec justo iaculis fermentum. Aliquam consequat, orci ut molestie bibendum, ipsum lorem feugiat odio, eu maximus tellus enim vitae ex."
        left_image={false}
      />
      <Containers
        image="https://www.unimet.edu.ve/wp-content/uploads/2020/10/Campus-galer%C3%ADa-29.jpg"
        title="Objetivo"
        descripcion="Lorem ipsum dolor sit amet , consectetur adipiscing elit. Vivamus id velit efficitur, mattis quam nec, vehicula odio. Proin ut elit sit amet lectus laoreet placerat. Fusce sit amet cursus nulla, non malesuada arcu. Curabitur posuere ipsum ut gravida imperdiet. Maecenas aliquam ut purus vel sollicitudin. Aenean malesuada leo nunc, sed rutrum velit lacinia vel. Nam sollicitudin sapien nec justo iaculis fermentum. Aliquam consequat, orci ut molestie bibendum, ipsum lorem feugiat odio, eu maximus tellus enim vitae ex."
        left_image={true}
      />
    </div>
  );
}

export default HomePage;
import React from "react";

