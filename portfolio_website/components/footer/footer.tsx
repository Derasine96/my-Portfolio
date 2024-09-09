import React from "react";
import Link from "next/link";
import styles from "./footer.module.css";

function Footer() {
  return (
    <div className="relative w-full max-w-full mx-auto bg-primary-lightRed/50">
      <div className="flex justify-around py-2">
        <div className="flex flex-col space-y-3">
          <p className="text-primary-offWhite font-lato md:text-base md:text-base sm:text-sm">Explore</p>
          <div className="flex flex-col space-y-2">
            <h5 className="text-primary-brightCoral font-lato lg:text-base md:text-sm sm:text-xs">
              <Link href="/about" className={styles["linkButton"]}>
                About
              </Link>
            </h5>
            <h5 className="text-primary-brightCoral font-lato lg:text-base md:text-sm sm:text-xs">
              <Link href="/portfolio" className={styles["linkButton"]}>
                Portfolio
              </Link>
            </h5>
            <h5 className="text-primary-brightCoral font-lato lg:text-base md:text-sm sm:text-xs">
              <Link href="#" className={styles["linkButton"]}>
                Blog
              </Link>
            </h5>
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <p className="text-primary-offWhite font-lato md:text-base sm:text-sm">Resources</p>
          <div className="flex flex-col space-y-2">
            <h5 className="text-primary-brightCoral font-lato lg:text-base md:text-sm sm:text-xs">
              <Link href="#" className={styles["linkButton"]}>
                Resume
              </Link>
            </h5>
            <h5 className="text-primary-brightCoral font-lato lg:text-base md:text-sm sm:text-xs">
              <Link href="#" className={styles["linkButton"]}>
                Contact
              </Link>
            </h5>
            <h5 className="text-primary-brightCoral font-lato lg:text-base md:text-sm sm:text-xs">
              <Link href="#" className={styles["linkButton"]}>
                Certificates
              </Link>
            </h5>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end px-6  mt-2">
        <Link href="#" className={`${styles.button} mb-2`}>
          <svg className={styles["svgIcon"]} viewBox="0 0 384 512">
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
          </svg>
        </Link>
        <div className="text-center text-primary-offWhite font-lato lg:text-base md:text-sm sm:text-xs hover:underline w-full">
          <Link href="#">© 2024, All Rights Reserved.</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
