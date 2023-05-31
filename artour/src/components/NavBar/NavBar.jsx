
import React from 'react'
import Menu from './Menu/Menu'
import { Link } from 'react-router-dom'
import logo from "./foto/1.png"

export default function NavBar() {
  return (
    <div className='w-screen h-32 overflow-clip'>
      <div className='bg-orange h-8 flex justify-end px-8 py-2'>
        <Link className='text-xs underline underline-offset-1 font-semibold text-white hover:text-blue' path="/login">Iniciar Sesion</Link>
      </div>
      <div className="border-b h-24 border-blue grid grid-cols-3">
        <div className='w-56 h-inherit overflow-hidden flex content-center justify-center m-2' >
          <img className="w-48 object-cover" src={logo} />
        </div>
        <Menu/>
        <div className='w-32'>
        </div>
      </div>
    </div>
  );
}

