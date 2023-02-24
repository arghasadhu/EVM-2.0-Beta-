import React from 'react'
import Model1 from "../assets/Model1.jpeg";
import Model2 from "../assets/Model2.jpeg";
import Model3 from "../assets/Model3.jpg";
import Model4 from "../assets/Model4.jpg";
import Model5 from "../assets/Model5.jpg";
// import { useEffect, useState } from "react";


const OurProject = () => {

    // const [slide, setSlide] = useState(0)

    return (
        <div className=''>
            <div className='flex justify-center mt-5'>
                <h1 className='font-extrabold text-4xl'><u>OUR PROJECT</u></h1>
            </div>
            <div className='max-w-[1240px] mx-auto px-4 relative flex justify-center items-center'>
                <div className='photos mt-8 justify-between md:grid md:grid-cols-3 md:gap-2 flex flex-wrap '>
                <img src={Model1} alt="" srcset="" className=' rounded-md my-4 w-[73%] h-[85%]' />
                <img src={Model2} alt="" srcset="" className=' rounded-md my-4 w-[73%] h-[85%]' />
                <img src={Model3} alt="" srcset="" className=' rounded-md my-4 w-[73%] h-[85%]' />
                <img src={Model4} alt="" srcset="" className=' rounded-md my-4 w-[77%] h-[121%]' />
                <img src={Model5} alt="" srcset="" className=' rounded-md my-4 w-[77%] h-[121%]' />
                </div>
            </div>
                <div className='para my-auto mt-[10%]'>
                    <p className='text-center text-xl font-bold'>An advanced and secured fingerprint voting system is a cutting-edge technology that utilizes biometric authentication to ensure secure, accurate and tamper-proof voting. This system requires voters to scan their fingerprints, which are unique to each individual, to verify their identity and eligibility to vote. The fingerprint data is then encrypted and stored in a secure database, which can only be accessed by authorized personnel. This advanced system offers a higher level of security and accuracy compared to traditional paper-based voting systems, which are susceptible to fraud, errors and tampering. With an advanced and secured fingerprint voting system, voters can be confident that their votes will be counted accurately, and election results can be trusted to reflect the will of the people.</p>
                </div>
        </div>
    )
}

export default OurProject