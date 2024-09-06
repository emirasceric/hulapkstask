import LivingRoom1 from '../../assets/LivingRoom1.png'
import office from '../../assets/office.png';
import KitchenShot3 from '../../assets/KitchenShot3.png';

function WhenYouNeedIt() {
  return (
    <div className="relative ml-[1%] mr-[1%] px-6 md:px-0 flex md:flex-row flex-col gap-6 justify-between items-center mt-16"> 
      {/* Container for the section with a responsive flex layout */}
      
      {/* First Image Container: Living Room */}
      <div className="w-full md:w-[31%] h-[415px] md:rounded-tr-[3%] md:rounded-br-[3%] overflow-hidden group">
        {/* Image with hover effect */}
        <div
          className="w-full h-full bg-cover bg-no-repeat bg-center transition-transform duration-500 ease-in-out transform group-hover:scale-105"
          style={{
            backgroundImage: `url(${LivingRoom1})`,
          }}>
        </div>
        {/* Text that appears on hover */}
        <p className="absolute -mt-16 left-[110px] w-[112px] h-[26px] text-left font-chronicle text-[22px] leading-[48px] tracking-[0px] text-[#ffffff] opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10">
          living room
        </p>
      </div>

      {/* Middle Image Container: Office */}
      <div className="w-full md:w-[34%] h-[415px] rounded-[15px] overflow-hidden group flex flex-col justify-center items-center">
        {/* Image with hover effect */}
        <div className="w-full h-full bg-cover bg-no-repeat bg-center transition-transform duration-500 ease-in-out transform group-hover:scale-105"
          style={{
            backgroundImage: `url(${office})`,
          }}>
        </div>
        {/* Overlay text on the image */}
        <div className="absolute top-18 flex flex-col items-center">
          <p className="text-center text-[16px] leading-[23px] tracking-[2.4px] text-[#ffffff] uppercase opacity-80">
            WHERE YOU NEED IT,
          </p>
          <p className="text-center font-black font-chronicle text-[58px] lg:text-[78px] leading-[82px] tracking-[-0.78px] text-[#ffffff]">
            when you <br/> need it.
          </p>
          {/* Appears on hover */}
          <p className="text-center translate-y-[70px] font-chronicle text-[22px] leading-[48px] tracking-[0px] text-[#ffffff] opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10">
            office
          </p>
        </div>
      </div>

      {/* Third Image Container: Kitchen */}
      <div className="w-full md:w-[31%] h-[415px] rounded-[15px] md:rounded-tr-[0px] md:rounded-br-[px] md:rounded-bl-[15px] overflow-hidden group">
        {/* Image with hover effect */}
        <div
          className="w-full h-full bg-cover bg-no-repeat bg-center transition-transform duration-500 ease-in-out transform group-hover:scale-105"
          style={{
            backgroundImage: `url(${KitchenShot3})`,
          }}>
        </div>
        {/* Text that appears on hover */}
        <p className="absolute -mt-16 right-[60px] text-right font-chronicle text-[22px] leading-[48px] tracking-[0px] text-[#ffffff] opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10">
          kitchen
        </p>
      </div>
    </div>
  );
}

export default WhenYouNeedIt;
