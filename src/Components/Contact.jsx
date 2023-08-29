import React from "react";
import SocialLinksmobile from "./SocialLinksmobile";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full bg-gradient-to-b from-black to-gray-800 p-6 text-white"
    >
      <div className="flex flex-col p-5 justify-center max-w-screen-lg mx-auto h-full">
        <div className="py-24">
          <center>
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Contact
            </p>
            <p className="py-2">Submit the form below to get in touch with me</p>
          </center>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/41323a2c-e059-45d3-95c8-147169d125d8"
            method="POST"
            className="flex flex-col w-full sm:w-3/4 md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="6"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
      <SocialLinksmobile />
    </div>
  );
};

export default Contact;
