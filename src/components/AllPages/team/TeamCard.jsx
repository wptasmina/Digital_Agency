import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function TeamCard({ image, name, role }) {
  return (
    <div className="relative group overflow-hidden rounded-lg">

      {/* IMAGE WRAPPER */}
      <div className="relative w-full h-[300px]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />

        {/* GRADIENT OVERLAY (ON IMAGE) */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
          style={{
            background:
              "linear-gradient(26.33deg, rgba(25, 50, 77, 1), rgba(58, 116, 179, 0) 64%)",
          }}
        />

        {/* INFO TEXT */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition duration-300 z-10">
          <h4 className="text-white font-medium text-sm md:text-2xl">{name}</h4>
          <p className="text-[#5F758C] text-xs md:text-base font-medium">{role}</p>
        </div>
      </div>

      {/* SOCIAL ICONS */}
      <div className="absolute top-4 right-4 flex flex-col gap-2.5 bg-[#c4ee18] px-4 py-5 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 z-20">
        <FaFacebookF className="text-[#272727] cursor-pointer" />
        <FaTwitter className="text-[#272727] cursor-pointer" />
        <FaLinkedinIn className="text-[#272727] cursor-pointer" />
        <FaInstagram className="text-[#272727] cursor-pointer" />
      </div>

    </div>
  );
}
