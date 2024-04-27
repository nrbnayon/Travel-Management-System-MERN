import { FaGithub, FaTwitter } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="w-full min-h-[calc(100vh-120px)]  rounded-xl ">
      <div className="flex flex-col lg:w-2/3 mx-auto border bg-base-100 border-red-500 justify-center items-center p-6 shadow-xl rounded-xl sm:px-12  dark:text-gray-800">
        <div className="avatar online w-40 h-40 mx-auto z-[1]">
          <img tabIndex={0} className="rounded-full" src={user?.photoURL} />
        </div>
        <div className="space-y-4 text-center mx-auto  divide-y dark:divide-gray-300 ">
          <form className="my-2  space-y-1 text-xl font-semibold sm:text-2xl">
            <label className="input input-bordered flex items-center gap-2 sm:text-3xl">
              Name :
              <input
                type="text"
                className="grow font-bold text-black"
                value={user?.displayName}
                disabled
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Profile Url :
              <input
                type="text"
                className="grow font-bold text-black"
                value={user?.photoURL}
                disabled
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
            <Link to="/updateprofile" className="btn btn-outline">
              <button className="uppercase">Update Profile</button>
            </Link>
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

export default UserProfile;
