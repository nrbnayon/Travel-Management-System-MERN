import OurService from "./OurService";
import ServiceTeam from "./ServiceTeam";

const Offers = () => {
  const offers = [
    {
      image: "https://i.ibb.co/9TnGSrJ/France.png",
      best_tourist_spot: "Eiffel Tower",
      short_description: "France is famous for its wine, cheese, and art.",
    },
    {
      image: "https://i.ibb.co/NyrPKW2/Italy.jpg",
      best_tourist_spot: "Colosseum",
      short_description:
        "Italy is known for its rich history, culture, and cuisine.",
    },
    {
      image: "https://i.ibb.co/wgxtqbV/Spain.jpg",
      best_tourist_spot: "Sagrada Familia",
      short_description:
        "Spain offers diverse landscapes, vibrant culture, and delicious food.",
    },
    {
      image: "https://i.ibb.co/f4NQW3c/England.jpg",
      best_tourist_spot: "Big Ben",
      short_description:
        "England is famous for its historic landmarks, literature, and royalty.",
    },
    {
      image: "https://i.ibb.co/CBbsY41/Netherland.png",
      best_tourist_spot: "Keukenhof Gardens",
      short_description:
        "Netherlands is known for its tulip fields, windmills, and cycling routes.",
    },
    {
      image: "https://i.ibb.co/MBHrysd/switzerland.jpg",
      best_tourist_spot: "Swiss Alps",
      short_description:
        "Switzerland is renowned for its stunning landscapes, chocolate, and watches.",
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Special Offers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={offer.image}
              alt={offer.best_tourist_spot}
              className="w-full h-40 object-cover object-center"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">
                {offer.best_tourist_spot}
              </h2>
              <p className="text-gray-600 mb-4">{offer.short_description}</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-900 font-bold">$500 / 3 Day</span>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-full uppercase hover:bg-blue-600">
                  Let&apos;s Go
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ServiceTeam />
      <OurService />
    </div>
  );
};

export default Offers;
