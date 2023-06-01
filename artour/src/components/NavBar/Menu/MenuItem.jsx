import React from "react";
import { Link } from "react-router-dom";

function MenuItem({ display, path }) {
  return (
<<<<<<< HEAD
    <div className='border-x border-b border-blue sm:mt-8 transition ease-in-out duration-300 delay-0  hover:bg-blue hover:text-white'>
      <Link to={path}>
        <div className='w-fit h-fit p-2 sm:p-4'>
          <h4 className='text-xs sm:text-md'>{display}</h4>
=======
    <div className="border-x border-b border-blue sm:mt-8 transition ease-in-out duration-300 delay-0  hover:bg-blue hover:text-white">
      <Link path={path}>
        <div className="w-fit h-fit p-2 sm:p-4">
          <h4 className="text-xs sm:text-md">{display}</h4>
>>>>>>> 0ced8862513fd83833614a6315e0f0fdb4ec32f9
        </div>
      </Link>
    </div>
  );
}

export default MenuItem;
