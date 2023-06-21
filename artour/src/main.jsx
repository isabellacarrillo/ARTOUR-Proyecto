import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./Pages/HomePage/HomePage";
import Layout from "./Pages/Layouts/Layout";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import SearchPage from "./Pages/SearchPage/SearchPage";
import UnauthorizedPage from "./Pages/UnauthorizedPage/UnauthorizedPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import ProtectedUserRoute from "./components/ProtectedRoute/ProtectedUserRoute";
import { HOME_URL, LOGIN_URL, REGISTER_URL, SEARCH_URL, UNAUTHORIZED_URL } from "./constants/URLS"
import Edit_tour from "./Pages/EditTourPage/EditTourPage";
import Edit_Art from "./Pages/EditArtPage/EditArtPage";
import Create_Tour from "./Pages/CreateTourPage/CreateTourPage";
import Create_Art from "./Pages/CreateArtPage/CreateArtPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={HOME_URL} element={<HomePage />} />
          <Route path={LOGIN_URL} element={<LoginPage />} />
          <Route path={REGISTER_URL} element={<RegisterPage />} />
          <Route
            path={SEARCH_URL}
            element={
              <ProtectedUserRoute>
                <SearchPage />
              </ProtectedUserRoute>
            }
          />
          <Route path={UNAUTHORIZED_URL} element={<UnauthorizedPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/edit" element={<Edit_tour />} />
          <Route path = "/edita" element = {<Edit_Art/>}/>
          <Route path = "/createt" element = {<Create_Tour/>}/>
          <Route path = "/createa" element = {<Create_Art/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
