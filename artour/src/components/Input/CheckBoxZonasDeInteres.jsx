const CheckBoxZonasDeInteres = () => {
  return (
    <div>
      <fieldset>
        <legend className="sr-only">Checkbox variants</legend>

        <div className="flex items-center mb-4  bg-orange rounded p-2">
          <input
            id="checkbox-1"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="checkbox-1"
            className="ml-2 text-sm font-medium text-white"
          >
            Bibioteca
          </label>
        </div>

        <div className="flex items-center mb-4  bg-orange rounded p-2">
          <input
            id="checkbox-2"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="checkbox-2"
            className="ml-2 text-sm font-medium  text-white"
          >
            Jardines
          </label>
        </div>

        <div className="flex items-center mb-4  bg-orange rounded p-2">
          <input
            id="checkbox-3"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="checkbox-3"
            className="ml-2 text-sm font-medium  text-white"
          >
            Módulo de Aulas
          </label>
        </div>

        <div className="flex items-center mb-4  bg-orange rounded p-2">
          <input
            id="checkbox-3"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
