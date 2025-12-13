

export default function FeaturesList({ badge, title, subtitle, subItem }) {
  return (
    <div>
        {/* Title  */}
        <div className="flex items-center gap-2 mb-4">
           {badge && (
              <span className="w-3 h-3 bg-[#C4EE18] rounded-full"></span>
            )}
            <div>
              <p className="text-sm font-normal text-[#19324D] uppercase">{badge}</p>
            </div>
        </div>

        <h1 className="text-xl md:text-4xl font-normal text-[#19324D] leading-snug mb-5">
          {title}
        </h1>
      
          {/* SubTitle  */}
      <p className="text-[#5F758C] text-sm md:text-base leading-relaxed mb-6">
        {subtitle}
      </p>

      <ul className="space-y-3 text-[#19324d]">
        {subItem?.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-[#C4EE18] text-lg mt-0.5">✔</span>
            <span className="text-base font-medium">{item}</span>   {/* item = subItem */}
          </li>
        ))}
      </ul>
    </div>
  );
}
