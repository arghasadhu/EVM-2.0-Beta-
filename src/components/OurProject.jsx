import React from "react";
import Evm1 from "../assets/Evm1.png"
import Evm2 from "../assets/Evm2.png"

// import Model4 from "../assets/Model4.jpg";
// import Model5 from "../assets/Model5.jpg";
// import { useEffect, useState } from "react";

const OurProject = () => {
  // const [slide, setSlide] = useState(0)

  return (
    <div className="">
      <div className="flex justify-center mt-5">
        <h1 className="font-extrabold md:text-5xl text-4xl md:tracking-widest font-project">
          <u>OUR PROJECT</u>
        </h1>
      </div>
        <p className=" flex justify-center font-extrabold mt-5 pt-6 text-5xl font-evmtitle md:">EVM 2.0(βeta)</p>
      <div className="max-w-[1240px] mx-auto px-4 relative flex justify-center items-center">
        <div className="photos w-[100%] md:ml-0 mt-8 justify-center md:gap-2 flex flex-col">
          <img
            src={Evm1}
            alt=""
            srcset=""
            className=" rounded-md my-4 w-[90%] h-[100%] md:w-[100%] md:h-[100%] mx-auto"
          />
          <img
            src={Evm2}
            alt=""
            srcset=""
            className=" mx-auto rounded-md my-4 w-[77%] h-[121%] md:w-[100%] md:h-[100%]"
          />
          {/* <img
            src={Model3}
            alt=""
            srcset=""
            className=" rounded-md my-4 w-[77%] h-[121%] md:w-[73%] md:h-[85%] shadow-2xl"
          /> */}
          {/* <img
            src={Model4}
            alt=""
            srcset=""
            className=" rounded-md my-4 w-[77%] h-[121%] shadow-2xl"
          />
          <img
            src={Model5}
            alt=""
            srcset=""
            className=" rounded-md my-4 w-[77%] h-[121%] shadow-2xl"
          /> */}
        </div>
      </div>
      <div className="para my-auto mt-[10%]">
        <p className="px-10 text-center font-para text-sm md:text-2xl font-bold">
          This system requires voters to scan
          their fingerprints, which are unique to each individual, to verify
          their identity and eligibility to vote. The fingerprint data is then
          encrypted and stored in a secure database, which can only be accessed
          by authorized personnel. This advanced system offers a higher level of
          security and accuracy compared to traditional paper-based voting
          systems, which are susceptible to fraud, errors and tampering. With an
          advanced and secured fingerprint voting system, voters can be
          confident that their votes will be counted accurately, and election
          results can be trusted to reflect the will of the people.
        </p>
      </div>
    </div>
  );
};

export default OurProject;
