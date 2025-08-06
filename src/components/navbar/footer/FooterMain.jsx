import { link } from "react-scroll";
import React from "react";
const links = [
  { link: "About us", section: "about" },
  { link: "Our Services", section: "services" },
  { link: "Clients", section: "clients" },
  { link: "Contact", section: "contact" },
];


const FooterMain = () => {
  
  return (
    <div className="px-4">
      <div className="w-full h-[1px] bg-black mt-24"></div>
      <div className="md:flex justify-between mt-4 max-w-[1200px] mx-auto sm:hidden">
        <p className="text-3xl text-black ">Grow Media</p>
        <ul className="flex gap-4 text-black text-xl">
          {links.map((item, index) => {
            return (
              <li key={index}>
                <links
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-120}
                  to={item.section}
                  className="hover:text-black transition-all duration-500 cursor-pointer"
                >
                  {item.link}
                </links>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-black">
        © 202 Grow Media | All Rights Reserved.
      </p>
    </div>
  );
};

export default FooterMain;