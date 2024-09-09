"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { IoIosArrowDown } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import styles from "./nav.module.css";

function MainNav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const scrollToSection = (sectionId : any) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsNavOpen(false);
  };

  return (
    <div className="w-full shadow-md max-w-full mx-auto lg:p-4 sm:p-3 bg-primary-lightRed/25 items-center">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        {/* <button className={`${styles.navLogo} flex mb-4 mr-12 md:mr-8 md:m-2`}>
          <Link href="#">@Chidera</Link>
        </button> */}
        <button className={`${styles.navLogo} flex mb-4 mr-12 md:mr-8 md:m-2`} onClick={() => scrollToSection('home')}>
          @Chidera
        </button>

        {/* Navigation Links */}
        <div className={`flex md:flex-row items-start ${isNavOpen ? "block" : "hidden"} md:flex`}>
          <h4>
            <button onClick={() => scrollToSection('home')}  className={`${styles.navLink} md:mr-2 lg:mr-6 active`}>
              Home
            </button>
          </h4>

          <h4>
            <button onClick={() => scrollToSection('about')} className={`${styles.navLink} md:mr-2 lg:mr-6`}>
              About Me
            </button>
          </h4>

          <div
            className="relative mb-7 lg:pt-[0.181rem] "
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}>
            {/* <h4> */}
              <button onClick={() => scrollToSection('portfolio')} className={`${styles.navLink} md:mr-2 lg:mr-6 flex items-center `}>
                Portfolio{" "}
                {/* <span className="">
                  <IoIosArrowDown />
                </span> */}
              </button>
            {/* </h4> */}

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden">
                <li>
                  <Link href="/portfolio/project1" className="block px-4 py-2 text-sm text-primary-darkRed hover:bg-primary-lightBeige">
                    Responsive Portfolio Website
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio/project2" className="block px-4 py-2 text-sm text-primary-darkRed hover:bg-primary-lightBeige">
                    Secondary School Website
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio/project3" className="block px-4 py-2 text-sm text-primary-darkRed hover:bg-primary-lightBeige">
                    Q.R Code Generation Website
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <h4>
            <button onClick={() => scrollToSection('home')} className={`${styles.navLink} md:mr-2 lg:mr-6`}>
              Testimonials
            </button>
          </h4>

          <h4>
            <button onClick={() => scrollToSection('about')} className={`${styles.navLink} md:mr-2 lg:mr-6`}>
              Skills
            </button>
          </h4>

          <h4>
            <button onClick={() => scrollToSection('home')} className={`${styles.navLink} md:mr-2 lg:mr-6`}>
              Blog
            </button>
          </h4>

          <h4>
            <button onClick={() => scrollToSection('contact')} className={`${styles.navLink} md:mr-2 lg:mr-6`}>
              Contact
            </button>
          </h4>
        </div>

        {/* Hamburger Menu Icon for small screens */}
        <button className="icon md:hidden ml-auto mr-6" onClick={toggleNav}>
          <FaBars color="#fe6b59" />
        </button>

        <div>
          <button onClick={() => scrollToSection('contact')}>
            <Button className={`${styles.btn} text-sm font-normal hover:text-primary-lightBeige hover:underline md:pr-0 lg:pr-2`}>
              <span className={styles["btn-text-one"]}>Get in Touch</span>
              <span className={styles["btn-text-two"]}>Thanks!</span>
            </Button>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainNav;
