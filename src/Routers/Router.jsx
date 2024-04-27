import { createBrowserRouter } from "react-router-dom";
import Login from "./../Pages/Auth/Login";
import Root from "../Layout/Root";
import Register from "./../Pages/Auth/Register";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import OurService from "../Components/Home/OurService";
import TouristSpots from "../Pages/TouristSpots/TouristSpots";
import EstateDetails from "../Components/Cards/EstateDetails";
import PrivateRouter from "./PrivateRouter";
import UserProfile from "../Pages/UserProfile/UserProfile";
import Contact from "../Components/Home/Contact";
import AddTouristSpot from "../Pages/UserProfile/AddTouristSpot";

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
        path: "/touristspots",
        element: <TouristSpots />,
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
        path: "/addtouristspot",
        element: (
          <PrivateRouter>
            <AddTouristSpot />
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
