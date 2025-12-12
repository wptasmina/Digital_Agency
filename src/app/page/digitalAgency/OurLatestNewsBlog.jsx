import BlogSection from "../../../components/BlogSection";
import Button from "../../../components/Button";
import TopHeading from './../../../components/shear/TopHeading';



export default function OurLatestNewsBlog() {
  return (
    <section className="Container bg-[#FAFAFA]">

         {/* Top Heading */}
                <div className="max-w-6xl mx-auto ">
                  <div className="flex justify-between flex-col md:flex-row gap-6 md:pb-10 pb-6">
                    <TopHeading 
                      title="ur latest news & blog"
                      heading={<>Explore the Latest  </>}
                      highlight={
                        <>in Design, <br/> Tech & Strategy</>
                      }      
                      />
                <div className="flex items-end">
                  <Button title="View More" />
                </div>
              </div>
              </div>

        <div>
          <BlogSection />
        </div>
    </section>
  );
}
