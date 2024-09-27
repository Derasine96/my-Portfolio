import React from "react";

function FocusPoints() {
  return (
    <div className="flex flex-col lg:space-y-6 md:space-y-4 sm:space-y-3">
      <div className="flex space-x-4 lg:mt-4 items-center">
        <div className="border rounded-full lg:w-3 lg:h-3 md:w-2 md:h-2 sm:w-1 sm:h-1 bg-primary-offWhite"></div>
        <p className="font-lato font-medium md:text-sm sm:text-xs text-primary-offWhite">Responsive Design</p>
      </div>
      <div className="flex space-x-4 items-center">
        <div className="border rounded-full lg:w-3 lg:h-3 md:w-2 md:h-2 sm:w-1 sm:h-1 bg-primary-offWhite"></div>
        <p className="font-lato font-medium md:text-sm sm:text-xs text-primary-offWhite">Web Design</p>
      </div>
      <div className="flex space-x-4 items-center">
        <div className="border rounded-full lg:w-3 lg:h-3 md:w-2 md:h-2 sm:w-1 sm:h-1 bg-primary-offWhite"></div>
        <p className="font-lato font-medium md:text-sm sm:text-xs text-primary-offWhite">UI/UX Design</p>
      </div>
    </div>
  );
}

export default FocusPoints;
