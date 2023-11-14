import React, { useEffect } from "react";
import Button from "./Button";
import Aos from "aos";
import "aos/dist/aos.css";

const Info = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <div
      id="about"
      className="flex flex-col m-7 lg:flex-row lg:justify-center "
    >
      <img
        src="./webImg/info.png"
        alt=""
        className=" p-10 md:p-28 lg:p-10 lg:max-h-[30rem] lg:max-w-[30rem]"
      />
      <div className="flex flex-col gap-5 lg:max-w-[40rem] lg:mt-20">
        <div data-aos="fade-up">
          <div className=" flex flex-col items-center text-white px-10 py-4 overflow-hidden h-16 bg-[#ff4b56] bg-opacity-10 rounded-2xl border border-[#ff4b56] transition-all duration-1000 hover:h-[26rem] md:mx-20 md:hover:h-[18rem] lg:hover:h-[23rem] xl:hover:h-[20]">
            <h1 className=" mx-5 text-3xl mb-5 text-[#ff4b56] font-head h">
              About me
            </h1>
            <div className=" bg-[#ff4b56] p-5 rounded-lg">
              <span className=" font-para">
                I'm Rumman Chowdhury, a web developer with a knack for
                problem-solving and a passion for creating software. I thrive on
                leading teams to turn ideas into reality, both in the digital
                world and on the football field. These two passions fuel my
                daily journey.
              </span>
            </div>
          </div>
        </div>
        <div data-aos="fade-up">
          <div className=" flex flex-col items-center text-white px-10 py-4 overflow-hidden h-16 bg-[#ff4b56] bg-opacity-10 rounded-2xl border border-[#ff4b56] transition-all duration-500 hover:h-[30rem] md:mx-20 md:hover:h-[18rem] lg:hover:h-[25rem]">
            <h1 className=" mx-5 text-3xl mb-5 text-[#ff4b56] font-head ">
              Experience
            </h1>
            <div className=" bg-[#ff4b56] p-5  rounded-lg">
              <span className=" font-para">
                I've led diverse projects, spanning web development, web design,
                game development, and computer applications. These experiences
                have nurtured my leadership abilities and my passion for
                creating software. It's a world where problem-solving and
                innovation drive me, much like the thrill of playing football on
                the field.
              </span>
            </div>
          </div>
        </div>
        <div data-aos="fade-up">
          <div className=" flex flex-col items-center text-white px-10 py-4 overflow-hidden h-16 bg-[#ff4b56] bg-opacity-10 rounded-2xl border border-[#ff4b56] transition-all duration-500 hover:h-[14rem] md:mx-20 md:hover:h-[12rem]">
            <h1 className=" mx-5 text-3xl mb-5 text-[#ff4b56] font-head ">
              Education
            </h1>
            <div className=" bg-[#ff4b56] p-5 rounded-lg">
              <span className=" font-para">
                College : Guru Nanak College
                <br />
                UG : Sahyog college
              </span>
            </div>
          </div>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default Info;
