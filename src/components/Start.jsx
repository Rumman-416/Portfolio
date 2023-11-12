import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Start = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const textX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const text_X = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center font-main"
    >
      <motion.div
        style={{ y: textY }}
        className=" font-bold text-white text-5xl relative z-10"
      >
        <div className="w-full p-2 text-white text-center text-4xl mt-5">
          Hi myself <span className="text-[#66fcf1]">Rumman Chowdhury</span>
          and,
        </div>
        <div className="flex justify-center flex-col items-center">
          <TypeAnimation
            sequence={[
              "I am a FrontEnd Developer",
              1000,
              "I am a BackEnd Developer",
              1000,
              "I am a Web Designer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: ".55em", display: "inline-block" }}
            repeat={Infinity}
            className="text-white mt-1 mb-10 p-1"
          />
        </div>
      </motion.div>
      {/* <motion.div
        className=" absolute inset-0 z-30"
        style={{
          backgroundImage: `url(/StartImg/bldg.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          x: textX,
        }}
      />
      <motion.div
        className=" absolute inset-0 z-30"
        style={{
          backgroundImage: `url(/StartImg/bldgL.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          x: text_X,
        }}
      /> */}
      <motion.div
        className=" absolute inset-0  z-0"
        style={{
          backgroundImage: `url(/StartImg/bluespace.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
          backgroundAttachment: "fixed",
        }}
      />

      <div
        className=" absolute inset-0  z-50"
        style={{
          backgroundImage: `url(/StartImg/bottom.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
};

export default Start;
