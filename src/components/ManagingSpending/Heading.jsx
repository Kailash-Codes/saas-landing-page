import React from "react";

const Heading = ({ heading }) => {
  return (
    <div>
      <h1 className="font-black md:px-4 lg:px-32 xl:px-60 text-5xl">{heading}</h1>
    </div>
  );
};

export default Heading;
