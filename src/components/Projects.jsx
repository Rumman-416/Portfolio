import React, { useEffect, useState } from "react";
import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 15, // max tilt rotation (degrees)
  perspective: 2000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
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
      images: "./project_image/finance.png",
      title: "FullStack Development",
      Languages: "MERN, TAilwind",
      type: "webdev",
      description:
        "Introducing a finance tracker built with the MERN stack, designed to streamline financial management. This comprehensive tool not only helps you manage your finances but also leverages current data to predict future expenses. Additionally, it intelligently suggests insurance options tailored to your income, providing a holistic approach to financial well-being.",
    },
    {
      id: 2,
      images: "./project_image/india.png",
      title: "Web Development",
      Languages: "Html,Css,Js",
      type: "webdev",
      description:
        "Namaste India, my award-winning website, beautifully showcases the rich heritage, culture, and wonders of India. Crafted with HTML, CSS, and JS, its stunning design and visual effects secured first place in a prestigious website design competition, reflecting my passion for blending technology with creativity.",
    },
    {
      id: 3,
      images: "./project_image/movie.png",
      title: "Web Application",
      Languages: "Vb.net",
      type: "webdev",
      description:
        "Experience seamless movie booking with 'Movie Dekho,' a VB.NET web application. Book seats, purchase beverages, and explore movie details, including descriptions and trailers. This user-friendly platform integrates convenience into your cinematic journey, enhancing the way you enjoy movies.",
    },
    {
      id: 4,
      images: "./project_image/spotify.png",
      title: "Web Development",
      Languages: "Html,Css,Js",
      type: "webdev",
      description:
        "Discover and download music seamlessly with my Spotify clone. This HTML, CSS, and JS-powered web application offers a diverse collection of artists and genres, providing a user-friendly experience akin to the popular music streaming platform.",
    },
    {
      id: 5,
      images: "./project_image/deadRunner.png",
      title: "Game Development",
      Languages: "Unity 3D Engine,C#",
      type: "gamedev",
      description:
        "Dead Runners, an exhilarating Unity 3D game reminiscent of Subway Surfers, pushes players to navigate obstacles while sprinting. Playable on Android and desktop, this dynamic experience reflects my passion for game development and cross-platform accessibility. Notably, it clinched victory in two competitions, showcasing its impact and recognition.",
    },
    {
      id: 6,
      images: "./project_image/noEscape.png",
      title: "Game Development",
      Languages: "Unity 3D Engine,C#",
      type: "gamedev",
      description:
        "No Escape triumphed as the runner-up in a fiercely competitive college game development competition. With its immersive storyline and captivating gameplay, players delve into a haunted house, racing against time to unlock mysteries, find keys, and evade the chilling presence of a vengeful ghost to secure their ultimate escape.",
    },
  ];

  const [isExpanded, setExpanded] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState(projectImg);
  const [activeButton, setActiveButton] = useState(null);

  const filterProjects = (type) => {
    const filtered = projectImg.filter((project) => project.type === type);
    setFilteredProjects(filtered);
    setExpanded(true);
    setActiveButton(type);
  };
  useEffect(() => {
    filterProjects("webdev");
  }, []);

  return (
    <div id="project" className="flex justify-center">
      <div className="flex justify-center items-center flex-col w-4/5">
        <h1 className="text-4xl text-[#ff4b56] font-head">PROJECTS</h1>
        <div className="flex justify-center items-center gap-20 m-10">
          <button
            className={`border-[#ff4b56] border-2 text-white w-32 h-12 rounded-xl ${
              activeButton === "webdev"
                ? "bg-[#ff4b56] text-white"
                : "text-[#ff4b56] "
            }`}
            onClick={() => filterProjects("webdev")}
          >
            Web Dev
          </button>
          <button
            className={`border-[#ff4b56] border-2 text-white w-32 h-12 rounded-xl ${
              activeButton === "gamedev"
                ? "bg-[#ff4b56] text-white"
                : "text-[#ff4b56] "
            }`}
            onClick={() => filterProjects("gamedev")}
          >
            Game Dev
          </button>
        </div>
        {filteredProjects.map((projectContent) => (
          <div
            key={projectContent.id}
            className="my-10 xl:flex xl:w-10/12 xl:justify-center xl:items-center "
          >
            <Tilt options={defaultOptions} style={{}}>
              <img
                src={projectContent.images}
                alt=""
                className="my-5 xl:w-[350rem]"
              />
            </Tilt>
            <div
              className="bg-[#000] bg-opacity-50 p-5 backdrop:blur-xl rounded-lg xl:mx-10 lg:h-auto xl:h-auto"
              style={{ boxShadow: "1.7px 1.7px 15px #ff4b56" }}
            >
              <h1 className="text-[#ff4b56] text-4xl my-5">
                {projectContent.title}
              </h1>
              <h1 className="text-[#ff4b56] text-xl my-4">
                Languages/Technologies:-{projectContent.Languages}
              </h1>
              <p className="text-white font-para">
                {projectContent.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
