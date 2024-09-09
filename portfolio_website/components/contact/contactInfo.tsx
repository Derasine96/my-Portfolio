import React from "react";
import { TiSocialLinkedin, TiSocialTwitter } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { IoIosHome } from "react-icons/io";
import { IoMdMail } from "react-icons/io";

function ContactInfo() {
  return (
    <div className="flex flex-col w-1/3">
      <h1 className="font-bold text-primary-offWhite font-inria md:text-xl sm:text-sm mb-1 md:w-full sm:w-[500px] md:text-left ">GET IN TOUCH!</h1>
      <p className="text-primary-offWhite lg:text-md md:text-sm sm:text-xs mb-6 md:w-full sm:w-[500px] md:text-left ">
        If you have any questions, opportunities, or just want to say hi, feel free to reach out!
      </p>
      <div className="flex flex-col md:w-full sm:w-[500px]">
        <div className="mb-6">
          <div className="flex items-center">
            <span className="bg-primary-brightCoral p-1 rounded mr-4 flex items-center">
              <IoIosHome color="black" size={20} />
            </span>
            <h3 className="text-white text-sm font-bold uppercase font-inter">ADDRESS:</h3>
          </div>
          <h5 className="text-white lg:text-sm md:text-xs sm:text-xs ml-10 font-inter">No. 95/170, Oguta Road, Woliwo, Onitsha, Anambra State.</h5>
        </div>
        <div className="mb-6">
          <div className="flex items-center">
            <span className="bg-primary-brightCoral p-1 rounded mr-4 flex items-center">
              <IoMdMail size={20} />
            </span>
            <h3 className="text-primary-offWhite text-sm font-bold uppercase font-inter">EMAIL:</h3>
          </div>
          <h5 className="text-primary-offWhite lg:text-sm md:text-xs sm:text-xs ml-10 font-inter">chidexobikwelu@gmail.com</h5>
        </div>
        <div className="mb-6">
          <div className="flex items-center">
            <span className="bg-primary-brightCoral p-1 rounded mr-4 flex items-center">
              <FaPhoneAlt size={20} />
            </span>
            <h3 className="text-primary-offWhite text-sm font-bold uppercase font-inter">PHONE NO:</h3>
          </div>

          <h5 className="text-primary-offWhite lg:text-sm md:text-xs sm:text-xs ml-10 font-inter">+234 813 600 8093</h5>
          <h5 className="text-primary-offWhite lg:text-sm md:text-xs sm:text-xs ml-10 font-inter">+234 812 566 1359</h5>
        </div>
      </div>
      <div className="flex space-x-2">
        <a
          href="https://www.linkedin.com/in/chideraobikwelu/"
          target="_blank"
          rel="noreferrer"
          className="border rounded-full p-1 border-primary-brightCoral">
          {/* <TiSocialLinkedin color="white" size={25} /> */}
          <TiSocialLinkedin className="lg:w-8 lg:h-8 md:w-6 md:h-6 sm:w-4 sm:h-4 text-white" />
        </a>
        <a href="https://www.github.com/Derasine96/" target="_blank" rel="noreferrer" className="border rounded-full p-1 border-primary-brightCoral">
          <FaGithub className="lg:w-8 lg:h-8 md:w-6 md:h-6 sm:w-4 sm:h-4 text-white" />
        </a>
        <a
          href="https://x.com/Derasine_j"
          target="_blank"
          rel="noreferrer"
          className="border rounded-full p-1 border-primary-brightCoral">
          <TiSocialTwitter className="lg:w-8 lg:h-8 md:w-6 md:h-6 sm:w-4 sm:h-4 text-white" />
        </a>
        <a
          href="https://www.instagram.com/iam_derasine/"
          target="_blank"
          rel="noreferrer"
          className="border rounded-full p-1 border-primary-brightCoral">
          <SlSocialInstagram className="lg:w-8 lg:h-8 md:w-6 md:h-6 sm:w-4 sm:h-4 text-white" />
        </a>
        <a
          href="https://web.facebook.com/chidex.obikwelu"
          target="_blank"
          rel="noreferrer"
          className="border rounded-full p-1 border-primary-brightCoral">
          <FaFacebook className="lg:w-8 lg:h-8 md:w-6 md:h-6 sm:w-4 sm:h-4 text-white" />
        </a>
      </div>
    </div>
  );
}

export default ContactInfo;
