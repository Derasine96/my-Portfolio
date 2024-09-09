import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import styles from "./portfolioCard.module.css";

const PortfolioCard = ({ image, title, description, buttonText, buttonLink } : any) => {
  return (
    <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 lg:min-w-[250px] lg:max-w-[400px] md:max-w-[350px] sm:min-w-[190px] pb-4">
      <div className="flex flex-col flex-shrink-0 pb-4">
        <Image src={image} alt={title} width={220} height={200} className="bg-url({'image'}) rounded-xl shadow-xl overflow-hidden mb-2" />
      <h3 className="text-primary-lightBeige font-medium text-md mb-1">{title}</h3>
      <h3 className="text-primary-offWhite text-xs mb-1 lg:w-[250px] md:w-[230px] sm:w-[200px]">{description}</h3>
      </div>
      {buttonText && buttonLink && (
        <Link href={buttonLink}>
        <Button className={`${styles.btn} hover:text-primary-lightBeige hover:underline md:pr-0 lg:pr-2`}>
          <span className={styles["btn-text-one"]}>{buttonText}</span>
          <span className={styles["btn-text-two"]}>Thanks</span>
        </Button>
      </Link>
      )}
    </div>
  );
};

export default PortfolioCard;
