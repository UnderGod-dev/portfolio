import React from "react";
import { projects } from "@/data";
import { PinContainer } from "@/components/ui/3d-pin";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="py-10 lg:py-20 max-w-screen-xl mx-auto min-h-screen ">
      <h2 className="text-3xl md:text-5xl text-black dark:text-white/80 max-w-4xl text-center mx-auto font-semibold px-4 lg:pb-20">
        Some of my recent projects
      </h2>
      <div className="flex flex-wrap items-center justify-center p-4 gap-y-20 gap-x-20 mt-10 bg-red-60i0 w-full">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.title} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  // style={{ backgroundColor: "#13162D" }}
                >
                  <Image
                    src={item.img}
                    alt="icon5"
                    height={200}
                    width={200}
                    className="size-full object-contain"
                  />
                  {/* <img src="/bg.png" alt="bgimg" /> */}
                </div>
                <Image
                  src={item.img}
                  alt="icon5"
                  height={60}
                  width={60}
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image src={icon} alt="icon5" height={60} width={60} />
                      {/* <img src={icon} alt="icon5" className="p-2" /> */}
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
