import { useState, useEffect } from "react";
import pic1 from "../../assets/pic1.png";
import pic2 from "../../assets/pic2.png";
import pic3 from "../../assets/pic3.png";
import pic4 from "../../assets/pic4.png";
import pic5 from "../../assets/pic5.png";
import pic6 from "../../assets/pic6.png";
import instagramPic from "../../assets/instagramPic.svg";

function InstagramSection() {
  const [scrollX, setScrollX] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      if (isHovered) {
        e.preventDefault();

        // Proverava ako postoji horizontalno skrolovanje preko deltaX
        if (e.deltaX !== 0) {
          setScrollX((prevScrollX) => prevScrollX + e.deltaX * 0.5); // Horizontalno skrolovanje
        } else {
          setScrollX((prevScrollX) => prevScrollX + e.deltaY * 0.5); // Pretvaranje vertikalnog skrola u horizontalni
        }
      }
    };

    // Dodavanje događaja sa opcijom { passive: false }
    window.addEventListener("wheel", handleScroll, { passive: false });

    // Uklanjanje događaja kada komponenta bude demontirana
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [isHovered]);

  return (
    <div
      className="relative mt-16 overflow-hidden mb-16"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1 className="text-center font-black mb-16 text-[36px] sm:text-[46px] leading-[44px] tracking-[0px] text-[#002D33] opacity-100 font-chronicle">
        #cleanwithbiom
      </h1>

      <div className="relative">
        {/* Originalne slike */}
        <div
          className="relative flex justify-start h-[300px] space-x-8 transition-transform duration-300 ease-out"
          style={{ transform: `translateX(${scrollX}px)` }}
        >
          <img src={pic1} alt="pic1" className="relative" />
          <img src={pic2} alt="pic2" className="relative transform translate-y-[20px]" />
          <img src={pic3} alt="pic3" className="relative" />
          <img src={pic4} alt="pic4" className="relative transform translate-y-[20px]" />
          <img src={pic5} alt="pic5" className="relative bg-gray-200" />
          <img src={pic6} alt="pic6" className="relative transform translate-y-[20px]" />
          <img src={pic1} alt="pic1" className="relative" />
          <img src={pic2} alt="pic2" className="relative transform translate-y-[20px]" />
          <img src={pic3} alt="pic3" className="relative" />
          <img src={pic4} alt="pic4" className="relative transform translate-y-[20px]" />
          <img src={pic5} alt="pic5" className="relative bg-gray-200" />
          <img src={pic6} alt="pic6" className="relative transform translate-y-[20px]" />
        </div>
      </div>

      <div className="flex justify-center mt-12 sm:mt-24">
        <button className="cursor-default w-[226px] sm:w-[286px] h-[50px] flex items-center justify-between border-2 border-[#004A4C] text-[#004A4C] font-bold tracking-wide rounded-lg group">
          <span className="cursor-default font-brandonSS text-[11px] pl-4">
            FOLLOW US ON INSTAGRAM
          </span>
          <div className="items-center h-full pr-3 group-hover:bg-[#004A4C] hidden sm:flex">
            <div className="border-l-2 border-black h-full mr-2"></div>
            <img
              src={instagramPic}
              alt="Instagram Icon"
              className="cursor-default h-[32px] w-[32px] group-hover:filter group-hover:brightness-0 group-hover:invert"
            />
          </div>
        </button>
      </div>
    </div>
  );
}

export default InstagramSection;
