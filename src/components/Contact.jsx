import React from "react";
import emailjs from "emailjs-com";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_huane2n",
      "template_9uj7ult",
      e.target,
      "PkpEyBmnM1Ul5ZE34"
    );
  };
  return (
    <div
      id="contact"
      className="flex justify-center items-center flex-col gap-5 my-10 "
    >
      <h1 className=" font-head text-3xl text-[#ff4b56] md:text-4xl">
        Contact me
      </h1>
      <div className="  text-white bg-opacity-30  bg-[#ff4b56] w-[85%] h-auto py-5 rounded-lg border border-[#ff4b56] font-para max-w-[60rem] md:w-4/6 lg:justify-around lg:flex-row">
        <div className="mb-4 mx-5 flex items-center gap-1">
          <IoIosMail className=" text-[#ff4b56] h-10 w-10 " />
          <h1 className=" text-sm md:text-lg">chowdhuryrumman416@gmail.com</h1>
        </div>
        <div className="flex gap-4 mx-8 mb-5">
          <a href="https://www.linkedin.com/in/rumman-chowdhury-211443287?">
            <FaLinkedin className=" text-[#ff4b56] h-10 w-10" />
          </a>
          <a href="https://www.instagram.com/rumman__416/">
            <FaInstagram className=" text-[#ff4b56] h-10 w-10" />
          </a>
          <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Frumman_416">
            <FaXTwitter className=" text-[#ff4b56] h-10 w-10" />
          </a>
          <a href="https://github.com/Rumman-416">
            <FaGithub className=" text-[#ff4b56] h-10 w-10" />
          </a>
        </div>
        <div className="flex justify-center items-center ">
          <form
            className="flex flex-col justify-center items-center gap-8"
            onSubmit={sendEmail}
          >
            <span className=" gap-10">
              <label htmlFor="" className=" mx-4 ">
                Name:
              </label>
              <input
                type="text"
                name="Name"
                placeholder="Enter your name"
                required
                className=" bg-black bg-opacity-50 border rounded-md p-1 md:w-[24rem]"
              />
              <br />
            </span>
            <span className=" ">
              <label htmlFor="" className="mx-4">
                Email:
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className=" bg-black bg-opacity-50 border rounded-md p-1 md:w-[24rem]"
              />
              <br />
            </span>
            <span className="">
              <label htmlFor="" className="mx-2">
                Subject:
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Enter your subject"
                className=" bg-black bg-opacity-50 border rounded-md p-1 md:w-[24rem]"
              />
              <br />
            </span>
            <span className="flex justify-center mx-2">
              <label htmlFor="" className="">
                Message:
              </label>
              <textarea
                name="message"
                rows="4"
                cols="19"
                placeholder="Enter your message"
                required
                className="mx-2 bg-black bg-opacity-50 border rounded-md p-2 md:w-[24rem]"
              />
              <br />
            </span>
            <button
              className="text-lg bg-[#ff4b56] h-10 p-2 flex items-center justify-center  rounded-lg border border-[#ff4b56] hover:bg-transparent hover:text-white w-24 "
              type="submit"
            >
              Send
            </button>
          </form>
          <img
            src="./webImg/earth.png"
            alt="img"
            className=" opacity-0 h-0 w-0 xl:opacity-100 xl:w-[23rem] xl:h-[23rem] lg:"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
