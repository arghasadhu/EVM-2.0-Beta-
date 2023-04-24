import React from "react";
import Rec1 from "../assets/Rec1.jpg";
import Rec2 from "../assets/Rec2.jpg";
import Rec3 from "../assets/Rec3.jpg";

const OurAchievements = () => {
  return (
    <div className="blog-section w-full">
      <div className="section-content w-[85%] m-auto">
        <div className="title flex justify-center my-5">
          <h1 className="font-extrabold md:text-5xl text-4xl md:tracking-widest font-project">
            <u>RECOGNITIONS</u>
          </h1>
        </div>
        <div className="cards md:grid md:grid-cols-2 flex flex-wrap">
          <div className="card1 p-8 rounded-xl shadow-2xl bg-gray-300 m-5 hover:scale-110 transition-all duration-500">
            <div className="image-section">
              <img src={Rec1} alt="/" />
            </div>
            <div className="article1">
              <p className="text-center text-lg font-bold my-3">
                {" "}
                New Technology Voting Machine: নয়া ভোটিং মেশিন বানিয়ে চমক
                আসানসোলের পাঁচ ইঞ্জিনিয়ারিং পড়ুয়ার ভুয়ো ভোটার ও ভোট লুঠ আটকাতে
                নতুন ভোটিং মেশিন আবিষ্কার করে তাক লাগাল আসানসোল ইঞ্জিনিয়ারিং
                কলেজের পাঁচ পড়ুয়া (New Technology Voting Machine Made by
                Asansol Engineering College Student)৷{" "}
              </p>
            </div>
            <div className="blog-view">
              <a
                href="https://www.etvbharat.com/bengali/west-bengal/state/paschim-bardhaman/new-voting-machine-invented-by-asansol-engineering-students/wb20230227181937560560063"
                target="_blank"
                rel="noreferrer"
                className="button text-lg font-semibold p-2 bg-green-400 text-white rounded-md"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="card2 p-8 rounded-xl shadow-2xl bg-gray-300 m-5 hover:scale-110 transition-all duration-500">
            <div className="image-section">
              <img src={Rec2} alt="/" />
            </div>
            <div className="article1">
              <p className="text-center text-lg font-bold my-3">
                {" "}
                Asansol Engineering College's students developed an
                Aadhaar-based advanced voting machine to prevent voter fraud The
                system will detect voter fraud using Aadhaar and would prevent
                impersonation using the biometrics already available with the
                Unique Identification Authority of India.{" "}
              </p>
            </div>
            <div className="blog-view">
              <a
                href="https://www.etvbharat.com/english//state/west-bengal/asansol-engineering-students-invent-advanced-voting-machine/na20230228112920171171510"
                target="_blank"
                rel="noreferrer"
                className="button text-lg font-semibold p-2 bg-green-400 text-white rounded-md"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="card3 p-8 rounded-xl shadow-2xl bg-gray-300 m-5 hover:scale-110 transition-all duration-500">
            <div className="image-section">
              <img src={Rec3} alt="/" />
            </div>
            <div className="article1">
              <p className="text-center text-lg font-bold my-3">
                {" "}
                Advance voting machine: बंगाल में आसनसोल इंजीनियरिंग कॉलेज के छात्रों ने बनाई एडवांस वोटिंग मशीन

 पश्चिम बंगाल में आसनसोल इंजीनियरिंग कॉलेज के छात्रों ने एडवांस वोटिंग मशीन बनाई है. यह मशीन आधार कार्ड से जुड़ा है और फिंगरप्रिंट, आंखों की रेटिना का पता लगाने की क्षमता रखता है.
{" "}
              </p>
            </div>
            <div className="blog-view">
              <a
                href="https://www.etvbharat.com/hindi/delhi/bharat/asansol-engineering-college-students-stun-all-by-making-advanced-voting-machine/na20230228092437115115197"
                target="_blank"
                rel="noreferrer"
                className="button text-lg font-semibold p-2 bg-green-400 text-white rounded-md"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Read more at: https://www.etvbharat.com/english//state/west-bengal/asansol-engineering-students-invent-advanced-voting-machine/na20230228112920171171510

export default OurAchievements;
