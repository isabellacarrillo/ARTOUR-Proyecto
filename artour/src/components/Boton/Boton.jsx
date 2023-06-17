import React from 'react'
import { useNavigate } from 'react-router-dom'



export default function Boton({action, style, display}) {
  return (
    <div className='flex flex-wrap justify-center m-4'>
      <button className={style} onClick={action}>{display}</button>
    </div>
  )
}
