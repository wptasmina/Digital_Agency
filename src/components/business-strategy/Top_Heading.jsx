import Button from "../Button";


export default function Top_Heading() {
  return (
      	<>
             {/* Label */}
       <div>
          <div className="flex items-center gap-2 pt-4">
             <span className="w-3 h-3 bg-[#C4EE18] rounded-full"></span>
             <span className="text-sm font-medium text-gray-600">OUR SERVICES</span>
          </div>
       </div>

              {/* Heading */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-snug">
                <span className="text-[#C4EE18] font-medium">Empowering Businesses</span>
                <br />
                <span className="text-[#19324D] font-bold">
                <span className="text-[#C4EE18] font-medium">Through </span>Insight and Innovation</span>
            </h2>
         
              {/* Sub text */}
            <p className="mt-6 text-gray-600 text-lg max-w-2xl leading-relaxed">
              We blend innovation with practical strategy to create meaningful solutions that adapt to your needs, and unlock new opportunities for success.
            </p>
        </div>

        {/* Button  */}
         {/* <div className="flex justify-between items-end">  
            <Button title="Read More" />
          </div> */}
    </>
  )
}
