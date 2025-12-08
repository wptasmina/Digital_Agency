import { IoMdCheckmark } from "react-icons/io";

export default function FeaturesList() {
  return (
    <div>
        <h2 className="text-xl md:text-2xl font-semibold text-[#19324D ] leading-snug mb-5">
            Features Coverage For Every Aspect Of Your Life
        </h2>

        <p className="text-[#5F758C] text-sm md:text-base leading-relaxed mb-6">
            Whether you are a business owner, a landlord, or a property owner, Falcon Insurance is able to help to protect you and your assets from the worst possible eventualities.And because the team at Falcon insurance are so experienced and are fully trained, they will find the right cover for you.They will never try to sell you an insurance policy you do not need or will not cover you and they will make sure your insurance policy covers you completely in the event of something happening.Giving you the peace of mind that you are being protected by a professional company that puts your best interests first.
        </p>

          {/* Features List */}
        <ul className="space-y-3 text-[#19324d]">

            <li className="flex items-start gap-3">
              <IoMdCheckmark className="text-[#C4EE18] text-lg mt-0.5" />
              <span>Flexible payment options</span>
            </li>

            <li className="flex items-start gap-3">
              <IoMdCheckmark className="text-[#C4EE18] text-lg mt-0.5" />
              <span>Knowledgeable and friendly staff</span>
            </li>

            <li className="flex items-start gap-3">
              <IoMdCheckmark className="text-[#C4EE18] text-lg mt-0.5" />
              <span>A 24-hour claim line, call anytime</span>
            </li>

            <li className="flex items-start gap-3">
              <IoMdCheckmark className="text-[#C4EE18] text-lg mt-0.5" />
              <span>Fast documentation and service</span>
            </li>

            <li className="flex items-start gap-3">
              <IoMdCheckmark className="text-[#C4EE18] text-lg mt-0.5" />
              <span>Customer service that is second-to-none</span>
            </li>

          </ul>
    </div>

  )
}
