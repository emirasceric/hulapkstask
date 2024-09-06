import Kitchen from "../../assets/Kitchen_3.png";

const Hero = () => {
  return (
    <div className="mt-[68px]">
      <div
        className="relative zIndex-2 bg-no-repeat bg-cover rounded-[14px] opacity-1 h-full"
        style={{
          backgroundImage: `url(${Kitchen})`,
          height: "calc(100vh - 80px)", // Set height as full viewport height minus 80px (for header/nav bar)
          width: "calc(100% - 2%)", // Set width to 100% minus 2% for margin adjustments
          marginLeft: "1%",
          marginRight: "1%",
        }}
      >
        {/* Adding flex, items-center, and justify-center to vertically center the content */}
        <div className="flex flex-col  justify-center h-full px-11 pr-5">
          {/* Heading section */}
          <div className="">
            <h1 className="font-bold text-[56px] leading-[62px] font-chronicle text-white">
              So fresh. <br /> So green.
            </h1>
          </div>

          {/* Description and button section */}
          <div className="mt-4 max-w-[470px] ">
            <p className="font-brandonSS text-[20px] leading-[28px] font-light text-white">
              We believe that a more eco-friendly everyday makes a happier you
              and me. We’re on a mission to put sustainability in reach with
              better-for-the-planet wipes that are easy, effective, and
              plastic-free.
            </p>
            <div className="mt-5 w-[180px] h-[50px]">
              {/* Button section */}
              <button className="w-full h-full font-extrabold text-[13px] leading-[30px] font-brandonSS text-get-started bg-white rounded-lg flex items-center justify-center transition ease-out duration-300 hover:bg-gray-200">
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
