import { Typography } from "@material-tailwind/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";
const Login = () => {
  const [loginError, setLoginError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { signInUser, loginWithGoogle, loginWithGithub } =
    useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError("");
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password").trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setLoginError("Email is required");
      return;
    } else if (!emailRegex.test(email)) {
      setLoginError("Invalid email format");
      return;
    }

    try {
      const userCredential = await signInUser(email, password);
      const user = userCredential.user;

      if (user) {
        toast.success("Login Successfully");
        navigate(location?.state ? location.state : "/");
      }
    } catch (error) {
      if (
        error.code === "auth/wrong-password" ||
        error.code === "auth/user-not-found"
      ) {
        setLoginError("Invalid email or password");
      } else {
        setLoginError("Invalid email or password Try again");
      }
    }
  };

  const handleGoogleSignIn = () => {
    loginWithGoogle()
      .then(() => {
        navigate(location?.state ? location.state : "/");
        toast.success("Google Login Successfully");
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };

  const handleGithubSignIn = () => {
    loginWithGithub()
      .then(() => {
        navigate(location?.state ? location.state : "/");
        toast.success("GitHub Login successful!");
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };

  const handleFacebookLogin = () => {
    setLoginError("Build on processing");
  };
  return (
    <div className="hero min-h-[calc(100vh-100px)] bg-[url('/7.png')]  rounded-xl">
      <div className="card w-full md:w-2/3 lg:w-1/2 mx-auto shadow-lg bg-base-200 opacity-90">
        <form onSubmit={handleLogin} className="card-body">
          <h1 className="text-xl text-center md:text-3xl font-bold">
            Please Login Your Profile
          </h1>
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
          {loginError && (
            <div className="border border-red-500 rounded p-2 text-warning mt-3">
              {loginError}
            </div>
          )}

          <div className="mt-2">
            <button className="btn btn-primary w-full">Login</button>
          </div>
          <Typography variant="small" className="mt-6 flex justify-center">
            Don&apos;t have an account?
            <Link
              to="/register"
              color="blue-gray"
              className="ml-1 text-md font-bold hover:underline text-info"
            >
              SIGN UP NOW
            </Link>
          </Typography>
          <div className="divider">OR</div>
          <h3 className="text-center text-2xl font-bold text-secondary mb-2">
            Continue with{" "}
          </h3>
          <div className="md:flex w-full mx-auto justify-between items-center px-1 space-y-3">
            <button
              onClick={handleGithubSignIn}
              className="btn btn-primary w-full md:w-32 flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white"
            >
              <FaGithub className="mr-1" />
              GitHub
            </button>
            <button
              onClick={handleFacebookLogin}
              className="btn btn-primary w-full md:w-32 flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white"
            >
              <FaFacebook className="mr-1" />
              Facebook
            </button>
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-primary w-full md:w-32 flex items-center justify-center bg-indigo-500 hover:bg-cyan-400 text-white"
            >
              <FcGoogle className="mr-1" />
              Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
