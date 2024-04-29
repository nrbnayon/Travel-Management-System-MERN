import BGIMG from "../../assets/Images/6.png";

const OurService = () => {
  return (
    <div className="my-6 lg:py-10">
      <div className="my-4 py-4">
        <div className="relative w-full h-[500px]">
          <img
            src={BGIMG}
            className="w-full h-full rounded-md rounded-br-[95px]"
            alt="bgimg"
          />
          <div className="absolute w-2/3 md:w-1/3 mx-auto h-2/3 md:h-1/2 my-auto  inset-0 flex flex-col justify-center space-y-2 text-center bg-[#FFFFFFE0] items-center p-4 rounded-md rounded-br-[50px] rounded-tl-[50px]">
            <h3 className="text-2xl font-bold text-primary">Explore Europe</h3>
            <p className="text-base font-medium text-secondary">
              Embark on a journey through the heart of Europe, discovering its
              rich culture, breathtaking landscapes, and vibrant cities.
            </p>
            <button className="w-[80%] mx-auto py-3 px-6 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-indigo-500 hover:to-purple-600 text-white font-bold rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl border-2 border-transparent hover:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
              EXPLORE NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
