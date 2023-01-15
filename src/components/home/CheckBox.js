import React from "react";
import check from '../../static/images/home/check.png';

const CheckBox = (props) => {
  return (
    <span className="text-[#757095] flex items-center">
      <span>
        <img src={check} />
      </span>
      &nbsp;{props.text}
    </span>
  );
};

export default CheckBox;
