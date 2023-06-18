import React, { useState } from "react";
import { Bars } from "react-loader-spinner";
import { useUserContext } from "../../contexts/UserContext";

export default function LoadingPage({ children }) {
  const { isLoading } = useUserContext();

  if (isLoading) {
    return (
      <div className="w-screen h-screen overflow-hidden">
        <div className="absolute z-50 w-full h-full bg-bluegray/80 flex flex-wrap justify-center content-center">
          <Bars color="#4F759B" />
        </div>
        {children}
      </div>
    );
  } else {
    return children;
  }
}
