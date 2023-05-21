import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between border-custom-black border-t-2 px-8 md:px-16 py-8">
      <div className="flex md:w-1/2">
        <div className="relative top-1.5">
          <Image
            src="/../public/assets/logo.png"
            alt="logo"
            width="40"
            height="60"
          />
        </div>
        <p className="font-extralight md:w-1/2 ml-4">
          software developer solving problems with a systematic mindset and an
          architect's eye for detail.
        </p>
      </div>

      <div className="flex mt-4 items-center md:mt-0">
        <p className="text-sm md:text-base">Website illustrated, designed and built by Jesica Yu.</p>
      </div>
    </div>
  );
};

export default Footer;
