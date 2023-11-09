import React from "react";
import image1 from "../project_image/DeadRunner.png";

const Projects = () => {
  const projectImg = [
    {
      id: 1,
      image: { image1 },
    },
    {
      id: 2,
      // image: require("../project_image/Heritage.png"),
    },
  ];
  return (
    <div className=" flex justify-center">
      <div className="flex justify-center items-center flex-col w-4/5">
        <h1 className="text-3xl text-white">Projects</h1>
        {projectImg.map((image) => {
          <img key={image.id} src={image.image} alt="" />;
        })}
        <div className="">
          <img src="" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
