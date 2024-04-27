import about1 from "../../assets/Images/7.png";
import about2 from "../../assets/Images/about.png";

const AboutUs = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-6  justify-center">
      <div className="lg:max-w-lg bg-white shadow-xl rounded-lg p-6">
        <h3 className="text-3xl font-semibold mb-4">About Us</h3>
        <p className="text-gray-700 mb-4">
          At Luxe Rentals, we specialize in providing luxury rental properties
          that redefine opulence and comfort. Our curated selection of exquisite
          residences offers unparalleled living experiences in the most
          sought-after locations. With a focus on elegance, sophistication, and
          attention to detail, we strive to exceed the expectations of
          discerning tenants who demand nothing but the best.
        </p>
        <p className="text-gray-700 p-4 bg-[#DFE3E7] rounded-md text-lg font-bold">
          We strive to offer you best possible homes to stay. Explore our
          portfolio and discover the epitome of luxury living.
        </p>
      </div>
      <div className="relative">
        <img
          src={about1}
          alt="about"
          className="lg:max-w-lg rounded-lg shadow-xl"
        />
        <img
          src={about2}
          alt="about2"
          className="absolute top-1/3 left-1/3  lg:-top-10 lg:left-10 lg:w-80 lg:h-80 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border-4 border-white"
        />
      </div>
    </div>
  );
};

export default AboutUs;
