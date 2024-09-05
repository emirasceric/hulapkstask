function Reviews() {
  return (
    <div className="emir relative z-1 -mt-4 mb-16 flex justify-center  items-center   bg-gray-100 py-12">
      <div className="w-full max-w-5xl mx-auto text-center px-4">
        <h2 className="text-[14px] leading-[62px] font-normal tracking-[2.1px] text-[#002D33] font-brandon uppercase opacity-100">
          What people are saying
        </h2>
        <p className="text-center text-[20px] sm:text-[25px] leading-[32px] sm:leading-[42px] px-4 font-bold tracking-[0px] text-[#002D33] font-chronicle mb-8">
          “Cleaning and sanitizing are now more important than ever and <br />
          these wipes make it so easy. They’re great because they don’t dry<br />
          my skin out and I love knowing that buying their products are <br />
          better for the environment.”
        </p>
        <p className="text-center text-[13px] leading-[62px] font-medium tracking-[1.3px] text-[#002D33] uppercase opacity-100">
          - RACHAEL H.
        </p>

        <div className="flex justify-center items-center space-x-2 mt-8">
          <span className="inline-block w-3 h-3 bg-[#004A4C] rounded-full"></span>
          <span className="inline-block w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="inline-block w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="inline-block w-3 h-3 bg-gray-300 rounded-full"></span>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
