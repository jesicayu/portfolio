import React from "react";
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
      <div className="w-full mb-20">
        <div className="flex items-end justify-center">
          <p className="font-extralight italic text-sm md:text-2xl w-1/6 text-right ">
            /* current, but not limited to */{" "}
          </p>
          <p className="text-custom-black text-center text-6xl mx-8 md:text-7xl">
            SKILLS
          </p>
          <p className="text-custom-lilac text-4xl ">003</p>
        </div>
      </div>
      <div className="overflow-hidden flex-nowrap flex">
        <div className="flex animate-slide">
        {icons.map((icon, index) => {
          const IconComponent = iconComponents[icon];
          return (
            <div
              key={index}
              className="border-2 border-custom-black w-28 h-28 p-4 flex-none"
            >
              <IconComponent className="fill-custom-black w-full h-full" />
            </div>
          );
        })}
        </div>
        <div className="flex animate-slide">
        {icons.map((icon, index) => {
          const IconComponent = iconComponents[icon];
          return (
            <div
              key={index}
              className="border-2 border-custom-black w-28 h-28 p-4 flex-none"
            >
              <IconComponent className="fill-custom-black w-full h-full" />
            </div>
          );
        })}
        </div>
      </div>
    
    </>
  );
};

export default Skills;
