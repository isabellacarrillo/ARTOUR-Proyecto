import React from 'react'
import MenuItem from './MenuItem'

export default function Menu() {
  return (
    <div>
      <MenuItem display="Inicio" path="/"/>
      <MenuItem display="Buscador" path="/buscar"/>
      <MenuItem display="Calendario" path="/calendario"/>
      <MenuItem display="Contacto" path="/contacto"/>
    </div>
  )
}
