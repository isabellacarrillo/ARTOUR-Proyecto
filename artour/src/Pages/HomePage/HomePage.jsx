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
            <h1 className="text-xl font-extrabold">Ver reservas</h1>
            <h6>Ingresa a tu perfil y ve todas tus reservas</h6>
          </div>
          <Boton display="Mis reservas" style={FEEDBACK} />
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
          title="Misión de la Unimet"
          descripcion="Formar profesionales reconocidos por su alto nivel ético, sólida formación integral, por su capacidad emprendedora, de liderazgo y de trabajo en equipo, con dominio de al menos un segundo idioma, y comprometidos con el desarrollo del sector productivo y de la sociedad en general."
          left_image={true}
        />
        <Containers
          image="https://www.unimet.edu.ve/wp-content/uploads/2020/10/Campus-galer%C3%ADa-12.jpg"
          title="Visión de la Unimet"
          left_image={false}
          descripcion="Convertir a la Unimet en un motor de desarrollo resiliente y sostenible en la sociedad venezolana, a través de una educación accesible de clase mundial para formar líderes, investigación dirigida a resolver los problemas más relevantes de Venezuela y fortalecimiento de alianzas con el sector privado para incrementar su impacto en la sociedad."
        />
        <Containers
          image="https://www.unimet.edu.ve/wp-content/uploads/2020/10/Campus-galer%C3%ADa-29.jpg"
          title="Valores de la Unimet"
          left_image={true}
          descripcion="El funcionamiento institucional se fundamenta en una política de mejoramiento continuo. Tal política implica que toda la comunidad universitaria debe practicar y promover en su desempeño de todos los días los valores y actitudes siguientes:

          Honestidad.
          Excelencia.
          Respeto a la dignidad de las personas.
          Responsabilidad en el trabajo.
          Espíritu de trabajo en grupo.
          Actitud de servicio.
          Fomento de la innovación.
          Mejoramiento continuo del profesorado y del personal de apoyo y administrativo.
          Liderazgo de los directivos, basado en el diálogo permanente con los alumnos, profesores y personal administrativo de la Institución.
          Administración eficiente de los recursos.
          Vinculación con la comunidad para responder a sus necesidades, de acuerdo con la misión de la institución."
        />
      </div>
    </div>
  );
}
