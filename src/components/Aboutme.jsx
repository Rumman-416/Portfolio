import React from "react";
import Slider from "react-slick";
import Limg from "../img/Elap.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
};

const AboutmeSlider = () => {
  return (
    <div className="p-8">
      <div className="flex mt-20 flex-col  rounded-xl ">
        <img src={Limg} alt="" className="p-10 rounded-[50px]" />
        <div className="overflow-hidden">
          <Slider {...sliderSettings}>
            <div className="text-white  p-10 ">
              <h1 className=" mx-5 text-xl mb-5 text-[#66fcf1]">About me</h1>
              <div className=" bg-[#45a29e] p-5 rounded-lg">
                <span>
                  I'm Rumman Chowdhury, a web developer with a knack for
                  problem-solving and a passion for creating software. I thrive
                  on leading teams to turn ideas into reality, both in the
                  digital world and on the football field. These two passions
                  fuel my daily journey.
                </span>
              </div>
            </div>
            <div className="text-white  p-10 ">
              <h1 className=" mx-5 text-xl mb-5 text-[#66fcf1]">Experience</h1>
              <div className=" bg-[#45a29e] p-5  rounded-lg">
                <span>
                  I've led diverse projects, spanning web development, web
                  design, game development, and computer applications. These
                  experiences have nurtured my leadership abilities and my
                  passion for creating software. It's a world where
                  problem-solving and innovation drive me, much like the thrill
                  of playing football on the field.
                </span>
              </div>
            </div>
            <div className="text-white  p-10 ">
              <h1 className=" mx-5 text-xl mb-5 text-[#66fcf1]">Education</h1>
              <div className=" bg-[#45A29E] p-5 rounded-lg">
                <span>
                  College : Guru Nanak College
                  <br />
                  UG : Sahyog college
                </span>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default AboutmeSlider;
