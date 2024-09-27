import React from "react";
import WebDev from "./WebDev2";
import UxDev from "./UXDev";

const Portfolio = () => {
  return (
    <div className="relative w-full max-w-full mx-auto px-6 bg-primary-lightRed/50 pb-8">
      <h1 className="lg:text-3xl md:text-xl text-center text-primary-offWhite font-robotoSerif font-bold pt-4 py-2">PORTFOLIO</h1>
      <p className="lg:text-md text-primary-offWhite leading-6 font-lato text-center pb-8">
        A showcase of my projects demonstrating proficiency in coding and user-centered design principles.
      </p>
      <div className="px-8 flex flex-col space-y-8">
        <WebDev />
        <UxDev />
      </div>
    </div>
  );
};

export default Portfolio;
