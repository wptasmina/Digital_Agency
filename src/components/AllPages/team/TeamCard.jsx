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
          <h4 className="text-white font-semibold text-sm">{name}</h4>
          <p className="text-gray-300 text-xs">{role}</p>
        </div>
      </div>

      {/* SOCIAL ICONS */}
      <div className="absolute top-4 right-4 flex flex-col gap-3 bg-[#c4ee18] px-2 py-3 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 z-20">
        <FaFacebookF className="text-[#19324D] cursor-pointer" />
        <FaTwitter className="text-[#19324D] cursor-pointer" />
        <FaLinkedinIn className="text-[#19324D] cursor-pointer" />
        <FaInstagram className="text-[#19324D] cursor-pointer" />
      </div>

    </div>
  );
}
