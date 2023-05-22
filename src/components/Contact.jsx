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
    <div
      id="contact"
      className="w-full flex flex-col scroll-mt-32 md:flex-row relative"
    >
      <div className="flex flex-col ml-4 md:ml-0 md:items-end md:text-right md:w-2/5 z-20 ">
        <p className="text-custom-black dark:text-custom-dark-white w-1/2 order-2 text-6xl md:text-7xl md:order-1">
          LET'S MEET
        </p>
        <p className="text-custom-lilac order-1 text-4xl">004</p>
        <p className="font-extralight italic text-custom-black dark:text-custom-dark-white text-md  order-3 mr-4 md:mr-0 md:w-1/2 md:mt-20 ">
          {" "}
          /* You are one step closer to creating something amazing together! */{" "}
        </p>
        <div className="flex w-40 justify-between mt-4 order-4">
          <a href="https://github.com/jesicayu" target="_blank">
            <GrGithub size={36} className="fill-custom-black dark:fill-custom-dark-white"/>
          </a>
          <a href="https://www.linkedin.com/in/jesica-yu/" target="_blank">
            <GrLinkedin size={36} className="fill-custom-black dark:fill-custom-dark-white"/>
          </a>
          <a
            href="https://drive.google.com/file/d/17rATEnUgBMVAUVR_WxBnTJUXBTk4NrJK/view?usp=share_link"
            target="_blank"
          >
            <BsFillPersonLinesFill size={36} className="fill-custom-black dark:fill-custom-dark-white" />
          </a>
        </div>
      </div>
      <div className="border-custom-black dark:border-custom-dark-white border-t-2 mt-12 md:mt-0 md:border-l-2 md:w-3/5 md:ml-16 z-0">
        <form
          target="_blank"
          action="https://formsubmit.co/2d726ec7dfb5839ba6855cdd508e9a68"
          method="POST"
          className="flex flex-col text-xl"
        >
          <div className="flex border-custom-black dark:border-custom-dark-white border-b-2 ">
            <label className="my-1 mx-2 text-custom-black dark:text-custom-dark-white ">NAME:</label>
            <input
              className="w-full text-custom-black dark:text-custom-dark-white bg-custom-base dark:bg-custom-dark-base font-extralight focus:outline-none focus:bg-custom-orange/50"
              type="text"
              name="name"
              {...name}
            />
          </div>
          <div className="flex  border-custom-black dark:border-custom-dark-white border-b-2">
            <label className="my-1 mx-2 text-custom-black dark:text-custom-dark-white ">EMAIL: </label>
            <input
              className="w-full text-custom-black dark:text-custom-dark-white bg-custom-base dark:bg-custom-dark-base font-extralight focus:outline-none focus:bg-custom-orange/50"
              type="email"
              name="email"
              {...email}
            />
          </div>
          <div className="flex border-custom-black dark:border-custom-dark-white">
            <label className="my-1 mx-2 text-custom-black dark:text-custom-dark-white ">MESSAGE: </label>
            <textarea
              rows="12"
              name="message"
              className="w-full text-custom-black dark:text-custom-dark-white bg-custom-base dark:bg-custom-dark-base font-extralight focus:outline-none  mt-1 mr-4"
              {...message}
            />
          </div>
          <div className="w-full flex justify-end">
            <button type="submit" className="flex items-end">
              <p className="font-extralight text-sm md:text-base mb-2 text-custom-black dark:text-custom-dark-white ">
                SUBMIT
              </p>
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
