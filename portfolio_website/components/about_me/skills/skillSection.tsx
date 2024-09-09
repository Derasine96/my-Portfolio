import React from "react";
import Icon_section from "./icons/icon_section";
import LanguageSection from "./language/languageSection";
import ProgressBars from "./progress/progressBars";

function SkillSection() {
  return (
    <div className="flex space-x-1">
      {/* <div className="flex  "> */}
      <div className="w-[50px] p-2 text-primary-lightBeige">
        <Icon_section />
      </div>
      <div className="text-primary-offWhite">
        <LanguageSection />
      </div>
      <div className="lg:w-[300px] md:w-[150px] sm:w-[120px] text-primary-lightBeige">
        <ProgressBars />
      </div>
    </div>
    // </div>
  );
}

export default SkillSection;
