import backgroundImg from '../../assets/business-strategy/news-bg.png'
import videoIcon from '../../assets/icons/video-icon.png'


export default function NewsSection() {
  return (
 <section className="bg-[#fefff9] py-16">
  <div className="max-w-6xl mx-auto relative">

    {/* Background Image */}
    <img 
      src={backgroundImg}
      alt="background image"
      className="w-full h-auto object-cover rounded-xl"
    />

    {/* Overlay Layer */}
    <div className="absolute inset-0 bg-black/50"></div>

    {/* Video Icon Center */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
      w-24 h-24 rounded-full flex items-center justify-center
      bg-[#c4ee18] shadow-xl cursor-pointer z-10">
      <img src={videoIcon} alt="video icon" className="w-10 h-10" />
    </div>

    {/* Slide Text */}
    <div className="absolute bottom-4 left-6 text-white z-10">
      <h1 className="text-xl font-semibold">jkllajdsfdkdf</h1>
    </div>

  </div>
</section>


  )
}
