import AdobeStock from "../../assets/AdobeStock.png";
import Refill from "../../assets/Refill.png";
import biodegradableIcon from '../../assets/biodegradableIcon.png';
import plasticFreeIcon from '../../assets/plasticFreeIcon.png';
import plantBasedIcon from '../../assets/plantBasedIcon.png';

import beautifulDesignIcon from "../../assets/beautifulDesignIcon.png";
import durableStainlessIcon from "../../assets/durableStainlessIcon.png";
import nonToxicIcon from "../../assets/nonToxicIcon.png";




export default function BetterForYou() {
  return (
    <div className="relative h-screen">
           
      <div
        className="absolute w-[40%] h-[80vh] left-10 -top-16 bg-cover bg-no-repeat bg-center z-10"
        style={{
          backgroundImage: `url(${AdobeStock})`,
        }}
      ></div>

       <div
        className="absolute top-[28%] left-[28%] w-[35vh] h-[52vh] bg-cover  bg-no-repeat bg-center z-10"
        style={{
          backgroundImage: `url(${Refill})`,
        }}
      ></div>


<div className="flex flex-col  rounded-tr-lg rounded-br-lg bg-[#DAE5E5] items-start ms-[35%] mt-[10%] pl-48 mr-[20%]">
          <div>
            <h1 className="text-[1rem] tracking-[0.13rem] pt-[20%] text-[#002D33] uppercase font-brandonSS">
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

          <div className=" relative z-0 pl-11 grid grid-cols-[1fr_5fr] gap-y-4 mt-5 ">
            <div>
              <img
                src={beautifulDesignIcon}
                alt="Beautiful Design Icon"
                className="w-[4.31rem]   "
              />
            </div>

            <div className="flex items-center h-full">
              <p className="text-[1rem]  leading-[1.5rem]  ml-11 tracking-[0] text-[#002D33] font-brandon">
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
              <p className="text-[1rem] leading-[1.5rem] ml-11  tracking-[0] text-[#002D33] font-brandon">
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

            <div className="flex items-center  h-full">
              <p className="text-[1rem] leading-[1.5rem] ml-11 tracking-[0] text-[#002D33] font-brandon">
                Non-toxic, BPA free
              </p>
            </div>
          </div>
          <div className="mt-16">
          <button className="absolute -mt-6 left-[53%] translate-x-[-50%] w-[10rem] sm:w-[12rem] h-[2.5rem] sm:h-[3.125rem] font-brandon text-white bg-[#004A4C] rounded-lg flex items-center justify-center text-[0.8125rem] leading-[1.875rem] font-extrabold transition ease-out duration-300 hover:bg-[#023436]">
            SHOP NOW
          </button>
        </div>
                
        </div>
                 
    


  

      </div>
   
  );
}
