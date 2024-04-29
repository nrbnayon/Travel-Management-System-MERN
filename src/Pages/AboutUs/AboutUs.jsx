import about1 from "../../assets/Logo/5.jpg";

const AboutUs = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-6  justify-center">
      <div className="lg:max-w-lg bg-white shadow-xl rounded-lg p-6">
        <h3 className="text-3xl font-semibold mb-4">Discover Europe with Us</h3>
        <p className="text-gray-700 mb-4">
          At Euro Travel, we specialize in providing unforgettable travel
          experiences that showcase the beauty and culture of Europe. Our
          carefully curated selection of destinations offers travelers
          unparalleled adventures in some of the most enchanting locations
          across the continent. With a focus on authenticity, exploration, and
          personalized service, we strive to exceed the expectations of
          travelers who seek extraordinary journeys.
        </p>
        <p className="text-gray-700 p-4 bg-[#DFE3E7] rounded-md text-lg font-bold">
          Embark on your Euro adventure with us. Explore our portfolio and
          unlock the magic of Europe.
        </p>
      </div>
      <div className=" lg:self-center items-center">
        <img
          src={about1}
          alt="about"
          className="lg:max-w-lg rounded-lg shadow-xl"
        />
      </div>
    </div>
  );
};

export default AboutUs;
