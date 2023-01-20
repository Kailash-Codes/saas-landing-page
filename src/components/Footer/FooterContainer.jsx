import React from "react";
import CompaniesContainer from "../companies/CompaniesContainer";
import ShakirContainer from "./AR Shakir/ShakirContainer";
import CompanyContainer from "./Company/CompanyContainer";
import NewsLetterContainer from "./news-letter/NewsLetterContainer";
import ResourceContainer from "./Resources/ResourceContainer";

const FooterContainer = () => {
  return (
    <div className="lg:px-28 px-5 grid bg-[#FAFBFF] ">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      <ShakirContainer />
      <CompanyContainer />
      <ResourceContainer />
        <NewsLetterContainer />
        </div>
    </div>
  );
};

export default FooterContainer;
