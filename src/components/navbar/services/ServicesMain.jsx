import React from 'react';
import ServicesText from './ServicesText';
import AllServices from './AllServices';
import AllServicesSM from './AllServicesSM';
import {motion} from 'framer-motion';
import { fadeIn } from '@/framerMotion/variants';

const ServicesMain = () => {
  return (
    <div id="services">
      <div className='relative max-w-[1200px] px-4 mx-auto min-h-[600px] py-5 pt-[1px] flex flex-col items-center gap-12'>
        <motion.div 
        variants={fadeIn('down',0.4)}
                  initial='hidden'
                  whileInView='show'
                  viewport={{once:false, amount:0}}
        >
          <ServicesText />
        </motion.div>
        
        <div className='bottom-[50px] absolute left-[50%] -translate-x-[50%] lg:block sm:hidden z-10'>
          <AllServices />
        </div>
        <div className='sm:block lg:hidden'>
          <AllServicesSM />
        </div>
      </div>
    </div>
  );
};

export default ServicesMain;