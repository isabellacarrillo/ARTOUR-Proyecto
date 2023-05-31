<<<<<<< HEAD
import React from "react";
import Menu from "./Menu/Menu";

export default function NavBar() {
  return (
    <div>
      <div>
        <img />
      </div>
      <Menu />
=======
import React from 'react'
import Menu from './Menu/Menu'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='w-screen h-32 '>
      <div className='bg-orange h-8 flex justify-end p-2'>
        <Link className='text-xs underline underline-offset-1 font-semibold text-white hover:text-blue' path="/login">Iniciar Sesion</Link>
      </div>
      <div className="border-b border-blue">
        <div >
          <img/>
        </div>
        <Menu/>
      </div>
>>>>>>> b02460ec72aafac24069578a25e5ef5840a19bfe
    </div>
  );
}
<<<<<<< HEAD

/*export default function NavBar() {
  return (
    <div>NavBar</div>
  )
}
*/
=======
>>>>>>> b02460ec72aafac24069578a25e5ef5840a19bfe
