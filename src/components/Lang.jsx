import React from "react";
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
} from "devicons-react";

const Lang = () => {
  return (
    <div>
      <div className=" font-head flex gap-5 flex justify-center">
        <button
          className="text-lg bg-[#ff4b56] h-10 p-2 flex items-center justify-center  rounded-lg border border-[#ff4b56] hover:bg-transparent hover:text-white"
          style={{ boxShadow: "1.7px 1.7px 15px #ff4b56" }}
        >
          Download Resume 📋
        </button>

        <a href="https://github.com/Rumman-416">
          <button
            className=" text-lg bg-yellow-400 h-10 w-22 p-2 flex items-center justify-center rounded-lg hover:bg-transparent hover:text-white"
            style={{ boxShadow: "1.7px 1.7px 15px #facc15" }}
          >
            Git <img src="./StartImg/github1.png" className="h-7 px-3" />
          </button>
        </a>
      </div>
      <div className="flex justify-center flex-col items-center h-52 my-28">
        <h1 className="text-white text-3xl font-head mb-10">known Languages</h1>
        <div className="flex gap-5 flex-wrap justify-center w-[80%]">
          <ReactOriginalWordmark size="60" />
          <NodejsOriginalWordmark size="60" />
          <MongodbOriginalWordmark size="60" />
          <div className=" bg-white">
            <ExpressOriginal size="60" />
          </div>
          <JavascriptOriginal size="60" />
          <MysqlOriginalWordmark size="60" />
          <JavaOriginalWordmark size="60" />
          <COriginal size="60" />
          <CsharpOriginal size="60" />
          <Html5OriginalWordmark size="60" />
          <Css3Original size="60" />
        </div>
      </div>
    </div>
  );
};

export default Lang;
