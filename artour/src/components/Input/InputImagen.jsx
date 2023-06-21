const InputImagen = () => {
  return (
    <div
      x-data="{photoName: null, photoPreview: null}"
      className="col-span-6 ml-2 sm:col-span-4 md:mr-3"
    >
      <input
        type="file"
        className="hidden"
        x-ref="photo"
        x-on:change="
                        photoName = $refs.photo.files[0].name;
                        const reader = new FileReader();
                        reader.onload = (e) => {
                            photoPreview = e.target.result;
                        };
                        reader.readAsDataURL($refs.photo.files[0]);
    "
      />

      <label
        className="block text-gray-700 text-sm font-bold mb-2 text-center"
        htmlFor="photo"
      >
        Profile Photo <span className="text-red-600"> </span>
      </label>

      <div className="text-center">
        <div className="mt-2" x-show="! photoPreview">
          <img
            src="https://images.unsplash.com/photo-1531316282956-d38457be0993?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
            className="w-40 h-40 m-auto rounded-full shadow"
          />
        </div>

        <div className="mt-2" x-show="photoPreview" style="display: none;">
          <span
            className="block w-40 h-40 rounded-full m-auto shadow"
            x-bind:style="'background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url(\'' + photoPreview + '\');'"
            style="background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url('null');"
          ></span>
        </div>
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-400 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150 mt-2 ml-3"
        >
          Select New Photo
        </button>
      </div>
    </div>
  );
};

export default InputImagen;
