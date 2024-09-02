import biomFooter from "../../assets/biomFooter.png";
import facebookFooter from "../../assets/facebookFooter.png";
import instagramFooter from "../../assets/instagramFooter.png";

export default function FooterPage() {
  return (
    <div className="relative z-0 ">
      <footer className="footer bg-[#004A4C] bg-opacity-[72%] flex items-center justify-between px-10 h-[30vh] text-[#FFFAFA]">
        <div className="flex space-x-20 pt-[5%] pl-[20%]">
          <a
            href="#"
            className="text-left font-bold text-[14px]  tracking-[1.4px] text-[#FFFAFA] uppercase opacity-100"
          >
            Shop
          </a>
          <a
            href="#"
            className="text-[14px] leading-[20px] font-bold tracking-[1.4px] text-[#FFFAFA] uppercase"
          >
            Why Biom
          </a>
          <a
            href="#"
            className="text-[14px] leading-[20px] font-bold tracking-[1.4px] text-[#FFFAFA] uppercase"
          >
            Scents
          </a>
        </div>

        <div className="flex pt-[5%] justify-center">
          <img src={biomFooter} alt="Biom Footer Logo" className="h-auto" />
        </div>

        <div className="flex space-x-20 pt-[5%] pr-[20%]">
          <a
            href="#"
            className="text-[14px] leading-[20px] font-bold tracking-[1.4px] uppercase"
          >
            FAQs
          </a>
          <a
            href="#"
            className="text-[14px] leading-[20px] font-bold tracking-[1.4px] uppercase"
          >
            Account
          </a>
          <a
            href="#"
            className="text-[14px] leading-[20px] font-bold tracking-[1.4px] uppercase"
          >
            Help
          </a>
        </div>
      </footer>





      <footer className="footer bg-[#004A4C] pb-14 bg-opacity-[72%] font-brandonSS text-white py-4">
  <div className="w-full">
    {/* Divider Line */}
    <div className="w-full flex justify-center">
      <div className="w-[90%] h-[2px] bg-opacity-[50%] bg-[#002D33]"></div>
    </div>

    {/* Footer Content */}
    <div className=" justify-between w-full grid grid-cols-[5fr_1fr] gap-x-4 items-center mt-4">
      {/* Text Section */}
      <div className="text-left text-sm pl-24 flex-grow">
        <p>
          © 2021 biom. All rights reserved • Privacy Policy • Terms of Service
        </p>
      </div>

      {/* Icons Section */}
      <div className="flex space-x-4 pr-24">
        <a
          href="#"
          className="flex items-center justify-center w-8 h-8 bg-white rounded-full"
        >
          <img src={instagramFooter} alt="Instagram" className="w-4 h-4" />
        </a>
        <a
          href="#"
          className="flex items-center justify-center w-8 h-8 bg-white rounded-full"
        >
          <img src={facebookFooter} alt="Facebook" className="w-4 h-4" />
        </a>
      </div>
    </div>
  </div>
</footer>






    </div>
  );
}
