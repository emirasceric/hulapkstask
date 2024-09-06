import Kitchen from "../../assets/Kitchen_3.png";

const Hero = () => {
  return (
    <div className="mt-[68px]">
      <div
        className="relative zIndex-2 bg-no-repeat bg-cover rounded-[14px] opacity-1 h-full"
        style={{
          backgroundImage: `url(${Kitchen})`,
          height: "calc(100vh - 80px)", // 100% visine ekrana minus visina navigacione trake (80px)
          width: "calc(100% - 2%)", // 100% širine minus 5% margina sa obje strane
          marginLeft: "1%",
          marginRight: "1%",
        }}
      >
        {/* Dodajemo flex, items-center i justify-center da centriramo vertikalno */}
        <div className="flex flex-col  justify-center h-full px-11 pr-5">
          <div className="">
            <h1 className="font-bold text-[56px] leading-[62px] font-chronicle text-white">
              So fresh. <br /> So green.
            </h1>
          </div>

          <div className="mt-4 max-w-[470px] ">
            <p className="font-brandonSS text-[20px] leading-[28px] font-light text-white">
              We believe that a more eco-friendly everyday makes a happier you
              and me. We’re on a mission to put sustainability in reach with
              better-for-the-planet wipes that are easy, effective, and
              plastic-free.
            </p>
            <div className="mt-5 w-[180px] h-[50px]">
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
