import coverSurfing from "../../assets/coverSurfing.mp4";

export default function OceanWipes() {
  return (
    <div className="relative h-[80vh] mt-1 w-[98%] left-[1%]">
      {/* Video container with background color and rounded corners */}
      <div className="w-full h-full bg-[#004A4C] rounded-lg bg-no-repeat">
        {/* Video element set to autoplay, loop, mute, and fit the container */}
        <video
          className="w-full h-full rounded-lg object-cover bg-[#004A4C] bg-no-repeat opacity-[0.65]"
          autoPlay
          loop
          muted
          playsInline
        >
          {/* Video source */}
          <source src={coverSurfing} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Text content placed over the video */}
      <div className="flex items-center">
        {/* Absolute positioning for the text, centering it within the video */}
        <div className="absolute inset-0 flex px-6 flex-col justify-center items-center">
          
          {/* Small top headline */}
          <p className="text-center text-[10px] sm:text-[14px] leading-[62px] font-normal tracking-[2.1px] text-[#FFFAFA] uppercase opacity-100 font-brandonSS">
            CLEANING OUR OCEANS WITH EVERY WIPE
          </p>

          {/* Main headline */}
          <p className="text-center text-[26px] sm:text-[36px] leading-[42px] sm:leading-[62px] font-black tracking-[0px] text-[#FFFAFA] uppercase opacity-100 font-chronicle">
            Wipes have plastic in them. We don’t.
          </p>

          {/* Supporting text */}
          <p className="text-center mt-4 text-[14px] sm:text-[18px] leading-[24px] sm:leading-[28px] font-normal tracking-[0px] text-[#FFFAFA] opacity-100 font-brandonSS">
            We reinvented wipes to cut out all the bad stuff —like single-use
            plastic that hurts the <br />
            environment, and toxic chemicals that don’t belong in our oceans (or
            in our homes).
          </p>
          
          {/* Button */}
          <button className="mt-16 sm:mt-8 w-[147px] h-[40px] sm:w-[207px] sm:h-[50px] font-extrabold text-[12px] sm:text-[13px] leading-[30px] font-brandonSS text-get-started bg-white rounded-lg flex items-center justify-center transition ease-out duration-300 hover:bg-gray-200">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
}
