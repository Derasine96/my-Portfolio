import React from "react";
import ServicesSection from "./services/servicesSection";
import SkillSection from "./skills/skillSection";
import FocusPoints from "./focus/focusPoints";

function AboutMe() {
  return (
    <div className="h-full max-w-full mx-auto p-4 bg-primary-lightRed/50 items-center">
      <h1 className="lg:text-3xl md:text-xl text-center text-primary-offWhite font-robotoSerif font-bold">ABOUT ME</h1>
      <div className="flex flex-col p-4">
        <p className="lg:text-md md:text-sm sm:text-xs text-primary-offWhite leading-6 font-lato">
          I&rsquo;m a passionate frontend developer with a keen eye for design and an aspiration to become a UI/UX designer. My journey in web
          development started with a fascination for creating visually appealing and user-friendly websites, which has now grown into a full-fledged
          career path. I love turning ideas into interactive realities and strive to build applications that not only look good but are also intuitive
          and easy to use.
        </p>
        <p className="lg:text-md md:text-sm sm:text-xs md:mb-4 sm:mb-6 text-primary-offWhite leading-6 font-lato">
          I am proficient in a range of web development technologies and tools, including:
        </p>
        <div className="flex lg:pt-8">
          <div className="w-[33%]">
            <h1 className="text-primary-offWhite underline font-inria font-bold lg:text-xl">SERVICES</h1>
            <ServicesSection />
          </div>
          <div className="w-[50%] lg:ml-3 md:ml-6 sm:ml-2 sm:mr-4">
            <h1 className="text-primary-offWhite underline font-inria font-bold lg:text-xl ml-2">MY SKILLS</h1>
            <SkillSection />
          </div>
          <div className="md:ml-8 ">
            <h1 className="text-primary-offWhite underline font-inria font-bold lg:text-xl">MY FOCUS</h1>
            <FocusPoints />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
