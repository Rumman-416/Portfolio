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
import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const Lang = () => {
  return (
    <div>
      <div className="flex justify-center flex-col items-center h-52 my-28">
        <h1 className="text-white text-2xl ">known Languages</h1>
        <div className="flex gap-5 flex-wrap justify-center w-[80%]">
          <Tilt options={defaultOptions} style={{ height: 60, width: 60 }}>
            <ReactOriginalWordmark size="60" />
          </Tilt>
          <Tilt
            options={defaultOptions}
            style={{ height: 60, width: 60 }}
            className="bg-white"
          >
            <NodejsOriginalWordmark size="60" />
          </Tilt>
          <Tilt options={defaultOptions} style={{ height: 60, width: 60 }}>
            <MongodbOriginalWordmark size="60" />
          </Tilt>
          <Tilt
            options={defaultOptions}
            style={{ height: 60, width: 60 }}
            className="bg-white"
          >
            <ExpressOriginal size="60" />
          </Tilt>
          <Tilt options={defaultOptions} style={{ height: 60, width: 60 }}>
            <JavascriptOriginal size="60" />
          </Tilt>
          <Tilt options={defaultOptions} style={{ height: 60, width: 60 }}>
            <MysqlOriginalWordmark size="60" />
          </Tilt>
          <Tilt options={defaultOptions} style={{ height: 60, width: 60 }}>
            <JavaOriginalWordmark size="60" />
          </Tilt>{" "}
          <Tilt options={defaultOptions} style={{ height: 60, width: 60 }}>
            <COriginal size="60" />
          </Tilt>
          <Tilt options={defaultOptions} style={{ height: 60, width: 60 }}>
            <CsharpOriginal size="60" />
          </Tilt>{" "}
          <Tilt options={defaultOptions} style={{ height: 60, width: 60 }}>
            <Html5OriginalWordmark size="60" />
          </Tilt>{" "}
          <Tilt options={defaultOptions} style={{ height: 60, width: 60 }}>
            <Css3Original size="60" />
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default Lang;
