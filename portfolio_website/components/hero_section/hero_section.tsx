import React from "react";
import Link from "next/link";
import { MdOutlineWavingHand } from "react-icons/md";
import styles from "./hero_section.module.css";
import { Button } from "@/components/ui/button";

function HeroSection() {
  return (
    <div className="relative h-full flex items-center lg:p-12 lg:pl-2 md:pl-10 md:p-8">
      <div className="relative z-10 ml-24">
        {/* Text Section */}
        <button className={styles["helloButton"]}>
          HELLO <MdOutlineWavingHand className="lg:ml-4 md:ml-2 sm:ml-4" />
        </button>
        <h1 className={`${styles.hero} font-robotoSlab`}>
          HEY THERE!, IT’S <span className="lg:text-8xl md:text-8xl sm:text-7xl">CHIDERA</span>
        </h1>
        <h2 className={`${styles.heroh2} font-lato`}>Bringing Ideas to Life with Code and Creativity</h2>
        <p className={`${styles.heroP} font-inter`}>
          Welcome to my corner, I’m Chidera, a passionate frontend developer and aspiring UI/UX designer dedicated to building beautiful and
          functional web applications.
        </p>
        <div className="flex space-x-12 mt-4 ml-24 mb-2">
          <Link href="/portfolio">
            <Button className={`${styles.btn}`}>
              <span className={styles["btn-text-one"]}>View Portfolio </span>
              <span className={styles["btn-text-two"]}>Thanks!</span>
            </Button>
          </Link>
          <Link href="/contact">
            <button className={styles["contact"]}>Contact</button>
          </Link>
        </div>
      </div>
      <div className={styles["heroImage"]}></div>
    </div>
  );
}

export default HeroSection;
