
import { createBrowserRouter } from "react-router-dom";

import App from "../App";

import HomePage from "../app/page/digitalAgency/HomePage";
import BusinessConsulting from "../app/page/businessConsulting/BusinessConsulting";
import MarketingAgency from "../app/page/marketingAgency/MarketingAgency";
// import AboutUs from "../app/page/aboutus/AboutUsPage";
import ContactUs from "../components/shear/ContactUs";
import ServiceDetails from "../app/page/services/ServiceDetails";
import ErrorPage from "../app/page/ErrorPage/ErrorPage";
import Pricing from "../components/common/PricingSection";
import Pages from "../app/page/pages/pages";
import Blog from "../app/page/pages/Blogs/blog";
import AllAboutUs from "../app/page/aboutUs/allAboutUs";
import Services from "../app/page/services/services";
import OurProject from "../components/AllPages/projects/ourProject";
import ProjectDetails from "../components/AllPages/projects/ProjectDetails";
import FAQPage from "../app/page/pages/FaqPage";
import TestimonialPages from "../app/page/pages/TestimonialPages";
import Team from "../app/page/pages/Team";
import TermsConditionPage from "../app/page/pages/TermsConditionPage";
import PrivacyPolicy from "../app/page/PrivacyPolicy";



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
          element: <Services />,
        },
        // {
        //   path: "/services",
        //   element: <OurServicePage />,
        // },
        {
          path: "/service-details",
          element: <ServiceDetails />,
        },
        {
          path: "/pages",
          element: <Pages />,
        },
        {
          path: "/our-project",
          element: <OurProject />,
        },
        {
          path: "/project-details",
          element: <ProjectDetails />,
        },
        {
          path: "/team",
          element: <Team />,
        },
        {
          path: "/terms-&-condition",
          element: <TermsConditionPage />,
        },
        {
          path: "/privacy-policy",
          element: <PrivacyPolicy />,
        },
        {
          path: "/faq",
          element: <FAQPage />,
        },
        {
          path: "/testimonial",
          element: <TestimonialPages />,
        },

        {
          path: "/about-us",
          element: <AllAboutUs />,
        },
        {
          path: "/blog",
          element: <Blog />,
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
  