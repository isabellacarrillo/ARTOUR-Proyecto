{
  /*Componente de Carrousel */
}

import React, { useState, useEffect, useRef } from "react";
import CarItem from "./CarItem/CarItem";
import { CALENDAR_URL, SEARCH_URL } from "../../constants/URLS";

{
  /*Lista de objetos de la informacion que se va a mostrar en el Carrousel */
}

const imgs = [
  {
    url: "https://firebasestorage.googleapis.com/v0/b/artour-25768.appspot.com/o/carrousel%2Finicio5.jpg?alt=media&token=cadc7ec0-f4d1-40dc-af08-6331c88c24f6",
    title: "BIENVENIDOS A ARTOUR",
    desc: "Un espacio para descubrir todo el valor cultural de la Universidad Metropolitana",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/artour-25768.appspot.com/o/carrousel%2Fcarrousel%201.jpg?alt=media&token=c041f6d7-3513-4a2c-824d-4da8de6e4708",
    title: "¡Conoce sobre nuestras distintas visitas y tours!",
    desc: "Un espacio para descubrir todo el valor cultural de la Universidad Metropolitana",
    boton: "Buscar Tours",
    path: SEARCH_URL,
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/artour-25768.appspot.com/o/carrousel%2Fcarrousel2.jpg?alt=media&token=25799cfe-7d70-48e5-9e28-aef46292cb80",
    title: "¡Descubre nuestros futuros eventos y exposiciones!",
    desc: "Planifica la visita perfecta y no te pierdas de nuestros grandes eventos culturales",
    boton: "Ver Calendario",
    path : CALENDAR_URL
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/artour-25768.appspot.com/o/carrousel%2Fcarrousel3.jpg?alt=media&token=b308bcf5-6d26-4874-9778-161825357b06",
    title: "¡Comparte tus experiencias con la comunidad!",
    desc: "Comenta y comparte sobre las visitas que hayas hecho, las obras que más te gustaron y te sorprendieron",
    boton: "Dar Feedback",
  },
];
export default function Carrousel() {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
    console.log(carousel.current.offsetWidth);
  }, []);

  return (
    <div className="carousel ">
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}
            className="hover:bg-blue/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 z-20 p-0 m-0 transition-all ease-in-out duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="hover:bg-blue/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 z-20 p-0 m-0 transition-all ease-in-out duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory "
        >
          {imgs.map((resource, index) => {
            return <CarItem key={index} item={resource} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
