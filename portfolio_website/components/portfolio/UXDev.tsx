import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import UxCard from "./UxCard";

function UxDev() {
  const projects = [
    {
      image: "/images/portfolio6.png",
      title: "Mobile App UI Design",
      description:
        "A mobile app UI design created using Figma. Features clean and modern design elements, intuitive navigation, and user-friendly interface.",
      buttonText: "View Project",
      buttonLink: "#",
    },
    {
      image: "/images/portfolio2.png",
      title: "Secondary School Website",
      description:
        "A portfolio website built with HTML, CSS, and JavaScript. Features a responsive design, interactive elements, and a contact form.",
      buttonText: "View Project",
      buttonLink: "#",
    },
    {
      image: "/images/portfolio3.png",
      title: "Q.R Code Generation Website",
      description:
        "A portfolio website built with HTML, CSS, and JavaScript. Features a responsive design, interactive elements, and a contact form.",
      buttonText: "View Project",
      buttonLink: "#",
    },
  ];

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="px-6 w-full max-w-full mx-auto" // Adjusted for full width and centering
    >
        <h1 className="text-primary-brightCoral font-bold text-xl mb-4 font-inria">UI/UX DESIGN PROJECTS</h1>
      <CarouselContent>
        {projects.map((project, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 sm:basis-1/2 pl-4">
              <UxCard
                image={project.image}
                title={project.title}
                description={project.description}
                buttonText={project.buttonText}
                buttonLink={project.buttonLink}
              />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default UxDev;