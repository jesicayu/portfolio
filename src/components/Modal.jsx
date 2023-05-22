import React from "react";
import { NewPageArrow } from "@/illustrations/NewPageArrow";
import {MdClose} from "react-icons/md"

const Modal = ({toggleModal}) => {
  return (
    <div className="fixed flex top-0 h-screen w-screen bg-custom-lilac/75 z-50 justify-center items-center" onClick={toggleModal}>
      <div className="fixed flex flex-col items-center p-12 dark:bg-custom-dark-base bg-custom-base w-3/5 h-3/5"
      
      onClick={(e) => e.stopPropagation()}>
        <div className="self-end cursor-pointer fill-white">
          <MdClose size={36} onClick={toggleModal} className="fill-custom-black dark:fill-custom-dark-white"/>
        </div>
        <div className="w-full text-center space-y-4 mt-4 ">
          <p className="text-lg lg:text-xl mx-4 dark:text-custom-dark-white lg:mx-12">
            While I'm a software developer today, in a past life I was an
            architectural designer. I owe much of my core qualities in the
            professional realm to my training in a field that instilled
            resilience, creativity and analytical thinking.{" "}
          </p>
          <p className="text-sm lg:text-base font-extralight dark:text-custom-dark-white lg:mx-20">
            Curiosity piqued? Take a peek into my architectural portfolio, a
            glimpse of the journey that shaped me into the versatile developer I
            am today.
          </p>
          <span className="inline-block">
            <a
              href="https://drive.google.com/file/d/1UXHxIqoNJSAD-MV6ZbsqhBNi8JmiAEL4/view?usp=sharing"
              target="_blank"
            >
              <NewPageArrow className="w-24 -rotate-90 mx-auto" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
