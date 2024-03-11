import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import useAuth from "../../Hooks/useAuth";
import Loading from "./Loading";
import checkMark from "../../assets/Images/check-mark-svgrepo-com.svg";
import { useEffect, useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Login = ({ isNewAuth, setIsNewAuth, isSmallScreen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const {
    handleSubmit,
    control,
    setError,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    user,
    isLoading,
    authError,
    signInWithGoogle,
    signInWithFacebook,
    signInWithTwitter,
    loginUser,
  } = useAuth();

  useEffect(() => {
    if (user?.email && !user?.emailVerified) {
      setIsNewAuth(true);
    }
  }, [user?.email, user?.emailVerified, setIsNewAuth]);

  const onSubmit = (data) => {
    // Check if fields are empty
    if (!data.email || !data.password) {
      // Set error messages for empty fields
      setError("email", { type: "manual", message: "Email is required" });
      setError("password", { type: "manual", message: "Password is required" });
      return;
    }

    // Handle login logic here

    loginUser(data.email, data.password, location, navigate);

    // Reset the form after successful login
    if (user.email) reset();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, navigate);
  };
  const handleFaceBookSignIn = () => {
    signInWithFacebook(location, navigate);
  };
  const handleTwitterSignIn = () => {
    signInWithTwitter(location, navigate);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : !user?.email ? (
        <>
          <motion.div
            transition={{ duration: 0.3, type: "ease" }}
            initial={
              isSmallScreen && !isNewAuth
                ? { x: -1000, opacity: 0 }
                : { x: -0, opacity: 1 }
            }
            animate={
              isSmallScreen && !isNewAuth
                ? { x: 0, opacity: 1 }
                : { x: 0, opacity: 1 }
            }
            exit={{ opacity: 0 }}
            layout
            className="w-full text-center space-y-4 mb-2 my-4">
            <h2 className="text-3xl md:text-4xl my-2 font-bold font-hero  text-gray-600 md:text-primary ">
              LogIn
            </h2>
            <ul className="flex justify-center items-center space-x-4 py-2">
              <li className="bg-gray-200 hover:bg-primary  hover:text-gray-100 rounded-full w-[40px] md:w-[45px] h-[40px] md:h-[45px] grid place-content-center cursor-pointer transition-all">
                <button onClick={handleGoogleSignIn} className="text-lg">
                  <FaGoogle />
                </button>
              </li>
              <li className="bg-gray-200 hover:bg-primary  hover:text-gray-100 rounded-full w-[40px] md:w-[45px] h-[40px] md:h-[45px] grid place-content-center cursor-pointer transition-all">
                <button
                  onClick={handleFaceBookSignIn}
                  className="text-lg"
                  to="/login">
                  <FaFacebookF />
                </button>
              </li>
              <li className="bg-gray-200 hover:bg-primary  hover:text-gray-100 rounded-full w-[40px] md:w-[45px] h-[40px] md:h-[45px] grid place-content-center cursor-pointer transition-all">
                <button onClick={handleTwitterSignIn} className="text-lg">
                  <FaXTwitter />
                </button>
              </li>
            </ul>
            <p className="capitalize text-base font-hero  my-2 text-gray-600  ">
              or use email password
            </p>
          </motion.div>
          <motion.form
            transition={{ duration: 0.3, type: "ease" }}
            initial={
              isSmallScreen && !isNewAuth
                ? { x: -1000, opacity: 0 }
                : { x: -0, opacity: 1 }
            }
            animate={
              isSmallScreen && !isNewAuth
                ? { x: 0, opacity: 1 }
                : { x: 0, opacity: 1 }
            }
            exit={{ opacity: 0 }}
            layout
            className="w-full my-4"
            onSubmit={handleSubmit(onSubmit)}>
            <div className="my-1 flex flex-col w-full space-y-1 md:space-y-2 font-hero  text-gray-600 md:text-gray-600">
              <label className="tracking-wide" htmlFor="email">
                Email
              </label>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                }}
                render={({ field }) => (
                  <>
                    <input
                      id="email"
                      {...field}
                      className="w-full border-[1px] p-2 rounded-md outline-primary  "
                      type="email"
                      autoComplete="on"
                    />
                    <span className="text-red-600 my-2 block text-sm  ">
                      {errors.email?.message}
                    </span>
                  </>
                )}
              />
            </div>
            <div className="my-1 flex flex-col w-full space-y-1 md:space-y-2 font-hero  text-gray-600 md:text-gray-600 relative">
              <label className="tracking-wide font-hero " htmlFor="password">
                Password
              </label>
              <div className="relative">
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: "Password is required" }}
                  render={({ field }) => (
                    <>
                      <input
                        id="password"
                        {...field}
                        className="w-full border-[1px] p-2 rounded-md outline-primary"
                        type={isPasswordVisible ? "text" : "password"}
                        autoComplete="on"
                      />
                      <span className="text-red-600 mt-2 block text-sm  ">
                        {errors.password?.message}
                      </span>
                    </>
                  )}
                />
                <button
                  type="button"
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  className="absolute top-[48%] right-3 transform -translate-y-[60%] cursor-pointer">
                  {isPasswordVisible ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
            </div>
            <span className="text-red-600 mt-2 block text-sm">{authError}</span>
            <div className="text-center flex flex-col mt-4">
              <Link
                className="font-hero  text-base mt-2 mb-4 text-gray-600 md:text-gray-600"
                to="/passreset">
                Forget Password?
              </Link>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className=" md:block transition-all hideState  px-12 py-4 rounded-lg bg-primary border-2 border-primary hover:bg-transparent hover:text-primary md:w-max md:mx-auto text-white font-bold">
                  Login
                </button>
                <button
                  onClick={() => setIsNewAuth(!isNewAuth)}
                  className=" md:hidden ml-2 transition-all hideState  px-12 py-4 rounded-lg bg-primary border-2 border-primary hover:bg-transparent hover:text-primary x  md:mx-auto text-white font-bold">
                  Signup
                </button>
              </div>
            </div>
          </motion.form>
        </>
      ) : (
        <div className="w-full h-full min-h-[518px] grid place-content-center text-primary">
          <img
            src={checkMark}
            className="w-[55px] my-5 mx-auto"
            alt="checkMark"
          />
          <h4 className="text-xl font-flow text-primary">Login successful</h4>
        </div>
      )}
    </>
  );
};

Login.propTypes = {
  isNewAuth: PropTypes.bool.isRequired,
  isSmallScreen: PropTypes.bool.isRequired,
  setIsNewAuth: PropTypes.func.isRequired,
};

export default Login;
