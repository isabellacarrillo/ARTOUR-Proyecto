import React from "react";
import { Link } from "react-router-dom";

function MenuItem({ display, path }) {
  return (
    <div className="px-2 py-1 lg:w-fit lg-h-fit transition ease-in-out duration-300 delay-0 rounded-2xl hover:bg-orange/75 hover:text-white">
      <Link to={path}>
        <div className="w-full h-fit  p-2 ">
          <h4 className="text-sm text-center md:text-base">{display}</h4>
        </div>
      </Link>
    </div>
  );
}

export default MenuItem;
