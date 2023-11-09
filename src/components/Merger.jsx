import React from "react";

const Merger = () => {
  return (
    <div>
      <div className="relative w-full max-w-lg">
        <div className="fixed top-80 left-16 w-48 h-48 rounded-full bg-[#ff00c1] mix-blend-screen filter blur-xl z-10 opacity-20 animate-merge"></div>
        <div className="fixed top-80 right-16 w-48 h-48 rounded-full bg-[#9600ff] mix-blend-screen filter blur-xl z-10 opacity-20 animate-merge animation-delay-2000"></div>
        <div className="fixed top-96 left-28 w-48 h-48 rounded-full bg-[#4900ff] mix-blend-screen filter blur-xl z-10 opacity-20 animate-merge animation-delay-4000"></div>
      </div>
    </div>
  );
};

export default Merger;
