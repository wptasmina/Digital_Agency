import Marquee from "react-fast-marquee";
import startIcon from '../../../assets/icons/start-icon.png'

export default function Marquees() {
  return (
    <div className="marquee-container">
        <Marquee>
      <div className="flex justify-between items-center gap-6.5">
          <div className="marquee-item flex items-center gap-2">
            <p className="text-4xl font-semibold">Business Consulting</p>
            <img src={startIcon} 
            alt="Start icons" 
            className="w-6 h-6"
            />
          </div>

          <div className="marquee-item flex items-center gap-2">
            <p className="text-4xl font-semibold">Website Design</p>
            <img src={startIcon} 
            alt="Start icons" 
            className="w-6 h-6"
            />
          </div>

           <div className="marquee-item flex items-center gap-2">
            <p className="text-4xl font-semibold">Brand Strategy</p>
            <img src={startIcon} 
            alt="Start icons" 
            className="w-6 h-6"
            />
          </div>

           <div className="marquee-item flex items-center gap-2">
            <p className="text-4xl font-semibold">Social Media Marketing</p>
            <img src={startIcon} 
            alt="Start icons" 
            className="w-6 h-6"
            />
          </div>

           <div className="marquee-item flex items-center gap-2">
            <p className="text-4xl font-semibold">Development</p>
            <img src={startIcon} 
            alt="Start icons" 
            className="w-6 h-6"
            />
          </div>
      </div>
        </Marquee>
    </div>
  )
}
