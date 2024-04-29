import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactForm from "../ContactForm/ContactForm";
import Spot from "./TouristSpot";
import { Fade } from "react-awesome-reveal";
import LoaderSpinner from "../../Components/LoaderSpinner/LoaderSpinner";

const TouristSpots = () => {
  const spots = useLoaderData();

  const [sortOrder, setSortOrder] = useState("asc");
  const [sorting, setSorting] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleSortChange = (e) => {
    setSorting(true);
    setSortOrder(e.target.value);
  };

  const sortedSpots = [...spots].sort((a, b) => {
    const costA = parseInt(a.average_cost);
    const costB = parseInt(b.average_cost);
    return sortOrder === "asc" ? costA - costB : costB - costA;
  });

  useEffect(() => {
    setSorting(false);
  }, [sortedSpots]);

  if (sorting) {
    return <LoaderSpinner />;
  }

  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <div className="text-center mt-4">
        <Fade
          delay={1000}
          cascade
          damping={0.1}
          className="text-2xl font-semibold my-4"
        >
          OUR All TOURIST SPOTS
        </Fade>
      </div>
      <div className="text-center mb-4">
        <select value={sortOrder} onChange={handleSortChange} className="btn">
          <option value="asc">Sort Ascending</option>
          <option value="desc">Sort Descending</option>
        </select>
      </div>
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
