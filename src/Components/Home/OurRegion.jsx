import House1 from "../../assets/Images/v4.png";
import House2 from "../../assets/Images/4.png";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OurRegion = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          AOS.init();
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, []);
  return (
    <div className="bg-[#C9BDAB] mt-4  rounded-sm py-4 md:pb-8 rounded-br-[50px] overflow-x-hidden">
      <div className="text-center py-4 space-y-4 my-4">
        <h3
          className="text-2xl lg:text-4xl font-black bg-gradient-to-r from-blue-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300%  animate-gradient"
          data-aos="fade-bottom"
          data-aos-delay="300"
        >
          OUR REGIONS
        </h3>
        <p
          data-aos="fade-top"
          data-aos-delay="500"
          className="w-[90%] md:w-[50%] lg:w-[55%] mx-auto  text-sm lg:text-base font-normal"
        >
          Explore our diverse regions and uncover the essence of luxury living
          in each locale. From sun-kissed coastlines to picturesque mountain
          retreats, our curated selection of regions offers unparalleled
          opportunities for refined living and leisure. Immerse yourself in the
          unique charm and beauty of each destination and embark on a journey to
          discover your dream home in the perfect setting.
        </p>
      </div>
      <div ref={observerRef}>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <div
            className="overflow-hidden md:h-[300px] md:w-1/3 relative"
            data-aos="fade-right"
            data-aos-duration="3000"
            data-aos-delay="1000"
          >
            <img
              src={House1}
              className="h-full w-full rounded-md rounded-br-[50px] rounded-tl-[50px]"
              alt="House 1"
            />
            <h3 className="absolute text-lg font-bold left-4 bottom-4 text-white ">
              Mountains <br />
              <small className="text-xs font-normal text-gray-400">
                90 Properties
              </small>
            </h3>
          </div>
          <div
            className="overflow-hidden md:h-[300px] md:w-1/3 relative"
            data-aos="fade-left"
            data-aos-duration="5000"
            data-aos-delay="100"
          >
            <img
              src={House2}
              className="h-full w-full rounded-md rounded-br-[50px] rounded-tl-[50px]"
              alt="House 2"
            />
            <h3 className="absolute text-lg font-bold left-4 bottom-4 text-white ">
              Coastline <br />
              <small className="text-xs font-normal text-secondary">
                87 Properties
              </small>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurRegion;
