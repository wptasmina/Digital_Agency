
import {
    createBrowserRouter
  } from "react-router-dom";

import App from "../App";



// import ErrorPage from "../Pages/ErrorPage";


import HomePage from "../app/page/digitalAgency/HomePage";
import BusinessConsulting from "../app/page/businessConsulting/BusinessConsulting";
import MarketingAgency from "../app/page/marketingAgency/MarketingAgency";


export const router = createBrowserRouter([
    {
      path: "/",
      // element: <Root></Root>,
      element: <App />,
      // errorElement: <ErrorPage />,
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
          path: "/aboutUs",
          // element: <AboutUsPage />,
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
  