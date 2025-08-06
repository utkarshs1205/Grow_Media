import React from 'react';
import { BsAt } from "react-icons/bs";
import { SiMicrostrategy } from "react-icons/si";
import { MdPermIdentity } from "react-icons/md";
import { LiaAdSolid } from "react-icons/lia";
import SingleService from './SingleService';

const services = [
  {
    service: 'Social ',
    icon: BsAt,
  },
  {
    service: 'Creative ',
    icon: SiMicrostrategy,
  },
  {
    service: 'Presence',
    icon: MdPermIdentity,
  },
  {
    service: 'Ads',
    icon: LiaAdSolid,
  },
];


const AllServicesSM = () => {
  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12'>
      {services.map((item,index)=>{
        return <div key={index} className='flex flex-col items-center'>
            <item.icon className='text-7xl text-black'/>
            <p className='text-center mt-4'>{item.service}</p>
        </div>
      })}
    </div>
  )
}

export default AllServicesSM
