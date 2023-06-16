import React from "react";
import { EMPTY, OUTLINE } from "./styles";

export default function Input({ label, type, name, id }) {
  return (
    <div className="m-4"> 
      <div className="relative z-0">
        <input
          type={type}
          name={name}
          id={id}
          className={EMPTY.input}
          placeholder=" "
        />
        <label htmlFor={id} className={EMPTY.label}>
          {label}
        </label>
      </div>
    </div>
  );
}
