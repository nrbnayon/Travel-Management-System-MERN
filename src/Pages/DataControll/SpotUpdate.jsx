import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLoaderData } from "react-router-dom";

const SpotUpdate = () => {
  const { user } = useContext(AuthContext);
  const spot = useLoaderData();

  const {
    _id,
    image,
    tourists_spot_name,
    country_Name,
    location,
    short_description,
    average_cost,
    seasonality,
    travel_time,
    totalVisitorsPerYear,
    latitude,
    longitude,
  } = spot || {};

  const [updateFormData, setUpdateFormData] = useState({
    image: `${image}`,
    tourists_spot_name: `${tourists_spot_name}`,
    country_Name: `${country_Name}`,
    location: `${location}`,
    short_description: `${short_description}`,
    average_cost: `${average_cost}`,
    seasonality: `${seasonality}`,
    travel_time: `${travel_time}`,
    totalVisitorsPerYear: `${totalVisitorsPerYear}`,
    userEmail: `${
      user?.email
        ? user?.email
        : "Google or Github Account Gmail Hidden for Security Purpose"
    }`,
    userName: `${user?.displayName}`,
    latitude: `${latitude}`,
    longitude: `${longitude}`,
    photoUrl: `${user?.photoURL}`,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateFormData({ ...updateFormData, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://euro-tour-server-hk1m1ayqu-nrbnayons-projects.vercel.app/spots/${_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateFormData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update post data.");
      }
      toast.success("Spot Update successful!");
    } catch (error) {
      console.error("Error posting data:", error);
      toast.error("Failed to Spot data.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-50px)] my-6 overflow-x-hidden bg-gray-200">
      <div className="bg-white shadow-md rounded px-2 md:px-8 pt-6 pb-8 mb-4  md:w-[80%] mx-auto w-full">
        <h2 className="text-2xl text-center  font-bold mb-4">
          Update Tourist Spot : {tourists_spot_name}
        </h2>
        <form
          onSubmit={handleUpdate}
          className="grid grid-cols-1  md:grid-cols-2 gap-6"
        >
          <div className="mb-4 col-span-2 md:col-span-1">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="image"
            >
              Image URL:
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="image"
              type="text"
              name="image"
              pattern="https?://.+"
              title="Please enter a valid URL"
              value={updateFormData.image}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 col-span-2 md:col-span-1">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="tourists_spot_name"
            >
              Tourist Spot Name:
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="tourists_spot_name"
              type="text"
              name="tourists_spot_name"
              value={updateFormData.tourists_spot_name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 col-span-2 md:col-span-1">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="country_Name"
            >
              Country Name:
            </label>
            <select
              name="country_Name"
              className="md:w-[80%] mx-auto px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 dropdown-select"
              defaultValue={updateFormData.country_Name}
              onChange={handleChange}
            >
              <option hidden>Select Country</option>
              <option value="France">France</option>
              <option value="Italy">Italy</option>
              <option value="Spain">Spain</option>
              <option value="England">England</option>
              <option value="Netherlands">Netherlands</option>
              <option value="Switzerland">Switzerland</option>
            </select>
          </div>

          <div className="mb-4 col-span-2 md:col-span-1">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="location"
            >
              Location:
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="location"
              type="text"
              name="location"
              value={updateFormData.location}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 col-span-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="short_description"
            >
              Short Description:
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="short_description"
              name="short_description"
              value={updateFormData.short_description}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 col-span-2 md:col-span-1">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="average_cost"
            >
              Average Cost:
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="average_cost"
              type="number"
              min="1"
              name="average_cost"
              value={updateFormData.average_cost}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 col-span-2 md:col-span-1">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="seasonality"
            >
              Seasonality:
            </label>
            <select
              name="seasonality"
              className="md:w-[80%] mx-auto px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 dropdown-select"
              defaultValue={updateFormData.seasonality}
              onChange={handleChange}
            >
              <option value="" hidden>
                Select Seasonality
              </option>
              <option value="Summer">Summer</option>
              <option value="Winter">Winter</option>
            </select>
          </div>

          <div className="mb-4 col-span-2 md:col-span-1">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="travel_time"
            >
              Travel Time/Day:
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="travel_time"
              type="number"
              min="0"
              name="travel_time"
              value={updateFormData.travel_time}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 col-span-2 md:col-span-1">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="totalVisitorsPerYear"
            >
              Total Visitors Per Year:
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="totalVisitorsPerYear"
              type="text"
              min="0"
              name="totalVisitorsPerYear"
              value={updateFormData.totalVisitorsPerYear}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4 col-span-2 md:col-span-1">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="userName"
            >
              User Name:
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="userName"
              type="text"
              name="userName"
              value={updateFormData.userName}
              onChange={handleChange}
              disabled
            />
          </div>
          <div className="mb-4 col-span-2 md:col-span-1">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="userEmail"
            >
              User Email:
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="userEmail"
              type="email"
              name="userEmail"
              value={updateFormData.userEmail}
              disabled
              onChange={handleChange}
            />
          </div>

          <div className="col-span-2 flex items-center justify-center">
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              UPDATE SPOT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SpotUpdate;
