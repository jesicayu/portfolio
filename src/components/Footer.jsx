import { Logo } from "@/illustrations/Logo";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between border-custom-black dark:border-custom-dark-white border-t-2 px-8 md:px-16 py-8">
      <div className="flex md:w-1/2">
        <div className="relative top-1.5">
        <Logo className="w-8" />
         
        </div>
        <p className="font-extralight text-custom-black dark:text-custom-dark-white md:w-1/2 ml-4">
          software developer solving problems with a systematic mindset and an
          architect's eye for detail.
        </p>
      </div>

      <div className="flex mt-4 items-center md:mt-0">
        <p className="text-sm text-custom-black dark:text-custom-dark-white  md:text-base">Website illustrated, designed and built by Jesica Yu.</p>
      </div>
    </div>
  );
};

export default Footer;
