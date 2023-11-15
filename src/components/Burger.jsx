import React, { useState } from "react";

const Burger = () => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleExpand = (e) => {
    e.preventDefault();
    setExpanded(!isExpanded);
  };

  return (
    <div>
      <div
        className={`bg-[#ff4b56] fixed my-4 h-14 w-14 rounded-r-full z-[999] flex flex-col justify-center gap-1 items-center cursor-pointer ${
          isExpanded ? "bg-[#ff4b56] " : ""
        }  transition-all duration-[2000ms] ease-in-out`}
        onClick={toggleExpand}
      >
        <div
          className={`h-1 w-6 bg-white transform transition-transform${
            isExpanded ? " -rotate-[20deg]" : " rotate-[20deg] w-13"
          }`}
        ></div>
        {/* <div
          className={`h-1 w-7 mr-4 bg-white outline-purple-50${
            isExpanded ? " opacity-0" : ""
          }`}
        ></div> */}
        <div
          className={`h-1 w-6 bg-white transform transition-transform${
            isExpanded ? " rotate-[20deg]" : " -rotate-[20deg] w-13"
          }`}
        ></div>
      </div>
      <div
        className={`fixed top-0 left-0  bg-[#ff4b56] flex rounded-r-full justify-center items-center z-[900] transition-all duration-500 ease-in-out  ${
          isExpanded
            ? " w-[11rem] h-[45rem] opacity-100 lg:w-[15rem]"
            : "bg-[#ff4b56] my-4 h-[45rem] w-0 opacity-0"
        }`}
      >
        <div className={` font-head ${isExpanded ? " text-lg" : "text-[0px]"}`}>
          <a
            href="#start"
            className="block py-2 text-[#23253a] hover:text-[#fff]"
          >
            Home
          </a>
          <a
            href="#about"
            className="block py-2 text-[#23253a] hover:text-[#fff]"
          >
            About Me
          </a>
          <a
            href="#project"
            className="block py-2 text-[#23253a] hover:text-[#fff]"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block py-2 text-[#23253a] hover:text-[#fff]"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Burger;
