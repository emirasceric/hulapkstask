import arrowWhite from "../../assets/arrowWhite.png";
import BiomWipe2 from "../../assets/BiomWipe2.png";

function EmailComponent() {
  return (
    <div
      className="relative z-10 flex flex-col sm:flex-row mx-[5%] mb-[-5%] bg-[#F2F2F2] sm:bg-none bg-cover bg-center"
      style={{
        backgroundImage: `url(${BiomWipe2})`, // Postavljanje slike kao pozadine za manje ekrane
      }}
    >
      {/* Tekstualni deo */}
      <div className="flex flex-col py-6 w-full px-6 sm:px-16 sm:w-[60%] space-y-4 bg-[#F2F2F2] sm:bg-none">
        <div className="text-left font-black font-chronicle text-[30px] leading-[38px] text-[#000000] opacity-100">
          Get the latest news <br /> delivered to your inbox.
        </div>

        <div className="text-left  font-normal font-brandon text-[16px] leading-[20px] sm:leading-[26px] text-[#000000] opacity-100">
          Get access to the exciting stuff — exclusive new deals, product
          <br />
          launches and more. Plus, get a 10% discount on your next order.
        </div>

        <div className="flex w-10/12 sm:w-auto md:w-8/12 xl:w-5/12 ">
          <div className="flex items-center rounded-lg overflow-hidden bg-white w-full">
            <input
              type="text"
              placeholder="Enter your email address"
              className="outline-none focus:ring-0 placeholder-black text-left text-[16px] leading-[30px] font-normal text-black tracking-[0px] opacity-100 border-none w-full"
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

        {/* Slika se pojavljuje samo na većim ekranima */}
      </div>
    </div>
  );
}

export default EmailComponent;
