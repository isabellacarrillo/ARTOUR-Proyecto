import TextField from "../../components/Input/TextField";
import InputImagen from "../../components/Input/InputImagen";
import CheckBoxZonasDeInteres from "../../components/Input/CheckBoxZonasDeInteres";

const Create_Art = () => {
  return (
    <div className="flex items-center justify-around p-12 bg-white">
      <div className="flex-row p-12 w-full sm:flex-col ">
        <h1 className="text-orange text-4xl font-extrabold">
          Crear Obra de Arte
        </h1>
        <div className="flex flex-col justify-around p-12 w-full sm:flex-row">
          <div className="w-80 flex flex-col  justify-around items-center">
            {/*Aqui va a ir la imagen y el boton para modificarla*/}
            <img src="https://www.unimet.edu.ve/wp-content/uploads/2020/10/Exposici%C3%B3n-4.jpg" />
            <button className="bg-blue text-white py-2 px-4 rounded space-y-2">Subir Foto</button>
          </div>
          <div>
            {/*Aqui van a ir los inputs de nombre del Tour, identificador, capacidad y fecha de disponibilidad*/}
            <form className="columns-2">
              <div className="mb-6">
                <label className="block mb-2 text-blue text-sm font-medium text-gray-900 ">
                  Nombre de la Obra
                </label>
                <input
                  className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Nombre de la obra"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 text-blue">
                  Tipo de Obra
                </label>
                <input
                  className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Tipo de Obra"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 text-blue">
                  Autor
                </label>
                <input
                  className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Nombre del Autor"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 text-blue">
                  Nro. de Identificación
                </label>
                <input
                  className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Número de ID"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 text-blue">
                  Ubicación/Punto de Interés
                </label>
                <input
                  className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Ubicación"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 text-blue">
                  Descripción
                </label>
                <input
                  className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Descripción"
                  required
                />
              </div>
            </form>
          </div>
        </div>
        <button className="bg-orange py-2 px-4 rounded text-white float-right"> Crear Obra</button>
      </div>
    </div>
  );
};

export default Create_Art;
