import React from "react";

const Input = ({ type, value, handleChange, placeholder, name, id }) => {
  return (
    <input
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
      id={id}
    />
  );
};

export default Input;
