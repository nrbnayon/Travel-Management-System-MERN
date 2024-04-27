import { createBrowserRouter } from "react-router-dom";
import Login from "./../Pages/Auth/Login";
import Root from "../Layout/Root";
import Register from "./../Pages/Auth/Register";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import OurService from "../Components/Home/OurService";
import Villas from "../Pages/EstateVillas/EstateVillas";
import EstateDetails from "../Components/Cards/EstateDetails";
import PrivateRouter from "./PrivateRouter";
import UpdateProfile from "../Pages/UserProfile/UpdateProfile";
import UserProfile from "../Pages/UserProfile/UserProfile";
import Contact from "../Components/Home/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/luxury.json"),
      },
      {
        path: "/estatevillas",
        element: <Villas />,
        loader: () => fetch("/luxury.json"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/services",
        element: <OurService />,
      },
      {
        path: "/updateprofile",
        element: (
          <PrivateRouter>
            <UpdateProfile />
          </PrivateRouter>
        ),
      },
      {
        path: "/userprofile",
        element: (
          <PrivateRouter>
            <UserProfile />
          </PrivateRouter>
        ),
      },
      {
        path: "/contact",
        element: (
          <PrivateRouter>
            <Contact />
          </PrivateRouter>
        ),
      },
      {
        path: "/estatedetails/:id",
        loader: async ({ params }) => {
          const response = await fetch(`/luxury.json`);
          const data = await response.json();
          return data.find((estate) => estate.id === parseInt(params.id));
        },
        element: (
          <PrivateRouter>
            <EstateDetails />
          </PrivateRouter>
        ),
      },
    ],
  },
]);

export default router;
