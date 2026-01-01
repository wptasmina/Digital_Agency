import { Search } from "lucide-react";
import { div } from "framer-motion/client";
import blogImg from "../../../assets/pages/blog/blogDetails/img1.png"
import newsImg1 from "../../../assets/pages/blog/blogDetails/news1.png"
import newsImg2 from "../../../assets/pages/blog/blogDetails/news2.png"
import newsImg3 from "../../../assets/pages/blog/blogDetails/news3.png"


import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";


const categories = [
  "Business",
  "Web Development",
  "Finance",
  "Web Design",
  "IT Service",
];
const recentNews = [
  {
    id: 1,
    title: "From Creative Concepts to Strategy",
    date: "Sep 25, 2026",
    image: newsImg1,
  },
  {
    id: 2,
    title: "How Digital Marketing Drives Growth",
    date: "Oct 02, 2026",
    image: newsImg2,
  },
  {
    id: 3,
    title: "From Creative Concepts to Strategy, Explore What Drives Success.",
    date: "Oct 10, 2026",
    image: newsImg3,
  },
];

export default function BlogList() {
    const [activeIndex, setActiveIndex] = useState(0); // first item active

  return (
   <section className="Container bg-[#f5f5f5]">
     <div className="max-w-6xl mx-auto">

    <div className="grid lg:grid-cols-12 gap-12">
        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-[30px]">
          {/* Search */}
          <div className="bg-white py-[50px] px-[30px]">
            <h3 className="text-lg lg:text-[40px] text-[#19324D] font-medium mb-4">Search Here</h3>
            <div className="flex gap-5">
              <input
                type="text"
                placeholder="Search Blog"
                className="flex-1 placeholder:text-[#5f758c] border border-[#dadada] px-3 py-2 outline-none"
              />
              <button className="bg-[#C4EE18] text-[#19324D] font-bold py-2.5 px-4 rounded-tl-lg rounded-tr-[2px] rounded-b-[2px] cursor-pointer">
                <Search size={18} />
              </button>
            </div>
          </div>

          {/* Category */}
          <div className="bg-white py-[50px] px-[30px]">
            <h3 className="text-lg lg:text-[40px] text-[#19324D] font-medium mb-4">Category</h3>
            <ul className="space-y-3">
                {categories.map((item, i) => (
                    <li
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`flex justify-between items-center cursor-pointer transition-colors border border-[#dadada] p-7 shadow
                        ${
                        activeIndex === i
                            ? "text-[#19324D] font-medium"
                            : "text-[#5F758C] hover:text-[#19324D]"
                        }`}
                    >
                    {item}
                    <FaArrowRightLong
                        size={20}
                        className={activeIndex === i ? "opacity-100" : "opacity-60"}
                    />
                    </li>
                ))}
            </ul>
          </div>

        {/* Recent News */}
        <div className="bg-white py-[50px] px-[30px]">
          <h3 className="text-lg lg:text-[40px] font-medium mb-4 text-[#19324D]">Recent News</h3>

          <ul className="space-y-4">
            {recentNews.map((news) => (
              <li key={news.id} className="flex flex-col gap-2 border border-[#dadada]">
                <div className="w-full h-auto overflow-hidden p-4">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4 space-y-2.5">
                  <p className="text-[13px] text-[#5F758C] font-medium leading-snug">
                    {news.date}
                  </p>
                  <span className="text-xs md:text-xl text-[#19324D]">
                    {news.title}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

          {/* Tags */}
          <div className="bg-white py-[50px] px-[30px]">
            <h3 className="text-lg lg:text-[40px] font-medium mb-4 text-[#19324D]">Tags</h3>
            <div className="flex flex-wrap gap-2.5 ">
              {["Branding", "Information", "Marketing", "Solution", "Consulting", "Project", "Personal", "Creativity"].map(
                (tag, i) => (
                  <span
                    key={i}
                    className="p-[15px] text-sm md:text-base font-normal bg-[#EAEAEA] text-[#19324D] rounded hover:bg-[#C4EE18] cursor-pointer"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </aside>

        {/* Blog Content */}
        <article className="lg:col-span-8 space-y-10">
          {/* Hero Image */}
          <img
            src={blogImg}
            alt="Blog"
            className="w-full rounded"
          />

          <div className="space-y-4">
            <span className="text-sm text-slate-400">18 January 2025</span>
            <p className="text-slate-600 leading-relaxed">
              Our blog brings you fresh perspectives, innovative strategies, and creative inspiration. Whether you're exploring new possibilities or looking for actionable advice, you'll find content that fuels your curiosity and sparks new ideas.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Designed for professionals and business owners, our content helps you stay competitive and future-ready with expert insights and practical guidance.
            </p>
          </div>

          {/* Quote */}
          <div className="border-l-4 border-[#C4EE18] bg-slate-50 p-6">
            <p className="italic text-slate-700">
              ATRI is built to empower learners, professionals, and knowledge seekers with curated collections and seamless access across devices.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-300" />
              <div>
                <p className="font-semibold">James Carter</p>
                <span className="text-sm text-slate-400">CEO at NovaTech</span>
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="h-60 bg-slate-200 rounded" />
            <div className="h-60 bg-slate-200 rounded" />
          </div>

          <p className="text-slate-600 leading-relaxed">
            Every brand has a story, and we help you tell it beautifully. Through thoughtful design and meaningful messaging, we shape brand identities that speak to the heart.
          </p>

          {/* Tags & Share */}
          <div className="flex flex-wrap justify-between gap-4 border-t pt-6">
            <div className="flex gap-2">
              <span className="px-3 py-1 border text-sm">Solution</span>
              <span className="px-3 py-1 border text-sm">Creativity</span>
            </div>
            <span className="text-sm text-slate-500">Social Share</span>
          </div>

          {/* Comments */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Comment (3)</h3>
            {["Tailor", "Smith"].map((name, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 bg-slate-300 rounded-full" />
                <div>
                  <p className="font-medium">{name}</p>
                  <p className="text-sm text-slate-500">
                    Our seasoned experts deliver personalized consulting services to drive performance and growth.
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Reply Form */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Leave A Reply</h3>
            <form className="grid md:grid-cols-2 gap-6">
              <input className="border p-3" placeholder="Name" />
              <input className="border p-3" placeholder="Email" />
              <input className="border p-3 md:col-span-2" placeholder="Website" />
              <textarea
                className="border p-3 md:col-span-2 h-32"
                placeholder="Write Your Message"
              />
              <button className="md:col-span-2 text-[#19324D] bg-[#C4EE18] py-4.5 cursor-pointer font-medium">
                Send Message
              </button>
            </form>
          </div>
        </article>
      </div>
     </div>
    </section>
  )
}
