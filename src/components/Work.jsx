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
        <div className="flex flex-col w-2/3">
        <div className="flex justify-between w-full">
          <div className="flex flex-col">
            <span className="text-6xl font-extralight mb-2">custom t-shirt</span>
            <span className="text-6xl ">e-commerce</span>
          </div>
          <Image
            src="/../public/assets/custom-tshirt-cover.png"
            width="150"
            height="150"
            className="grayscale border border-black"
          />
        </div>
        <div className="flex w-full mt-4" >
        <p className="font-extralight italic text-justify">An e-commerce platform that allows users to create highly personalized shirt designs using a print-on-demand model. The platform offers a range of options, including size, color, style selection, and image upload. To begin the customization process, users are prompted to specify their preferred style from the available options: tank top, short sleeve, or long sleeve. Once a style is chosen, users can select the desired size and color, with real-time stock availability information displayed. To add the finishing touches to their design, users can  upload an image by entering the URL of a PNG image found online. </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
