import { useState, useEffect } from 'react';
import pic1 from '../../assets/pic1.png';
import pic2 from '../../assets/pic2.png';
import pic3 from '../../assets/pic3.png';
import pic4 from '../../assets/pic4.png';
import pic5 from '../../assets/pic5.png';
import pic6 from '../../assets/pic6.png';
import instagramPic from '../../assets/instagramPic.svg';

function InstagramSection() {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Praćenje skrol pozicije
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Očisti event listener kada komponenta bude unmountovana
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative top-[15vh] overflow-hidden mb-[12%]">
      <h1 className="text-center font-black text-[46px] leading-[44px] tracking-[0px] text-[#002D33] opacity-100 font-chronicle">
        #cleanwithbiom
      </h1>

      <div className="relative flex justify-between -ml-[43%] xl:-ml-[38%] 2xl:-ml-[33%] w-full mb-10 top-[8vh]">
        <div
          className="relative flex space-x-6  xl:space-x-14 2xl:space-x-28"
          style={{
            transform: `translateX(${scrollPosition * 0.1}px)`, // Pomeranje u desno u zavisnosti od skrola
            transition: 'transform 0.2s ease-out', // Smooth transition
          }}
        >
          <img src={pic1} alt="pic1" className="w-[15%] h-[30vh] relative" />
          <img src={pic2} alt="pic2" className="w-[15%] relative top-[5vh]" />
          <img src={pic3} alt="pic3" className="w-[15%] relative" />
          <img src={pic4} alt="pic4" className="w-[15%] relative top-[5vh]" />
          <img src={pic5} alt="pic5" className="w-[15%] relative bg-gray-200" />
          <img src={pic6} alt="pic6" className="w-[15%] relative top-[5vh]" />

        
        </div>
      </div>

      <div className="flex justify-center mt-56">
        <button className="cursor-default w-[286px] h-[50px] flex items-center justify-between border-2 border-[#004A4C] text-[#004A4C] font-bold tracking-wide rounded-lg group">
          <span className="cursor-default font-brandonSS text-[11px] pl-4">FOLLOW US ON INSTAGRAM</span>
          <div className="flex items-center h-full pr-3 group-hover:bg-[#004A4C]">
            <div className="border-l-2 border-black h-[100%] mr-2"></div>
            <img src={instagramPic} alt="Instagram Icon" className="cursor-default h-[32px] w-[32px] group-hover:filter group-hover:brightness-0 group-hover:invert" />
          </div>
        </button>
      </div>
    </div>
  );
}

export default InstagramSection;
