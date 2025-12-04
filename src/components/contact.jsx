import { FaPhone } from "react-icons/fa6";

export default function Contact() {
  return (
    <section className="bg-[#F9FBFF] py-20 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">

        {/* LEFT :: FORM */}
        <div className="bg-white shadow-md rounded-xl p-8">
          <form className="space-y-5">

            {/* Name */}
            <div>
              <label className="text-gray-700 text-sm font-medium">Name*</label>
              <input 
                type="text"
                placeholder="Name.."
                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-md outline-none focus:border-lime-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-gray-700 text-sm font-medium">Email*</label>
              <input 
                type="email"
                placeholder="Enter Your Email..."
                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-md outline-none focus:border-lime-400"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-gray-700 text-sm font-medium">Message*</label>
              <textarea
                rows="4"
                placeholder="Write Your Message"
                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-md outline-none focus:border-lime-400"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button className="w-full bg-[#C4EE18] text-[#19324D] py-3 font-semibold rounded-md hover:bg-lime-400 transition cursor-pointer">
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT :: TEXT CONTENT */}
        <div className="space-y-4 px-4">
          <span className="text-[#C4EE18] font-semibold">● CONTACT US</span>

          <h2 className="text-4xl font-bold text-[#13202C] leading-tight">
            Let&apos;s Create <br /> 
            <span className="text-[#19324D]">Something Amazing!</span> <br />
            Send us a message.
          </h2>

          <p className="text-gray-500 max-w-md">
            We are a forward-thinking digital agency passionate about transforming ideas 
            into impactful experiences.
          </p>

          <div className="flex items-center gap-3 pt-4">
            <div className="w-10 h-10 flex items-center justify-center bg-[#C4EE18] rounded-full text-[#19324D] text-lg">
              <FaPhone  className="text-[#19324D]"/>
            </div>
            <div>
              <p className="text-gray-500 font-medium">Call Us</p>
              <p className="font-semibold text-[#19324D]">012 4657 999</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
