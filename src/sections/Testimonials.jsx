import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Kunle is a kind of Developer our team has been looking for, his commitment to what he does and client satisfaction is what every agency needs",
      name: "Aisha Oladipupo",
      designation: "Saas Agency CEO",
      src: "https://images.pexels.com/photos/10376009/pexels-photo-10376009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      quote:
        "Despite different time zones Kunle's service and communication with our team was seamless and the results exceeded our expectations. His work flexibility is remarkable.",
      name: "Angela Rodriguez",
      designation: "Founder at Phoenix IO",
      src: "https://images.pexels.com/photos/8498760/pexels-photo-8498760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      quote:
        "Kunle's expertise has significantly improved our team's productivity. The intuitive interface he came up with, with his team is astonishing",
      name: "Rodrigo Watson",
      designation: "Operations Director at Cloudware",
      src: "https://images.pexels.com/photos/50855/pexels-photo-50855.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      quote:
        "It's rare to trust someone you met on freelancing community to handle a large scale project for you. Kunle and his team didn't build just the project to perfection, they built a business relationship that's going to last forever with my company",
      name: "Mavros Papadoupolos",
      designation: "CTO at Taxidi",
      src: "https://images.pexels.com/photos/3782183/pexels-photo-3782183.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
  ];
  return (
    <div
      className="w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative pt-20"
      id="testimonial"
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <h2 className="text-3xl md:text-5xl mb-4 text-black dark:text-white/80 max-w-4xl text-center mx-auto font-semibold px-4">
        Clients Reviews
      </h2>
      <AnimatedTestimonials testimonials={testimonials} />
      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[2px] w-full absolute -bottom-[3vh]" />
    </div>
  );
}
