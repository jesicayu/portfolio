import React from "react";

const Main = () => {
  return (
    <div className="w-full h-screen flex text-6xl tracking-wide">
      <div className="mt-48 w-full">
        <div className="border-b-2 border-custom-black pr-64 py-4 font-black w-full text-center">
          <span className="mr-12">/* software</span>
          <span className="ml-4">developer</span>
        </div>
        <div className="border-b-2 border-custom-black pl-12 py-4 text-center">
          <span className="font-black">solving problems</span>{" "}
          <span className="ml-20">with</span> <span className="ml-20">a</span>
        </div>
        <div className="border-b-2 border-custom-black py-4 w-full text-center">
          <span className="font-black">systems-thinking mindset</span>
          <span className="ml-16"> and</span>
        </div>
        <div className="border-b-2 border-custom-black py-4 w-full text-center">
          <span className="ml-16"> an</span>
          <span className="ml-16"> architect's eye </span>
          <span className="ml-16"> for </span>
          <span className="font-black ml-16 mr-8"> detail */</span>
        </div>
      </div>
    </div>
  );
};

export default Main;
