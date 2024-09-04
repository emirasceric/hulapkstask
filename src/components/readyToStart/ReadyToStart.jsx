import arrow1 from "../../assets/arrow1.svg";
import Green1 from "../../assets/Green1.png";
import Biomfn20 from "../../assets/Biomfn20.png";
import Black2 from "../../assets/Black2.png";

function ReadyToStart() {
  return (
    <div className="emir max-w-full h-[50vh] flex flex-row  mt-16">


      <div className="content-center mt-24 w-3/12 ml-16">

        <div className="h-[2.5em] font-chronicle text-left font-black text-[2.25em] leading-[1em] tracking-[0em] text-black opacity-100">
          Ready to start <br/> wiping out waste?
        </div>

        <div className="mt-[1em] mb-[25vh]">

          <button className="cursor-default absolute  h-[3.125em] flex items-center justify-between border-2 border-[#004A4C] text-[#004A4C] font-bold tracking-wide rounded-lg group">
            
            <span className="cursor-default font-brandonSS text-[0.6875em] pr-[1em] pl-[1em]">
              CHOOSE YOUR VESSEL COLOR
            </span>

            <div className="flex items-center h-full pr-[0.75em]">
              <div className="border-l-2 border-black h-[100%] mr-[0.5em]"></div>
              <img
                src={arrow1}
                alt="Instagram Icon"
                className="cursor-default h-[2em] w-[2em] transition-transform duration-300 group-hover:translate-x-[0.3em]"
              />
            </div>

          </button>

        </div>
        
      </div>


      <div className="flex w-8/12 justify-between items-center space-x-5">


        <div className="relative group w-1/3 h-full">

              <div
                  className="w-full h-full bg-cover bg-center transition-all duration-500 ease-in-out group-hover:translate-x-[60px]"
                  style={{ backgroundImage: `url(${Green1})` }}
               ></div>
               <div className="absolute bottom-[1em]  transform -translate-y-1/2 w-[10.1875em] h-[3.375em] text-left tracking-[0em] text-black opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                  <p className="font-chronicle text-left font-black text-[1.25em]">
                    Biom Dispenser
                  </p>
                  <p className="font-chronicle text-left font-black text-[0.8125em]">
                    OCEAN TEA
                  </p>
               </div>


        </div>


        <div className="relative group w-1/3 h-full">
          <div
            className="w-full h-full bg-cover bg-center transition-all duration-500 ease-in-out group-hover:translate-x-[60px]"
            style={{ backgroundImage: `url(${Biomfn20})` }}
          ></div>
          <div className="absolute bottom-[1em]  transform -translate-y-1/2 w-[10.1875em] h-[3.375em] text-left tracking-[0em] text-black opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
      <p className="font-chronicle text-left font-black text-[1.25em]">
        Biom Dispenser
      </p>
      <p className="font-chronicle text-left font-black text-[0.8125em]">
        WHITE
      </p>
    </div>

        </div>


        <div className="relative group w-1/3 h-full">
          <div
            className="w-full h-full bg-cover bg-center transition-all duration-500 ease-in-out group-hover:translate-x-[60px]"
            style={{ backgroundImage: `url(${Black2})` }}
          ></div>
          <div className="absolute bottom-[1em] transform -translate-y-1/2 w-[10.1875em] h-[3.375em] text-left tracking-[0em] text-black opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
      <p className="font-chronicle text-left font-black text-[1.25em]">
        Biom Dispenser
      </p>
      <p className="font-chronicle text-left font-black text-[0.8125em]">
        INK BLACK
      </p>
    </div>
        </div>





      </div>
    </div>
  );
}

export default ReadyToStart;
