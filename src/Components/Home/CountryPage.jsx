import { useState, useEffect } from "react";
import { FaDisease, FaMapMarkerAlt } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { Fade, Slide } from "react-awesome-reveal";

const CountryPage = () => {
  const { countryName } = useParams();
  const [filteredSpots, setFilteredSpots] = useState([]);
  const spots = useLoaderData();

  useEffect(() => {
    const filteredData = spots.filter(
      (spot) => spot.country_Name === countryName
    );
    setFilteredSpots(filteredData);
  }, [countryName, spots]);

  return (
    <div>
      {filteredSpots.length > 0 ? (
        <div>
          <div className="bg-gray-100 p-6 rounded-lg mb-6 text-center my-4">
            <Slide>
              <h3 className="text-2xl font-bold mb-2">
                Welcome to Our Collection of - {countryName}
              </h3>
            </Slide>
            <Fade delay={1e3} cascade damping={1e-1}>
              <p className="text-gray-700">
                Explore the beauty and diversity of different nations around the
                - {countryName}.
              </p>
            </Fade>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
            {filteredSpots.map((spot) => (
              <Fade
                key={spot._id}
                triggerOnce={true}
                duration={3000}
                delay={1e3}
                cascade
                damping={1e-1}
              >
                <div className="bg-blue-gray-200 max-w-sm rounded-lg overflow-hidden shadow-lg border hover:border-primary">
                  <img
                    src={spot.image}
                    alt={spot.tourists_spot_name}
                    className="h-64 w-full object-cover"
                  />
                  <div className="px-6 py-4">
                    <Slide>
                      <div className="font-bold text-xl mb-2 text-blue-600">
                        {spot.tourists_spot_name}, {spot.country_Name}
                      </div>
                    </Slide>
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
                    <Typewriter
                      words={[
                        `${spot.short_description.slice(0, 100)}`,
                        "Travel",
                        "Explore",
                      ]}
                      loop={true}
                      cursor
                      cursorStyle="_"
                      typeSpeed={100}
                      deleteSpeed={50}
                      delaySpeed={2000}
                    />
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
                      <GrMapLocation /> {spot.travel_time} Days In{" "}
                      {spot.location}
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
              </Fade>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">
            No data found for {countryName}
          </h3>
          <p className="text-gray-700">
            Please try another country or check back later.
          </p>
        </div>
      )}
    </div>
  );
};

export default CountryPage;
