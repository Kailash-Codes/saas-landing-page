import React from "react";

const InputBox = () => {
  return <div className="col-span-3 lg:col-span-3 sm:col-span-4" >
    <input 
    className="bg-[#EEEEFF] pl-3 focus:outline-gray-400 w-full h-[52px] border" 
    placeholder="Your email address"
    type="text" />
  </div>;
};

export default InputBox;
