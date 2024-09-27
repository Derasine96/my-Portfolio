import React from "react";
import PortfolioCard from "./portfolioCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function WebDev() {
  const projects = [
    {
      image: "/images/portfolio1.png",
      title: "Responsive Portfolio Website",
      description:
        "A portfolio website built with HTML, CSS, and JavaScript. Features a responsive design, interactive elements, and a contact form.",
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
    {
      image: "/images/portfolio4.png",
      title: "C.B.T Software Website",
      description:
        "A portfolio website built with HTML, CSS, and JavaScript. Features a responsive design, interactive elements, and a contact form.",
      buttonText: "View Project",
      buttonLink: "#",
    },
    {
      image: "/images/portfolio5.png",
      title: "C.B.T Software Website",
      description:
        "A portfolio website built with HTML, CSS, and JavaScript. Features a responsive design, interactive elements, and a contact form.",
      buttonText: "View Project",
      buttonLink: "#",
    },
    {
      image: "/images/portfolio2.png",
      title: "Whatsapp Clone Website",
      description:
        "A portfolio website built with HTML, CSS, and JavaScript. Features a responsive design, interactive elements, and a contact form.",
      buttonText: "View Project",
      buttonLink: "#",
    },
    {
      image: "/images/portfolio4.png",
      title: "QR Code Generation Website",
      description:
        "A portfolio website built with HTML, CSS, and JavaScript. Features a responsive design, interactive elements, and a contact form.",
      buttonText: "View Project",
      buttonLink: "#",
    },
    {
      image: "/images/portfolio1.png",
      title: "E-commerce Website",
      description:
        "A portfolio website built with HTML, CSS, and JavaScript. Features a responsive design, interactive elements, and a contact form.",
      buttonText: "View Project",
      buttonLink: "#",
    },
    {
      image: "/images/portfolio1.png",
      title: "E-commerce Website",
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
      className=" px-6 w-full max-w-full mx-auto"
    >
      <h1 className="text-primary-brightCoral font-bold text-xl mb-4 font-inria">WEB DEVELOPMENT PROJECTS</h1>
      <CarouselContent>
        {projects.map((project, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 sm:basis-1/2 pl-4">
              <PortfolioCard
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

export default WebDev;
