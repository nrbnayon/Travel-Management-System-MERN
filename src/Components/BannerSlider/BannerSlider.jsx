import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider1 from "../../assets/Images/banner.png";
import Slider2 from "../../assets/Images/banner2.png";
import Slider3 from "../../assets/Images/banner3.png";
import Slider4 from "../../assets/Images/banner4.png";
import { useEffect } from "react";
import "./styles.css";
import { FaMapLocationDot } from "react-icons/fa6";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
export default function BannerSlider() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="relative min-h-screen md:h-auto">
      <Swiper
        className="swiper mySwiper"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide className="swiper-slide">
          <div className="relative" data-aos="fade-right" data-aos-delay="100">
            <img src={Slider1} className=" rounded-br-3xl opacity-90" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="relative"
            data-aos="fade-left"
            data-aos-delay="600"
            data-aos-anchor="#anchor2"
          >
            <img src={Slider2} className="rounded-br-3xl opacity-90" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="relative"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-anchor="#anchor3"
          >
            <img src={Slider3} className="rounded-br-3xl opacity-90" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="relative "
            data-aos="fade-down"
            data-aos-delay="500"
            data-aos-anchor="#anchor3"
          >
            <img src={Slider4} className="rounded-br-3xl opacity-90" />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="absolute text-white inset-0 flex items-center justify-center w-full h-full  z-10">
        <div className="mx-auto  p-5 rounded-lg">
          <h3 className="text-center text-xl md:text-4xl lg:text-6xl font-bold uppercase">
            Explore Your Destination
          </h3>
          <p className="text-black">
            Plan your dream vacation with Euro Travel. Discover new horizons and
            create lasting memories with our curated travel experiences.
          </p>
          <div className="mt-4 text-[#131318] bg-gray-400 rounded-lg shadow-lg">
            <p className="text-center text-2xl font-bold py-4 bg-gray-200 rounded-t-lg">
              Where to Go
            </p>
            <div className="flex justify-between flex-col md:flex-row items-center p-4 border border-t-red-200 rounded-b-lg">
              <div className="w-full mt-4 sm:mt-0">
                <p className="mb-2 font-semibold">When</p>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker label="Select Date" />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
              <div className="w-full mt-4 sm:mt-0">
                <label className="block mb-2 font-semibold">
                  Select Country
                </label>
                <select
                  name="dropdown"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 dropdown-select"
                >
                  <option value="" disabled selected hidden>
                    Select Country
                  </option>
                  <option value="France">France</option>
                  <option value="Italy">Italy</option>
                  <option value="Spain">Spain</option>
                  <option value="England">England</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="Switzerland">Switzerland</option>
                </select>
              </div>
              <div className="w-full mt-6">
                <button className=" md:ml-4 w-full btn btn-info rounded-lg ">
                  <FaMapLocationDot />
                  Find Here
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
