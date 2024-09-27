"use client";

import React, { useRef } from "react";
import JourneyCard from "./journeyCard";

const ProfessionalJourney = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = (direction === "left" ? -1 : 1) * (container.offsetWidth * 0.5);
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full max-w-full mx-auto">
      <h1 className="lg:text-3xl md:text-xl text-center text-primary-offWhite font-robotoSerif font-bold pt-4 py-2">PROFESSIONAL JOURNEY</h1>
      <p className="lg:text-md  text-primary-offWhite leading-6 font-lato text-center pb-8">
        A detailed overview of my professional history and relevant achievements
      </p>
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-hidden space-x-6 pb-4 px-6 hide-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        <JourneyCard
          title="INTERNSHIP/TRAINING PROGRAM"
          subtitle="ALX Africa Software Engineering Programing Intern"
          date="19th June, 2024"
          description={`Completed an intensive, hands-on software engineering program focusing on web development, data structures, algorithms, and software design.
                    Developed projects using Python, JavaScript, React.js, Flask, and MySQL.
                    Collaborated with peers on group projects, applying Agile methodologies to manage workflows and ensure timely delivery.`}
          buttonText="View Certificate"
          buttonLink="#"
        />
        <JourneyCard
          title="FREELANCE/PERSONAL PROJECTS"
          subtitle="School Website"
          date="Frontend Developer"
          description={`Built a responsive portfolio website using React.js and Tailwind CSS to showcase my skills and projects.
                        Integrated dynamic features like secure authentication and payment processing using Inmotion APIs or tools.
                        Focused on creating a user-friendly interface with a seamless user experience.`}
          buttonText="View Project"
          buttonLink="#"
        />
        <JourneyCard
          title="CONTRIBUTIONS"
          subtitle="School Website"
          date="Frontend Developer"
          description={`Built a responsive portfolio website using React.js and Tailwind CSS to showcase my skills and projects.
                        Integrated dynamic features like secure authentication and payment processing using Inmotion APIs or tools.
                        Focused on creating a user-friendly interface with a seamless user experience.`}
          buttonText="View Project"
          buttonLink="#"
        />
        <JourneyCard
          title="REMOTE JOBS"
          subtitle="School Website"
          date="Frontend Developer"
          description={`Built a responsive portfolio website using React.js and Tailwind CSS to showcase my skills and projects.
                        Integrated dynamic features like secure authentication and payment processing using Inmotion APIs or tools.
                        Focused on creating a user-friendly interface with a seamless user experience.`}
          buttonText="View Project"
          buttonLink="#"
        />
        <JourneyCard
          title="GITHUB"
          subtitle="School Website"
          date="Frontend Developer"
          description={`Built a responsive portfolio website using React.js and Tailwind CSS to showcase my skills and projects.
                        Integrated dynamic features like secure authentication and payment processing using Inmotion APIs or tools.
                        Focused on creating a user-friendly interface with a seamless user experience.`}
          buttonText="View Project"
          buttonLink="#"
        />
        <JourneyCard
          title="FREELANCE/PERSONAL PROJECTS"
          subtitle="School Website"
          date="Frontend Developer"
          description={`Built a responsive portfolio website using React.js and Tailwind CSS to showcase my skills and projects.
                        Integrated dynamic features like secure authentication and payment processing using Inmotion APIs or tools.
                        Focused on creating a user-friendly interface with a seamless user experience.`}
          buttonText="View Project"
          buttonLink="#"
        />
      </div>
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary-foreground/75 text-white rounded-xl p-2">
        ❮
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary-foreground/75 text-white rounded-xl p-2">
        ❯
      </button>
    </div>
  );
};

export default ProfessionalJourney;
