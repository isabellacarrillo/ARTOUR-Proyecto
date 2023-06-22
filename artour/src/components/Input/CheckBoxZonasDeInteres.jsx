const CheckBoxZonasDeInteres = () => {
  return (
    <div>
      <h3 className="mb-1">Puntos de Interes a Visistar</h3>
      <fieldset>
        <legend className="sr-only">Checkbox variants</legend>

        <div className="flex items-center mb-2  bg-orange rounded-2xl p-2 px-4">
          <input
            id="checkbox-1"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue bg-bluegray border-bluegrayrounded focus:ring-blue dark:focus:ring-blue dark:ring-offset-bluegray dark:focus:ring-offset-bluegray focus:ring-2 dark:bg-blue dark:border-blue"
          />
          <label
            htmlFor="checkbox-1"
            className="ml-2 text-sm font-medium text-white"
          >
            Biblioteca
          </label>
        </div>

        <div className="flex items-center mb-2  bg-orange rounded-2xl p-2 px-4">
          <input
            id="checkbox-2"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue bg-bluegray border-bluegrayrounded focus:ring-blue dark:focus:ring-blue dark:ring-offset-bluegray dark:focus:ring-offset-bluegray focus:ring-2 dark:bg-blue dark:border-blue"
          />
          <label
            htmlFor="checkbox-2"
            className="ml-2 text-sm font-medium  text-white"
          >
            Jardines
          </label>
        </div>

        <div className="flex items-center mb-2  bg-orange rounded-2xl p-2 px-4">
          <input
            id="checkbox-3"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue bg-bluegray border-bluegrayrounded focus:ring-blue dark:focus:ring-blue dark:ring-offset-bluegray dark:focus:ring-offset-bluegray focus:ring-2 dark:bg-blue dark:border-blue"
          />
          <label
            htmlFor="checkbox-3"
            className="ml-2 text-sm font-medium  text-white"
          >
            Módulo de Aulas
          </label>
        </div>

        <div className="flex items-center mb-2  bg-orange rounded-2xl p-2 px-4">
          <input
            id="checkbox-3"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue bg-bluegray border-bluegrayrounded focus:ring-blue dark:focus:ring-blue dark:ring-offset-bluegray dark:focus:ring-offset-bluegray focus:ring-2 dark:bg-blue dark:border-blue"
          />
          <label
            htmlFor="checkbox-3"
            className="ml-2 text-sm font-medium  text-white"
          >
            Sala Mendoza
          </label>
        </div>
      </fieldset>
    </div>
  );
};

export default CheckBoxZonasDeInteres;
