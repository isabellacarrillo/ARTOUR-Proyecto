import TextField from "../../components/Input/TextField";

const Edit_tour = () => {
  return;
  <div>
    <h1 className="text-orange font-extrabold text-2xl ">
      Modificar perfil del Tour
    </h1>
    <div>
      <div>{/*Aqui va a ir la imagen y el boton para modificarla*/}</div>
      <div>
        {/*Aqui van a ir los inputs de nombre del Tour, identificador, capacidad y fecha de disponibilidad*/}
        <TextField tag="Nombre del Tour" placeholder="" />
        <TextField tag="Identificador" placeholder="" />
        <TextField tag="Capacidad" placeholder="" />
      </div>
      <div>
        {/*Aqui va a ir el checkbox de de puntos de interes y el bboton de guardar cambiuos*/}
      </div>
    </div>
  </div>;
};

export default Edit_tour;
