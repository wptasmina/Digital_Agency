

export default function RotatImg() {
  return (
    <div className="max-w-6xl mx-auto relative w-[250px] h-[250px]">
  {/* Rotated Background */}
  <div className="absolute w-[350px] h-[350px] inset-0 bg-black rotate-x-15 -rotate-y-30 rounded-xl"></div>
  <div className="absolute inset-0 bg-black rotate-0  rounded-xl"></div>

  {/* AI Image */}
  <img
    src="/your-image.jpg"
    className="relative z-10 w-full h-full object-cover rounded-lg"
  />
</div>

  )
}
