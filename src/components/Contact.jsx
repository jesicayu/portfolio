import React from "react";
import { useInput } from "@/hooks/useInput";
import { NewPageArrow } from "@/illustrations/NewPageArrow";
import { GrGithub, GrLinkedin } from "react-icons/gr";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Contact = () => {
  const name = useInput();
  const email = useInput();
  const message = useInput();

  return (
    <div className="w-full flex">
      <div className="flex flex-col items-end text-right w-2/5">
        <p className="text-custom-black w-1/2 text-6xl md:text-7xl ">
          LET'S MEET
        </p>
        <p className="text-custom-lilac text-4xl">004</p>
        <p className="font-extralight italic text-md text-md w-1/2 mt-20 ">
          {" "}
          /* You are one step closer to creating something amazing together! */{" "}
        </p>
        <div className="flex w-40 justify-between mt-4">
          <a href="https://github.com/jesicayu" target="_blank">
            <GrGithub size={36} />
          </a>
          <a href="https://www.linkedin.com/in/jesica-yu/" target="_blank">
            <GrLinkedin size={36} />
          </a>
          <BsFillPersonLinesFill size={36} />
        </div>
      </div>
      <div className="flex flex-col border-custom-black border-t-2 border-l-2 w-3/5 ml-12">
        <form className="flex flex-col text-xl">
          <div className="flex border-custom-black border-b-2 ">
            <label className="m-1">NAME:</label>
            <input
              className="w-full bg-custom-base font-extralight focus:outline-none focus:bg-custom-orange/50"
              type="text"
              {...name}
            />
          </div>
          <div className="flex border-custom-black border-b-2">
            <label className="m-1">EMAIL: </label>
            <input
              className="w-full bg-custom-base font-extralight focus:outline-none focus:bg-custom-orange/50 text-custom-black"
              type="email"
              {...email}
            />
          </div>
          <div className="flex border-custom-black">
            <label className="m-1">MESSAGE: </label>
            <textarea
              rows="10"
              className="w-full bg-custom-base font-extralight focus:outline-none text-custom-black mt-1 mr-4"
              {...message}
            />
          </div>
        </form>
        <div className="w-full flex justify-end items-end">
          <p className="font-extralight text-sm md:text-base mb-2">
            SUBMIT
          </p>
          <NewPageArrow className="w-24 h-24 -rotate-90 m-2" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
