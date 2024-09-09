import React from "react";
import { ReactIcon, Html5Icon, Css3Icon, JsIcon, MySQLIcon, BashIcon, GitHubIcon } from "./icons";


function Icon_section() {
  return <div className="flex flex-col space-y-10 lg:space-y-[18px] md:space-y-[22px] sm:space-y-5 items-start">
    <ReactIcon />
    <Html5Icon />
    <Css3Icon />
    <JsIcon  />
    <MySQLIcon />
    <BashIcon />
    <GitHubIcon />
  </div>;
}

export default Icon_section;
