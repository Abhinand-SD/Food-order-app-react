import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./src/components/header";
import Body from "./src/components/home";
import About from "./src/components/about";
import Contact from "./src/components/contact";
import RestaurantMenu from "./src/components/restaurantMenu";
import Error from "./src/components/errorPage";
import Shimmer from "./src/components/shimmer";
import UserContext from "./src/utils/userContext";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
import Cart from "./src/components/cart";

//Lazy loading components
const Stay = lazy(() => import("./src/components/stay"))
const About = lazy(() => import("./src/components/about"))

const AppLayout = () => {

    const [userLog, setUserLog] = useState("")

    useEffect(() => {
        const data = {
            name: "Abhi"
        }

        setUserLog(data.name)
    }, [])


    return (

        <Provider store={appStore}>
        <UserContext.Provider value={{ login: userLog, setUserLog }}>
            <div>
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
        </Provider>
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
            //  lazy load
            {
                path: "/about",
                element: <Suspense fallback=<Shimmer /> ><About /></Suspense>

            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/cart",
                element: <Cart />

            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            }

        ],
        errorElement: <Error />
    }

], {
    future: {
        v7_startTransition: true, // Opt into v7 behavior
        v7_relativeSplatPath: true, // Opt into v7 behavior
    },
});

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)