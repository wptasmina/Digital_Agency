import Top_Heading from "./Top_Heading";
import ServiceIntro from "./ServiceIntro";
import Latest_Work from "./latest_work";
import NewsSection from "./news_Section";


export default function Services() {
  return (
    <>
    <section className="bg-[#fafafa] py-16 px-6 md:px-20 ">

      {/* TOP HEADING */}
          <div className="flex justify-between max-w-6xl mx-auto py-8">
            <Top_Heading />
          </div>
    </section>

       {/* MAIN CONTENT GRID */}
    <ServiceIntro />
    <Latest_Work />
    <NewsSection />
    </>
  );
}
