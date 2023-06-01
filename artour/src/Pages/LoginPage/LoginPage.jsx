import React from 'react'
import Boton from '../../components/Boton/Boton'
import { Link } from 'react-router-dom'
import {PRINCIPAL, AUXILIAR} from "../../components/Boton/styles"
import Input from '../../components/Input/Input'

export default function LoginPage() {
  return (
    <>
      <div className='flex flex-overlay justify-center bg-[url(https://runrun.es/wp-content/uploads/2015/10/unimet1.jpg)] bg-cover m-0 ' >
        <div className='bg-white/90 flex flex-col gap-12 max-w-3xl justify-center content-center m-16 w-3/4 p-8 z-10 rounded-md '>
          <h4 className="text-3xl text-center font-extrabold text-orange">INICIO SESION</h4>
          <div className=' w-full grid grid-rows-2 justify-around sm:grid-cols-2 sm:grid-rows-none gap-0 '>
            <form className='flex flex-col place-content-center gap-4 border-b-blue border-b-2  sm:border-r-blue sm:border-r-2 sm:border-b-0'>
              <Input label="Correo Electrónico" type="email" name="email" id="email"/>
              <Input label="Contraseña" type="password" name="password" id="password"/>
              <Boton style={PRINCIPAL} action="Ingresar"/>
            </form>
            <div className='flex flex-col flex-wrap justify-center gap-0 border-t-blue border-t-2 sm:border-l-blue sm:border-l-2 sm:border-t-0'>
              <Boton style={PRINCIPAL} action="Continuar con Facebook"/>
              <Boton style={PRINCIPAL} action="Continuar con Google"/>
              <Boton style={PRINCIPAL} action="Continuar con Twitter"/>
            </div>
          </div>
          <div>
            <h6 className='text-center'>Si aun no se ha registrado,</h6>
            <Link>
              <Boton style={AUXILIAR} action="Registrarse"/>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
