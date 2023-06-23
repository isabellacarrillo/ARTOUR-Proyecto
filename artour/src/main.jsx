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
import ProtectedAdminRoute from "./components/ProtectedRoute/ProtectedAdminRoute";
import ModifyProfilePage from "./Pages/ModifyProfilePage/ModifyProfilePage";
import TourProfile from "./Pages/TourProfile/TourProfile";
import {
  CREATE_ART,
  CREATE_TOUR,
  EDIT_ART,
  EDIT_TOUR,
  HOME_URL,
  LOGIN_URL,
  REGISTER_URL,
  SEARCH_URL,
  UNAUTHORIZED_URL,
} from "./constants/URLS";
import Edit_tour from "./Pages/EditTourPage/EditTourPage";
import Edit_Art from "./Pages/EditArtPage/EditArtPage";
import Create_Tour from "./Pages/CreateTourPage/CreateTourPage";
import Create_Art from "./Pages/CreateArtPage/CreateArtPage";
import ObraProfile from "./Pages/ObraProfile/ObraProfile";

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
          <Route
            path={EDIT_TOUR}
            element={
              <ProtectedAdminRoute>
                <Edit_tour />
              </ProtectedAdminRoute>
            }
          />
          <Route
            path={EDIT_ART}
            element={
              <ProtectedAdminRoute>
                <Edit_Art />
              </ProtectedAdminRoute>
            }
          />
          <Route
            path={CREATE_TOUR}
            element={
              <ProtectedAdminRoute>
                <Create_Tour />
              </ProtectedAdminRoute>
            }
          />
          <Route
            path={CREATE_ART}
            element={
              <ProtectedAdminRoute>
                <Create_Art />
              </ProtectedAdminRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedUserRoute>
                <ModifyProfilePage />
              </ProtectedUserRoute>
            }
          />
          <Route path="/tours/profile" element={<TourProfile />} />
          <Route path="/obras/profile" element={<ObraProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
