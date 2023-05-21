import React from "react";
import { useInput } from "@/hooks/useInput";
import { NewPageArrow } from "@/illustrations/NewPageArrow";
import { GrGithub, GrLinkedin } from "react-icons/gr";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { ContactArrow } from "../illustrations/ContactArrow";

const Contact = () => {
  const name = useInput();
  const email = useInput();
  const message = useInput();

  return (
    <div id="contact" className="w-full flex flex-col md:flex-row relative">
      <div className="flex flex-col ml-4 md:ml-0 md:items-end md:text-right md:w-2/5 z-20 ">
        <p className="text-custom-black w-1/2 order-2 text-6xl md:text-7xl md:order-1">
          LET'S MEET
        </p>
        <p className="text-custom-lilac order-1 text-4xl">004</p>
        <p className="font-extralight italic text-md  order-3 mr-4 md:mr-0 md:w-1/2 md:mt-20 ">
          {" "}
          /* You are one step closer to creating something amazing together! */{" "}
        </p>
        <div className="flex w-40 justify-between mt-4 order-4">
          <a href="https://github.com/jesicayu" target="_blank">
            <GrGithub size={36} />
          </a>
          <a href="https://www.linkedin.com/in/jesica-yu/" target="_blank">
            <GrLinkedin size={36} />
          </a>
          <BsFillPersonLinesFill size={36} />
        </div>
      </div>
      <div className=" border-custom-black border-t-2 mt-12 md:mt-0 md:border-l-2 md:w-3/5 md:ml-16 z-0">
        <form
          target="_blank"
          action="https://formsubmit.co/2d726ec7dfb5839ba6855cdd508e9a68"
          method="POST"
          className="flex flex-col text-xl"
        >
          <div className="flex border-custom-black border-b-2 ">
            <label className="my-1 mx-2">NAME:</label>
            <input
              className="w-full bg-custom-base font-extralight focus:outline-none focus:bg-custom-orange/50"
              type="text"
              name="name"
              {...name}
            />
          </div>
          <div className="flex border-custom-black border-b-2">
            <label className="my-1 mx-2">EMAIL: </label>
            <input
              className="w-full bg-custom-base font-extralight focus:outline-none focus:bg-custom-orange/50 text-custom-black"
              type="email"
              name="email"
              {...email}
            />
          </div>
          <div className="flex border-custom-black">
            <label className="my-1 mx-2">MESSAGE: </label>
            <textarea
              rows="12"
              name="message"
              className="w-full bg-custom-base font-extralight focus:outline-none text-custom-black mt-1 mr-4"
              {...message}
            />
          </div>
          <div className="w-full flex justify-end">
          <button type="submit" className="flex items-end">
            <p className="font-extralight text-sm md:text-base mb-2">SUBMIT</p>
            <NewPageArrow className="w-24 h-24 -rotate-90 m-2" />
          </button>
        </div>
        </form>
        
      </div>
      <ContactArrow className="absolute hidden lg:block w-2/5 bottom-0 left-20 z-10" />
    </div>
  );
};

export default Contact;
