import React from 'react';
import { BsAt } from "react-icons/bs";
import { SiMicrostrategy } from "react-icons/si";
import { MdPermIdentity } from "react-icons/md";
import { LiaAdSolid } from "react-icons/lia";
import SingleService from './SingleService';
import { motion } from 'framer-motion';
import { fadeIn } from '@/framerMotion/variants';

const services = [
  { service: 'Social', icon: BsAt },
  { service: 'Creative', icon: SiMicrostrategy },
  { service: 'Presence', icon: MdPermIdentity },
  { service: 'Ads', icon: LiaAdSolid },
];

const AllServices = () => {
  return (
    <div>
      <div className='flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto'>
        {services.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              variants={fadeIn('up', parseFloat(`0.${index}`))}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0 }}
            >
              <SingleService text={item.service} imgSvg={<Icon />} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllServices;