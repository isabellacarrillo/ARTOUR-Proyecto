import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import {
  UserContextProvider,
  useUserContext,
} from "../../contexts/UserContext";
import LoadingPage from "../LoadingPage/LoadingPage";

export default function Layout() {
  return (
    <div>
      <UserContextProvider>
        <LoadingPage>
          <main>
            <NavBar />
            <section className=" h-fit ">
              <Outlet />
            </section>
            <Footer />
          </main>
        </LoadingPage>
      </UserContextProvider>
    </div>
  );
}
