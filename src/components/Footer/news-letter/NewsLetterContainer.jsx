import React from "react";
import FooterDesc from "../common/FooterDesc";
import FooterHeading from "../common/FooterHeading";
import InputBox from "./InputBox";
import SubscribeBtn from "./SubscribeBtn";

const NewsLetterContainer = () => {
  return <div className="flex flex-col lg:col-span-2 sm:col-span-5">
    <FooterHeading heading="Join Our News Letter" />
    <div className="grid newsletterbox grid-cols-5 justify-center">
    <InputBox />
    <SubscribeBtn />
    </div>
    <FooterDesc type="big" desc="*  Will send you weekly updates for your better
finance management." />
  </div>;
};

export default NewsLetterContainer;
