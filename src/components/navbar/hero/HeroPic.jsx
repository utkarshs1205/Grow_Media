import React from 'react';
import { BiSquare } from "react-icons/bi";
import {motion} from 'framer-motion';
import { fadeIn } from '@/framerMotion/variants';

const HeroPic = () => {
  return (
    <motion.div 
    variants={fadeIn('left',0.8)}
          initial='hidden'
          whileInView='show'
          viewport={{once:false, amount:0.9}}
    className='relative h-[600px] w-[600px] flex items-center justify-center mx-auto'>
      
      {/* Animated Square Behind */}
      <div className='absolute -z-10 flex items-center justify-center animate-none '>
        <BiSquare className='h-[500px] w-[600px] text-cyan-500 blur-md animate-[spin_20s_linear_infinite]'/>
      </div>

      {/* Your Logo Image */}
      <img
        src="/1.png"
        alt="GROW MEDIA"
        className='max-h-[350px] w-auto '
      />
      
    </motion.div>
  );
};

export default HeroPic;