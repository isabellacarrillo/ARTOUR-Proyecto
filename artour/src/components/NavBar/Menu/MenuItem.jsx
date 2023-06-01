import React from "react";
import { Link } from "react-router-dom";

function MenuItem({ display, path }) {
  return (
    <div className='border-x border-b border-blue sm:mt-8 transition ease-in-out duration-300 delay-0  hover:bg-blue hover:text-white'>
      <Link to={path}>
        <div className='w-fit h-fit p-2 sm:px-4'>
          <h4 className='text-sm sm:text-base'>{display}</h4>
        </div>
      </Link>
    </div>
  );
}

export default MenuItem;
