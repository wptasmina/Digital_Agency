import Top_Heading from "./Top_Heading";
import ServiceIntro from "./ServiceIntro";
import Latest_Work from "./latest_work";
import NewsSection from "./news_Section";
import Our_Expertise from './Expertise-Section/Our_Expertise';
import Button from "../Button";


export default function Services() {
  return (
    <>
    <section className="bg-[#fafafa] py-16 px-6 md:px-20 overflow-hidden">

      {/* TOP HEADING */}
        <div className="flex justify-between max-w-6xl mx-auto py-8">
          <Top_Heading />

           {/* Button  */}
          <div className="flex justify-between items-end">  
            <Button title="Read More" />
          </div>         
        </div>

    </section>

       {/* MAIN CONTENT GRID */}
    <ServiceIntro />
    <Latest_Work />
    <NewsSection />
    <Our_Expertise />
    
    </>
  );
}
