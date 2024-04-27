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
export default function BannerSlider() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
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
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h3
                className="text-white text-center text-xl md:text-4xl lg:text-6xl font-bold uppercase"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                Be our Guest
              </h3>
              <p
                className="p-4 rounded-md md:bg-[#FFFFFFF0] text-secondary md:text-[#474645] text-xs font-semibold text-center md:text-2xl uppercase"
                data-aos="fade-down"
                data-aos-delay="200"
              >
                LIVE like a king in our best houses
              </p>
            </div>
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
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h3
                className="text-white text-center text-xl md:text-4xl lg:text-6xl font-bold uppercase"
                data-aos="flip-up"
                data-aos-delay="500"
              >
                Most Luxury
              </h3>
              <p
                className="p-4 rounded-md md:bg-[#FFFFFFF0] text-secondary md:text-[#474645] text-xs font-semibold text-center md:text-2xl uppercase"
                data-aos="flip-down"
                data-aos-delay="500"
              >
                Discover our exquisite collection of most luxury properties.
              </p>
            </div>
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
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h3
                className="text-white text-center text-xl md:text-4xl lg:text-6xl font-bold uppercase"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                Premier Listings
              </h3>
              <p
                className="p-4 rounded-md md:bg-[#FFFFFFF0] text-secondary md:text-[#474645] text-xs font-semibold text-center md:text-2xl uppercase"
                data-aos="zoom-out"
                data-aos-delay="10000"
              >
                Explore our premier listings for the ultimate luxury experience.
              </p>
            </div>
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
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h3
                className="text-white text-center text-xl md:text-4xl lg:text-6xl font-bold uppercase"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Dream Homes
              </h3>
              <p
                className="p-4 rounded-md md:bg-[#FFFFFFF0] text-secondary md:text-[#474645] text-xs font-semibold text-center md:text-2xl uppercase"
                data-aos="fade-down"
                data-aos-delay="1000"
              >
                Find your dream home among our exclusive selection.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
