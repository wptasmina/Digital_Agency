


export default function TopHeading({ title, heading, highlight}) {
  return (
    <>
    <div className="">
      <div className="flex md:flex-row flex-col gap-8 justify-between">
             {/* Label */}
       <div>
          <div className="flex items-center gap-2 pt-2 md:pb-0 pb-4">
            <span className="w-3 h-3 bg-[#C4EE18] rounded-full"></span>
            <div>
              <p className="text-sm font-medium text-[#19324D] uppercase">{title}</p>
            </div>
          </div>
       </div>

              {/* Heading */}
          <div>
            <h2 className="text-4xl md:text-[40px] leading-snug">
              <span className="text-[#C4EE18] font-normal">{heading}</span>
              <span className="text-[#19324D] font-bold">{highlight}</span>
            </h2>
         
              {/* Sub text */}
            <p className="mt-6 text-gray-600 text-lg max-w-2xl leading-relaxed">
              We blend innovation with practical strategy to create meaningful solutions that adapt to your needs, and unlock new opportunities for success.
            </p>
        </div>
      </div>
    </div>
      
        {/* Button  */}
         {/* <div className="flex justify-between items-end">  
            <Button title="Read More" />
          </div> */}
    </>
  )
}
