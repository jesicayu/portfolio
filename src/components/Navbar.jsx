import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Toggle } from "./commons/Toggle";
import { HiMenu } from "react-icons/hi";
import { GrClose, GrGithub, GrLinkedin } from "react-icons/gr";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const theme = useSelector((state) => state.theme.mode);
  const [nav, setNav] = useState(false);

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
          <HiMenu size={32} onClick={() => setNav(true)} />
        </div>
        <div className="mx-4 px-4 hidden md:block">
          <Toggle />
        </div>
      </div>

      <div
        className={
          nav
            ? "fixed right-0 top-0 w-full h-screen bg-custom-orange/75 md:hidden"
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed right-0 top-0 h-screen w-[75%] sm:w-[60%] md:w-[45%] bg-custom-base pt-8 px-10 ease-in duration-500"
              : "fixed right-[-100%] pt-8 px-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex align-center justify-between">
              <Toggle />
              <GrClose size={32} onClick={() => setNav(false)} />
            </div>
            <div className="m-12 flex flex-col items-center text-center">
              <ul>
                <Link href="/">
                  <li>
                    <div className="py-2">
                      <div className="text-custom-lilac">001</div>
                      <div className="text-xl">about</div>
                    </div>
                  </li>
                </Link>
                <Link href="/">
                  <li>
                    <div className="py-2">
                      <div className="text-custom-lilac">002</div>
                      <div className="text-xl">work</div>
                    </div>
                  </li>
                </Link>
                <Link href="/">
                  <li>
                    <div className="py-2">
                      <div className="text-custom-lilac">003</div>
                      <div className="text-xl">skills</div>
                    </div>
                  </li>
                </Link>
                <Link href="/">
                  <li>
                    <div className="py-2">
                      <div className="text-custom-lilac">004</div>
                      <div className="text-xl">contact</div>
                    </div>
                  </li>
                </Link>
              </ul>
            </div>
            <div className="pt-12">
              <p
                className="text-base
              uppercase tracking-widest"
              >
                Let's connect
              </p>
              <div className="flex justify-between items-center pt-6">
                <GrGithub size={24} />
                <GrLinkedin size={24} />
                <BsFillPersonLinesFill size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
