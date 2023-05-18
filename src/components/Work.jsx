import Image from "next/image";
import React, { useState } from "react";
import { NewPageArrow } from "@/illustrations/NewPageArrow";
import { workContent } from "@/text";

const Work = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if(selected === i){
     return setSelected(null);
    }
    setSelected(i)
  };

 const  calculateTopOffsets = (totalItems) => {
  const offsetStep = 0.5; 
  const topOffsets = Array(totalItems).fill().map((_, i) => offsetStep * (totalItems - i - 1));
  return topOffsets;
}

const topOffsets = calculateTopOffsets(workContent.length);

  return (
    <div className="w-full">
      <div className="flex flex-col mr-4 ml-4 mt-12 md:items-start md:ml-12">
        <p className="text-custom-lilac text-4xl">002</p>
        <p className="text-custom-black text-6xl mb-4 md:text-7xl">WORK</p>
      </div>

      {workContent.map((project, i) => (
        <div className="flex w-full ">
          <div
            className={`flex ${selected ===i ? "w-full" : "w-2/3"} border-b-2 border-t-2 mx-12 border-custom-black ${
              `relative top-${topOffsets[i]}`
            }  p-4 transition-all duration-700 ease-out`}
          >
            <div className="flex w-2/3 cursor-pointer" onClick={()=>toggle(i)}>
              <span className="text-6xl mr-4">{selected===i ? "-" : "+"}</span>
              <div className="flex flex-col">
                <div className="flex justify-between w-full">
                  <div className="flex flex-col">
                    <span className="text-6xl font-extralight mb-2">
                      {project.title}
                    </span>
                    <span className="text-6xl ">{project.type}</span>
                  </div>
                  <Image
                    src={`/../public/assets/${project.image}.png`}
                    width="150"
                    height="150"
                    className={`grayscale border hover:grayscale-0 border-black ${
                      selected===i ? "" : "hidden"
                    }`}
                  />
                </div>
                <div className={`flex w-full mt-4 ${selected===i ? "" : "hidden"}`}>
                  <p className="font-extralight italic text-justify">
                    {project.text}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-1/3 justify-between items-end">
              <div className="font-extralight text-right">
                <p>{project.date}</p>
                <p>{project.duration}</p>
              </div>
              <div className="flex items-end">
                <p className="font-extralight">PROJECT DETAILS</p>
                <a href={`https://github.com/${project.github}`} target="_blank">
                  <NewPageArrow className="w-24" />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    
    </div>
  );
};

export default Work;
