function NavBarBurger() {
  return (
    <div className=" ">

      {/* Main navbar container */}
      <div className="navbar outline-none border-none shadow-none">
        
        {/* Start of the navbar */}
        <div className="navbar-start outline-none border-none">
          
          {/* Dropdown menu */}
          <div className="dropdown outline-none border-none">
            
            {/* Button that triggers the dropdown, with no outline, border, or shadow */}
            <div tabIndex={0} role="button" className="btn bg-transparent outline-none border-none shadow-none w-16">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h38M4 12h38M4 18h38" 
                />
              </svg>
            </div>
            
            {/* Dropdown menu items */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li><a>SHOP</a></li>
              <li><a>WHY BIOM</a></li>
              <li><a>SCENTS</a></li>
              <li><a>SIGN IN</a></li>
              <li><a>CART</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBarBurger;
