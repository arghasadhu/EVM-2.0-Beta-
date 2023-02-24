import React from 'react'
import Joyjeet2 from "../assets/Joyjeet2.png";
import Argha2 from "../assets/Argha2.png";
import Abhishek2 from "../assets/Abhishek2.png";
import Aniket from "../assets/Aniket.png";
import Anup from "../assets/Anup.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";


const OurTeam = () => {
  return (
    <div className=''>

      <div className='flex justify-center mt-6'>
        <h1 className='text-4xl font-extrabold '><u>OUR TEAM</u></h1>
      </div>
      <div className='flex bg-gray-100 flex-wrap m-4'>
        <div className="joyjeet bg-white border-t-8  p-4 sm:w-1/2 lg:w-1/3 flex justify-center flex-col  cursor-pointer shadow-lg hover:scale-110 transition-all duration-500">
          <img src={Joyjeet2} alt="not found" className='w-[44%] mx-auto' />
          <h2 className='text-center font-extrabold text-lg'>Joyjeet Mukherjee</h2>
          <div className='flex mx-auto'>
            <a href="https://www.facebook.com/joyjeet.mukherjee.92" target="_blank" rel="noopener noreferrer">
              <FaFacebook className='mx-2 text-2xl' />
            </a> 
            <a href="https://www.instagram.com/_mr__mukherjee__/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className='mx-2 text-2xl' />
            </a>
            <a href="https://www.linkedin.com/in/joyjeet-mukherjee-48b298206/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className='mx-2 text-2xl' />
            </a>
          </div>
        </div>
        <div className="anup border-t-8 bg-gray-100 p-4 sm:w-1/2 lg:w-1/3 flex justify-center flex-col  cursor-pointer shadow-lg hover:scale-110 transition-all duration-500">
          <img src={Anup} alt="not found" className='w-[44%] mx-auto' />
          <h2 className='text-center font-extrabold text-lg'>Anup Gorai</h2>
          <div className='flex mx-auto'>
            <a href="https://www.linkedin.com/in/profile-of-anupgorai/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className='mx-2 text-2xl' />
            </a>
          </div>
        </div>
        <div className="argha bg-white border-t-8 p-4 sm:w-1/2 lg:w-1/3 flex justify-center flex-col  cursor-pointer shadow-lg hover:scale-110 transition-all duration-500">
          <img src={Argha2} alt="not found" className='w-[44%] mx-auto' />
          <h2 className='text-center font-extrabold text-lg'>Argha Sadhu</h2>
          <div className='flex mx-auto'>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaFacebook className='mx-2 text-2xl' />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaInstagram className='mx-2 text-2xl' />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className='mx-2 text-2xl' />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaTwitter className='mx-2 text-2xl' />
            </a>
          </div>
        </div>
        <div className="abhishek border-t-8 bg-gray-100 p-4 sm:w-1/2 lg:w-1/3 flex justify-center flex-col  cursor-pointer shadow-lg hover:scale-110 transition-all duration-500">
          <img src={Abhishek2} alt="not found" className='w-[44%] mx-auto' />
          <h2 className='text-center font-extrabold text-lg'>Abhishek Baranwal</h2>
          <div className='flex mx-auto'>
            <a href="https://www.instagram.com/theabhishekbaranwal" target="_blank" rel="noopener noreferrer">
              <FaInstagram className='mx-2 text-2xl' />
            </a>
            <a href="https://www.linkedin.com/in/theabhishekbaranwal/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className='mx-2 text-2xl' />
            </a>
            <a href="https://twitter.com/itsBaranwal" target="_blank" rel="noopener noreferrer">
              <FaTwitter className='mx-2 text-2xl' />
            </a>
          </div>
        </div>
        <div className="aniket border-t-8 bg-white p-4 sm:w-1/2 lg:w-1/3 flex justify-center flex-col  cursor-pointer shadow-lg hover:scale-110 transition-all duration-500">
          <img src={Aniket} alt="not found" className='w-[44%] mx-auto' />
          <h2 className='text-center font-extrabold text-lg'>Aniket Kumar Singh</h2>
          <div className='flex mx-auto'>
            <a href="https://www.facebook.com/profile.php?id=100049177296763" target="_blank" rel="noopener noreferrer">
              <FaFacebook className='mx-2 text-2xl' />
            </a>
            <a href="https://www.instagram.com/demoniacx007/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className='mx-2 text-2xl' />
            </a>
            <a href="https://www.linkedin.com/in/aniket-kumar-singh-2bb151176" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className='mx-2 text-2xl' />
            </a>
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default OurTeam