import React from "react";
import { FaStar } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const StatIcon = ({ type }) => {
  return (
    <>
      {type === "person" ? <FaUser color="green" /> : null}
      {type === "star" ? <FaStar color="green" /> : null}
    </>
  );
};

export default StatIcon;
