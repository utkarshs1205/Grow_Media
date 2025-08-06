import React from 'react';
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { Link } from 'react-scroll';

const NavBarBtn = () => {
  return (
    <Link
      to="contact"
      smooth={true}
      duration={500}
      offset={-130}
      className="cursor-pointer"
    >
      <button
        id="contactus"
        className='px-4 py-2 rounded-full text-xl font-bold text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-black hover:border-white hover:scale-110 transition-all duration-500 hover:shadow-whiteShadow'
      >
        Contact us
        <div className='sm:hidden md:block'>
          <MdOutlineKeyboardDoubleArrowDown />
        </div>
      </button>
    </Link>
  );
};

export default NavBarBtn;