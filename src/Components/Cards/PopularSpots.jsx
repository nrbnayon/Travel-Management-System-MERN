import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaDisease } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";

const PopularSpots = ({ spots }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4  p-1 rounded-lg">
      {spots.slice(2, 8).map((spot) => (
        <div
          key={spot._id}
          className="bg-gray-200 max-w-sm rounded-lg overflow-hidden shadow-lg border hover:border-primary"
        >
          <img
            src={spot.image}
            alt={spot.tourists_spot_name}
            className="h-64 w-full object-cover"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-blue-600">
              {spot.tourists_spot_name}, {spot.country_Name}
            </div>
            <div className="flex justify-around flex-wrap items-center">
              <div className="flex items-center mb-2 text-gray-700 text-base">
                <FaMapMarkerAlt className="mr-2" />
                {spot.location}, {spot.country_Name}
              </div>
              <div className="flex items-center mb-2 text-gray-700 text-base">
                <FaDisease className="mr-2" />
                {spot.seasonality} Season
              </div>
            </div>
            <p className="text-gray-700 text-base">
              {spot.short_description.slice(0, 100)}...
            </p>
          </div>
          <div className="px-6 py-2">
            <p className="text-lg font-bold text-center text-gray-800 mr-4">
              Total Visitor Per Year: {spot.totalVisitorsPerYear}
            </p>
          </div>
          <div className="px-6 py-2 flex flex-wrap justify-around text-gray-800">
            <p className="font-semibold  mr-4">
              Average Cost: ${spot.average_cost}
            </p>
            <p className="flex items-center gap-1">
              <GrMapLocation /> {spot.travel_time} Days In {spot.location}
            </p>
          </div>
          <div className="px-6 py-4 w-full">
            <Link
              to={`/touristspotdetails/${spot._id}`}
              state={spot.tourists_spot_name}
            >
              <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full uppercase">
                View Details
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

PopularSpots.propTypes = {
  spots: PropTypes.arrayOf(PropTypes.object),
};

export default PopularSpots;
