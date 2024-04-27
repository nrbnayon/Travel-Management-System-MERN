import { useLoaderData, useNavigation } from "react-router-dom";
import LoaderSpinner from "./../LoaderSpinner/LoaderSpinner";
import "animate.css";
import { FaShieldHeart } from "react-icons/fa6";
import { HiHomeModern } from "react-icons/hi2";
import { Tooltip } from "@material-tailwind/react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import {
  MdSportsGymnastics,
  MdOutlineSportsBaseball,
  MdOutlineSportsEsports,
} from "react-icons/md";
import { FaSwimmingPool } from "react-icons/fa";
import { IoIosWine } from "react-icons/io";
import { GrMapLocation } from "react-icons/gr";
import { GiFishingBoat } from "react-icons/gi";
import { BiSolidArea } from "react-icons/bi";
import { FaHandHoldingDollar, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { IoFastFoodOutline } from "react-icons/io5";
import { IoMedalOutline } from "react-icons/io5";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { MdAddIcCall, MdEmail, MdOutlineMessage } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";

const EstateDetails = () => {
  const villa = useLoaderData();
  const navigation = useNavigation();

  const {
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
    image,
    latitude,
    longitude,
  } = villa || {};

  const customIcon = new Icon({
    iconUrl: `${image}`,
    iconSize: [38, 38],
    className: "rounded-full",
  });

  const markers = [
    {
      geocode: [latitude, longitude],
      popUp: `${estate_title} villa`,
    },
  ];
  if (navigation.state === "loading" || !villa) {
    return <LoaderSpinner />;
  }
  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <section className=" dark:bg-gray-100 dark:text-gray-900">
        <div className="container grid grid-cols-2 gap-4 p-2 mx-auto md:grid-cols-4">
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square animate__animated animate__pulse animate__delay-0.5s animate__duration-1.5s rounded-tl-[50px] rounded-br-[50px]"
            src="https://source.unsplash.com/random/200x200/?4"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square animate__animated animate__pulse animate__delay-1s animate__duration-1.5s rounded-tr-[50px] rounded-bl-[50px]"
            src="https://source.unsplash.com/random/200x200/?5"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square animate__animated animate__pulse animate__delay-1.5s animate__duration-1.5s rounded-bl-[50px] rounded-tr-[50px]"
            src="https://source.unsplash.com/random/200x200/?6"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square animate__animated animate__pulse animate__delay-2s animate__duration-1.5s rounded-tl-[50px] rounded-br-[50px]"
            src="https://source.unsplash.com/random/200x200/?7"
          />
          <div className="relative col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-1 dark:bg-gray-500 aspect-square animate__animated animate__pulse animate__delay-2.5s animate__duration-1.5s">
            <img
              src={image}
              alt="villa"
              className="w-full h-full  rounded-br-[50px] rounded-md"
            />
            <p className="absolute top-5 left-5 bg-white text-black px-2 py-1 rounded-md uppercase">
              {status}: {price}
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
              <span className="bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300%  animate-gradient">
                {estate_title}
              </span>
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
            <p className="text-xl mt-3 ml-2 dark:text-gray-600">
              {description}
            </p>
            <div className="flex justify-between flex-wrap items-center font-bold text-base md:text-xl my-4 dark:text-gray-600 md:px-4 uppercase">
              <p className="flex items-center gap-1">
                <HiHomeModern />
                {segment_name} Villa
              </p>
              <p className="flex items-center gap-1">
                <FaHandHoldingDollar /> {status} : {price}
              </p>
              <p className="flex items-center gap-1">
                <BiSolidArea /> Area: {area}{" "}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 text-[#181D24]">
              <div className="p-4 bg-white rounded-lg shadow-md">
                <div className="text-center mb-1">
                  <h2 className="text-xl font-bold">Check-in</h2>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-lg mb-1">From: 4:00 PM</p>
                  <strong className="text-gray-600 text-base">
                    Please arrive between 4:00 PM and 8:00 PM
                  </strong>
                </div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md">
                <div className="text-center mb-1">
                  <h2 className="text-xl font-bold">Check-out</h2>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-lg mb-1">Until: 11:00 AM</p>
                  <strong className="text-gray-600 text-base">
                    Please depart by 11:00 AM
                  </strong>
                </div>
              </div>
            </div>
            <div className="p-4 mt-4 bg-white rounded-lg shadow-sm text-[#181D24] rounded-bl-[50px]">
              <div className="flex justify-between font-bold text-xl mt-4 dark:text-gray-600">
                <h3 className="">Facilities</h3>
                <p className="flex items-center gap-1 ">
                  <GrMapLocation />
                  {location}
                </p>
              </div>
              <div className="flex justify-between flex-wrap gap-1 text-base font-normal md:p-2 animate__animated animate__fadeInUp">
                {facilities.map((facility, i) => (
                  <p key={i}> {facility} </p>
                ))}
              </div>
              <div className="flex justify-between flex-wrap gap-1 text-2xl font-bold md:p-2 animate__animated animate__fadeInLeft">
                <p>
                  <MdSportsGymnastics />
                </p>
                <p>
                  <FaSwimmingPool />
                </p>
                <p>
                  <MdOutlineSportsBaseball />
                </p>
                <p>
                  <MdOutlineSportsEsports />
                </p>
              </div>
              <div className="flex justify-between flex-wrap gap-1 text-2xl font-bold md:p-2 animate__animated animate__fadeInRight">
                <p>
                  <IoIosWine />
                </p>
                <p>
                  <GiFishingBoat />
                </p>
                <p>
                  <IoFastFoodOutline />
                </p>
                <p>
                  <IoMedalOutline />
                </p>
              </div>
              <div className="group flex flex-wrap items-center justify-between md:gap-3 py-4">
                <Tooltip content={villa.price}>
                  <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                      <path
                        fillRule="evenodd"
                        d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                        clipRule="evenodd"
                      />
                      <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
                    </svg>
                  </span>
                </Tooltip>
                <Tooltip content="Free wifi">
                  <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.062 0 8.25 8.25 0 00-11.667 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.204 3.182a6 6 0 018.486 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0 3.75 3.75 0 00-5.304 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182a1.5 1.5 0 012.122 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0l-.53-.53a.75.75 0 010-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </Tooltip>
                <Tooltip content="3 bedrooms">
                  <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                      <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                    </svg>
                  </span>
                </Tooltip>
                <Tooltip content={`65" HDTV`}>
                  <span className="hidden md:flex cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path d="M19.5 6h-15v9h15V6z" />
                      <path
                        fillRule="evenodd"
                        d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6A.75.75 0 006 21h12a.75.75 0 000-1.5h-3.75V18h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375zm0 13.5h17.25a.375.375 0 00.375-.375V4.875a.375.375 0 00-.375-.375H3.375A.375.375 0 003 4.875v11.25c0 .207.168.375.375.375z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </Tooltip>
                <Tooltip content="Fire alert">
                  <span className="hidden md:flex cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </Tooltip>
                <Tooltip content="And +20 more">
                  <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                    +20
                  </span>
                </Tooltip>
              </div>
            </div>
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
                  <MdEmail /> Email : luxury@gmail.com
                </p>
                <p className="flex items-center gap-1">
                  <TbWorldWww /> www.luxuryrentals.com
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
      {/* Villa Calender  */}
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
              Book Your Villa
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
        <h3 className="flex items-center justify-center uppercase gap-1 text-center font-bold my-4">
          <FaHandHoldingDollar /> {status} : {price}
        </h3>
      </section>
      {/* Villa Map  */}
      <section className="mt-6 mb-0">
        <div>
          <div className="flex justify-between px-6 font-bold text-xl my-4 dark:text-gray-600">
            <h3>Map Location</h3>
            <p className="flex items-center gap-1 ">
              <GrMapLocation />
              {location}
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

export default EstateDetails;
