import { FaPhone } from "react-icons/fa6";

export default function ContactUs() {
  return (
    <section className="Container bg-[#F9FBFF]">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
          {/* LEFT :: FORM */}
          <div className="bg-white shadow-md p-6 sm:p-8 order-2 md:order-1">
            <form className="space-y-4 sm:space-y-5">
              {/* Name */}
              <div>
                <label className="text-gray-700 text-xs sm:text-sm font-medium">
                  Name*
                </label>
                <input
                  type="text"
                  placeholder="Name.."
                  className="w-full mt-1.5 sm:mt-2 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-md outline-none focus:border-lime-400"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-gray-700 text-sm font-medium">
                  Email*
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email..."
                  className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-md outline-none focus:border-lime-400"
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-gray-700 text-sm font-medium">
                  Message*
                </label>
                <textarea
                  rows="4"
                  placeholder="Write Your Message"
                  className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-md outline-none focus:border-lime-400"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button className="w-full bg-[#C4EE18] text-[#19324D] py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-md hover:bg-lime-400 transition cursor-pointer">
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT :: TEXT CONTENT */}
          <div className="space-y-3 sm:space-y-4 px-4 sm:px-6 lg:px-4 order-1 md:order-2">
            <span className="text-[#C4EE18] font-semibold text-xs sm:text-sm">
              ● CONTACT US
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#13202C] leading-tight">
              Let&apos;s Create <br className="hidden sm:block" />
              <span className="text-[#19324D]">Something Amazing!</span> <br />
              Send us a message.
            </h2>

            <p className="text-sm sm:text-base text-gray-500 max-w-md">
              We are a forward-thinking digital agency passionate about
              transforming ideas into impactful experiences.
            </p>

            <div className="flex items-center gap-3 pt-3 sm:pt-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 text-base sm:text-lg flex-shrink-0 flex items-center justify-center bg-[#C4EE18] rounded-full text-[#19324D]">
                <FaPhone className="text-[#19324D]" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-500 font-medium">
                  Call Us
                </p>
                <p className="text-sm sm:text-base font-semibold text-[#19324D]">
                  012 4657 999
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
