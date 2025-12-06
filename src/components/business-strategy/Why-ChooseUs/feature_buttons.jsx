import AboutUs from "./aboutUs";


export default function Feature_Buttons() {
  return (
    <>
    <div className="max-w-6xl mx-auto border border-[#e3e3e3] border-dashed">
        <div className="grid md:grid-cols-3 text-center">
        <div className="py-8  border border-transparent border-r-[#e3e3e3] border-dashed cursor-pointer">Feature</div>
        <div className="py-8 border border-transparent border-r-[#e3e3e3] border-b-[#e3e3e3] border-dashed cursor-pointer">Terms of Service</div>
        <div className="py-8  border border-transparent border-b-[#e3e3e3] border-dashed cursor-pointer">Fast & Easy Process</div>
      </div>

      {/* AboutUs */}
        <AboutUs />

    </div>
    
    </>

  )
}
