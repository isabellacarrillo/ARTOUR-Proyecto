
import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from "./Pages/HomePage/HomePage"
import Layout from './Pages/Layouts/Layout'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './Pages/LoginPage/LoginPage'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

