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
      <div className="flex justify-center flex-col items-center h-52 my-28">
        <h1 className="text-white text-2xl ">known Languages</h1>
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
