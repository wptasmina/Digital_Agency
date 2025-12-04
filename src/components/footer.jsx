
import '../index.css';
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaXTwitter, FaWhatsapp, FaInstagram, FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import Logo from '../assets/Logo.png';


export default function Footer() {
  return (
    <footer className="bg-[#001E1A] text-gray-300 pt-16 pb-10 px-6 md:px-20">
      
      {/* Top Section */}
      <div className="grid md:grid-cols-4 gap-10 border-b border-gray-700 pb-12">
        
        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <FaPhone  className="text-[#C4EE18]"/>
              +121-951-2065
            </li>
            <li className="flex items-center gap-2">
              <MdOutlineEmail className="text-[#C4EE18]"/>
              info@digitalteam.com
            </li>
            <li className="flex items-center gap-2">
              <FaLocationDot className="text-[#C4EE18]"/>
              <div>
                <p>115 North 6th St.</p> 
              <p>New York, NY 10027 USA</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Service */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Service</h3>
          <ul className="space-y-3">
            <li>Branding & Identity</li>
            <li>Web Design & Dev</li>
            <li>Mobile App Development</li>
            <li>UI/UX Designing</li>
            <li>Digital Marketing</li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Information</h3>
          <ul className="space-y-3">
            <li>FAQ</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Payment Method</li>
            <li>Pricing</li>
          </ul>
        </div>

        {/* Brand + Subscribe */}
        <div>
          <img src={Logo} alt="Footer logo" className="w-[165] h-[48] mb-3"/>
          <p className="text-gray-400 mb-6">
            Our team is always ready to listen, collaborate, and create 
            strategies that move your business forward.
          </p>

          {/* Subscribe Input */}
          <div className="flex items-center bg-white overflow-hidden w-full">
            <input 
              type="email" 
              placeholder="Email address" 
              className="px-3 py-2 w-full text-black outline-none"
            />
            <button className="subscribe-input">
              Subscribe
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-xl mt-5 cursor-pointer">
            <CiFacebook />
            <FaInstagram />
            <FaXTwitter />
            <CiLinkedin />
            <FaWhatsapp />
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="flex justify-between text-sm text-gray-400 mt-6 px-2">
        <div className="flex gap-6">
          <p>Terms & Condition</p>
          <p>Privacy Policy</p>
        </div>
        <p>© Copyright <span className="text-[#C4EE18]">ATRI</span> Proudly Powered by <span className="text-lime-400">OptiByte</span></p>
      </div>

    </footer>
  );
}
