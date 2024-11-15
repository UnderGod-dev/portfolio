import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function Resume() {
  const data = [
    {
      title: "Phase 1",
      content: (
        <div className="flex flex-col gap-7">
          <div className="">
            <h4 className="text-[#f4f4f4] text-xl md:text-[1.8rem] font-semibold">
              Planning & Strategy
            </h4>

            <ul className="text-neutral-800 dark:text-neutral-200 text-sm pt-4 font-normal mb-8 max-w-sm list-disc space-y-4">
              <li className="ml-4">
                Understanding the problem domain and gathering requirements.
              </li>
              <li className="ml-4">
                Collaborating with stakeholders to align goals and expectations.
              </li>
              <li className="ml-4">
                Creating a roadmap and defining project milestones.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Phase 2",
      content: (
        <div className="flex flex-col gap-7">
          <div className="">
            <h4 className="text-[#f4f4f4] text-xl md:text-[1.8rem] font-semibold">
              Development & Implementation
            </h4>
            <ul className="text-neutral-800 dark:text-neutral-200 text-sm pt-4 font-normal mb-8 max-w-sm list-disc space-y-4">
              <li className="ml-4">
                Writing clean, scalable, and maintainable code.
              </li>
              <li className="ml-4">
                Iterative development with continuous testing and feedback
                loops.
              </li>
              <li className="ml-4">
                Utilizing industry best practices and technologies.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Phase 3",
      content: (
        <div className="flex flex-col gap-7">
          <div className="">
            <h4 className="text-[#f4f4f4] text-xl md:text-[1.8rem] font-semibold">
              Development & Optimization
            </h4>
            <ul className="text-neutral-800 dark:text-neutral-200 text-sm pt-4 font-normal mb-8 max-w-sm list-disc space-y-4">
              <li className="ml-4">
                Deploying the application to the target environment (production
                or staging).
              </li>
              <li className="ml-4">
                Monitoring performance and resolving bugs.
              </li>
              <li className="ml-4">
                Gathering user feedback for continuous improvement.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full relative bg-white dark:bg-neutral-950 font-sans md:px-10">
      <h2 className="text-3xl md:text-5xl mb-4 text-black dark:text-white/80 max-w-4xl text-center mx-auto font-semibold px-4 pt-20">
        My work approach
      </h2>
      <Timeline data={data} />
      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[2px] w-full absolute -bottom-[3vh]" />
    </div>
  );
}
