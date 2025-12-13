

export default function TopBanner({
  badge,
  title,
  subtitle,
  className = "",
}) {
  return (
    <section className={`pt-4 relative overflow-hidden ${className}`}>
      
      {/* Grid background */}
      {/* <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none"></div> */}

    <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Badge */}
    <div className="grid md:grid-cols-2 items-end gap-4">
     <div className="">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-3 h-3 rounded-full bg-lime-500"></span>
          <p className="text-sm font-medium tracking-wide text-gray-600">
            {badge}
          </p>
        </div>

        {/* Title */}
        <h1 className="text-xl md:text-4xl font-normal text-[#5f758c] leading-snug">
          {title}
        </h1>
     </div>

        {/* Subtitle */}
        {subtitle && (
          <p className=" text-[#5f758c]">
            {subtitle}
          </p>
        )}

    </div>

    </div>

    </section>
  );
}
