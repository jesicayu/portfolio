import { PhotoArrow } from "@/illustrations/PhotoArrow";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="w-full md:h-screen ">
      <div className="flex justify-between">
        <div className="hidden md:flex flex-col items-center mt-20 ">
        <PhotoArrow className="h-40 rotate-90 ml-16"/>
        <div className="text-custom-orange italic text-2xl text-right ml-4">/
        *currently learning Typescript, Next and Data structures*/</div>
        </div>
        <div className="flex flex-col items-end m-8">
          <Image
            src="/../public/assets/about.jpg"
            alt="logo"
            width="650"
            height="400"
            className="grayscale hover:grayscale-0"
          />
          <div className="text-custom-lilac text-4xl mt-4">001</div>
          <div className="text-custom-black text-8xl mt-2">ABOUT</div>
        </div>
      </div>
    </div>
  );
};

export default About;
