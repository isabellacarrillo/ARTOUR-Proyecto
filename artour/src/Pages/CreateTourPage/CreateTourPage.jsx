import TextField from "../../components/Input/TextField";
import InputImagen from "../../components/Input/InputImagen";
import CheckBoxZonasDeInteres from "../../components/Input/CheckBoxZonasDeInteres";

const Create_Tour = () => {
  return (
    <div className="flex items-center justify-around p-12 bg-white">
      <div className="flex-row p-12 w-full sm:flex-col ">
        <h1 className="text-orange text-4xl font-extrabold">
           Crear Tour
        </h1>
        <div className="flex flex-col justify-around p-12 w-full sm:flex-row">
          <div className="w-80 flex flex-col  justify-around items-center">
            {/*Aqui va a ir la imagen y el boton para modificarla*/}
            <img src="https://cdn.bitlysdowssl-aws.com/wp-content/uploads/2020/10/Diplomados-Arte-Contempor%C3%A1neoo-Archivo.jpg" />
            <button className="bg-blue text-white py-2 px-4 rounded">Subir imagen</button>
          </div>
          <div>
            {/*Aqui van a ir los inputs de nombre del Tour, identificador, capacidad y fecha de disponibilidad*/}
            <form>
              <div className="mb-6">
                <label className="block mb-2 text-blue text-sm font-medium text-gray-900 ">
                  Nombre del tour
                </label>
                <input
                  className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Nombre"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 text-blue">
                  Identificador
                </label>
                <input
                  className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Identificador"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 text-blue">
                  Capacidad
                </label>
                <input
                  className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Capacidad"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 text-blue">
                  Fecha
                </label>
                <input
                  className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="date"
                  required
                />
              </div>
            </form>
          </div>
          <div>
            {/*Aqui va a ir el checkbox de de puntos de interes y el bboton de guardar cambiuos*/}
            <h1 className="text-blue">Puntos de Interes</h1>
            <CheckBoxZonasDeInteres />
          </div>
        </div>
        <button className="bg-orange py-2 px-4 rounded text-white float-right"> Crear Tour</button>
      </div>
    </div>
  );
};

export default Create_Tour;
