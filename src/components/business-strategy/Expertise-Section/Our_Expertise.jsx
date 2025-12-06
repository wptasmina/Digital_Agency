import Top_Heading from './../Top_Heading';
import Counter from './counter';

export default function Our_Expertise() {
  return (
    <section className="bg-[#ffffff]  px-6 md:px-20 overflow-hidden font-geist">

      {/* TOP HEADING */}
        <div className="flex justify-between max-w-6xl mx-auto py-8">
          <Top_Heading />
        </div>

    

        <Counter />
    </section>
  )
}
