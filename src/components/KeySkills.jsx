import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const KeySkills = () => {
  const [isScroller, setIsScroller] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsScroller(window.innerWidth <= 1024);
    };

    // Set initial size
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <div className=" p-8 flex  flex-col  rounded-xl  ">
        <h1 className=" text-4xl text-[#fff] text-center lg:mb-5">
          Key Skills
        </h1>
        {isScroller ? (
          <div className="overflow-hidden">
            <Slider {...sliderSettings}>
              <div className="text-white flex justify-center items-center p-10 md:p-40 md:w-2/6">
                <h1 className=" mx-5 text-3xl mb-5 text-[#ff4b56] font-head  text-center">
                  Web design
                </h1>
                <div className=" bg-[#ff4b56] p-5 rounded-lg flex flex-col justify-center items-center">
                  <img
                    src="./webImg/s1.png"
                    alt=""
                    className=" md:p-10 md:w-2/4"
                  />
                  <span className=" font-para">
                    Crafting user-friendly websites with creativity and
                    functionality. I blend design elements seamlessly,
                    prioritizing aesthetics and usability for an engaging online
                    experience.
                  </span>
                </div>
              </div>
              <div className="text-white flex flex-col justify-center items-center p-10 md:p-40 md:w-2/6">
                <h1 className=" mx-1 text-3xl mb-5 text-[#ff4b56] text-center font-head">
                  Web Development
                </h1>
                <div className=" bg-[#ff4b56] p-5  rounded-lg flex flex-col justify-center items-center">
                  <img
                    src="./webImg/s2.png"
                    alt=""
                    className=" md:p-10 md:w-2/4"
                  />
                  <span className=" font-para">
                    In web development with the MERN stack, I code dynamic and
                    responsive websites. From MongoDB to React, I craft
                    full-stack solutions for optimal user experiences and robust
                    online presence.
                  </span>
                </div>
              </div>
              <div className="text-white flex flex-col justify-center items-center p-10 md:p-40 md:w-2/6">
                <h1 className=" mx-5 text-3xl mb-5 text-[#ff4b56] font-head text-center">
                  Adaptiveness
                </h1>
                <div className=" bg-[#ff4b56] p-5 rounded-lg flex flex-col justify-center items-center">
                  <img
                    src="./webImg/s3.png"
                    alt=""
                    className=" md:p-10 md:w-2/4"
                  />

                  <span className=" font-para">
                    I possess a quick adaptability to various programming
                    languages, allowing me to efficiently navigate and
                    contribute across diverse tech stacks and projects.
                  </span>
                </div>
              </div>
            </Slider>
          </div>
        ) : (
          <div className="flex justify-center gap-10">
            <div className="text-white flex flex-col justify-center items-center p-10 md:p-40 md:w-2/6 lg:p-5 lg:w-1/5 lg:hover:scale-110 lg:transition-all lg:duration-1000 ">
              <div className=" bg-[#ff4b56] p-5 rounded-lg flex flex-col justify-center items-center lg:min-h-[31rem]">
                <h1 className=" mx-5 text-3xl mb-5 text-[#23253a] font-head  text-center lg:text-2xl lg:mx-0 lg:mb-0">
                  Web design
                </h1>
                <img
                  src="./webImg/s1.png"
                  alt=""
                  className=" md:p-10 md:w-2/4 lg:w-11/12"
                />
                <span className=" font-para lg:text-sm">
                  Crafting user-friendly websites with creativity and
                  functionality. I blend design elements seamlessly,
                  prioritizing aesthetics and usability for an engaging online
                  experience.
                </span>
              </div>
            </div>
            <div className="text-white flex flex-col justify-center items-center p-10 md:p-40 md:w-2/6 lg:p-5 lg:w-1/5 lg:hover:scale-110 lg:transition-all lg:duration-1000">
              <div className=" bg-[#ff4b56] p-5  rounded-lg flex flex-col justify-center items-center lg:min-h-[31rem]">
                <h1 className=" mx-1 text-3xl mb-5 text-[#23253a] text-center font-head lg:text-2xl lg:mx-0 lg:mb-0">
                  Web Development
                </h1>
                <img
                  src="./webImg/s2.png"
                  alt=""
                  className=" md:p-10 md:w-2/4 lg:w-11/12"
                />
                <span className=" font-para lg:text-sm">
                  In web development with the MERN stack, I code dynamic and
                  responsive websites. From MongoDB to React, I craft full-stack
                  solutions for optimal user experiences and robust online
                  presence.
                </span>
              </div>
            </div>
            <div className="text-white flex flex-col justify-center items-center p-10 md:p-40 md:w-2/6 lg:p-5 lg:w-1/5 lg:hover:scale-110 lg:transition-all lg:duration-1000 ">
              <div className=" bg-[#ff4b56] p-5 rounded-lg flex flex-col justify-center items-center lg:min-h-[31rem]">
                <h1 className=" mx-5 text-3xl mb-5 text-[#23253a] font-head text-center lg:text-2xl lg:mx-0 lg:mb-0">
                  Adaptiveness
                </h1>
                <img
                  src="./webImg/s3.png"
                  alt=""
                  className=" md:p-10 md:w-2/4 lg:w-11/12"
                />

                <span className=" font-para lg:text-sm">
                  I possess a quick adaptability to various programming
                  languages, allowing me to efficiently navigate and contribute
                  across diverse tech stacks and projects.
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default KeySkills;
