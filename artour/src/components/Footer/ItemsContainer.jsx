import Items from "./Items";
import SocialIcons from "./SocialMIcons";
export default function ItemsContainer() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 divide-x sm:px-8 px-5 py-16">
      <img
        className="object-scale-down h-40 w-96 "
        src="https://www.google.com/maps/d/thumbnail?mid=1rJSJVAW_ST2rTnUD9TJfJsytdWI"
      />
      <div>
        {" "}
        <Items title="CAMPUS CARACAS" />
        <br></br>
        <p className="ps-8 text-sm">Dirección</p>
        <br></br>
        <p className="ps-8 text-sm">Distribuidor Universidad</p>
        <br></br>
        <p className="ps-8 text-xs font-semibold">
          Av. Boyacá con autopista Petare-Guarenas.
          <br />
          Urbanización Terrazas del Ávila, Caracas-Miranda. Zona postal 1073
        </p>
        <br />
        <p className="ps-8 text-xs font-light">comunicaciones@unimet.edu.ve</p>
        <br />
        <br></br>
        <SocialIcons />{""}
      </div>
      <div>
        <Items title="CAMPUS PUERTO LA CRUZ Y LECHERÍA" />
        <br></br>
        <p className="ps-8 text-sm">Dirección</p>
        <br></br>
        <p className="ps-8 text-sm">Puerto La Cruz</p>
        <br></br>
        <p className="ps-8 text-xs font-semibold">
          Av. Municipal con calle Carabobo,
          <br />
          Centro Seguros La Previsora
        </p>
        <p className="ps-8 text-xs font-light">(0424)-854.61.46</p>
        <br></br>
        <p className="ps-8 text-sm">Lechería</p>
        <br />
        <p className="ps-8 text-xs font-semibold">
          Calle El Dorado, CC Guaica Center
        </p>
        <p className="ps-8 text-xs font-light"> (0281)-281.45.30</p>
      </div>
      <div>
        <Items title="PUNTOS DE INTERÉS" />
        <br></br>
        <p className="ps-8 ">Biblioteca</p>
        <br></br>
        <p className="ps-8">Sala Mendoza</p>
        <br></br>
        <p className="ps-8">Módulo de Aulas</p>
        <br></br>
        <p className="ps-8">Jardines</p>
      </div>

    </div>
  );
}
