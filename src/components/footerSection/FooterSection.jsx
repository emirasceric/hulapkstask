import biomFooter from "../../assets/biomFooter.png";
import facebookFooter from "../../assets/facebookFooter.svg";
import instagramFooter from "../../assets/instagramFooter.svg";

export default function FooterSection() {
  return (
    <div className="flex flex-col w-full z-0">
      <footer className="bg-[#004A4C] bg-opacity-[72%] flex items-center w-full justify-between h-[30vh] text-[#FFFAFA]">
        <div className="flex flex-col md:flex-row w-full items-center justify-between px-4 md:px-28 lg:px-16 xl:px-48 2xl:px-96 2xl:mx-16 mx space-y-6 md:space-y-0">
          {/* Logo za mobilne uređaje */}
          <div className="block md:hidden mb-4">
            <img
              src={biomFooter}
              alt="Biom Footer Logo mobile"
              className="h-auto"
            />
          </div>

          {/* Linkovi na levoj strani */}
          <div className="flex space-x-3 md:space-x-6 lg:space-x-10 xl:space-x-20 text-center font-bold text-[14px] tracking-[1.4px] text-[#FFFAFA] uppercase opacity-100">
            <a href="#" className="">
              Shop
            </a>
            <a href="#" className="">
              Why Biom
            </a>
            <a href="#" className="e">
              Scents
            </a>
          </div>

          {/* Logo za desktop uređaje */}
          <div className="hidden md:block justify-center">
            <img
              src={biomFooter}
              alt="Biom Footer Logo ml"
              className="h-auto"
            />
          </div>

          {/* Linkovi na desnoj strani */}
          <div className="flex space-x-3 md:space-x-6 lg:space-x-10 xl:space-x-20 font-bold text-[14px] tracking-[1.4px] text-[#FFFAFA] uppercase opacity-100">
            <a href="#" className="e">
              FAQs
            </a>
            <a href="#" className="">
              Account
            </a>
            <a href="#" className="">
              Help
            </a>
          </div>
        </div>
      </footer>

      <footer className="footer bg-[#004A4C] pb-14 bg-opacity-[72%] font-brandonSS text-white py-4">
        <div className="w-full">
          {/* Divider Line */}
          <div className="w-full flex justify-center">
            <div className="w-[90%] h-[2px] bg-opacity-[50%] bg-[#002D33]"></div>
          </div>

          {/* Footer Content */}
          <div className="justify-between w-full flex flex-col md:flex-row items-center mt-4">
            {/* Text Section */}
            <div className="text-center  text-sm px-6 flex-grow">
              <div className="block md:hidden space-x-4 pr-2 md:pr-24">
                <div className="flex flex-row justify-center gap-4 mb-5">
                  <a
                    href="#"
                    className="flex items-center justify-center w-8 h-8 bg-white rounded-full"
                  >
                    <img
                      src={instagramFooter}
                      alt="Instagram"
                      className="w-4 h-4"
                    />
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center  w-8 h-8 bg-white rounded-full"
                  >
                    <img
                      src={facebookFooter}
                      alt="Facebook"
                      className="w-4 h-4"
                    />
                  </a>
                </div>
              </div>

              <p >
                © 2021 biom. All rights reserved • Privacy Policy • Terms of
                Service
              </p>
            </div>

            {/* Icons Section za desktop */}

            <div className="hidden md:block space-x-4 pr-24">
              <div className=" flex flex-row gap-5">
              <a
                href="#"
                className="flex items-center justify-center w-8 h-8 bg-white rounded-full"
              >
                <img
                  src={instagramFooter}
                  alt="Instagram"
                  className="w-4 h-4"
                />
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
        </div>
      </footer>
    </div>
  );
}
