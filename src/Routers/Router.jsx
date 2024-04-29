import { createBrowserRouter } from "react-router-dom";
import Login from "./../Pages/Auth/Login";
import Root from "../Layout/Root";
import Register from "./../Pages/Auth/Register";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import OurService from "../Components/Home/OurService";
import TouristSpots from "../Pages/TouristSpots/TouristSpots";
import PrivateRouter from "./PrivateRouter";
import UserProfile from "../Pages/DataControll/MyList";
import Contact from "../Components/Home/Contact";
import AddTouristSpot from "../Pages/DataControll/AddTouristSpot";
import TouristSpotDetails from "../Components/Cards/TouristSpotDetails";
import SpotUpdate from "../Pages/DataControll/SpotUpdate";
import CountryPage from "../Components/Home/CountryPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch(
            "https://euro-tour-server-hk1m1ayqu-nrbnayons-projects.vercel.app/spots"
          ),
      },
      {
        path: "/touristspots",
        element: <TouristSpots />,
        loader: () =>
          fetch(
            "https://euro-tour-server-hk1m1ayqu-nrbnayons-projects.vercel.app/spots"
          ),
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
        path: "/countries/:countryName",
        element: <CountryPage />,
        loader: () =>
          fetch(
            "https://euro-tour-server-hk1m1ayqu-nrbnayons-projects.vercel.app/spots"
          ),
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
        path: "/mylist",
        loader: () =>
          fetch(
            "https://euro-tour-server-hk1m1ayqu-nrbnayons-projects.vercel.app/spots"
          ),
        element: (
          <PrivateRouter>
            <UserProfile />
          </PrivateRouter>
        ),
      },
      {
        path: "/spotupdate/:id",
        loader: ({ params }) =>
          fetch(
            `https://euro-tour-server-hk1m1ayqu-nrbnayons-projects.vercel.app/spots/${params.id}`
          ),
        element: (
          <PrivateRouter>
            <SpotUpdate />
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
        path: "/touristspotdetails/:id",
        loader: ({ params }) =>
          fetch(
            `https://euro-tour-server-hk1m1ayqu-nrbnayons-projects.vercel.app/spots/${params.id}`
          ),
        element: (
          <PrivateRouter>
            <TouristSpotDetails />
          </PrivateRouter>
        ),
      },
    ],
  },
]);

export default router;
