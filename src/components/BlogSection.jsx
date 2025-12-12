
import B1 from "../assets/digitalAgency/image/blog/B1.png";
import B3 from "../assets/digitalAgency/image/blog/B3.png";
import A1 from "../assets/digitalAgency/icons/arrow/A1.png";
import A2 from "../assets/digitalAgency/icons/arrow/A2.png";

const blogPosts = [
  {
    id: 1,
    image: B1,
    date: "15 January 2025",
    title:
      "Creativity Meets Knowledge, Ideas Meet Action, Innovation Meets Inspiration, Right Here on Our Blog",
    featured: true,
  },
  {
    id: 2,
    image: B1,
    date: "16 January 2025",
    title: "From Creative Concepts to Strategy, Explore What Drives Success.",
  },
  {
    id: 3,
    image: B3,
    date: "15 January 2025",
    title: "Explore Ideas, Trends, and Strategies Shaping the Digital Future",
  },
];

export default function BlogSection() {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <section className="Container">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          {/* Featured Post - Left Side */}
          {featuredPost && (
            <div className="group cursor-pointer bg-white p-4 sm:p-5">
              <div className="relative overflow-hidden mb-6 sm:mb-8 lg:mb-10 h-[220px] sm:h-[250px] lg:h-[267px]">
                <img
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300 "
                />
              </div>
              <p className="text-xs sm:text-sm mb-3 sm:mb-4 lg:mb-5 text-gray-600">
                {featuredPost.date}
              </p>
              <h3 className="text-slate-800 text-lg sm:text-xl lg:text-[1.5rem] mb-5 sm:mb-6 lg:mb-7 font-medium leading-relaxed">
                {featuredPost.title}
              </h3>
              <div className="relative w-7 h-7 sm:w-8 sm:h-8">
                {/* Default Icon */}
                {/* <img
                  src={A1}
                  alt="Arrow Icon"
                  className="absolute inset-0 w-full h-full transition-opacity duration-300 group-hover:opacity-0"
                /> */}
                {/* Hover Icon */}
                {/* <img
                  src={A2}
                  alt="Arrow Icon Hover"
                  className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-500"
                /> */}

                <span className="text-xl relative group">
                    {/* Default Image */}
                    <img
                    src={featuredPost.active ? A1 : A2} 
                     className="w-6 h-6 transition-opacity duration-200 opacity-100 group-hover:opacity-0"
                    alt="Default Arrow"
                        />
                    
                    {   /* Hover Image */}
                    <img
                    src={A1}
                    className="w-6 h-6 transition-opacity duration-200 absolute top-0 left-0 opacity-0 group-hover:opacity-100"
                    alt="Arrow Icon Hover"
                    />
                </span>                     

              </div>
            </div>
          )}

          {/* Regular Posts - Right Side */}
          <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
            {regularPosts.map((post) => (
              <div
                key={post.id}
                className="group cursor-pointer flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 p-4 sm:p-5 bg-whites"
              >
                <div className="relative w-full sm:w-[160px] lg:w-[200px] h-[200px] sm:h-[180px] lg:h-[220px] overflow-hidden flex-shrink-0">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className=" w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
                  />
                </div>
                <div className="flex flex-col justify-center flex-1">
                  <p className=" text-xs sm:text-sm mb-3 sm:mb-4 lg:mb-5 text-gray-600">
                    {post.date}
                  </p>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-slate-800 text-base sm:text-lg lg:text-[1.5rem] font-medium leading-snug  transition-colors mb-5 sm:mb-6 lg:mb-8">
                      {post.title}
                    </h3>
                  </div>
                  <div className="relative w-8 h-8">
                    {/* Default Icon */}
                    <img
                      src={A1}
                      alt="Arrow Icon"
                      className="absolute inset-0 w-full h-full transition-opacity duration-300 group-hover:opacity-0"
                    />
                    {/* Hover Icon */}
                    <img
                      src={A2}
                      alt="Arrow Icon Hover"
                      className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
