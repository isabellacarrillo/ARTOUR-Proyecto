<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import NavBar from "./components/NavBar/NavBar";
=======
import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from "./Pages/HomePage/HomePage"
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
>>>>>>> b02460ec72aafac24069578a25e5ef5840a19bfe

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
<<<<<<< HEAD
    <HomePage />
  </React.StrictMode>
);
=======
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
>>>>>>> b02460ec72aafac24069578a25e5ef5840a19bfe
