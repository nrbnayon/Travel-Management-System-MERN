import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaDollarSign } from "react-icons/fa";

const PopularSpots = ({ spots }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {spots.slice(4, 10).map((spot) => (
        <div
          key={spot.id}
          className="max-w-sm rounded-lg overflow-hidden shadow-lg"
        >
          <img
            src={spot.image}
            alt={spot.estate_title}
            className="h-64 w-full object-cover"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-blue-600">
              {spot.estate_title}
            </div>
            <div className="flex items-center mb-2 text-gray-700 text-base">
              <FaMapMarkerAlt className="mr-2" />
              {spot.location}
            </div>
            <div className="flex items-center mb-2 text-gray-700 text-base">
              <FaDollarSign className="mr-2" />
              {spot.price}
            </div>
            <p className="text-gray-700 text-base">{spot.description}</p>
          </div>
          <div className="px-6 py-4">
            <Link
              to={`/estatedetails/${parseInt(spot.id)}`}
              state={spot.estate_title}
            >
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
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
