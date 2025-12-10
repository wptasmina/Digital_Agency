import { IoMdCheckmark } from "react-icons/io";

export default function FeaturesList({ title, subtitle, subItem }) {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-semibold text-[#19324D] mb-5">
        {title}
      </h2>

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
