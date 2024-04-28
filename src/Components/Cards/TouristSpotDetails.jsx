import { useLoaderData, useNavigation } from "react-router-dom";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";
import "animate.css";
import { FaShieldHeart } from "react-icons/fa6";
import { HiHomeModern } from "react-icons/hi2";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { GrMapLocation } from "react-icons/gr";
import { BiSolidArea } from "react-icons/bi";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { MdAddIcCall, MdEmail, MdOutlineMessage } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";

const TouristSpotDetails = () => {
  const spot = useLoaderData();
  const navigation = useNavigation();
  const {
    image,
    tourists_spot_name,
    country_Name,
    location,
    short_description,
    average_cost,
    seasonality,
    travel_time,
    totalVisitorsPerYear,
    userName,
    latitude,
    longitude,
  } = spot || {};

  const customIcon = new Icon({
    iconUrl: `${image}`,
    iconSize: [38, 38],
    className: "rounded-full",
  });

  const markers = [
    {
      geocode: [latitude, longitude],
      popUp: `${tourists_spot_name} spot`,
    },
  ];
  if (navigation.state === "loading" || !spot) {
    return <LoaderSpinner />;
  }
  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <section className=" dark:bg-gray-100 dark:text-gray-900">
        <div className="container">
          <div className="relative w-full col-span-2 row-span-2 rounded shadow-sm h-[300px] md:h-[500px] dark:bg-gray-500 aspect-square animate__animated animate__pulse animate__delay-2.5s animate__duration-1.5s">
            <img
              src={image}
              alt="spot"
              className="w-full h-full  rounded-br-[50px] rounded-md"
            />
            <p className="absolute top-5 left-5 bg-white text-black px-2 py-1 rounded-md uppercase">
              Average Cost: ${average_cost}
            </p>
            <div className="absolute top-5 right-5 text-2xl text-red-500">
              <FaShieldHeart />
            </div>
          </div>
        </div>
      </section>
      <section className="my-6">
        <div className="flex justify-between flex-col md:flex-row gap-4">
          <div className="md:w-2/3 border border-gray-500 rounded rounded-bl-[50px] p-2">
            <div className="text-2xl lg:text-4xl font-black flex justify-between">
              {tourists_spot_name}, {country_Name}
              <div
                color="blue-gray"
                className="flex items-center gap-1.5 font-normal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="-mt-0.5 h-5 w-5 text-yellow-700"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                5.0
              </div>
            </div>
            <strong className="ml-2 mt-2">Author {userName}</strong>
            <p className="text-xl mt-3 ml-2 dark:text-gray-600">
              {short_description}
            </p>
            <div className="flex justify-between flex-wrap items-center font-bold text-base md:text-xl my-4 dark:text-gray-600 md:px-4 uppercase">
              <p className="flex items-center gap-1">
                <HiHomeModern />
                {seasonality} Season
              </p>
              <p className="flex items-center gap-1">
                <GrMapLocation /> {travel_time} In {location}
              </p>
              <p className="flex items-center gap-1">
                <BiSolidArea /> {totalVisitorsPerYear} Viewers Per Year
              </p>
            </div>
            <p className="text-center bg-white text-xl md:text-3xl font-black px-2 py-1 rounded-md uppercase">
              Average Cost: ${average_cost}
            </p>
          </div>
          <div className="md:w-1/3">
            <div className="bg-[#181D24] w-full p-4 rounded-tr-[50px] rounded-md text-center text-gray-400 text-base font-medium">
              <div className="text-left md:w-2/3 mx-auto space-y-4">
                <h3 className="text-xl font-bold mb-4 text-white">
                  Let&apos;s Connect
                </h3>
                <p className="flex items-center gap-1">
                  <MdAddIcCall /> Phone : 00000000000
                </p>
                <p className="flex items-center gap-1">
                  <MdEmail /> Email : eurotravel@gmail.com
                </p>
                <p className="flex items-center gap-1">
                  <TbWorldWww /> www.eurotravel.com
                </p>
                <p>Preferred contact method: Email: Languages: Any</p>
              </div>
              <div className="space-y-3 md:w-2/3 mx-auto my-6">
                <button className="btn btn-info w-full">GET AN OFFER</button>
                <p className="uppercase text-[#8998A6]">Ask us for help</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Spot Calender  */}
      <section className="my-4">
        <h3 className="flex items-center text-2xl justify-center uppercase gap-1 text-center font-extrabold my-4">
          Availability
        </h3>
        <div className="flex justify-between lg:w-2/3 mx-auto flex-col md:flex-row items-center">
          <div className="bg-white rounded text-black">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar />
            </LocalizationProvider>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl text-center font-bold mb-4 uppercase">
              Book Your Spot
            </h3>
            <button className="btn bg-[#5B656F] w-full text-white flex items-center uppercase">
              Call Owner <MdAddIcCall />
            </button>
            <button className="btn bg-[#5B656F] w-full text-white flex items-center uppercase">
              Send Message <MdOutlineMessage />
            </button>
            <button className="btn bg-[#5B656F] w-full text-white flex items-center uppercase">
              Visit Website <FaArrowUpRightFromSquare />
            </button>
            <p>Do not speak the language? No problem.</p>
            <p className="uppercase text-[#8998A6] text-center">
              Ask us for help
            </p>
          </div>
        </div>
      </section>
      <section className="mt-6 mb-0">
        <div>
          <div className="flex justify-between px-6 font-bold text-xl my-4 dark:text-gray-600">
            <h3>Map Location</h3>
            <p className="flex items-center gap-1 ">
              <GrMapLocation />
              {location}, {country_Name}
            </p>
          </div>
          <div className="map-container">
            <MapContainer
              center={[latitude, longitude]}
              zoom={13}
              style={{
                height: "60vh",
                width: "60%",
                borderRadius: "2rem",
                position: "relative",
              }}
              className="mx-auto z-[1]"
            >
              <div
                className="map-wrapper z-[1]"
                style={{ position: "relative" }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={markers[0].geocode} icon={customIcon}>
                  <Popup>{markers[0].popUp}</Popup>
                </Marker>
              </div>
            </MapContainer>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TouristSpotDetails;
