import coverSurfing from "../../assets/coverSurfing.mp4";

export default function OceanWipes() {
  return (
    <div className="relative h-[80vh] mt-1  w-[98%] left-[1%] ">
      <div className="w-full h-full bg-[#004A4C] rounded-lg bg-no-repeat">
        <video
          className="w-full h-full rounded-lg object-cover bg-[#004A4C] bg-no-repeat  opacity-[0.65]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={coverSurfing} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="absolute inset-0 flex top-[34%] justify-center">
        <p className="text-center text-[14px] leading-[62px] font-normal tracking-[2.1px] text-[#FFFAFA] uppercase opacity-100 font-brandonSS">
          CLEANING OUR OCEANS WITH EVERY WIPE
        </p>
      </div>

      <div className="absolute inset-0 flex top-[39%] justify-center">
        <p className="text-center text-[36px] leading-[62px] font-black tracking-[0px] text-[#FFFAFA] uppercase opacity-100 font-chronicle">
          Wipes have plastic in them. We don’t.
        </p>
      </div>

      <div className="absolute inset-0 flex top-[49%] justify-center">
        <p className="text-center text-[18px] leading-[28px] font-normal tracking-[0px] text-[#FFFAFA] opacity-100 font-brandonSS">
          We reinvented wipes to cut out all the bad stuff —like single-use
          plastic that hurts the <br />
          environment, and toxic chemicals that don’t belong in our oceans (or
          in our homes).
        </p>
      </div>

      <button className="absolute top-[48vh] left-[44.25%] w-[207px] h-[50px] font-extrabold text-[13px] leading-[30px] font-brandonSS text-get-started bg-white rounded-lg flex items-center justify-center transition ease-out duration-300 hover:bg-gray-200">
        LEARN MORE
      </button>
    </div>
  );
}
