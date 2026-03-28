import React, { lazy, Suspense, useState  , useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import Instamart from "./components/Instamart";
import ProductMenu from "./components/ProductMenu";
import Cart from "./components/Cart";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
const AppLayout = () => {

  const[userName, setUserName] = useState();


  useEffect(() =>
  {

    const data = {
      name : "shivaraj",
    };
    setUserName(data.name);
  },[])

  return (
<Provider store={appStore} >
    <UserContext.Provider  value = {{loggedInUser : userName , setUserName}} >
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
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
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/instamart",
        element:<Suspense>  <Instamart /></Suspense>,  // on demand will load this component
      },  
      {
        path: "/restaurants/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/products/:id",
        element: <ProductMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);