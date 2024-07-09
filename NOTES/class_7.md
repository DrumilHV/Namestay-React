# useEffect()

1. there are tow params to useEffect() hook, 1 st is callback function(mandatory), second is dependency array(optional).
2. If there is no dependency array, then everytime you re-render the component the use effect will be called.
3. If the dependency array is empty then the useEffect will be called only once after the inital render .
4. The basic nature of useEffect is to be called after each render.
5. If array has a var, useEffect wilvl be called when the var changes (var can be state or non state).
6. YOu can have multiple useEffects in a program.
7. You can have props as dep arary and normal js vars.
8. <strong>Every time you render the componnet, useEffect is called. Always called after the initial render.</strong>

# useState()

1. never make useState out of functional component (FC).
2. its used to make local state variables in FC.
3. make state var on top of FC.
4. never make state conditionally (if else).
5. never make state var in loops.
6. never make state var in function.

# BrowserRouter

```jsx
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error /> # Valid for all the routes.
  },
  {
    path: "/about",
    element: <About />,
  },
]);
```

# Custom Error page

- on the custom error page you can use `react-router-dom` 's `useRouteError()` to get the specific error in your route.
- sample code

```jsx
const err = useRouteError();
console.log(err);
{
  /*
    data: Error: No route matches URL "/about/s"
    error: 
        Error: No route matches URL "/about/s" ...
        message: "No route matches URL \"/about/s\"" ...
        stack: "Error: No route matches URL \"/about/s\"\n ...
    internal: true
    status: 404
    statusText: "Not Found"
  */
}
```

# Childern Routes

```jsx
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
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
    ],
    errorElement: <Error />,
  },
]);
root.render(<RouterProvider router={appRouter} />);
```

# Client Side Routing

1. When we switch page we do not make any network calls.
2. This is also a reason why react is single apps are page applications. We dont have to send request for every page , we have the pages already loaded as components and we just interchange the components.
3. If we make network calls it's server side routing.

# Server Side Routing

1. makes a call to server and gets the page and renders it.(coming from the server)
2.
