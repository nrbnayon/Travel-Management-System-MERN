import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const { user, updateProfile } = useContext(AuthContext);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const username = form.get("username");
    const photourl = form.get("photourl");
    const updatedProfile = {};

    if (username && username !== user.displayName) {
      updatedProfile.displayName = username;
    }

    if (photourl && photourl !== user.photoURL) {
      updatedProfile.photoURL = photourl;
    }

    if (Object.keys(updatedProfile).length === 0) {
      toast.info("No changes detected.");
      return;
    }

    try {
      await updateProfile(user, updatedProfile);
      toast.success("Profile updated successfully.");
      navigate("/userprofile");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="w-full min-h-[calc(100vh-120px)] rounded-xl">
      <div className="flex flex-col lg:w-2/3 mx-auto border  bg-base-100 border-red-500 justify-center items-center p-6 shadow-xl rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
        <div className="avatar online w-40 h-40 mx-auto z-[1]">
          <img tabIndex={0} className="rounded-full" src={user?.photoURL} />
        </div>
        <div className="space-y-4 text-center mx-auto  divide-y dark:divide-gray-300">
          <form
            onSubmit={handleUpdateProfile}
            className="my-2  space-y-1 text-xl font-semibold sm:text-2xl"
          >
            <label className="input input-bordered flex items-center gap-2 sm:text-3xl">
              Name :
              <input
                name="username"
                type="text"
                className="grow font-bold text-black"
                placeholder={user?.displayName}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Profile Url :
              <input
                name="photourl"
                type="text"
                className="grow font-bold text-black"
                placeholder={user?.photoURL}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Status :
              <input
                type="text"
                className="grow font-bold text-black"
                value=" Full-stack developer"
                disabled
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Email :
              <input
                type="text"
                className="grow font-bold text-black"
                value={
                  user?.email
                    ? user?.email
                    : "Your are login using Google or Github Account"
                }
                disabled
              />
            </label>
            {error && (
              <div className="border border-red-500 rounded p-2 text-warning mt-3">
                {error}
              </div>
            )}
            <button className="btn btn-outline border-secondary">
              Save Change
            </button>
          </form>

          <div className="flex justify-center pt-2 space-x-4 align-center text-2xl">
            <a href="https://github.com/nrbnayon" target="_blank">
              <FaGithub />
            </a>
            <a href="https://nrbnayon.netlify.app/" target="_blank">
              <TbWorldWww />
            </a>
            <a href="https://nayon.netlify.app/" target="_blank">
              <FaTwitter />
            </a>
            <a href="https://nrbnayon.netlify.app/" target="_blank">
              <MdOutlineEmail />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
