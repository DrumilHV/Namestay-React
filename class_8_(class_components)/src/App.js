import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";

/*
    Header
        -logo
        -nav items
    Body
        -Search
        -RestaurantContainer
            -RestaurantCard
              -IMG
              -Name
              -Cusiens
              -Ratings
              -delevery time
    Footer
        -coypywrite
        -link
        -address
        -contacts

*/

const AppLayout = () => {
  document.title = "FoodGinx";
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      { path: "/abc/:id", element: <About /> },
      {
        path: "/restaurant/:resName/:resId",
        element: <RestaurantMenu />,
      },

      // Keep this route at the end itself or else it will club all the pages after it as /* , and render error page !! .
      // {
      //   path: "*",
      //   element: <Error />,
      // },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
