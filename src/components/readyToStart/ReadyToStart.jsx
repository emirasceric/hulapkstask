import arrow1 from "../../assets/arrow1.svg";
import Green1 from "../../assets/Green1.png";
import Biomfn20 from "../../assets/Biomfn20.png";
import Black2 from "../../assets/Black2.png";

function ReadyToStart() {
  return (
    <div className="max-w-full h-auto flex flex-col lg:flex-row mt-16">
      
      {/* Left side with the title and button */}
      <div className="flex flex-col items-center justify-center text-center md:items-start md:text-left md:justify-start lg:ml-16 mt-11 md:mt-24 mb-8 md:mb-20 w-full xl:w-3/12">
        <div className="font-chronicle font-black text-[1.755em] sm:text-[2em] lg:text-[2.25em] leading-tight text-black">
          Ready to start <br /> wiping out waste?
        </div>
        <div className="mt-4 flex justify-center md:justify-start w-full">
          <button className="cursor-default h-[2.9em] sm:h-[3.125em] flex items-center justify-between border-2 border-[#004A4C] text-[#004A4C] font-bold tracking-wide rounded-lg group">
            <span className="font-brandonSS text-[0.5em] sm:text-[0.6875em] px-[1em]">
              CHOOSE YOUR VESSEL COLOR
            </span>
            {/* Icon on the right side of the button, hidden on smaller screens */}
            <div className="hidden md:flex items-center h-full pr-[0.75em]">
              <div className="border-l-2 border-black h-full mr-[0.5em]"></div>
              <img
                src={arrow1}
                alt="Arrow Icon"
                className="h-[1em] w-[1.5em] transition-transform duration-300 group-hover:translate-x-[0.3em]"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Right side with the images */}
      <div className="flex flex-col lg:flex-row w-full lg:w-8/12 xl:mt-8 lg:mt-0">
        
        {/* First image section */}
        <div className="group w-full sm:w-1/3 flex flex-col items-start">
          <div className="w-full aspect-w-1 aspect-h-1 transition-all duration-500 ease-in-out md:group-hover:translate-x-[60px]">
            <img
              src={Green1}
              alt="Biom Dispenser - OCEAN TEA"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="text-left -mt-24">
            <p className="font-chronicle font-black text-[1.25em] text-left text-black opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              Biom Dispenser
            </p>
            <p className="font-chronicle font-black text-[0.8125em] text-left text-black opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              OCEAN TEA
            </p>
          </div>
        </div>

        {/* Second image section */}
        <div className="group w-full sm:w-8/12 md:w-2/3 lg:w-1/3 flex flex-col items-start mt-8 sm:mt-0">
          <div className="w-full aspect-w-1 aspect-h-1 transition-all duration-500 ease-in-out md:group-hover:translate-x-[60px]">
            <img
              src={Biomfn20}
              alt="Biom Dispenser - WHITE"
              className="w-full mt-16 md:mt-0 h-full object-contain"
            />
          </div>
          <div className="text-left -mt-24">
            <p className="font-chronicle font-black text-[1.25em] text-left text-black opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              Biom Dispenser
            </p>
            <p className="font-chronicle font-black text-[0.8125em] text-left text-black opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              WHITE
            </p>
          </div>
        </div>

        {/* Third image section */}
        <div className="mb-12 group w-full sm:w-1/3 flex flex-col items-start mt-8 sm:mt-0">
          <div className="w-full aspect-w-1 aspect-h-1 transition-all duration-500 ease-in-out md:group-hover:translate-x-[60px]">
            <img
              src={Black2}
              alt="Biom Dispenser - INK BLACK"
              className="w-full h-full mt-16 md:mt-0 object-contain"
            />
          </div>
          <div className="text-left -mt-24">
            <p className="font-chronicle font-black text-[1.25em] text-left text-black opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              Biom Dispenser
            </p>
            <p className="font-chronicle font-black text-[0.8125em] text-left text-black opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              INK BLACK
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReadyToStart;
