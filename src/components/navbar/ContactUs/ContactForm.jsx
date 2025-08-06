import React from 'react'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
const ContactForm = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [message,setMessage]=useState('');
    const [success,setSuccess]=useState('');

    const handleName=(e)=>{
        setName(e.target.value)
    }
    const hadnleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handleMessage=(e)=>{
        setMessage(e.target.value)
    }

    const form=useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_099ghod', 'template_ai0pevs', form.current, {
        publicKey: 'viqgVT_FBXGpGrC0W',
      })
      .then(
        () => {
          setName('');
          setEmail('');
          setMessage('');
          setSuccess('Message Sent!')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <div>
        <p className='text-white'>{success}</p>
      <form className='flex flex-col gap-4' ref={form} onSubmit={sendEmail}>
        <input type="from_name" placeholder="Your Name" required className='h-12 rounded-lg bg-lightBrown px-2' value={name} onChange={handleName}/>
        <input type="from_email" placeholder='Your Email' required className='h-12 rounded-lg bg-lightBrown px-2' value={email} onChange={hadnleEmail}/>
        <textarea  
        type='message'
         placeholder='Message' 
         rows='9' 
         cols="50"
         required 
         className='rounded-lg bg-lightBrown p-2'
         value={message}
         onChange={handleMessage}
         />
        <button type="submit" className='w-full rounded-lg border border-black text-white h-12 font-bold text-al hover:bg-darkCyan bg-black transition-all duration-500'>Send</button>
      </form>
    </div>
  )
}

export default ContactForm
