
import pic1 from '../../assets/pic1.png';
import pic2 from '../../assets/pic2.png';
import pic3 from '../../assets/pic3.png';
import pic4 from '../../assets/pic4.png';
import pic5 from '../../assets/pic5.png';
import pic6 from '../../assets/pic6.png';
import instagramPic from '../../assets/instagramPic.svg';

function InstagramSection() {
  
 

  return (
    <div className="relative mt-16 overflow-hidden mb-16 ">

      
      <h1 className="text-center font-black mb-16 text-[36px] sm:text-[46px] leading-[44px] tracking-[0px] text-[#002D33] opacity-100 font-chronicle">
        #cleanwithbiom
      </h1>

      <div className="relative flex   justify-between   ">
       
        <div
          className="relative flex justify-start h-[300px] space-x-8  "
         
        >
          <img src={pic1} alt="pic1" className="  " />
          <img src={pic2} alt="pic2" className=" relative " />
          <img src={pic3} alt="pic3" className=" relative" />
          <img src={pic4} alt="pic4" className=" relative " />
          <img src={pic5} alt="pic5" className=" relative bg-gray-200" />
          <img src={pic6} alt="pic6" className=" relative " />

        
        </div>
      </div>




      <div className="flex justify-center mt-20 sm:mt-56">

        <button className="cursor-default w-[226px]  sm:w-[286px] h-[50px] flex items-center justify-between border-2 border-[#004A4C] text-[#004A4C] font-bold tracking-wide rounded-lg group">
          <span className="cursor-default font-brandonSS text-[11px] pl-4">FOLLOW US ON INSTAGRAM</span>
          <div className="flex items-center h-full pr-3 group-hover:bg-[#004A4C]">
            <div className="border-l-2 border-black h-[100%] mr-2 hidden -sm:block"></div>
            <img src={instagramPic} alt="Instagram Icon" className="cursor-default hidden -sm:block h-[32px] w-[32px] group-hover:filter group-hover:brightness-0 group-hover:invert" />
          </div>

        </button>

      </div>


    </div>
  );
}

export default InstagramSection;
