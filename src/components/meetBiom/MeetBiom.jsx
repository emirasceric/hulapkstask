import { useState, useEffect } from 'react';
import MaskGroup12 from "../../assets/MaskGroup12.png";

import beautifulDesignIcon from "../../assets/beautifulDesignIcon.png";
import durableStainlessIcon from "../../assets/durableStainlessIcon.png";
import nonToxicIcon from "../../assets/nonToxicIcon.png";

;

const MeetBiom = () => {
  const initialPosition = -14;
  const [scrollPosition, setScrollPosition] = useState(initialPosition);
  const [isHovered, setIsHovered] = useState(false);

  const handleScroll = (event) => {
    if (isHovered) {
      event.preventDefault();
      setScrollPosition(prev => prev + event.deltaY * 0.5);
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [isHovered]);

  return (
    <div className="w-full h-screen flex relative">
      {/* Transparentni sloj za hvatanje hover i scroll događaja */}
      <div 
        className="absolute w-[25%] h-screen  z-30" 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      ></div>

      {/* Tekst "meet biom" sa manjim z-index-om */}
      <div className="w-[40%] absolute h-screen hidden lg:block  lg:-ml-18 xl:-ml-24 2xl:-ml-36 overflow-hidden   z-1">
        <p
          className="whitespace-nowrap transform -rotate-90 text-left text-[225px] leading-[322px] font-bold text-[#F2F2F2] tracking-[-5.63px] font-brandonSS opacity-100 transition-transform duration-4300 ease-out"
          style={{ transform: `translateY(${scrollPosition}%) rotate(-90deg)` }}
        >
          meet biom
        </p>
      </div>

      {/* Pozadinska slika sa višim z-index-om */}
      <div
        className="w-full h-screen bg-no-repeat  md:block bg-cover z-10  absolute top-0 left-0"
        style={{
          backgroundImage: `url(${MaskGroup12})`,
         
        
        }}
      >
        

        <div className="flex mt-16  space-x-5">


        <div className="relative mt-[10%] group ml-24 lg:ml-[48%] pr-6 h-full">
   
          <div>
            <h1 className="text-[1rem] tracking-[0.13rem]  text-[#002D33] uppercase font-brandonSS">
              THE BIOM DISPENSER
            </h1>
          </div>

          <div>
            <h1 className="text-[2.25rem]   leading-[3.4rem]  tracking-[0] text-[#002D33] font-extrabold font-chronicle lg:mt-1 mt-4">
              Redefine your experience of clean.
            </h1>
          </div>

          <div>
            <p className="text-[1.125rem] leading-[1.6rem]  tracking-[0] text-[#002D33] font-brandon lg:mt-0 mt-4">
              A quality engineered wipes dispenser that looks beautiful in your
              home, making
              <br className="hidden sm:block" />
              better habits for your home and planet always within reach.
            </p>
          </div>

          <div className=" relative z-0 grid grid-cols-[1fr_5fr] gap-y-4 sm:ml-6 mt-5 ">
            <div>
              <img
                src={beautifulDesignIcon}
                alt="Beautiful Design Icon"
                className="w-[4.31rem]   "
              />
            </div>

            <div className="flex items-center h-full">
              <p className="text-[1rem]  leading-[1.5rem]  ml-3 tracking-[0] text-[#002D33] font-brandon">
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
              <p className="text-[1rem] leading-[1.5rem] ml-3  tracking-[0] text-[#002D33] font-brandon">
                Durable stainless steel exterior
              </p>
            </div>

            <div>
              <img
                src={nonToxicIcon}
                alt="Non-Toxic Icon"
                className="w-[4.31rem] "
              />
            </div>

            <div className="flex items-center h-full">
              <p className="text-[1rem] leading-[1.5rem] ml-3 tracking-[0] text-[#002D33] font-brandon">
                Non-toxic, BPA free
              </p>
            </div>
          </div>

          <button className="w-[10rem] sm:w-[12rem] h-[2.5rem] sm:h-[3.125rem] mt-8 sm:mt-11 ml-6 font-brandon text-white bg-[#004A4C] rounded-lg flex items-center justify-center text-[0.8125rem] leading-[1.875rem] font-extrabold transition ease-out duration-300 hover:bg-[#023436]">
            SHOP NOW
          </button>
          </div>
      
          </div>  </div>  </div>




    
  );
};

export default MeetBiom;
