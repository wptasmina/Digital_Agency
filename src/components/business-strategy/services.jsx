import Button from "../Button";
import Top_Heading from "./Top_Heading";
import ServiceIntro from "./ServiceIntro";

export default function Services() {
  return (
    <>
    <section className="bg-[#fafafa] py-20 px-6 md:px-20">

      {/* TOP HEADING */}
          <div className="flex justify-between border max-w-6xl mx-auto py-8">
            <Top_Heading />
            
              <div className="flex justify-between items-end">
                <Button title="Read More" />
              </div>
          </div>
    </section>

       {/* MAIN CONTENT GRID */}
    <ServiceIntro />

    </>
  );
}
