


export default function TopHeading({ title, heading, highlight, subtitle, className}) {
  return (
    <>
             {/* Label */}
       <div>
          <div className="flex items-center gap-2 pt-2 md:pb-0 pb-4">
            {title && (
              <span className="w-3 h-3 bg-[#C4EE18] rounded-full"></span>
            )}
            <div>
              <p className="text-sm font-normal text-[#19324D] uppercase">{title}</p>
            </div>
          </div>
       </div>

              {/* Heading */}
          <div className={className}>
            <h2 className="text-3xl md:text-4xl lg::text-[40px] leading-snug">
              <span className="text-[#C4EE18] font-normal">{heading}</span>
              <span className="text-[#19324D] font-normal">{highlight}</span>
            </h2>
         
              {/* Sub text */}
            <p className="mt-6 text-[#5F758C] text-sm md:text-base mb-6 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
        </div>
      {/* </div> */}

      
        {/* Button  */}
         {/* <div className="flex justify-between items-end">  
            <Button title="Read More" />
          </div> */}
    </>
  )
}
