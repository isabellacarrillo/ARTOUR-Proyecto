
import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from "./Pages/HomePage/HomePage"
import Layout from './Pages/Layouts/Layout'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './Pages/LoginPage/LoginPage'
import RegisterPage from "./Pages/RegisterPage/RegisterPage"


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/registro" element={<RegisterPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

