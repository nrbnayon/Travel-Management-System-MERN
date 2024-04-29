import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const CountryCard = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(
      "https://euro-tour-server-hk1m1ayqu-nrbnayons-projects.vercel.app/countries"
    )
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <div className="bg-gray-100 p-6 rounded-lg mb-6 text-center my-4">
        <h3 className="text-2xl font-bold mb-2">
          Welcome to Our Collection of Countries
        </h3>
        <p className="text-gray-700">
          Explore the beauty and diversity of different nations around the
          world.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        {countries.map((country) => (
          <div
            key={country._id}
            className="relative rounded overflow-hidden shadow-lg"
          >
            <img
              className="w-full h-64 object-cover"
              src={country.image}
              alt={country.country_Name}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                {country.country_Name}
              </div>
              <p className="text-gray-700 text-base">
                {country.short_description}
              </p>
            </div>
            <div className="px-6 py-4 flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              <Typewriter
                words={[`${country.country_Name}`, "Travel", "Explore"]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </div>

            <Link
              to={{
                pathname: `/countries/${country.country_Name}`,
                state: { countryName: country.country_Name },
              }}
              className="absolute bottom-4 right-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Explore
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryCard;
