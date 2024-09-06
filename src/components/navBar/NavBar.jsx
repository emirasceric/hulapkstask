import cartIcon from '../../assets/cart.png';
import logoBiom from '../../assets/logo.png';
import NavBarBurger from './NavBarBurger'; // Import NavBarBurger

const NavBar = () => {
  return (
    <nav className="fixed z-20 backdrop-blur-lg bg-white/75 top-0 w-full h-[68px] font-brandonSS font-bold text-custom tracking-wide uppercase bg-white flex items-center justify-between px-8">
      
      {/* Burger menu visible only on small screens (md:hidden) */}
      <div className="md:hidden">
        <NavBarBurger />
      </div>
      
      {/* Left side of the navbar, visible on medium and larger screens */}
      <div className="hidden md:flex items-center space-x-6">
        <a href="#shop" className="text-gray-700 ml-[50px] hover:text-gray-900">
          SHOP
        </a>
        <a href="#why-biom" className="text-gray-700 hover:text-gray-900">
          WHY BIOM
        </a>
        <a href="#scents" className="text-gray-700 hover:text-gray-900">
          SCENTS
        </a>
      </div>

      {/* Centered logo in the navbar */}
      <div className="flex-grow flex justify-center">
        <img src={logoBiom} alt="Biom Logo" className="h-[30px]" />
      </div>

      {/* Right side of the navbar with sign-in and cart, visible only on medium and larger screens */}
      <div tabIndex={0} role="button" className="hidden md:flex items-center space-x-6 ">
        <a href="#sign-in" className="text-gray-700 hover:text-gray-900">
          SIGN IN
        </a>
        <a href="#cart" className="text-gray-700 hover:text-gray-900">
          CART
        </a>
        <a href="#cart" className="relative flex items-center text-gray-700 hover:text-gray-900">
          {/* Cart icon with item count indicator */}
          <div className="indicator mr-[50px]">
            <img src={cartIcon} alt="Cart" className="h-[24px] w-[24px]" />
            <span className="badge badge-sm indicator-item font-brandon text-center p-1.2 bg-custom-gold" style={{ color: 'white' }}>
              0
            </span>
          </div>
        </a>
      </div>        
    </nav>
  );
};

export default NavBar;
