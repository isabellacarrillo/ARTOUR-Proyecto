import React from "react";
import { Link } from "react-router-dom";

function MenuItem({ display, path }) {
  return (
    <div className="px-2 py-1 lg:w-fit lg-h-fit">
      <Link
        to={path}
        className="relative after:bg-orange after:rounded-xl after:h-1 after:w-0
      after:absolute after:duration-300 hover:after:w-full"
      >
        <div className="w-fit h-fit  p-2 sm:px-4">
          <h4 className="text-sm md:text-base">{display}</h4>
        </div>
      </Link>
    </div>
  );
}

export default MenuItem;
