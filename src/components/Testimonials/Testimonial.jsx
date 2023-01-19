import React from "react";
import quote from "../../static/images/quote.png";
import Declarer from "./Declarer";
import DeclarerPhoto from "./DeclarerPhoto";
import Saying from "./Saying";

const Testimonial = ({ saying, declarer, src }) => {
  return (
    <div className="testi w-96 ml-[50%] border translate-x-[-50%] sm:ml-auto sm:translate-x-0 sm:w-auto flex  -black rounded-xl py-3 mt-5 px-5 bg-white">
      <div className="rounded-xl">
        <img src={quote} className=" h-10 relative mt-[-40px] mb-3" />
        <div className="flex flex-wrap lg:gap-2 justify-center sm:flex-nowrap md:flex-wrap md:w-auto lg:flex-nowrap items-center">
          <div className="left">
            <Saying saying={saying} />
            <Declarer declarer={declarer} />
          </div>
          <div className="right">
            <DeclarerPhoto src={src} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
