import { socialMedia } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="relative pt-20 text-white/80">
      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[2px] w-full absolute top-0" />
      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[2px] w-full absolute -bottom-[4vh]" />
      <div className="flex justify-between max-w-screen-xl mx-auto px-8">
        <Link href={"/"} className="">
          <Image
            src={"/adekunle.svg"}
            width={120}
            height={80}
            alt="logo"
            className="max-h-[60px] object-contain object-center"
          />
        </Link>
        <div className="flex items-center md:gap-3 gap-2">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="size-7 md:size-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Image src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
      <p className="text-center mt-10">Adekunle &copy; Copyright 2024</p>
    </div>
  );
};

export default Footer;
