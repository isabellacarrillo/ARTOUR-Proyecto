import React from "react";
import { Link } from "react-router-dom";

function MenuItem({ display, path }) {
  return (
    <div className="border-x border-blue mt-8 transition ease-in-out duration-300 delay-0  hover:bg-blue hover:text-white">
      <Link path={path}>
        <div className="w-fit h-fit p-4">
          <h4>{display}</h4>
        </div>
      </Link>
    </div>
  );
}

export default MenuItem;
