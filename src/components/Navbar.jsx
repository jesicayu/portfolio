import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Toggle } from "./commons/Toggle";

const Navbar = () => {
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
        <div>
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
        </div>
        <div className="mx-4">
        <Toggle/>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
