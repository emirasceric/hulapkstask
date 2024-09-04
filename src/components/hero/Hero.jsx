import Kitchen from '../../assets/Kitchen_3.png'; 

const Hero = () => {
  return (
<div className=' background-white mt-[68px]' >
    
   <div 
  className="relative zIndex-2 bg-no-repeat bg-cover rounded-[14px] opacity-1"
  style={{
    backgroundImage: `url(${Kitchen})`,
    height: 'calc(100vh - 80px)', // 100% visine ekrana minus visina navigacione trake (80px)
    width: 'calc(100% - 2%)', // 100% širine minus 5% margina sa obje strane
    marginLeft: '1%',
    marginRight: '1%',
  }}
>


<div className=" absolute top-[27%] left-[7%]">  {/* Emir div sa apsolutnim pozicioniranjem u odnosu na glavni div */}
    <div className="flex items-center justify-center h-full">
      <div className="w-[237px] h-[129px]">
        <h1 className="font-bold text-[56px] leading-[62px] font-chronicle text-white">
          So fresh. <br /> So green.
        </h1>
      </div>

      <div className="absolute top-[108%] left-[0%] w-[470px] h-[113px]">
        <p className="font-brandonSS text-[20px] leading-[28px] font-light text-white">
          We believe that a more eco-friendly everyday makes <br />
          a happier you and me. We’re on a mission to put<br />
          sustainability in reach with better-for-the-planet<br />
          wipes that are easy, effective, and plastic-free.
        </p>
      </div>

      <div className="absolute top-[235%] left-[0%] w-[180px] h-[50px]">
        <button className="w-full h-full font-extrabold text-[13px] leading-[30px] font-brandonSS text-get-started bg-white rounded-lg flex items-center justify-center transition ease-out duration-300 hover:bg-gray-200">
          GET STARTED
        </button>
      </div>
    </div>
  </div></div>
    </div>
  );
};

export default Hero;
