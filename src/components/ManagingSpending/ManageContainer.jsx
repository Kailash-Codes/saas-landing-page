import React from "react";
import GetStartedButton from "./GetStartedButton";
import Heading from "./Heading";

const ManageContainer = () => {
  return (
    <div className="lg:px-28 px-5 py-20 bg-[#FAFBFF]">

    <div className=" flex gap-10 flex-col rounded-xl py-20 justify-center text-center text-white  bg-[#3734A9] ">
      <Heading heading="Discover a better way to manage spendings" />
      <GetStartedButton />
    </div>
    </div>
  );
};

export default ManageContainer;
