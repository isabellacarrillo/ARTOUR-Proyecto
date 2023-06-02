import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/NavBar/Footer/Footer'

export default function Layout() {
  return (
    <div>
      <main>
        <NavBar/>
      <section className='w-screen h-fit '>
        <Outlet/>
      </section>
      <Footer/>
      </main>
    </div>
  )
}
