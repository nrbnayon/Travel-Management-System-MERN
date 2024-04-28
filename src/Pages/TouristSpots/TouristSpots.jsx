import { useEffect, useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import LoaderSpinner from "../../Components/LoaderSpinner/LoaderSpinner";
import ContactForm from "../ContactForm/ContactForm";
import Spot from "./TouristSpot";

const TouristSpots = () => {
  const navigation = useNavigation();
  const spots = useLoaderData();
  const [sortOrder, setSortOrder] = useState("asc");
  useEffect(() => {
    AOS.init();
  }, []);

  const sortedSpots = spots.sort((a, b) => {
    const costA = parseInt(a.average_cost);
    const costB = parseInt(b.average_cost);
    return costA - costB;
  });

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  if (navigation.state === "loading" || !spots) {
    return <LoaderSpinner />;
  }

  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <div className="text-center">
        <h3 className="text-2xl font-semibold my-4">OUR All TOURIST SPOTS</h3>
      </div>
      <button onClick={toggleSortOrder} className="btn">
        {sortOrder === "asc" ? "Sort Descending" : "Sort Ascending"}
      </button>
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="p-6 mx-auto space-y-6 sm:space-y-12">
          <div className="grid justify-center mx-auto grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sortedSpots.map((spot) => (
              <Spot deletable={false} key={spot._id} spot={spot} />
            ))}
          </div>
        </div>
        <ContactForm />
      </section>
    </div>
  );
};

export default TouristSpots;
