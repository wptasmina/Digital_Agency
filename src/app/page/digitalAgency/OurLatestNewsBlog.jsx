import BlogSection from "../../../components/BlogSection";
import Button from "../../../components/Button";
import Highlight from "../../../components/shear/Highlight";
import TopBanner from "../../../components/shear/TopBanner";



export default function OurLatestNewsBlog() {
  return (
    <>

         {/* Top Heading */}
      <TopBanner
          badge = "YOUR GROW, YOUR PLAN"
          title={
                  <>Explore the Latest 
                    <Highlight 
                      className="text-slate-800 font-semibold"> in Design,
                      <br className="hidden lg:block"/>Tech & Strategy
                    </Highlight>
                  </>
                }
          subtitle="You are a startup looking to launch with impact or an established brand aiming to scale, our packages are designed to deliver creativity"
          className = ""
       />                          
    </>
  );
}
