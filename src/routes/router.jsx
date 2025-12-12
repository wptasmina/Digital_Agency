
import { createBrowserRouter } from "react-router-dom";

import App from "../App";

// import ErrorPage from "../Pages/ErrorPage";

import HomePage from "../app/page/digitalAgency/HomePage";
import BusinessConsulting from "../app/page/businessConsulting/BusinessConsulting";
import MarketingAgency from "../app/page/marketingAgency/MarketingAgency";
import AboutUs from "../app/page/aboutus/AboutUsPage";
import OurServicePage from "../app/page/Services-Page/ourServicePage";
import ContactUs from "../components/shear/ContactUs";
import ServiceDetails from "../app/page/Services-Page/service-details/ServiceDetails";
import ErrorPage from "../app/page/ErrorPage/ErrorPage";
import Pricing from "../components/common/PricingSection";
import PricingPage from "../app/page/Pricing/pricing";
import BlogPage from "../app/page/Blog/blogPage";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/business-consulting",
          element: <BusinessConsulting />,
        },
        {
          path: "/marketing-agency",
          element: <MarketingAgency />,
        },
        {
          path: "/services",
          element: <OurServicePage />,
        },
        {
          path: "/service-details",
          element: <ServiceDetails />,
        },
        {
          path: "/about-us",
          element: <AboutUs />,
        },
        {
          path: "/blog",
          element: <BlogPage />,
        },
        {
          path: "/pricing",
          element: <Pricing />,
        },
        {
          path: "/contact-us",
          element: <ContactUs />,
        },
        // {
        //   path: "/allblogs",
        //   element: <AllBlogsPage />,
        //   loader: () => fetch('https://blogging-server-omega.vercel.app/blog')
        // },
    //    {
    //     path: "/addblog",
    //     element:(
    //       <PrivatRoute >
    //         <AddBlogPage />
    //       </PrivatRoute>
    //     ),
    //    },
        // {
        //   path: "/wishlist",
        //   element:<PrivatRoute>
        //       <WishList />
        //     </PrivatRoute>,
        // loader: () => fetch('https://blogging-server-omega.vercel.app/wishlist')
        // },
        {
          path: "/featuredblogs",
          // element: <Featured/>
        },
        {
          path: "/login",
          // element: <LoginPage/>
        },
        {
          path: "/register",
          // element: <Register/>
        }
      ],
    },
  ]);
  