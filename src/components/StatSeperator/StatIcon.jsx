import React from "react";
import { FaStar } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";

const StatIcon = ({ type }) => {
  return (
    <>
      {type === "person" ? <FaUser className="text-[#B1CA16]" /> : null}
      {type === "star" ? <FaStar className="text-[#B1CA16]" /> : null}
      {type === "dollar" ? <FaDollarSign className="text-[#B1CA16]" /> : null}
    </>
  );
};

export default StatIcon;
