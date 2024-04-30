const ServiceTeam = () => {
  const teamMembers = [
    {
      name: "Mr. Nayon",
      position: "CEO",
      image: "https://i.ibb.co/2Kc9k00/u1.jpg ",
      description:
        "Nayon is responsible for overseeing the overall operations and strategic direction of our company.",
    },
    {
      name: "Adi",
      position: "Marketing Manager",
      image: " https://i.ibb.co/wzrTmnd/u3.jpg",
      description:
        "Adi leads our marketing efforts, including branding, advertising, and market research.",
    },
    {
      name: "SB Roy",
      position: "Sales Manager",
      image: "https://i.ibb.co/dfbR9qm/u2.jpg",
      description:
        "SB manages our sales team and develops strategies to drive revenue growth and customer acquisition.",
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Our Service Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-40 object-cover object-center"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{member.name}</h2>
              <p className="text-gray-600 mb-2">{member.position}</p>
              <p className="text-gray-700">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceTeam;
