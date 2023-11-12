import React from "react";
import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 15, // max tilt rotation (degrees)
  perspective: 2000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.03, // 2 = 200%, 1.5 = 150%, etc..
  speed: 3000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const Projects = () => {
  const projectImg = [
    {
      id: 1,
      images: "./project_image/deadRunner.png",
      title: "anything",
      description:
        "    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 2,
      images: "./project_image/india.png",
      title: "anything",
      description:
        "    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 3,
      images: "./project_image/movie.png",
      title: "anything",
      description:
        "    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 4,
      images: "./project_image/spotify.png",
      title: "anything",

      description:
        "    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];
  return (
    <div className=" flex justify-center">
      <div className="flex justify-center items-center flex-col w-4/5">
        <h1 className="text-3xl text-white">Projects</h1>
        {projectImg.map((projectContent) => (
          <div
            key={projectContent.id}
            className=" bg-[#fff] bg-opacity-20  p-5 my-10 backdrop:blur-xl rounded-lg  "
            style={{ boxShadow: "1.5px 1.5px 13px #66fcf1" }}
          >
            <Tilt options={defaultOptions} style={{}}>
              <img src={projectContent.images} alt="" className="my-5" />
            </Tilt>
            <h1 className="text-[#45A29E] text-4xl my-5">
              {projectContent.title}
            </h1>
            <p className=" text-white">{projectContent.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
