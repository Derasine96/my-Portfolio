import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";

function ServicesCard({ title, description }: any) {
  return (
    <div className="bg-primary-darkRed lg:p-2 md:p-1 rounded-md shadow-md border border-primary-orangeBrown/50">
      <div className="text-primary-brightCoral mb-2 pt-0">
        <FaRegCheckCircle />
      </div>
      <h3 className="text-primary-offWhite lg:text-lg md:text-sm sm:text-xs font-semibold font-lato lg:mb-2 md:mb-1">{title}</h3>
      <p className="text-primary-lightBeige font-lato lg:text-sm md:text-xs sm:text-xs lg:mb-4 md:mb-2">{description}</p>
    </div>
  );
}

export default ServicesCard;
