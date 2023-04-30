import React from "react";

const Main = () => {
  return (
    <div className="w-full h-screen flex ">
      <div className=" mt-36 md:mt-48 w-full tracking-wide  text-custom-black  text-2xl md:text-4xl lg:text-6xl">
        <div className="border-b-2 border-custom-black md:pr-64 py-4 font-black text-center">
          <span className="mr-4 md:mr-12">/* software</span>
          <span className="md:ml-4">developer</span>
        </div>
        <div className="border-b-2 border-custom-black pl-2 md:pl-12 py-4 text-center">
          <span className="font-black mr-4 md:mr-20">solving</span>
          <span className="font-black">problems</span>
          <span className="ml-2 md:ml-20">with</span> <span className="ml-2 md:ml-20">a</span>
        </div>
        <div className="border-b-2 border-custom-black py-4 text-center">
          <span className="font-black mr-4 md:mr-40">systemic</span>
          <span className="font-black md:mr-28">mindset</span>
          <span className="ml-4 md:mr-16"> and</span>
        </div>
        <div className="border-b-2 border-custom-black py-4 text-center">
          <span className="md:ml-16">an</span>
          <span className="ml-2 md:ml-16">architect's eye</span>
          <span className="ml-2 md:ml-16">for</span>
          <span className="ml-2 font-black md:ml-16 md:mr-8"> detail */</span>
        </div>
      </div>
    </div>
  );
};

export default Main;
