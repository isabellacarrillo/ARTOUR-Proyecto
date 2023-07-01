{
  /*Componente de Item del Carrousel, el cual recibe el objeto de la informacion a mostrar y el indice dentro del carrousel */
}

import React from "react";
import Boton from "../../Boton/Boton";
import { AUXILIAR, PRINCIPAL } from "../../Boton/styles";
import { useUserContext } from "../../../contexts/UserContext";

export default function CarItem({ item, index }) {
  const { user, isLoading } = useUserContext();

  if (index == 0) {
    return (
      <div className="w-screen h-full">
        <div
          className={`w-screen h-[500px] flex flex-wrap content-center justify-end`}
        >
          <div
            className="absolute z-10 h-fit bg-blue/60 w-full md:w-3/4 rounded-l-2xl flex flex-col flex-wrap content-end px-20 pr-32
         py-12 self-center text-white"
          >
            <h1 className="text-[24px]  text-right lg:text-[44px] font-extrabold">
              {item.title}
            </h1>
            <h4 className="text-right md:text-[24px] ">{item.desc}</h4>
          </div>
          <img src={item.url} className="relative object-cover w-full h-full" />
        </div>
      </div>
    );
  }

  if (!isLoading && !user) {
    if (index % 2 != 0) {
      return (
        <div className="w-screen h-full">
          <div
            className={`w-screen h-[500px] flex flex-wrap content-center justify-end `}
          >
            <div
              className=" absolute z-10 h-fit bg-orange/60 w-full md:w-3/4 rounded-l-2xl flex flex-col flex-wrap content-end px-20 
         py-12 self-center text-white"
            >
              <h1 className="text-[24px]  text-right lg:text-[44px] font-extrabold">
                {item.title}
              </h1>
              <h4 className="text-right md:text-[24px] ">{item.desc}</h4>
            </div>
            <img
              src={item.url}
              className="relative object-cover w-full h-full"
            />
          </div>
        </div>
      );
    }

    return (
      <div className="w-screen h-full">
        <div
          className={`w-screen h-[500px] flex flex-wrap content-center justify-end `}
        >
          <div
            className=" absolute z-10 h-fit bg-blue/60 w-full md:w-3/4 rounded-l-2xl flex flex-col flex-wrap content-end px-20 pr-32
         py-12 self-center text-white"
          >
            <h1 className="text-[24px]  text-right lg:text-[44px] font-extrabold">
              {item.title}
            </h1>
            <h4 className="text-right md:text-[24px] ">{item.desc}</h4>
          </div>
          <img src={item.url} className="relative object-cover w-full h-full" />
        </div>
      </div>
    );
  } else if (user) {
    if (index % 2 != 0) {
      return (
        <div className="w-screen h-full">
          <div
            className={`w-screen h-[500px] flex flex-wrap content-center justify-end `}
          >
            <div
              className=" absolute z-10 h-fit bg-orange/60 w-full md:w-3/4 rounded-l-2xl flex flex-col flex-wrap content-end px-20 
         py-12 self-center text-white"
            >
              <h1 className="text-[24px]  text-right lg:text-[44px] font-extrabold">
                {item.title}
              </h1>
              <h4 className="text-right md:text-[24px] ">{item.desc}</h4>

              <Boton display={item.boton} style={AUXILIAR} to={item.path} />
            </div>
            <img
              src={item.url}
              className="relative object-cover w-full h-full"
            />
          </div>
        </div>
      );
    }

    return (
      <div className="w-screen h-full">
        <div
          className={`w-screen h-[500px] flex flex-wrap content-center justify-end `}
        >
          <div
            className=" absolute z-10 h-fit  bg-blue/60 w-full md:w-3/4 rounded-l-2xl flex flex-col flex-wrap content-end px-20 pr-32
         py-12 self-center text-white"
          >
            <h1 className="text-[24px]  text-right lg:text-[44px] font-extrabold">
              {item.title}
            </h1>
            <h4 className="text-right md:text-[24px] ">{item.desc}</h4>
          
              <Boton display={item.boton} style={PRINCIPAL} to={item.path}/>
           
          </div>
          <img
            src={item.url}
            className="relative object-cover w-full h-full "
          />
        </div>
      </div>
    );
  }
}
