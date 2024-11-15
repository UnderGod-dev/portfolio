"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const navItems = [
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Services",
      link: "#service",
    },
    {
      name: "Projects",
      link: "#project",
    },
    {
      name: "Testimonial",
      link: "#testimonial",
    },
  ];
  const [openNav, setOpenNav] = useState(false);
  const handleNavToggle = () => {
    setOpenNav((curr) => !curr);
  };
  return (
    <header className="fixed w-screen z-[1000]">
      <div className="flex justify-between backdrop-blur py-2 max-w-screen-xl mx-auto px-4 items-center relative z-[50] overflow-x-hidden">
        <Link href={"/"} className="">
          <Image
            src={"/adekunle.svg"}
            width={120}
            height={80}
            alt="logo"
            className="max-h-[60px] object-contain object-center w-20 md:w-32"
          />
        </Link>
        <nav className="hidden lg:flex text-white/80 tracking-wider">
          {navItems.map(({ name: title, link }, index) => (
            <ul key={link}>
              <li className="text-sm relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white/80 hover px-4 py-2 rounded-full tracking-wider uppercase group">
                <Link href={link} className="">
                  {title}
                </Link>
                <div className="opacity-0 group-hover:opacity-[1] transition-all ease-in-out">
                  <span className=" absolute inset-x-0 w-2/3 mx-auto -bottom-px bg-gradient-to-r from-transparent via-white to-transparent  h-px" />
                </div>
              </li>{" "}
            </ul>
          ))}
        </nav>
        {/* <FloatingNav navItems={navItems} /> */}
        <Link href={"#contact"} className="hidden lg:block">
          <button
            className=" inline-flex h-10 md:h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-2 md:px-4 font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white/90 hover:scale-110 hover:border-2 text-sm md:text-base"
            type="submit"
          >
            Hire Me
          </button>
        </Link>
        <div className="text-white lg:hidden" onClick={handleNavToggle}>
          {!openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-menu-3"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 6h10" />
              <path d="M4 12h16" />
              <path d="M7 12h13" />
              <path d="M4 18h10" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-x"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          )}
        </div>
      </div>
      <div
        className={`absolute w-60 h-72 top-[6vh] backdrop-blur right-10 ${
          !openNav ? "-translate-y-80" : "0"
        } transition-all rounded`}
      >
        <nav className=" text-white/80 tracking-wider flex items-center flex-col gap-4">
          {navItems.map(({ name: title, link }, index) => (
            <ul key={link} className="">
              <li className="text-sm relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white/80 px-4 py-2 rounded-full tracking-wider uppercase">
                <Link href={link} className="" onClick={handleNavToggle}>
                  {title}
                </Link>
                {link === "#about" && (
                  <span className=" absolute inset-x-0 w-2/3 mx-auto -bottom-px bg-gradient-to-r from-transparent via-white to-transparent  h-px" />
                )}
              </li>{" "}
            </ul>
          ))}
          <Link href={"#contact"} className="">
            <button
              className=" inline-flex h-10 md:h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-2 md:px-4 font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white/90 hover:scale-110 hover:border-2 text-sm md:text-base"
              type="submit"
            >
              Hire Me
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
