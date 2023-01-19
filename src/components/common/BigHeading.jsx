import React from "react";

const Heading = (props) => {
  return (
    <h1
      className="whitespace-pre-wrap text-5xl w-full leading-[76px] topics sm:text-[71px] font-black"
    >
      {props.text}
    </h1>
  );
};

export default Heading;
