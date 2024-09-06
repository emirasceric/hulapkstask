import { useState, useEffect } from "react";
import MaskGroup12 from "../../assets/MaskGroup12.png";

import beautifulDesignIcon from "../../assets/beautifulDesignIcon.png";
import durableStainlessIcon from "../../assets/durableStainlessIcon.png";
import nonToxicIcon from "../../assets/nonToxicIcon.png";

const MeetBiom = () => {
  const initialPosition = -14; // Initial scroll position for the rotating text
  const [scrollPosition, setScrollPosition] = useState(initialPosition); // State for tracking scroll position
  const [isHovered, setIsHovered] = useState(false); // State to check if the section is hovered

  // Handle the scroll event when the user hovers over the left area
  const handleScroll = (event) => {
    if (isHovered) {
      event.preventDefault();
      setScrollPosition((prev) => prev + event.deltaY * 0.5); // Modify the scroll position based on wheel movement
    }
  };

  // Add event listeners for scroll with 'passive: false' to enable preventDefault()
  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: false });

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [isHovered]);

  return (
    <div className="w-full h-screen flex relative">
      {/* Transparent layer for detecting hover and scroll events */}
      <div
        className="absolute w-[25%] h-screen z-30"
        onMouseEnter={() => setIsHovered(true)} // Enable scrolling when mouse enters the area
        onMouseLeave={() => setIsHovered(false)} // Disable scrolling when mouse leaves the area
      ></div>
      
      {/* "Meet Biom" text with lower z-index */}
      <div className="w-[40%] absolute h-screen hidden lg:block lg:-ml-18 xl:-ml-24 2xl:-ml-36 overflow-hidden z-1">
        <p
          className="whitespace-nowrap transform -rotate-90 text-left text-[225px] leading-[322px] font-bold text-[#F2F2F2] tracking-[-5.63px] font-brandonSS opacity-100 transition-transform duration-4300 ease-out"
          style={{ transform: `translateY(${scrollPosition}%) rotate(-90deg)` }} // Applies vertical translation based on scroll
        >
          meet biom
        </p>
      </div>
      
      {/* Background image with a higher z-index */}
      <div
        className="w-full h-screen bg-no-repeat md:block bg-cover z-10 absolute top-0 left-0"
        style={{
          backgroundImage: `url(${MaskGroup12})`,
        }}
      >
        {/* Content section with icons and description */}
        <div className="flex mt-16 space-x-5">
          <div className="relative mt-[10%] lg:mt-[5%] group mx-8 lg:ml-[48%] pr-6 h-full">
            {/* Title */}
            <div>
              <h1 className="text-[1rem] tracking-[0.13rem] text-[#002D33] uppercase font-brandonSS">
                THE BIOM DISPENSER
              </h1>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-[1.7rem] sm:text-[2.25rem] leading-[2.4rem] sm:leading-[3.4rem] tracking-[0] text-[#002D33] font-extrabold font-chronicle lg:mt-1 mt-4">
                Redefine your experience of clean.
              </h1>
            </div>

            {/* Description text */}
            <div>
              <p className="text-[1.125rem] leading-[1.6rem] tracking-[0] text-[#002D33] font-brandon lg:mt-0 mt-4">
                A quality engineered wipes dispenser that looks beautiful in
                your home, making
                <br className="hidden sm:block" />
                better habits for your home and planet always within reach.
              </p>
            </div>

            {/* Icons and text descriptions */}
            <div className="relative z-0 grid grid-cols-[1fr_5fr] gap-y-4 sm:ml-6 mt-5 ">
              <div>
                <img
                  src={beautifulDesignIcon}
                  alt="Beautiful Design Icon"
                  className="w-[4.31rem]"
                />
              </div>

              <div className="flex items-center h-full">
                <p className="text-[1rem] leading-[1.5rem] ml-3 tracking-[0] text-[#002D33] font-brandon">
                  Beautiful design, fit for your home
                </p>
              </div>

              <div>
                <img
                  src={durableStainlessIcon}
                  alt="Durable Stainless Icon"
                  className="w-[4.31rem]"
                />
              </div>

              <div className="flex items-center h-full">
                <p className="text-[1rem] leading-[1.5rem] ml-3 tracking-[0] text-[#002D33] font-brandon">
                  Durable stainless steel exterior
                </p>
              </div>

              <div>
                <img
                  src={nonToxicIcon}
                  alt="Non-Toxic Icon"
                  className="w-[4.31rem]"
                />
              </div>

              <div className="flex items-center h-full">
                <p className="text-[1rem] leading-[1.5rem] ml-3 tracking-[0] text-[#002D33] font-brandon">
                  Non-toxic, BPA free
                </p>
              </div>
            </div>

            {/* Button */}
            <button className="w-[10rem] sm:w-[12rem] h-[2.5rem] sm:h-[3.125rem] mt-8 sm:mt-11 ml-6 font-brandon text-white bg-[#004A4C] rounded-lg flex items-center justify-center text-[0.8125rem] leading-[1.875rem] font-extrabold transition ease-out duration-300 hover:bg-[#023436]">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetBiom;
