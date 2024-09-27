import React from "react";
import Link from "next/link";
import { FaRegCheckCircle } from "react-icons/fa";
import styles from "./journeyCard.module.css";
import { Button } from "@/components/ui/button";

type JourneyCardProps = {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  buttonText: any;
  buttonLink: any;
};

const JourneyCard = ({ title, subtitle, date, description, buttonText, buttonLink }: JourneyCardProps) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["flex"]}>
        <FaRegCheckCircle className={styles["icon"]} />
        <h3 className={styles["title"]}>{title}</h3>
      </div>
      <div className={styles["flex"]}>
        <div className={styles["border-left"]}></div>
        <div>
          <h4 className={styles["subtitle"]}>{subtitle}</h4>
          <p className={styles["date"]}>{date}</p>
          <p className={styles["description"]}>{description}</p>
          {buttonText && buttonLink && (
            <Link href={buttonLink}>
              <Button className={`${styles.btn} hover:text-primary-lightBeige hover:underline md:pr-0`}>
                <span className={styles["btn-text-one"]}>{buttonText}</span>
                <span className={styles["btn-text-two"]}>Thanks</span>
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default JourneyCard;
