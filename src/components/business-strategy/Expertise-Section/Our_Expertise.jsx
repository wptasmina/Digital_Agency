import Button from '../../Button';
import bgImg from "../../../assets/service/bg-pattern.png";
import Top_Heading from './../Top_Heading';
import Counter from './counter';

export default function Our_Expertise() {
  return (
    <section className="bg-[#ffffff]  px-6 md:px-20 overflow-hidden font-geist py-16">
        <div className="max-w-6xl mx-auto relative top-0">
         
             {/* Background Image */}
             <img
               src={bgImg}
               alt="Background image"
               className="absolute -left-24 -top-15 w-[200px] h-[200px] z-10"
             />
         
             {/* TOP HEADING */}
             <div className="flex justify-between md:pb-10 pb-6">
               <Top_Heading />
               <div className="flex justify-between items-center">
                 <Button title="Call Us Now" />
             </div>
             </div>
        </div>
    

        <Counter />
    </section>
  )
}
