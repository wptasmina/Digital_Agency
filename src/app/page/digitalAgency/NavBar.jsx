import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../assets/digitalAgency/logo/Logo.png";
import Call from "../../../assets/icons/Call.png";
import Hamburger from "../../../assets/digitalAgency/icons/Hamburger.png";

const navItem = [
  {
    name: "Home",
    submenu: ["Business Consulting", "Marketing Agency", "SEO"],
  },
  {
    name: "Services",
    submenu: ["Service Details", "SEO", "Marketing"],
  },
  { name: "About Us" },
  {
    name: "Pages",
    submenu: ["Blog", "Blog Details", "Our Project", "Project Details", "FAQ", "Privacy Policy", "Testimonial"],
  },
  { name: "Pricing" },
  { name: "Contact Us" },
];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null); // Desktop submenu
  const [mobileSubmenu, setMobileSubmenu] = useState(null); // Mobile submenu

  // Handle mouse enter/leave with delay to allow submenu hover
  let timer;
  const handleMouseEnter = (index) => {
    clearTimeout(timer);
    setOpenSubmenu(index);
  };
  const handleMouseLeave = () => {
    timer = setTimeout(() => setOpenSubmenu(null), 200); // 200ms delay
  };

  return (
    <nav className="fixed mx-auto w-full backdrop-blur-lg z-50">
      <div className="flex justify-between items-center py-4 sm:py-5 lg:py-7 px-4 sm:px-6 lg:px-10 border-b-[1px] border-[#EBEBEB]">

        {/* Logo */}
        <div className="w-[70px] h-5 sm:w-20 sm:h-[23px] lg:w-[93px] lg:h-[27px]">
          <img src={Logo} alt="ATRI" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-[30px]">
            {navItem.map((item, index) => (
              <li
                key={index}
                className="relative text-[#19324D] flex items-center gap-[5px] cursor-pointer"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Main Nav Item */}
                <NavLink
                  to={`/${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#C4EE18] font-semibold"
                      : "hover:text-[#C4EE18]"
                  }
                >
                  {item.name}
                </NavLink>

                {/* Dropdown Arrow */}
                {item.submenu && (
                  <svg
                    className="w-4 h-4 mt-1 transition"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}

                {/* Desktop Submenu */}
                {item.submenu && openSubmenu === index && (
                  <ul
                    className="absolute top-14 left-0 bg-white border border-gray-200 shadow-lg rounded mt-2 w-60 z-50"
                    onMouseEnter={() => clearTimeout(timer)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <NavLink
                          to={`/${subItem.toLowerCase().replace(/\s+/g, "-")}`}
                          className="block px-4 py-2 hover:bg-gray-50 hover:text-[#C4EE18] transition-colors"
                        >
                          {subItem}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3 sm:gap-4 lg:gap-[30px]">
          {/* Call Button */}
          <div className="hidden md:flex items-center gap-2.5">
            <div className="w-[45px] h-[45px] bg-[#C4EE18] rounded-full flex items-center justify-center">
              <img src={Call} alt="Call" />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-700">Call Us</p>
              <p className="text-lg font-semibold text-gray-800">012 4657 999</p>
            </div>
          </div>

          {/* Let's Talk */}
          <button className="hidden sm:flex items-center bg-[#C4EE18] font-bold py-2.5 px-4 rounded-tl-lg rounded-tr-[2px] rounded-b-[2px]">
            <span className="mr-2.5 font-medium">Let&apos;s Talk</span>
            <div className="w-6 h-6 bg-white text-[#C4EE18] rounded-[1px] flex items-center justify-center">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-[34px] h-[34px] flex items-center justify-center"
          >
            <img src={Hamburger} alt="Hamburger" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-2 px-3 sm:px-5">
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            <ul className="py-2">
              {navItem.map((item, index) => (
                <li
                  key={index}
                  className="text-[#19324D] px-6 py-3 hover:bg-gray-50 hover:text-[#C4EE18] cursor-pointer transition-colors flex items-center justify-between"
                  onClick={() =>
                    mobileSubmenu === index ? setMobileSubmenu(null) : setMobileSubmenu(index)
                  }
                >
                  <NavLink
                    to={`/${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="font-medium"
                  >
                    {item.name}
                  </NavLink>
                  {item.submenu && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </li>
              ))}

              {/* Mobile Submenu */}
              {navItem.map(
                (item, index) =>
                  item.submenu &&
                  mobileSubmenu === index &&
                  item.submenu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <NavLink
                        to={`/${subItem.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block text-[#19324D] px-12 py-2 hover:bg-gray-50 hover:text-[#C4EE18] transition-colors"
                      >
                        {subItem}
                      </NavLink>
                    </li>
                  ))
              )}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
