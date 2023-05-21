import Image from "next/image";
import React, { useState } from "react";
import { NewPageArrow } from "@/illustrations/NewPageArrow";
import { workContent } from "@/text";
import { SkillsArrow } from "@/illustrations/SkillsArrow";
const Work = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const calculateTopOffsets = (totalItems) => {
    const offsetStep = 0.5;
    const topOffsets = Array(totalItems)
      .fill()
      .map((_, i) => offsetStep * (totalItems - i));
    return topOffsets;
  };

  const topOffsets = calculateTopOffsets(workContent.length);

  return (
    <>
      <div id="work" className="w-full mb-10 md:mb-40">
        <div className="flex flex-col mr-4 ml-4 mt-12 md:items-start md:ml-12">
          <p className="text-custom-lilac text-4xl">002</p>
          <p className="text-custom-black text-6xl mb-4 md:text-7xl">WORK</p>
        </div>
        <div className="relative z-10">
          {workContent.map((project, i) => (
            <div className="flex w-full"   key={i}>
              <div
                className={`flex flex-col md:flex-row w-full ${
                  selected === i && "md:w-full"
                } ${
                  selected !== i && "md:w-2/3"
                } border-b-2 border-t-2 lg:mx-12 border-custom-black bg-custom-base ${
                  topOffsets[i] ? `relative top-${topOffsets[i]}` : ""
                }  p-6 md:p-4 transition-all duration-700 ease-out`}
              >
                <div
                  className="flex w-full md:w-2/3 cursor-pointer"
                  onClick={() => toggle(i)}
                >
                  <span className="text-6xl mr-4">
                    {selected === i ? "-" : "+"}
                  </span>
                  <div className="flex flex-col">
                    <div className="flex justify-between w-full">
                      <div className="flex flex-col">
                        <span className="text-4xl md:text-6xl font-extralight mb-2">
                          {project.title}
                        </span>
                        <span className="text-4xl md:text-6xl">
                          {project.type}
                        </span>
                      </div>
                      <Image
                        src={`/../public/assets/${project.image}.png`}
                        width="150"
                        height="150"
                        alt="cover image"
                        className={`grayscale border hover:grayscale-0 border-black ${
                          selected === i && "md:block"
                        } hidden`}
                      />
                    </div>
                    <div
                      className={`flex w-full mt-4 ${
                        selected === i ? "" : "hidden"
                      }`}
                    >
                      <p className="font-extralight italic text-justify">
                        {project.text}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex w-full md:flex-col md:w-1/3 justify-between items-end">
                  <div
                    className={`font-extralight ${
                      selected === i ? "ml-8" : "ml-14"
                    } md:ml-0 md:text-right text-sm md:text-base`}
                  >
                    <p>{project.date}</p>
                    <p>{project.duration}</p>
                  </div>
                  <div className="flex items-end">
                    <p className="font-extralight text-sm md:text-base text-right">
                      <span className="hidden md:inline">PROJECT </span>DETAILS
                    </p>

                    <a
                      href={`https://github.com/${project.github}`}
                      target="_blank"
                    >
                      <NewPageArrow className="w-24" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden lg:block absolute top-[1800px] left-[800px] z-0 h-full">
        <SkillsArrow className="w-full h-full" />
      </div>
    </>
  );
};

export default Work;

// ${
//   i ===0 ? "relative top-1.5" : ""
// } ${
//   i ===1 ? "relative top-1" : ""
// }
// ${
//   i ===2 ? "relative top-0.5" : ""
// }
