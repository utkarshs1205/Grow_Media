import React from "react";
import ContactUsLeft from "./ContactUsLeft";
import ContactUsRight from "./ContactUsRight";

const ContactUsMain = () => {
  return (
    <div
      id="contact"
      className="max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4"
    >
      <h2 className="text-6xl text-black mb-10 text-center font-bold">Contact Us</h2>
      <div className="flex flex-col lg:flex-row justify-between gap-24 bg-brown p-8 rounded-2xl">
        <ContactUsLeft />
        <ContactUsRight />
      </div>
    </div>
  );
};

export default ContactUsMain;