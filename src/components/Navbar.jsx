import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { Toggle } from "./commons/Toggle";
import { HiMenu } from "react-icons/hi";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
const theme = useSelector(state => state.theme.mode)

  return (
    <div className="fixed w-full h-20 z-50 border-b-2 border-custom-black">
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-10">
        <Image
          src="/../public/assets/logo.png"
          alt="logo"
          width="70"
          height="50"
          className="mx-4"
        />
        <ul className="hidden md:flex">
          <Link href="/">
            <li className="mx-20 text-2xl">about</li>
          </Link>
          <Link href="/">
            <li className="mx-20 text-2xl">work</li>
          </Link>
          <Link href="/">
            <li className="mx-20 text-2xl">skills</li>
          </Link>
          <Link href="/">
            <li className="mx-20 text-2xl">contact</li>
          </Link>
        </ul>
        <div className="mx-4 md:hidden">
          <HiMenu size={32} />
        </div>
        <div className="mx-4 px-4 hidden md:block">
          <Toggle />
        </div>
      </div>
      <div className="fixed right-0 top-0 w-full h-screen bg-custom-orange/75 md:hidden">
        <div className="fixed right-0 top-0 h-screen w-[75%] sm:w-[60%] md:w-[45%] bg-custom-base p-10 ease-in duration-500">
        <div>
          <div><Toggle/></div>
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default Navbar;
