import { Skills } from "@/components/Skills";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Cover } from "@/components/ui/cover";
import { ShootingStars } from "@/components/ui/shooting-starts";
import { StarsBackground } from "@/components/ui/stars-background";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { people } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  const word = "Transforming Concepts into Seamless User Experiences";
  const about = "Hi! I am Adekunle Taofeek, a software developer";
  const words =
    "I'm a passionate and versatile sofware developer with a focus on building dynamic websites and user-friendly mobile applications. With a strong foundation in both front-end and back-end technologies,";
  return (
    <div className="w-full overflow-x-hidden min-h-screen" id="about">
      <div className="grid lg:grid-cols-[1fr_0.6fr_0.4fr] gap-5 relative pt-20 lg:pt-12 max-w-screen-xl mx-auto min-h-screen">
        <div className="max-w-[600px] w-[90%] mx-auto py-[30px]">
          <div className="flex flex-col lg:justify-between h-[80%]">
            <h2 className="">
              <TextGenerateEffect
                words={word}
                className={
                  "bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl font-bold font-sans py-2 md:py-10 relative z-20 text-center tracking-tight lg:text-left"
                }
              />
            </h2>
            <div className="lg:flex flex-col gap-10">
              <TextGenerateEffect
                words={about}
                className={
                  "max-w-xl mx-auto text-center lg:text-left mb-5 lg:mb-0 text-base lg:text-2xl text-neutral-700 dark:text-neutral-400 font-normal mt-6 lg:max-w-xs lg:mx-0"
                }
              />
              <Link
                href={"#contact"}
                className="mt-4 mx-auto lg:mx-0 flex justify-center lg:block"
              >
                <button
                  className=" inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-10 font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white/90 hover:scale-110 hover:border-2"
                  type="submit"
                >
                  Hire Me &rarr;
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-full items-end bg-[#0d0d0e70] hidden lg:flex">
          <Image
            src={"/profile1.webp"}
            width={800}
            height={1200}
            alt="model"
            className="w-full max-h-[90vh] object-contain object-bottom"
          />
        </div>
        <div className="w-[90%] mx-auto py-[30px] flex flex-col items-center lg:justify-between z-2">
          <div>
            <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-lg md:text-2xl lg:text-4xl font-sans md:py-10 relative z-20 font-bold tracking-tight lg:mt-8 lg:text-right">
              About Me
            </h2>
            <TextGenerateEffect
              words={words}
              className={
                "max-w-xl mx-auto text-base md:text-lg text-neutral-700 dark:text-neutral-400 font-normal lg:text-right"
              }
            />
          </div>

          <Skills />
        </div>
      </div>
      <div className="relative">
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[2px] w-full absolute bottom-0" />
      </div>
      <ShootingStars className={"z-[-1]"} />
      <StarsBackground className={"z-[-1]"} />
    </div>
  );
};

export default HeroSection;
