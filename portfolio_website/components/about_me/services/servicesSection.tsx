import React from "react";
import ServicesCard from "./servicesCard";


function ServicesSection() {
  return (
    <div className="flex flex-col space-y-8 sm:space-y-4 md:p-1 lg:p-3 pl-0 lg:w-[80%] md:w-[100%] sm:w-[90%]">
      <ServicesCard
        title="Frontend Development"
        description="High proficiency in HTML, CSS, JavaScript, and popular frameworks."
      />
      <ServicesCard
        title="UI/UX Design"
        description="Expertise in creating intuitive and responsive user interfaces.
        "
      />
      <ServicesCard
        title="Professional Journey"
        description="High proficiency in HTML, CSS, JavaScript, and popular frameworks."
      />
    </div>
  );
}

export default ServicesSection;
