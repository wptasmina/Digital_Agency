import {
    createBrowserRouter
  } from "react-router-dom";

import App from "../App";



// import ErrorPage from "../Pages/ErrorPage";


import HomePage from "../app/page/digitalAgency/HomePage";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      // errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        //   loader: () => fetch('https://blogging-server-omega.vercel.app/homeblog')
        },
        {
          path: "/about",
          // element: <About />,
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
  