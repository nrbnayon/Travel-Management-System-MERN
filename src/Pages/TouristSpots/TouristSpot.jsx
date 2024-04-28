import { Link, useNavigation } from "react-router-dom";
import PropTypes from "prop-types";
import { GrMapLocation } from "react-icons/gr";
import { FaShieldHeart } from "react-icons/fa6";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LoaderSpinner from "../../Components/LoaderSpinner/LoaderSpinner";

const Spot = ({ spot }) => {
  const navigation = useNavigation();

  useEffect(() => {
    AOS.init();
  }, []);

  if (navigation.state === "loading" || !spot) {
    return <LoaderSpinner />;
  }

  const {
    _id,
    image,
    tourists_spot_name,
    country_Name,
    location,
    short_description,
    average_cost,
    seasonality,
    travel_time,
    totalVisitorsPerYear,
  } = spot;
  return (
    <div className="overflow-x-hidden overflow-y-hidden transition-transform duration-300 hover:scale-105 mx-auto">
      <div className="max-w-sm relative rounded-md group transition border-2 border-opacity-30 border-primary hover:border-secondary hover:scale-105 hover:no-underline focus:no-underline dark:bg-gray-50 rounded-br-[50px]">
        <div
          className="relative"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img
            role="presentation"
            className="w-full rounded-md h-44 dark:bg-gray-500"
            src={image}
            alt="spot img"
          />
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
          <p className="absolute top-1 left-2 bg-white text-black px-2 py-1 rounded-md uppercase">
            {tourists_spot_name}
          </p>
          <div className="absolute top-3 right-3 text-2xl text-red-500">
            <FaShieldHeart />
          </div>
        </div>

        <div className="p-2 space-y-2">
          <h3
            className="text-xl font-semibold group-hover:underline group-focus:underline"
            data-aos="fade-down"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            {tourists_spot_name}, {country_Name}
          </h3>
          <span
            className="text-xs dark:text-gray-600"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="3000"
          >
            {short_description.slice(0, 100)}...
          </span>
          <div className="flex justify-between items-center font-bold text-xs dark:text-gray-600">
            <p
              className="flex items-center gap-1"
              data-aos="zoom-out"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              <GrMapLocation />
              {location}, , {country_Name}
            </p>
            <p data-aos="zoom-in" data-aos-delay="200">
              Average Cost: {average_cost}
            </p>
          </div>
          <div className="flex flex-wrap justify-around">
            <p data-aos="zoom-in" data-aos-delay="200">
              Seasonality: {seasonality}
            </p>
            <p data-aos="zoom-in" data-aos-delay="200">
              Travel Time: {travel_time} Day
            </p>
            <p data-aos="zoom-in" data-aos-delay="200">
              Total Visitors Per Year: {totalVisitorsPerYear}
            </p>
          </div>
        </div>
        <div
          className="p-4 mb-4 mx-auto"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <Link to={`/touristspotdetails/${_id}`} state={spot.estate_title}>
            <button className="btn btn-outline w-full border-primary uppercase">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Spot.propTypes = {
  spot: PropTypes.object.isRequired,
};

export default Spot;
