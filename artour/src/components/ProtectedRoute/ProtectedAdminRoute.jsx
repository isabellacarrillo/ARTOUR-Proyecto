import React from "react";
import { useUserContext } from "../../contexts/UserContext";
import { Navigate } from "react-router-dom";
import { LOGIN_URL, UNAUTHORIZED_URL } from "../../constants/URLS";

export default function ProtectedAdminRoute({ children }) {
  const { user, isLoading, role } = useUserContext();

  if (!isLoading && !user) {
    return <Navigate to={LOGIN_URL} />;
  } else if (!isLoading && user && role === "admin") {
    return children;
  } else if(!isLoading){
    return <Navigate to={UNAUTHORIZED_URL} />;
  }
}
