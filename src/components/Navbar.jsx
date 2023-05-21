import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Toggle } from "./commons/Toggle";
import { HiMenu } from "react-icons/hi";
import { GrClose, GrGithub, GrLinkedin } from "react-icons/gr";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { NavCircle } from "@/illustrations/NavCircle";

const Navbar = () => {
  const theme = useSelector((state) => state.theme.mode);
  const [nav, setNav] = useState(false);
  const [selectedNavItem, setSelectedNavItem] = useState(null);

  const navItems = [
    { name: "about" },
    { name: "work" },
    { name: "skills" },
    { name: "contact" },
  ];

  return (
    <div className="fixed w-full h-20 z-50 border-b-2 border-custom-black bg-custom-base">
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-10">
        <Image
          src="/../public/assets/logo.png"
          alt="logo"
          width="70"
          height="50"
          className="mx-4"
          onClick={() => setSelectedNavItem(null)}
        />
        <ul className="hidden md:flex ">
          {navItems.map((item) => (
            <Link href={`/#${item.name}`} scroll={false}>
              <li
                className="md: mx-10 lg:mx-20 text-2xl relative"
                onClick={() => setSelectedNavItem(item.name)}
              >
                {item.name}
                {selectedNavItem === item.name && (
                  <NavCircle className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                )}
              </li>
            </Link>
          ))}
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
                {navItems.map((item, i) => (
                  <Link href="/">
                    <li>
                      <div className="py-2">
                        <div className="text-custom-lilac">{`00${i + 1}`}</div>
                        <div className="text-xl">{item.name}</div>
                      </div>
                    </li>
                  </Link>
                ))}
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
                <a href="https://github.com/jesicayu" target="_blank">
                  <GrGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/jesica-yu/"
                  target="_blank"
                >
                  <GrLinkedin size={24} />
                </a>
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
