import React from "react";
import { useUserContext } from "../../contexts/UserContext";
import { Navigate } from "react-router-dom";
import { LOGIN_URL } from "../../constants/URLS";

export default function ProtectedUserRoute({ children }) {
  const { user, isLoading } = useUserContext();

  if (!isLoading && !user) {
    return <Navigate to={LOGIN_URL} />;
  } else {
    return children;
  }
}
