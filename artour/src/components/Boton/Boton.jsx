import React from 'react'


export default function Boton({action, style}) {
  return (
    <div className='flex flex-wrap justify-center m-4'>
      <button className={style}>{action}</button>
    </div>
  )
}
