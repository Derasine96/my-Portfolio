"use client";

import React from "react";
import { useState } from "react";
import { LuSend } from "react-icons/lu";
import styles from "./contactForm.module.css";

function ContactForm() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInput = (event: any) => {
    const { name, value } = event.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div className="flex space-x-4">
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleInput}
            placeholder="YOUR NAME"
            className="lg:w-1/2 md:w-[40%] sm:w-1/2 bg-transparent border border-primary-lightBeige/50 text-offWhite rounded-full lg:px-10 md:px-6 sm:px-6 py-2 placeholder-primary-offWhite/40 placeholder:text-xs placeholder:font-inter "
          />
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleInput}
            placeholder="YOUR EMAIL ADDRESS"
            className="lg:w-1/2 md:w-[60%] sm:w-1/2 bg-transparent border border-primary-lightBeige/50 text-offWhite rounded-full lg:px-10 md:px-6 sm:px-6 py-2 placeholder-primary-offWhite/40 placeholder:text-xs  placeholder:font-inter"
          />
        </div>
        <input
          type="text"
          name="subject"
          value={formValues.subject}
          onChange={handleInput}
          placeholder="YOUR SUBJECT"
          className="w-full bg-transparent border border-primary-lightBeige/50 text-offWhite rounded-full lg:px-10 md:px-6 sm:px-6 py-2 placeholder-primary-offWhite/40 placeholder:text-xs placeholder:font-inter"
        />
        <textarea
          name="message"
          value={formValues.message}
          onChange={handleInput}
          placeholder="YOUR MESSAGE"
          className="w-full h-32 bg-transparent border border-primary-lightBeige/50 text-offWhite rounded-2xl lg:px-10 md:px-6 sm:px-6 py-4 placeholder-primary-offWhite/40 placeholder:text-xs placeholder:font-inter resize-none h-56"></textarea>
        <div className="relative inline-block">
          <button
            type="submit"
            // className="font-robotoSerif">
            className={`${styles.sendMsg} font-robotoSerif`}>
            Send Message
            <span className="absolute top-1/2 right-4 transform translate-x-1/2 -translate-y-1/2 bg-primary-brightCoral rounded-full p-2">
              <LuSend color="white" size={20} />
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
