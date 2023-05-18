import React from "react";
import Image from "next/image";
import { PhotoArrow } from "@/illustrations/PhotoArrow";
import { WorkArrow } from "@/illustrations/WorkArrow";
import { aboutContent } from "@/text";
import { GrGithub, GrLinkedin } from "react-icons/gr";
import { BsFillPersonLinesFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="w-full md:h-screen md:mb-40">
      <div className="md:flex justify-between">
        <div className="hidden md:flex flex-col items-center mt-20">
          <PhotoArrow className="h-40 rotate-90 ml-16" />
          <p className="text-custom-orange italic text-2xl text-right ml-12">
            / *currently learning Typescript, Next and Data structures */
          </p>
        </div>
        <Image
          src="/../public/assets/about.jpg"
          alt="logo"
          width="600"
          height="400"
          className="grayscale hover:grayscale-0 -mt-20 w-full md:max-w-3xl md:mx-12 md:mt-10"
        />
      </div>
      <div className="flex justify-end items-center">
        <div className="hidden md:block md:w-96">
          <WorkArrow />
        </div>
        <div className="flex flex-col items-start mt-4 mr-4 ml-4 md:items-end md:mr-12 md:ml-16">
          <p className="text-custom-lilac text-4xl">001</p>
          <p className="text-custom-black text-6xl md:text-7xl">ABOUT</p>
          <div className="w-full md:max-w-xl">
            {aboutContent[0].text.split("\n").map((paragraph) => {
              return (
                <p className="text-custom-black text-justify md:text-right mb-3">
                  {paragraph}
                </p>
              );
            })}
          </div>
          <div className="flex w-36 justify-between">
            <a href="https://github.com/jesicayu" target="_blank">
              <GrGithub size={36} />
            </a>
            <a href="https://www.linkedin.com/in/jesica-yu/" target="_blank">
              <GrLinkedin size={36} />
            </a>
            <BsFillPersonLinesFill size={36} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
