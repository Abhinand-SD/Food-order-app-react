import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./src/components/header";
import Body from "./src/components/home";
import About from "./src/components/about";
import Contact from "./src/components/contact";
import RestaurantMenu from "./src/components/restaurantMenu";
import Error from "./src/components/errorPage";
import Shimmer from "./src/components/shimmer";


import Stay from "./src/components/stay";


const Stay = lazy(() => import("./src/components/stay"))

const AppLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />

            },
            {
                path: "/contact",
                element: <Contact />
            },
            //  lazy load
            {
                path:"/stay",
                element: <Suspense fallback=<Shimmer /> ><Stay /></Suspense>
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu />

            }

        ],
        errorElement: <Error />
    }

],{
    future: {
      v7_startTransition: true, // Opt into v7 behavior
      v7_relativeSplatPath: true, // Opt into v7 behavior
    },
  });

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)