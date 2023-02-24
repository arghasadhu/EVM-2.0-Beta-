import React from 'react'
import Hardware from "../assets/Hardware.png";

const Navbar = () => {
  return (
    <div>
        <div className='flex justify-center absolute w-full z-10'>
            <img src={Hardware} alt="Not found" className='m-5 h-[3rem] w-[4rem] md:h-[5rem] md:w-[6rem]'  />
            <p className='my-auto px-5 font-extrabold font-logo text-white text-sm md:text-lg text-center'>INNOVATIVE HARDWARE <br /> MODEL MAKING COMPETITION - 2023</p>
        </div>
    </div>
  )
}

export default Navbar