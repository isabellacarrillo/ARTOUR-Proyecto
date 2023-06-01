import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      <main>
        <NavBar/>
      <section className='w-screen h-screen '>
        <Outlet/>
      </section>
      </main>
    </div>
  )
}
