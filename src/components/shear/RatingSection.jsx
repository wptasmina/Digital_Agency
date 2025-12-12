import starIcon from '../../assets/marketing/networking-team/star-icon.png'
import starIcon2 from '../../assets/marketing/networking-team/star-2.png'



export default function RatingSection() {
  return (
    <div className="text-white space-y-3">

      {/* Top Row */}
      <div className="flex items-center gap-3">
        <img src={starIcon2} className="w-8" alt="Trustpilot" />
        <span className="font-medium">Trustpilot</span>

        {/* Star Ratings */}
        <div className="flex gap-1 ml-6">
          <img src={starIcon} className="w-5 h-5" />
          <img src={starIcon} className="w-5 h-5" />
          <img src={starIcon} className="w-5 h-5" />
          <img src={starIcon} className="w-5 h-5" />
          <img src={starIcon} className="w-5 h-5 opacity-60" /> {/* last half star effect */}
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex items-center text-sm gap-4">
        <span className="text-lg lg:text-2xl font-normal">4.8/5</span>

        {/* Horizontal line */}
        <div className="flex-1 border-t border-white/40"></div>

        <span className="opacity-75 text-base font-normal">1200+ Review</span>
      </div>

    </div>
  );
}