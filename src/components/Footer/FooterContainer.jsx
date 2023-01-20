import React from "react";
import ShakirContainer from "./AR Shakir/ShakirContainer";
import CompanyContainer from "./Company/CompanyContainer";
import NewsLetterContainer from "./news-letter/NewsLetterContainer";
import ResourceContainer from "./Resources/ResourceContainer";

const FooterContainer = () => {
  return (
    <div className="lg:px-28 px-5 grid bg-[#FAFBFF] py-10 ">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:gap-5 lg:gap-0">
      <ShakirContainer />
      <CompanyContainer />
      <ResourceContainer />
        <NewsLetterContainer />
        </div>
    </div>
  );
};

export default FooterContainer;
