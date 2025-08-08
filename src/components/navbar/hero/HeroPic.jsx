import React from 'react';
import { BiSquare } from "react-icons/bi";
import {motion} from 'framer-motion';
import { fadeIn } from '@/framerMotion/variants';

const HeroPic = () => {
  return (
    <motion.div 
  variants={fadeIn('left', 0.2)}
  initial='hidden'
  whileInView='show'
  viewport={{ once: false, amount: 0.2 }}
  className='relative h-[600px] w-full max-w-[600px] flex items-center justify-center mx-auto'
>
  {/* Animated Square Behind */}
  <div className='absolute inset-0 -z-10 flex items-center justify-center'>
    <BiSquare className='h-[500px] w-[500px] text-cyan-500 blur-md animate-[spin_20s_linear_infinite]' />
  </div>

  {/* Your Logo Image */}
  <img
    src="/1.png"
    alt="GROW MEDIA"
    className='max-h-[350px] w-auto max-w-full'
  />
</motion.div>
  );
};

export default HeroPic;