import { Typography } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, updateProfile } = useContext(AuthContext);

  const handleRegister = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const username = formData.get("username");
    const photourl = formData.get("photourl");
    const email = formData.get("email");
    let password = formData.get("password").trim();
    let cpassword = formData.get("cpassword").trim();
    const terms = formData.get("terms") === "on";

    try {
      setError(null);

      if (!username || !photourl || !email || !password || !cpassword) {
        throw new Error("All fields are required.");
      }

      if (!isValidEmail(email)) {
        throw new Error("Invalid email format.");
      }

      if (password !== cpassword) {
        throw new Error("Passwords do not match.");
      }

      if (
        password.length < 6 ||
        !/[A-Z]/.test(password) ||
        !/[a-z]/.test(password)
      ) {
        throw new Error(
          "Password should be at least 6 characters long and contain at least one uppercase and one lowercase letter."
        );
      }

      if (!terms) {
        throw new Error("You must accept the terms and conditions.");
      }

      const result = await createUser(email, password);
      await updateProfile(result.user, {
        displayName: username,
        photoURL: photourl,
      });

      const user = { username, email, photourl };
      const response = await fetch(
        "https://euro-tour-server.vercel.app/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to register user.");
      }

      toast.success("Registration successful!");
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="hero min-h-screen bg-base-300 rounded-xl">
      <div className="card w-full md:w-2/3 lg:w-1/2 mx-auto shadow-lg bg-base-200">
        <form onSubmit={handleRegister} className="card-body">
          <h1 className="text-xl text-center md:text-3xl font-bold">
            Register a new Account
          </h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              name="username"
              placeholder="Enter your full name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Profile Url</span>
            </label>
            <input
              type="text"
              name="photourl"
              placeholder="Enter profile image url"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="relative flex items-center w-full">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Create a password"
                className="input input-bordered w-full pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-0 h-full flex items-center justify-center p-2"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <div className="relative flex items-center w-full">
              <input
                type={showPassword ? "text" : "password"}
                name="cpassword"
                placeholder="Confirm your password"
                className="input input-bordered w-full pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-0 h-full flex items-center justify-center p-2"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <div className="form-control">
            <label className="flex gap-1">
              <input
                type="checkbox"
                name="terms"
                className="checkbox checkbox-info"
              />
              <span className=" text-left">
                Accepts our <a href="#">terms and conditions</a>
              </span>
            </label>
          </div>
          {error && (
            <div className="border border-red-500 rounded p-2 text-warning mt-3">
              {error}
            </div>
          )}
          <div className="mt-4">
            <button className="btn btn-primary w-full">Register</button>
          </div>

          <Typography variant="small" className="mt-6 flex justify-center">
            Already have an account?
            <Link
              as="a"
              to="/login"
              color="blue-gray"
              className="ml-1 text-md font-bold hover:underline text-info"
            >
              LOGIN HERE
            </Link>
          </Typography>
        </form>
      </div>
    </div>
  );
};
export default Register;
