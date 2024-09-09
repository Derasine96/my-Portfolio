import React from "react";
import ContactInfo from "./contactInfo";
import ContactForm from "./contactForm";

function Contact() {
  return (
    <div className="h-full max-w-full mx-auto items-center pb-10">
      <h1 className="lg:text-3xl md:text-xl text-center text-primary-offWhite font-robotoSerif font-bold md:p-8 sm:p-3">CONTACT ME</h1>
      <div className="md:flex md:space-x-12 sm:space-y-6 px-12 justify-around pt-2">
        <ContactInfo />
        <ContactForm />
      </div>
      <div></div>
    </div>
  );
}

export default Contact;
