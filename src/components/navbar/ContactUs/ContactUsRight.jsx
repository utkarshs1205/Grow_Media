import React from "react";
import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

const ContactUsRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <img
        src="/email.png"
        alt="email image"
        className="max-w-[300px]"
      />
      <ContactInfo />
      <ContactSocial />
    </div>
  );
};

export default ContactUsRight;