import React, { useEffect } from "react";
import {
  SiPostgresql,
  SiMongodb,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress, 
  SiSequelize,
  SiTypescript,
  SiSocketdotio,
  SiMui,
  SiLaravel
} from "react-icons/si";

import {IoLogoJavascript} from "react-icons/io";

const Skills = () => {
  const icons = ["SiPostgresql", "SiSequelize","SiMongodb", "SiNodedotjs","SiExpress", "SiLaravel", "SiReact", "SiRedux", "IoLogoJavascript", "SiTypescript", "SiTailwindcss","SiMui", "SiSocketdotio"];

  const iconComponents = {
    SiPostgresql: SiPostgresql,
    SiSequelize:SiSequelize,
    SiMongodb: SiMongodb,
    SiNodedotjs:SiNodedotjs,
    SiExpress:SiExpress,
    SiLaravel:SiLaravel,
    SiReact: SiReact,
    SiRedux: SiRedux,
    IoLogoJavascript:IoLogoJavascript,
    SiTypescript:SiTypescript,
    SiTailwindcss: SiTailwindcss,
    SiMui:SiMui,
    SiSocketdotio:SiSocketdotio
  };


  return (
    <>
      <div id="skills" className="scroll-my-32 w-full mb-10 md:mb-20">
        <div className="flex flex-col-reverse ml-4 md:ml-0 md:flex-row md:items-end md:justify-center ">
          <p className="font-extralight italic text-md text-custom-black dark:text-custom-dark-white md:text-2xl md:w-1/6 md:text-right ">
            /* current, but not limited to */{" "}
          </p>
          <div className="flex flex-col-reverse md:flex-row md:items-end">
          <p className="text-custom-black dark:text-custom-dark-white md:text-center text-6xl md:mx-8 md:text-7xl">
            SKILLS
          </p>
          <p className="text-custom-lilac text-4xl ">003</p>
          </div>
        </div>
      </div>
      <div className="overflow-hidden flex-nowrap flex group mb-20 md:mb-40">
        <div className="flex animate-slide group-hover:pause">
        {icons.map((icon, index) => {
          const IconComponent = iconComponents[icon];
          return (
            <div
              key={index}
              className="border-2 border-custom-black dark:border-custom-dark-white w-28 h-28 p-4 flex-none"
            >
              <IconComponent className="fill-custom-black dark:fill-custom-dark-white w-full h-full" />
            </div>
          );
        })}
        </div>
        <div className="flex animate-slide group-hover:pause">
        {icons.map((icon, index) => {
          const IconComponent = iconComponents[icon];
          return (
            <div
              key={index}
              className="border-2 border-custom-black dark:border-custom-dark-white w-28 h-28 p-4 flex-none"
            >
              <IconComponent className="fill-custom-black dark:fill-custom-dark-white w-full h-full" />
            </div>
          );
        })}
        </div>
      </div>
    </>
  );
};

export default Skills;


