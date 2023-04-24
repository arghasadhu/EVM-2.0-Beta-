import React from 'react'
import Aec from "../assets/Aec.png";
import Heritage from "../assets/Heritage.png";

const Navbar = () => {
  return (
    <div>
        <div className='flex justify-center absolute w-full z-10'>
            <img src={Heritage} alt="Not found" className='m-5 h-[4rem] w-[5rem] md:h-[5rem] md:w-[7rem]'  />
            <img src={Aec} alt="Not found" className='m-5 h-[3rem] w-[4rem] md:h-[5rem] md:w-[6rem]'  />
            <p className='my-auto px-5 font-extrabold font-logo text-white text-sm md:text-lg text-center'>6th “Inter College Competition on Prototype Design for Mankind” (ICCPDM)</p>
        </div>
    </div>
  )
}

export default Navbar