import Image from "next/image";
import React from "react";

const Work = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col mr-4 ml-4 mt-12 md:items-start md:ml-12">
        <p className="text-custom-lilac text-4xl">002</p>
        <p className="text-custom-black text-6xl md:text-7xl">WORK</p>
      </div>
      <div className="flex border-t-2 border-b-2 m-12 border-custom-black p-4 ">
        <span className="text-6xl mr-4">-</span>
        <div className="flex justify-between">
        <div className="flex flex-col">
          <span className="text-6xl font-extralight">custom t-shirt</span>
          <span className="text-6xl ">e-commerce</span>
        </div>
        <Image/>
        </div>
      </div>
    </div>
  );
};

export default Work;
