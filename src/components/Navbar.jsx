import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed w-full h-24 z-50 border-b-2 border-custom">
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-10">
        <Image
          src="/../public/assets/logo.png"
          alt="logo"
          width="80"
          height="50"
        
        />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="mx-20 text-3xl">about</li>
            </Link>
            <Link href="/">
              <li className="mx-20 text-3xl">work</li>
            </Link>
            <Link href="/">
              <li className="mx-20 text-3xl">skills</li>
            </Link>
            <Link href="/">
              <li className="mx-20 text-3xl">contact</li>
            </Link>
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
