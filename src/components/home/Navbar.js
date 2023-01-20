import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect } from "react";
import DropDownIcon from "./DropDownIcon";
import { useState } from "react";
import NavBarDropDown from "./NavBarDropDown";
const Navbar = () => {
  const [productState, setProductState] = useState(false);
  const [templateState, setTemplateState] = useState(false);
  function handleClick(e) {
    const { name } = e.target;
    if (name === "product") {
      setProductState(!productState);
    } else if (name === "templates") {
      setTemplateState(!templateState);
    }
  }
  useEffect(() => {
    const toggler = document.querySelector(".toggler");
    const togglingDiv = document.querySelectorAll(".toggling");
    toggler.addEventListener("click", () => {
      togglingDiv[0].classList.toggle("shown");
      togglingDiv[1].classList.toggle("shown");
    });
  }, []);
  return (
    <div className="flex md:flex justify-between items-center md:justify-between flex-wrap py-3">
      <div className="navbar-brand text-xl font-bold">
        <a href="#">AR SHAKIR</a>
      </div>
      <div className="relative">
        <button className="toggler p-2 rounded  z-20 border border-gray-100 md:hidden">
          <GiHamburgerMenu size="20" />
        </button>
      </div>
      <div className="nav-links transition duration-300 translate-y-[-140px] w-[70%] opacity-0 md:opacity-100 md:translate-y-[0px]   md:block toggling w-full md:w-auto">
        <ul className="gap-5 md:flex ">
        <li className="flex flex-col">
            <span className="flex"><a href="#" name="product" onClick={handleClick} className="">
              Products  </a><span><DropDownIcon /></span>
             
              </span>
              <div>{productState ? <NavBarDropDown /> : null}</div>
          </li>
          <li className="flex flex-col">
            <span className="flex"><a href="#" name="templates" onClick={handleClick} className="">
              Template  </a><span><DropDownIcon /></span>
             
              </span>
              <div>{templateState ? <NavBarDropDown /> : null}</div>
          </li>
          <li className="flex flex-col">
            <span className="flex"><a href="#" className="">
              Blogs  </a>
              </span>
          </li>
          <li className="flex flex-col">
            <span className="flex"><a href="#" className="">
              Pricing  </a>
              </span>
          </li>
        </ul>
      </div>
      <div className="button-group md:flex transition duration-300 inline-block translate-y-[-180px] opacity-0 md:opacity-100 md:translate-y-[0px] toggling text-black gap-3 flex block md:w-auto w-full ">
        <button className="px-3 py-2 hover:bg-[#4f46ba] hover:text-white">
          Sign in
        </button>
        <button className="px-3 py-2 text-white bg-[#4F46BA]">
          Start free
        </button>
      </div>
    </div>
  );
};

export default Navbar;
