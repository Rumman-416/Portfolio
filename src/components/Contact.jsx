import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center items-center ">
      <img
        src="./StartImg/space.png"
        alt="img"
        className=" w-full blur-sm absolute -z-10  mt-20 opacity-0"
      />
      <form
        action=""
        className="  text-white bg-opacity-30  bg-[#ff4b56] flex justify-center items-center flex-col  w-5/6 h-96 gap-10 rounded-lg border border-[#ff4b56] font-para"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <span className=" gap-10">
          <label htmlFor="" className=" mx-6">
            Name:
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="mx-2 bg-black bg-opacity-50 border rounded-md p-1"
          />
          <br />
        </span>
        <span className=" ">
          <label htmlFor="" className="mx-6">
            Email:
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="mx-2 bg-black bg-opacity-50 border rounded-md p-1"
          />
          <br />
        </span>
        <span className="flex justify-center ">
          <label htmlFor="" className="mx-3">
            Message:
          </label>
          <textarea
            type=""
            rows="4"
            cols="20"
            placeholder="Enter your message"
            className="mx-2 bg-black bg-opacity-50 border rounded-md p-2"
          />
          <br />
        </span>
        <button className=" bg-orange-400 w-20 h-8"> Send </button>
      </form>
    </div>
  );
};

export default Contact;
