import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";
import { GrMapLocation } from "react-icons/gr";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Link } from "react-router-dom";

const EpecialOffer = ({ spots }) => {
  return (
    <>
      <section>
        <div className="text-right py-4 space-y-6 my-4 bg-blue-gray-50 rounded-md ">
          <h3 className="text-2xl lg:text-4xl text-[#172432] font-black">
            <span className="bg-gradient-to-r from-light-blue-800 via-purple-600 to-green-400 text-transparent bg-clip-text bg-300%  animate-gradient">
              Special Offer
            </span>
          </h3>
          <p className=" text-[#767E86] text-sm lg:text-base font-normal">
            Check out our special offer and discounts
          </p>
        </div>
      </section>

      <Swiper
        effect={"coverflow"}
        grabCursor={false}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        coverflowEffect={{
          rotate: 150,
          stretch: 0,
          depth: 0,
          modifier: 1,
          slideShadows: true,
        }}
        className="mySwiper swipers overflow-y-hidden"
      >
        {spots.map((spot) => (
          <SwiperSlide key={spot.id} className="swiper-slides">
            <Card className="w-full shadow-lg">
              <CardHeader floated={false} color="blue-gray">
                <div className="h-72 w-full overflow-hidden">
                  <img src={spot.image} className="h-full w-full " />
                </div>
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                <IconButton
                  size="sm"
                  color="red"
                  variant="text"
                  className="!absolute top-4 right-4 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6"
                  >
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                  </svg>
                </IconButton>
              </CardHeader>
              <CardBody>
                <p className="flex items-center gap-1 font-bold text-xs">
                  <GrMapLocation /> {spot.location}
                </p>
                <div className="mb-3 flex items-center justify-between">
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="font-semibold text-sm md:text-2xl "
                  >
                    {spot.estate_title}
                  </Typography>
                  <Typography
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
                  </Typography>
                </div>
                <Typography color="gray" className="text-xs md:text-xl">
                  {spot.description.slice(0, 100)}...
                </Typography>
                <div className="bg-gray-100 p-6 rounded-lg shadow-md flex items-center justify-between">
                  <div className="flex items-center">
                    <p className="text-lg font-bold text-gray-800 mr-4">
                      Price:<del className="text-red-600">{spot.price}</del>
                    </p>
                    <p className="text-lg font-bold text-gray-800">
                      Discount: <span className="text-green-600">20%</span>
                    </p>
                  </div>
                </div>
              </CardBody>
              <CardFooter className="pt-0">
                <Link
                  to={`/estatedetails/${parseInt(spot.id)}`}
                  state={spot.estate_title}
                >
                  <Button size="lg" fullWidth={true}>
                    View Details
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

EpecialOffer.propTypes = {
  spots: PropTypes.arrayOf(PropTypes.object),
};

export default EpecialOffer;
