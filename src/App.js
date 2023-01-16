import React from "react";
import CompaniesContainer from "./components/companies/CompaniesContainer";
import Home from "./components/home/Home";
import SectionContainer from "./components/section/SectionContainer";

const App = () => {
  return (
    <div>
      <Home />
      <CompaniesContainer />
      <SectionContainer />
    </div>
  );
};

export default App;
