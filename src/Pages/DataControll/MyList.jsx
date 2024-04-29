import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { MdRemoveRedEye } from "react-icons/md";
import swal from "sweetalert";
import { toast } from "react-toastify";

const UserProfile = () => {
  const spotsData = useLoaderData();
  const { user } = useContext(AuthContext);
  const [filteredSpots, setFilteredSpots] = useState([]);

  useEffect(() => {
    const filteredData = spotsData.filter(
      (spot) =>
        spot.userName === user.displayName && spot.photoUrl === user.photoURL
    );
    setFilteredSpots(filteredData);
  }, [spotsData, user]);

  const handleDelete = async (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        try {
          const response = await fetch(`http://localhost:3000/spots/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (!response.ok) {
            throw new Error("Failed to delete spot.");
          }
          setFilteredSpots((deleteSpots) =>
            deleteSpots.filter((spot) => spot._id !== id)
          );

          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
        } catch (error) {
          console.error("Error deleting data:", error);
          toast.error("Failed to delete spot.");
        }
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  return (
    <div className="w-full min-h-[calc(100vh-120px)] rounded-xl">
      {filteredSpots.length === 0 ? (
        <div className="text-center p-8 text-lg font-semibold">
          No posts found.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          {filteredSpots.map((spot) => (
            <div
              key={spot._id}
              className="card flex-col md:flex-row card-side bg-base-100 shadow-xl"
            >
              <div className="md:w-1/2">
                <img
                  src={spot.image}
                  alt="Spot"
                  className="min-w-full h-full rounded-t-xl"
                />
              </div>
              <div className="md:w-1/2">
                <div className="card-body">
                  <h2 className="card-title">
                    {spot.tourists_spot_name}, {spot.country_Name}
                  </h2>
                  <p>{spot.short_description.slice(0, 50)}...</p>
                  <p>Average Cost: {spot.average_cost}</p>
                  <Link
                    to={`/touristspotdetails/${spot._id}`}
                    state={spot.tourists_spot_name}
                    className="relative inline-block text-lg group mr-2"
                  >
                    <span className="relative text-center z-[1] block px-5 py-3 overflow-hidden font-bold leading-tight text-black transition-colors duration-300 ease-out border-2 border-secondary rounded-lg group-hover:text-white">
                      <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                      <span className="absolute left-0 w-full h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-primary group-hover:-rotate-180 ease"></span>
                      <span className="relative flex justify-center items-center">
                        <MdRemoveRedEye /> VIEW
                      </span>
                    </span>
                    <span
                      className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-primary rounded-lg group-hover:mb-0 group-hover:mr-0"
                      data-rounded="rounded-lg"
                    ></span>
                  </Link>
                  <Link
                    to={`/spotupdate/${spot._id}`}
                    state={spot.tourists_spot_name}
                    className="text-lg w-full btn border-secondary group mr-2 flex justify-center items-center"
                  >
                    <FiEdit />
                    UPDATE
                  </Link>
                  <button
                    onClick={() => handleDelete(spot._id)}
                    className="text-lg w-full btn btn-warning border-secondary group mr-2 flex justify-center items-center"
                  >
                    <FiTrash2 />
                    DELETE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserProfile;
