import React from "react";
import { NewPageArrow } from "@/illustrations/NewPageArrow";
import { GrClose } from "react-icons/gr";

const Modal = () => {
  return (
    <div className="fixed flex top-0 h-screen w-screen bg-custom-lilac/75 z-50 justify-center items-center">
      <div className="fixed flex flex-col items-center p-12 bg-custom-base w-3/5 h-3/5">
        <div className="self-end ">
          <GrClose size={32} />
        </div>
        <div className="w-full text-center space-y-4 mt-4">
          <p className="text-xl mx-12">
            While I'm a software developer today, in a past life I was an
            architectural designer. I owe much of my core qualities in the
            professional realm to my training in a field that instilled
            resilience, creativity and analytical thinking.{" "}
          </p>
          <p className="text-base font-extralight mx-20">
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
