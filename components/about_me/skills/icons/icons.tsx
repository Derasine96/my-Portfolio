import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa6";
import { FaJs } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { SiGnubash } from "react-icons/si";

function ReactIcon() {
  return (
      <div className="border border-primary-brightCoral border-3 lg:p-1 md:p-0.5 sm:p-0">
        <FaReact className="lg:w-9 lg:h-9 md:w-7 md:h-7 sm:w-7 sm:h-7 xs:w-4 xs:h-4" />
      </div>
  );
}

function Html5Icon() {
  return (
    <div className="border border-primary-brightCoral border-3 lg:p-1 md:p-0.5 sm:p-0">
      <FaHtml5 className="lg:w-9 lg:h-9 md:w-7 md:h-7 sm:w-7 sm:h-7 xs:w-4 xs:h-4" />
    </div>
  );
}

function Css3Icon() {
  return (
    <div className="border border-primary-brightCoral border-3 lg:p-1 md:p-0.5 sm:p-0">
      <FaCss3 className="lg:w-9 lg:h-9 md:w-7 md:h-7 sm:w-7 sm:h-7 xs:w-4 xs:h-4" />
    </div>
  );
}

function JsIcon() {
  return (
    <div className="border border-primary-brightCoral border-3 lg:p-1 md:p-0.5 sm:p-0">
      <FaJs className="lg:w-9 lg:h-9 md:w-7 md:h-7 sm:w-7 sm:h-7 xs:w-4 xs:h-4" />
    </div>
  );
}

function MySQLIcon() {
  return (
    <div className="border border-primary-brightCoral border-3 lg:p-1 md:p-0.5 sm:p-0">
      <SiMysql className="lg:w-9 lg:h-9 md:w-7 md:h-7 sm:w-7 sm:h-7 xs:w-4 xs:h-4" />
    </div>
  );
}

function BashIcon() {
  return (
    <div className="border border-primary-brightCoral border-3 lg:p-1 md:p-0.5 sm:p-0">
      <SiGnubash className="lg:w-9 lg:h-9 md:w-7 md:h-7 sm:w-7 sm:h-7 xs:w-4 xs:h-4" />
    </div>
  );
}

function GitHubIcon() {
  return (
    <div className="border border-primary-brightCoral border-3 lg:p-1 md:p-0.5 sm:p-0">
      <FaGithub className="lg:w-9 lg:h-9 md:w-7 md:h-7 sm:w-7 sm:h-7 xs:w-4 xs:h-4" />
    </div>
  );
}

export { ReactIcon, Html5Icon, Css3Icon, JsIcon, MySQLIcon, BashIcon, GitHubIcon };
