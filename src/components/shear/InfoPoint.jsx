export default function InfoPoint({ icon, title, description }) {
  return (
    <div className="grid md:grid-cols-2 md:gap-2 gap-4">

      {/* Left icon + title */} 
      <div className="flex items-center gap-2">
        <span className="bg-[#C4EE18] p-2 rounded-full flex items-center justify-center">
          <img
            src={icon}
            alt="icon"
            className="w-5 h-5"
          />
        </span>

        <p className="font-medium text-base text-[#19324D]">
          {title}
        </p>
      </div>

      {/* Right description */}
      <div>
        <p className="text-[#5F758C] text-base font-normal">
        {description}
      </p>
      </div>
    </div>
  );
}
