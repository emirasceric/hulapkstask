import arrowWhite from "../../assets/arrowWhite.png";
import BiomWipe2 from "../../assets/BiomWipe2.png";

function EmailComponent() {
  return (
    <div className="relative z-10  flex col-2  mr-[5%] ml-[5%]  mb-[-5%] rounded-3xl bg-[#F2F2F2]">
      <div className="flex flex-col py-6 w-[60%] space-y-4">
        <div className="text-left pl-[20%] font-black font-chronicle text-[30px] leading-[38px] text-[#000000] opacity-100">
          Get the latest news <br /> delivered to your inbox.
        </div>

        <div className="text-left  font-normal pl-[20%] font-brandon text-[16px] leading-[26px] text-[#000000] opacity-100">
          Get access to the exciting stuff — exclusive new deals, product
          <br />
          launches and more. Plus, get a 10% discount on your next order.
        </div>
        
        <div className=" flex  pl-[20%]">
  <div className="flex items-center rounded-lg overflow-hidden bg-white">
    <input
      type="text"
      placeholder="Enter your email address"
      className="  outline-none  focus:ring-0 text-left text-[16px] leading-[30px] font-normal text-black tracking-[0px] opacity-100 border-none"
    />

    {/* Button */}
    <button className="bg-[#004A4C] h-12 text-white px-4 py-2 hover:bg-[#002D33] group border-none">
      <img
        src={arrowWhite}
        alt="Arrow Icon"
        className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-[5px]"
      />
    </button>
  </div>
</div>

      
      </div>

      <div className="flex">
        <img src={BiomWipe2} alt="Biom Wipe" className="h-full w-auto" />
      </div>
    </div>
  );
}

export default EmailComponent;
