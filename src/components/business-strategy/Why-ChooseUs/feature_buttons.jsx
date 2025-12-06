import AboutUs from "./featureAboutUs";


export default function Feature_Buttons() {
  return (
    <>
    <div className="max-w-6xl mx-auto border border-[#e3e3e3] border-dashed">
        <div className="grid md:grid-cols-3 text-center text-[#19324D] text-lg">
        <div className="py-8  border border-transparent border-r-[#e3e3e3] border-dashed cursor-pointer tracking-wide font-semibold">Feature</div>
        <div className="py-8 border border-transparent border-r-[#e3e3e3] border-b-[#e3e3e3] border-dashed cursor-pointer tracking-wide">Terms of Service</div>
        <div className="py-8  border border-transparent border-b-[#e3e3e3] border-dashed cursor-pointer tracking-wide">Fast & Easy Process</div>
      </div>

      {/* AboutUs */}
        <AboutUs />

    </div>
    
    </>

  )
}
