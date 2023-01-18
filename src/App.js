import React from "react";
import CompaniesContainer from "./components/companies/CompaniesContainer";
import FeatureContainer from "./components/Features/FeatureContainer";
import Home from "./components/home/Home";
import SectionContainer from "./components/section/SectionContainer";

const App = () => {
  return (
    <div>
      <Home />
      <CompaniesContainer />
      <SectionContainer />
      <FeatureContainer />
    </div>
  );
};

export default App;
