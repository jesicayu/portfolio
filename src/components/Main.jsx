import { MainArrow } from "@/illustrations/MainArrow";
import React, { useState } from "react";
import { SurpriseMe } from "../illustrations/SurpriseMe";
import Modal from "./Modal";

const Main = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div
      id="main"
      className="flex flex-col justify-center w-full py-32 md:h-screen md:py-0"
    >
      <div className="md:mt-32 lg:mt-48 w-full tracking-wide dark:text-custom-dark-white text-custom-black  text-2xl md:text-4xl lg:text-6xl relative">
        <div onClick={toggleModal}>
          <SurpriseMe className="absolute hidden text-4xl md:block w-28 lg:w-36 right-24 top-2 animate-[spin_12s_linear_infinite] cursor-pointer" />
        </div>
        <div className="border-b-2 dark:border-custom-dark-white border-custom-black md:pr-64 py-4 font-black text-center">
          <span className="mr-4 md:mr-12">{"/*"} software</span>
          <span className="md:ml-4">developer</span>
        </div>
        <div className="border-b-2 dark:border-custom-dark-white border-custom-black pl-2 md:pl-4 py-4 text-center">
          <span className="font-black mr-4 md:mr-20">solving</span>
          <span className="font-black">problems</span>
          <span className="ml-2 md:ml-16 md:mr-40">with</span>
        </div>
        <div className="border-b-2 dark:border-custom-dark-white border-custom-black py-4 text-center">
          <span className="ml-2 mr-4 md:mx-16">a</span>
          <span className="font-black mr-4 md:mr-16">systemic</span>
          <span className="font-black md:mr-16 ">mindset</span>
          <span className="ml-4 md:mr-24">and</span>
        </div>
        <div className="mb-8 border-b-2 dark:border-custom-dark-white border-custom-black py-4 text-center">
          <span className="md:ml-16">an</span>
          <span className="ml-2 md:ml-12">architect&apos;s </span>
          <span className="ml-2 md:ml-12">eye</span>
          <span className="ml-2 md:ml-12">for</span>
          <span className="ml-2 font-black md:ml-12 md:mr-8">
            detail {"*/"}
          </span>
        </div>
      </div>
      <MainArrow className="h-28 md:h-40" />
      {modal && <Modal toggleModal={toggleModal} />}
    </div>
  );
};

export default Main;
