import React, { useEffect } from "react";
import SearchBar from "../../components/Searchbar/SearchBar";
import MiniTour from "../../components/MiniTour/MiniTour";
import useTours from "../../hooks/useTours";
import { Bars } from "react-loader-spinner";

export default function SearchPage() {
  const { tours, getTours, isLoading } = useTours();



  useEffect(() => {
    getTours();
  }, [getTours]);


  return (
    <div>
      <div className="h-fit w-full flex flex-wrap content-center bg-orange p-8">
        <SearchBar />
      </div>
      <h3 className="mx-8 mt-4 font-bold text-2xl text-orange/75 md:text-4xl">
        Tours Disponibles
      </h3>
      <div className="w-full justify-center flex flex-wrap flex-row gap-8 p-8 h-screen overflow-auto m-2 drop-shadow-lg">
        {!isLoading ? (
          tours.map((t) => {
            return <MiniTour tour={t} />;
          })
        ) : (
          <div className="w-full h-1/4 flex flex-wrap justify-center content-center">
            <Bars color="#4F759B" />
          </div>
        )}
      </div>
    </div>
  );
}
