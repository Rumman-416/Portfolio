import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";


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
            <img src="./Logo/react.png" alt="" />
          </div>
          <div className="  hover:scale-125">
            <img src="./Logo/njs.png" alt="" />
          </div>
          <div className=" hover:scale-125">
          <img src="./Logo/mdb.png" alt=""className=" h-10" />
            
          </div>
          <div className=" bg-white hover:scale-125">
          <img src="./Logo/ex.png" alt="" />
            
          </div>
          <div className="  hover:scale-125">
          <img src="./Logo/html.png" alt="" />
            
          </div>
          <div className="  hover:scale-125">
          <img src="./Logo/css.png" alt="" />
            
          </div>
          <div className="  hover:scale-125">
          <img src="./Logo/js.png" alt="" />
          
          </div>
          <div className="  hover:scale-125">
          <img src="./Logo/tailwind.png" alt="" />
           
          </div>
          <div className="  hover:scale-125">
          <img src="./Logo/c.png" alt="" />

          </div>
          <div className="  hover:scale-125">
          <img src="./Logo/cp.png" alt="" />

          </div>
          <div className="  hover:scale-125">
          <img src="./Logo/csharp.png" alt="" />

          </div>
          <div className="  hover:scale-125">
          <img src="./Logo/mysql.png" alt="" />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Lang;
