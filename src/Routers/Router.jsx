import { createBrowserRouter } from "react-router-dom";
import Login from "./../Pages/Auth/Login";
import Root from "../Layout/Root";
import Register from "./../Pages/Auth/Register";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import OurService from "../Components/Home/OurService";
import TouristSpots from "../Pages/TouristSpots/TouristSpots";
import PrivateRouter from "./PrivateRouter";
import UserProfile from "../Pages/UserProfile/MyList";
import Contact from "../Components/Home/Contact";
import AddTouristSpot from "../Pages/UserProfile/AddTouristSpot";
import TouristSpotDetails from "../Components/Cards/TouristSpotDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:3000/spots"),
      },
      {
        path: "/touristspots",
        element: <TouristSpots />,
        loader: () => fetch("http://localhost:3000/spots"),
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
        path: "/mylist",
        loader: () => fetch("http://localhost:3000/spots"),
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
        path: "/touristspotdetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/spots/${params.id}`),
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
