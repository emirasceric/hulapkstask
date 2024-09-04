import AdobeStock from "../../assets/AdobeStock.png";
import Refill from "../../assets/Refill.png";
import biodegradableIcon from '../../assets/biodegradableIcon.png';
import plasticFreeIcon from '../../assets/plasticFreeIcon.png';
import plantBasedIcon from '../../assets/plantBasedIcon.png';



export default function BetterForYou() {
  return (
    <div className="relative min-h-screen flex flex-row justify-center items-center">

      {/* Pozadinske slike */}
      <div className="  ml-16 w-[60vh] -mt-3 h-[70vh] bg-cover bg-no-repeat bg-center z-2 "
        style={{
          backgroundImage: `url(${AdobeStock})`,
        }}>
      </div>

      <div className=" top-10 left-40 w-[30vh] h-[38vh] -ml-36 mt-96 bg-cover bg-no-repeat bg-center z-10"
        style={{
          backgroundImage: `url(${Refill})`,
        }}>
      </div>

      {/* Sadržaj */}
      <div className="relative w-5/12   -ml-36  rounded-tr-lg rounded-br-lg bg-[#DAE5E5] z-1 shadow-lg">
        <div>
          <h1 className="text-[1rem] tracking-[0.13rem] sm:pl-24 lg:pl-36 pt-[10%] text-[#002D33] uppercase font-brandonSS">
            BIOM WIPES
          </h1>
        </div>

        <div>
          <h1 className="text-[2.25rem] leading-[3.4rem] sm:pl-24 lg:pl-36 tracking-[0] text-[#002D33] font-extrabold font-chronicle lg:mt-1 mt-4">
            Better for you, and the planet.
          </h1>
        </div>

        <div>
          <p className="text-[1.125rem] leading-[1.6rem]  sm:pl-24 lg:pl-36 tracking-[0] text-[#002D33] font-brandon lg:mt-0 mt-4">
            The experience of clean should feel amazing. In a time when we’re constantly <br />
            sanitizing, it can be damaging to our hands and skins. We decided to load our <br />
            wipes with Aloe to take care of you, while you take care of your home.
          </p>
        </div>

        <div className="relative z-0 sm:pl-24 lg:pl-52   grid grid-cols-[1fr_5fr] gap-y-4 mt-8">
          <div>
            <img
              src={biodegradableIcon}
              alt="biodegradableIcon"
              className="w-[4.31rem]"
            />
          </div>

          <div className="flex items-center h-full">
            <p className="text-[1rem] leading-[1.5rem]  tracking-[0] text-[#002D33] font-brandon">
              100% biodegradable
            </p>
          </div>

          <div>
            <img
              src={plasticFreeIcon}
              alt="plasticFreeIcon"
              className="w-[4.31rem]"
            />
          </div>

          <div className="flex items-center h-full">
            <p className="text-[1rem] leading-[1.5rem]  tracking-[0] text-[#002D33] font-brandon">
              Plastic-free
            </p>
          </div>

          <div>
            <img
              src={plantBasedIcon}
              alt="plantBasedIcon"
              className="w-[4.31rem]"
            />
          </div>

          <div className="flex items-center h-full">
            <p className="text-[1rem] leading-[1.5rem]  tracking-[0] text-[#002D33] font-brandon">
              100% plant-based
            </p>
          </div>
        </div>

        <div className="mt-16 -mb-6 -ml-44 flex justify-center">
          <button className="w-[10rem] sm:w-[12rem] h-[2.5rem] sm:h-[3.125rem] font-brandon text-white bg-[#004A4C] rounded-lg flex items-center justify-center text-[0.8125rem] leading-[1.875rem] font-extrabold transition ease-out duration-300 hover:bg-[#023436]">
            SUBSCRIBE NOW
          </button>
        </div>
      </div>
    </div>
  );
}
