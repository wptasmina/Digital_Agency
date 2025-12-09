import backgroundImg from '../../assets/business-strategy/news-bg.png'
import videoIcon from '../../assets/icons/video-icon.png'
import MarqueeBanner from './../../app/page/digitalAgency/MarqueeBanner';




export default function NewsSection() {
  return (
 <section className="bg-[#fefff9] overflow-hidden">
  <div className="relative">
    {/* Background Image */}
    <img 
      src={backgroundImg}
      alt="background image"
      className="w-full h-auto object-cover"
    />

    {/* Overlay Layer */}
    <div className="absolute inset-0 bg-black/50"></div>

    {/* Video Icon Center */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
      w-24 h-24 rounded-full flex items-center justify-center
      bg-[#c4ee18] shadow-xl cursor-pointer z-10">
      <img src={videoIcon} alt="video icon" className="w-10 h-10" />
    </div>


    {/* Business Strategy News Slide Text */}
  <div className="absolute bottom-0 bg-transparent text-white z-10 py-0 w-full">
    <MarqueeBanner transparent={true} />
  </div>


  </div>
</section>


  )
}
