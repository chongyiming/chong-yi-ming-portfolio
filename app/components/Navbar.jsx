"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { assets } from "@/assets/assets";
const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);
  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} className="w-full" />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 justify-center ${
          isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm" : ""
        }`}
      >
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? "" : "bg-white/50 shadow-sm"
          }`}
        >
          <li className="font-ovo">
            <a href="#top">Home</a>
          </li>
          <li className="font-ovo">
            <a href="#about">About me</a>
          </li>
          <li className="font-ovo">
            <a href="#services">Services</a>
          </li>
          <li className="font-ovo">
            <a href="#work">My Work</a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} className="w-6" />
          </button>
        </div>

        {/*Mobile menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image src={assets.close_black} className="w-5 cursor-pointer" />
          </div>
          <li className="font-ovo" onClick={closeMenu}>
            <a href="#top">Home</a>
          </li>
          <li className="font-ovo" onClick={closeMenu}>
            <a href="#about">About me</a>
          </li>
          <li className="font-ovo" onClick={closeMenu}>
            <a href="#services">Services</a>
          </li>
          <li className="font-ovo" onClick={closeMenu}>
            <a href="#work">My Work</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
