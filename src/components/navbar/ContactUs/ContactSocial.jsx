import React from 'react'
import SingleContactSocial from './SingleContactSocial';
import { FaInstagram } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
const ContactSocial = () => {
  return (
    <div className='flex gap-4'>
      <SingleContactSocial Link='#' Icon={FaInstagram}/>
      <SingleContactSocial Link='#' Icon={ImWhatsapp}/>
    </div>
  );
};

export default ContactSocial
