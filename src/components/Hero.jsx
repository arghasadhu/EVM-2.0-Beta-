import React from 'react'
import Adiyogi from "../assets/Adiyogi.jpg";
import Adiyogi_Mobile from "../assets/Adiyogi_Mobile.jpg";


const Hero = () => {
  
  return (
    <div className='w-full h-screen relative'>
      <img src={Adiyogi_Mobile} alt="" className='md:hidden w-full h-full object-cover' />
      <img src={Adiyogi} alt="" className='hidden md:block w-full h-full object-cover' />
      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/40'></div>

      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-right text-white font-extrabold  pr-9'>
        <h1 className='text-5xl md:text-9xl font-team'>TEAM</h1>
        <h1 className='text-6xl md:text-9xl font-adiyogi'>ADIYOGI</h1>
        
      </div>
    </div>
  )
}

export default Hero