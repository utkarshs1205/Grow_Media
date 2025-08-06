import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="growmedia531@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91 8858815858" Image={FiPhone} />
      <SingleInfo text="Lucknow,Uttar Pradesh" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;