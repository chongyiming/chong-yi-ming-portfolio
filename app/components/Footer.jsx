import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image src={assets.home_icon} className="w-36 mx-auto mb-2" />
        <div className="w-max flex items-center gap-2 mx-auto ">
          <Image src={assets.mail_icon} className="w-6" />
          chongyiming1205@gmail.com
        </div>
        <div className="w-max flex items-center gap-2 mx-auto ">
          <Image src={assets.phone_icon} className="w-6" /> 01110586557
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a
              target="_blank"
              href="https://github.com/chongyiming"
              className="underline hover:text-blue-500 duration-500"
            >
              Github
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/chong-yi-ming"
              className="underline hover:text-blue-500 duration-500"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
