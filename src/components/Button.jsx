import React from "react";

const Button = () => {
  return (
    <div>
      <div className=" font-head flex gap-5 flex justify-center my-20 md:my-10">
        <button
          className="text-lg bg-[#ff4b56] h-10 p-2 flex items-center justify-center  rounded-lg border border-[#ff4b56] hover:bg-transparent hover:text-white md:text-base"
          style={{ boxShadow: "1px 1px 5px #ff4b56" }}
        >
          Download Resume 📋
        </button>

        <a href="https://github.com/Rumman-416">
          <button
            className=" text-lg bg-yellow-400 h-10 w-22 p-2 flex items-center justify-center rounded-lg hover:bg-transparent hover:text-white"
            style={{ boxShadow: "1px 1px 5px #facc15" }}
          >
            Git <img src="./webImg/github.png" className="h-7 px-3" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Button;
