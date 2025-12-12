export default function TopBannerSection({
  badge,
  title,
  subtitle,
  className = "",
}) {
  return (
    <section className={`w-full py-20 bg-white relative overflow-hidden ${className}`}>
      
      {/* Grid background */}
      {/* <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none"></div> */}

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Badge */}
    <div className="flex justify-center items-end">
     <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="w-3 h-3 rounded-full bg-lime-500"></span>
          <p className="text-sm font-medium tracking-wide text-gray-600">
            {badge}
          </p>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-normal text-slate-700 leading-snug">
          {title}
        </h1>
     </div>

        {/* Subtitle */}
        {subtitle && (
          <p className="mt-6 text-gray-500 max-w-xl">
            {subtitle}
          </p>
        )}

    </div>

      </div>

    </section>
  );
}
