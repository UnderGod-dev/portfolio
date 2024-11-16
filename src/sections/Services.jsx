import { Cover } from "@/components/ui/cover";
import { FlipWords } from "@/components/ui/flip-words";
import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import { Availability } from "../components/Globe";

export function Services() {
  const features = [
    {
      title: "Web Development",
      description:
        "Crafting responsive, high-performance websites using modern frameworks and best practices for seamless user experiences.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Mobile App Development",
      description:
        "Building cross-platform mobile apps that deliver a native experience on both iOS and Android devices.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Database Management",
      description:
        "Ensuring secure, scalable, and optimized database solutions tailored to meet the unique needs of your applications.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "DevOps & Deployment",
      description:
        "Automating deployment pipelines and ensuring your applications run reliably with minimal downtime in any environment.",
      icon: <IconHelp />,
    },
    {
      title: "Continuous Maintenance & Support",
      description:
        "Providing ongoing support to keep your applications up-to-date and running smoothly, with regular updates and troubleshooting.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Technical Consultation",
      description:
        "Offering strategic guidance on technology stacks, project planning, and best practices to drive your projects forward efficiently.",
      icon: <IconHeart />,
    },
  ];

  const words = ["anytime", "anywhere"];

  return (
    <div
      className="mt-10 lg:mt-[150px] flex flex-col relative px-4"
      id="service"
    >
      <h2 className="text-center text-4xl md:text-6xl font-bold text-black dark:text-white/70">
        Global Services <br /> <FlipWords words={words} /> <br />
      </h2>
      <Availability />
      <p className="mx-auto text-center max-w-2xl mt-2.5 text-[1rem] md:text-lg text-neutral-700 dark:text-neutral-400 px-4">
        As a dedicated software developer, I provide a range of services, expert
        support and solutions around the clock anywhere around the globe. My
        services are designed to bring your digital ideas to life with
        high-quality, scalable solutions. From concept to deployment, each
        service is crafted to meet the unique needs of your projects.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  relative z-10 py-10 pb-40 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
      <div className="relative">
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[2px] w-full absolute bottom-0" />
      </div>
    </div>
  );
}

const Feature = ({ title, description, icon, index }) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 3) && "lg:border-l dark:border-neutral-800",
        index < 3 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500/50 transition-all duration-200 origin-center" />
        <h2 className="text-neutral-800 dark:text-white/80 text-xl">{title}</h2>
      </div>
      <p className="text-base text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
