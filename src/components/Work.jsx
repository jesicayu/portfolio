import Image from "next/image";
import React, { useState } from "react";
import { NewPageArrow } from "@/illustrations/NewPageArrow";

const Work = () => {
  const [selected, setSelected] = useState(false);

  return (
    <div className="w-full">
      <div className="flex flex-col mr-4 ml-4 mt-12 md:items-start md:ml-12">
        <p className="text-custom-lilac text-4xl">002</p>
        <p className="text-custom-black text-6xl md:text-7xl">WORK</p>
      </div>
      <div className="w-full flex">
      <div className={`flex ${selected ? 'w-full' : 'w-2/3'} cursor-pointer border-t-2 border-b-2 m-12 border-custom-black p-4 transition-all duration-700 ease-out`} onClick={() => setSelected(true)}>
      <span className="text-6xl mr-4">{selected ? '-' : '+'}</span>
        <div className="flex flex-col w-2/3">
          <div className="flex justify-between w-full">
            <div className="flex flex-col">
              <span className="text-6xl font-extralight mb-2">
                custom t-shirt
              </span>
              <span className="text-6xl ">e-commerce</span>
            </div>
            <Image
              src="/../public/assets/custom-tshirt-cover.png"
              width="150"
              height="150"
              className={`grayscale border border-black ${selected ? '' : 'hidden'}`}
            />
          </div>
          <div className={`flex w-full mt-4 ${selected ? '' : 'hidden'}`}>
            <p className="font-extralight italic text-justify">
              An e-commerce platform that allows users to create highly
              personalized shirt designs using a print-on-demand model. The
              platform offers a range of options, including size, color, style
              selection, and image upload. To begin the customization process,
              users are prompted to specify their preferred style from the
              available options: tank top, short sleeve, or long sleeve. Once a
              style is chosen, users can select the desired size and color, with
              real-time stock availability information displayed. To add the
              finishing touches to their design, users can upload an image by
              entering the URL of a PNG image found online.{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-col w-1/3 justify-between items-end">
          <div className="font-extralight text-right">
            <p>MARCH 2023</p>
            <p>4 WEEKS | 6 DEVS</p>
          </div>
          <div className="flex  items-end">
            <p className="font-extralight">PROJECT DETAILS</p>
            <NewPageArrow className="w-24" />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Work;
