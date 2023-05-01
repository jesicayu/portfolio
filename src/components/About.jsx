import React from "react";
import Image from "next/image";
import { PhotoArrow } from "@/illustrations/PhotoArrow";
import { WorkArrow } from "@/illustrations/WorkArrow";  

const About = () => {
  return (
    <div className="w-full md:h-screen">
      <div className="md:flex justify-between">
        <div className="hidden md:flex flex-col items-center mt-20">
          <PhotoArrow className="h-40 rotate-90 ml-16" />
          <div className="text-custom-orange italic text-2xl text-right ml-10">
            / *currently learning Typescript, Next and Data structures */
          </div>
        </div>
        <Image
          src="/../public/assets/about.jpg"
          alt="logo"
          width="650"
          height="400"
          className="grayscale hover:grayscale-0 -mt-20 mx-auto md:m-8"
        />
      </div>
      <div className="flex justify-end items-start ">
        <div className="hidden md:block md:w-96">
          <WorkArrow />
        </div>
        <div className="flex flex-col items-end mr-8 ml-48 ">
          <div className="flex flex-col items-end">
            <div className="text-custom-lilac text-4xl">001</div>
            <div className="text-custom-black text-8xl">ABOUT</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

