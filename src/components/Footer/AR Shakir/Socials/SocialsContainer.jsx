import React from "react";
import { FaFacebookMessenger, FaTwitter, FaInfinity } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
const color = "#3734A9";
const size = "18";
const SocialsContainer = () => {
  return (
    <div className="flex items-center gap-5 mt-4">
      <div className="fb">
        <ImLinkedin2 size={size} color={color} />
      </div>
      <div className="linked">
        <FaFacebookMessenger size={size} color={color} />
      </div>
      <div className="linked">
        <FaTwitter size={size} color={color} />
      </div>
      <div className="insta">
        <FaInfinity size={size} color={color} />
      </div>
    </div>
  );
};

export default SocialsContainer;
