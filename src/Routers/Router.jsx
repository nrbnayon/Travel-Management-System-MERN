import { createBrowserRouter } from "react-router-dom";
import Login from "./../Pages/Auth/Login";
import Root from "../Layout/Root";
import Register from "./../Pages/Auth/Register";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import TouristSpots from "../Pages/TouristSpots/TouristSpots";
import PrivateRouter from "./PrivateRouter";
import MyList from "../Pages/DataControll/MyList";
import Contact from "../Components/Home/Contact";
import AddTouristSpot from "../Pages/DataControll/AddTouristSpot";
import TouristSpotDetails from "../Components/Cards/TouristSpotDetails";
import SpotUpdate from "../Pages/DataControll/SpotUpdate";
import CountryPage from "../Components/Home/CountryPage";
import Offers from "../Components/Home/Offers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://euro-tour-server.vercel.app/spots"),
      },
      {
        path: "/touristspots",
        element: <TouristSpots />,
        loader: () => fetch("https://euro-tour-server.vercel.app/spots"),
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
        loader: () => fetch("https://euro-tour-server.vercel.app/spots"),
      },
      {
        path: "/offers",
        element: <Offers />,
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
        loader: () => fetch("https://euro-tour-server.vercel.app/spots"),
        element: (
          <PrivateRouter>
            <MyList />
          </PrivateRouter>
        ),
      },
      {
        path: "/spotupdate/:id",
        loader: ({ params }) =>
          fetch(`https://euro-tour-server.vercel.app/spots/${params.id}`),
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
          fetch(`https://euro-tour-server.vercel.app/spots/${params.id}`),
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
