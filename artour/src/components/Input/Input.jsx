import React from 'react'

export default function Input({label,type,name,id}) {
  return (
    <div className='m-4'>
      <div className="relative z-0">
                  <input type= {type} name={name} id={id} className="block py-2.5 px-0 w-full text-sm text-black bg-white/10 border-0 border-b-2 border-black appearance-none dark:text-white dark:border-blue dark:focus:border-blue focus:outline-none focus:ring-0 focus:border-blue peer" placeholder=" " />
                  <label htmlFor={id} className="absolute bg-transparent text-sm text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue peer-focus:dark:text-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{label}</label>
              </div>
    </div>
  )
}
