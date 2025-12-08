import React, { useState } from "react";
import Logo from "../../../assets/digitalAgency/logo/Logo.png";
import Call from "../../../assets/digitalAgency/icons/Call.png";
import Hamburger from "../../../assets/digitalAgency/icons/Hamburger.png";

const navItem = ["Home", "Services", "About Us", "Pages", "Pricing", "Contact"];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="mt-5">
      <div className="flex justify-between items-center py-4 sm:py-5 lg:py-7 px-4 sm:px-6 lg:px-10 border-[1px] border-[#EBEBEB]">
        <div className="w-[70px] h-5 sm:w-20 sm:h-[23px] lg:w-[93px] lg:h-[27px]">
          <img src={Logo} alt="ATRI" />
        </div>
        <div className="hidden lg:block">
          <ul className="flex items-center gap-[30px]">
            {navItem?.map((item, index) => (
              <li
                key={index}
                className=" text-[#19324D] flex items-center gap-[5px] hover:text-[#C4EE18] cursor-pointer"
              >
                {item}
                <svg
                  className="w-4 h-4 mt-1 group-hover:text-[#C4EE18] transition"
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
              </li>
            ))}
          </ul>
        </div>
        <div className=" flex items-center gap-3 sm:gap-4 lg:gap-[30px]">
          <div className=" hidden md:flex items-center gap-2.5">
            <div className="w-[45px] h-[45px] bg-[#C4EE18] rounded-full flex items-center justify-center">
              <img src={Call} alt="Call" />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-700">Call Us</p>
              <p className="text-lg font-semibold text-gray-800">
                012 4657 999
              </p>
            </div>
          </div>
          <button className="hidden sm:flex items-center bg-[#C4EE18] font-bold py-2.5 px-4 rounded-tl-lg rounded-tr-[2px] rounded-b-[2px]">
            <span className="mr-2.5 font-medium">Let's Talk</span>
            {/* Arrow Icon */}
            <div className="w-6 h-6 bg-white text-[#C4EE18] rounded-[1px] flex items-center justify-center">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </div>
          </button>
          {/* Right Section: Hamburger Menu Icon */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-[34px] h-[34px] flex items-center justify-center"
          >
            <img src={Hamburger} alt="Hamburger" />
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden mt-2 px-3 sm:px-5">
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            <ul className="py-2">
              {navItem?.map((item, index) => (
                <li
                  key={index}
                  className="text-[#19324D] px-6 py-3 hover:bg-gray-50 hover:text-[#C4EE18] cursor-pointer transition-colors flex items-center justify-between"
                >
                  <span className="font-medium">{item}</span>
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
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </li>
              ))}
            </ul>

            {/* Mobile Call Section */}
            <div className="md:hidden border-t border-gray-200 p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-[40px] h-[40px] bg-[#C4EE18] rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-700">Call Us</p>
                  <p className="text-lg font-semibold text-gray-800">
                    012 4657 999
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile Let's Talk Button */}
            <div className="sm:hidden border-t border-gray-200 p-4">
              <button className="w-full flex items-center justify-center bg-[#C4EE18] font-bold py-3 px-4 rounded-tl-lg rounded-tr-[2px] rounded-b-[2px] hover:bg-[#b5d916] transition-colors">
                <span className="mr-2.5 font-medium">Let's Talk</span>
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
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
