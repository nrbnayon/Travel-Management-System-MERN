import { useLoaderData, useNavigation } from "react-router-dom";
import Spot from "./TouristSpot";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LoaderSpinner from "../../Components/LoaderSpinner/LoaderSpinner";
import ContactForm from "../ContactForm/ContactForm";

const TouristSpots = () => {
  const navigation = useNavigation();
  const spots = useLoaderData();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredVillas, setFilteredVillas] = useState([]);
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const filtered = spots.filter((spot) =>
      spot.estate_title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredVillas(filtered);
  }, [searchQuery, spots]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchButtonClick = () => {
    const filtered = spots.filter((spot) =>
      spot.estate_title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredVillas(filtered);
  };
  if (navigation.state === "loading" || !spots || !filteredVillas) {
    return <LoaderSpinner />;
  }
  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <div className="text-center">
        <h3 className="text-2xl font-semibold my-4">OUR All TOURIST SPOTS</h3>
      </div>
      <div className="flex items-center justify-center md:w-1/3  rounded-[30px] mx-auto space-x-2 border bg-gray-200">
        <input
          type="text"
          placeholder="Search Spots..."
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="border-none rounded-md w-2/3 h-8 focus:outline-none bg-gray-200"
        />
        <button onClick={handleSearchButtonClick} className="btn ">
          Search
        </button>
      </div>
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="p-6 mx-auto space-y-6 sm:space-y-12">
          <div className="grid justify-center mx-auto grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredVillas.map((spot) => (
              <Spot deletable={false} key={spot.id} spot={spot} />
            ))}
          </div>
        </div>
        <ContactForm />
      </section>
    </div>
  );
};

export default TouristSpots;
