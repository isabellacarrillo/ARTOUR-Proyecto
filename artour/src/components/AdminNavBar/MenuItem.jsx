import React from "react";
import { Link } from "react-router-dom";

function MenuItem({ display, path }) {
  return (
    <div className="px-2 py-1 lg:w-fit lg-h-fit">
      <Link
        to={path}
        className="relative after:bg-orange after:rounded-xl after:h-1 after:w-0 after:absolute after:duration-300 hover:after:w-full"
      >
        <div className="p-2 ">
          <h4 className="text-sm text-center md:text-base px-2">{display}</h4>
        </div>
      </Link>
    </div>
  );
}

export default MenuItem;
