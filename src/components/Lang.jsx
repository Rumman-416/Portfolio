import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  ReactOriginalWordmark,
  NodejsOriginalWordmark,
  MongodbOriginalWordmark,
  ExpressOriginal,
  JavascriptOriginal,
  MysqlOriginalWordmark,
  JavaOriginalWordmark,
  COriginal,
  CsharpOriginal,
  Html5OriginalWordmark,
  Css3Original,
  TailwindcssPlain,
} from "devicons-react";

const Lang = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <div>
      <div className="flex justify-center flex-col items-center h-52 my-28">
        <h1 className=" text-3xl font-head mb-10 text-[#ff4b56]">
          KNOWN LANGUAGES
        </h1>
        <div
          className="flex gap-5 flex-wrap justify-center w-[80%]"
          data-aos="fade-up"
        >
          <div className="  hover:scale-125">
            <ReactOriginalWordmark size="60" />
          </div>
          <div className="  hover:scale-125">
            <NodejsOriginalWordmark size="60" />
          </div>
          <div className=" hover:scale-125">
            <MongodbOriginalWordmark size="60" />
          </div>
          <div className=" bg-white hover:scale-125">
            <ExpressOriginal size="60" />
          </div>
          <div className="  hover:scale-125">
            <TailwindcssPlain size="60" />
          </div>
          <div className="  hover:scale-125">
            <JavascriptOriginal size="60" />
          </div>
          <div className="  hover:scale-125">
            <MysqlOriginalWordmark size="60" />
          </div>
          <div className="  hover:scale-125">
            <JavaOriginalWordmark size="60" />
          </div>
          <div className="  hover:scale-125">
            <COriginal size="60" />
          </div>
          <div className="  hover:scale-125">
            <CsharpOriginal size="60" />
          </div>
          <div className="  hover:scale-125">
            <Html5OriginalWordmark size="60" />
          </div>
          <div className="  hover:scale-125">
            <Css3Original size="60" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lang;
