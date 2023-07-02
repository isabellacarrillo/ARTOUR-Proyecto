import React, { useEffect, useState } from "react";
import SearchBar from "../../components/Searchbar/SearchBar";
import MiniTour from "../../components/MiniTour/MiniTour";
import useTours from "../../hooks/useTours";
import { Bars } from "react-loader-spinner";
import { pullQuery } from "../../firebase/firestore/firestore_pull";

export default function SearchPage() {
  const { tours, getTours, isLoading } = useTours();
  const [searched, setSearched] = useState(false);
  const [searching, setSearching] = useState(false);

  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [found, setFound] = useState([]);

  const handleSearch = async (e) => {
    setSearched(true);
    setSearching(true);
    e.preventDefault();
    const result = await pullQuery(search, filter, tours);
    setFound(result);
    setSearching(false);
  };

  const handleResultMessage = () => {
    switch (filter) {
      case "obra":
        return "No se encontraron tours que visitaran";

      case "fecha":
        return "No se encontraron tours en la fecha";
      case "punto_de_interes":
        return "No se encontraron tours que visiten ";

      default:
        return "No se encontraron tours de nombre ";
    }
  };

  const handleFound = () => {
    if (found.length == 0) {
      return (
        <div className="w-full h-fit flex justify-center bg-white p-12">
          <div className="w-fit max-w-[500px] self-center drop-shadow-lg flex flex-col gap-10 bg-white h-fit p-16 rounded-2xl">
            <h1 className=" text-2xl font-extrabold text-orange">
              {handleResultMessage()} {search}
            </h1>
            <p>
              Intente revisar la búsqueda realizada por errores. Cuide las
              mayúsculas y los acentos
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <>
          <h3 className="mx-8 my-4 font-bold text-2xl text-orange/75 md:text-4xl">
            Tours encontrados para {search}
          </h3>
          <div className="w-full justify-center flex flex-wrap flex-row gap-8 p-8 h-screen overflow-auto drop-shadow-lg">
            {!isLoading ? (
              found.map((t) => {
                return <MiniTour tour={t} key={t.id} />;
              })
            ) : (
              <div className="w-full h-1/4 flex flex-wrap justify-center content-center">
                <Bars color="#4F759B" />
              </div>
            )}
          </div>
        </>
      );
    }
  };

  useEffect(() => {
    getTours();
  }, [getTours]);

  return (
    <div>
      <div className="h-fit w-full flex flex-wrap content-center bg-orange p-8">
        <SearchBar
          filter={filter}
          setFilter={setFilter}
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
          setSearched={setSearched}
        />
      </div>
      {searched ? (
        searching ? (
          <div className="w-full h-screen flex flex-wrap justify-center content-center">
            <Bars color="#4F759B" />
          </div>
        ) : (
          handleFound()
        )
      ) : (
        <>
          <h3 className="mx-8 my-4 font-bold text-2xl text-orange/75 md:text-4xl">
            Tours Disponibles
          </h3>
          <div className="w-full justify-center flex flex-wrap flex-row gap-8 p-8 h-screen overflow-auto drop-shadow-lg">
            {!isLoading ? (
              tours.map((t) => {
                return <MiniTour tour={t} key={t.id} />;
              })
            ) : (
              <div className="w-full h-1/4 flex flex-wrap justify-center content-center">
                <Bars color="#4F759B" />
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
