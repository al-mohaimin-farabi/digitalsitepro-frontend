import { useLocation, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import PropTypes from "prop-types";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import useAuth from "../../Hooks/useAuth";
import checkMark from "../../assets/Images/check-mark-svgrepo-com.svg";
import Loading from "./Loading";
import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const SignUp = ({ isNewAuth, setIsNewAuth, isSmallScreen }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const {
    handleSubmit,
    control,
    setError,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const {
    user,
    registerUser,
    emailVerificationSent,
    isLoading,
    authError,
    signInWithGoogle,
    signInWithFacebook,
    signInWithTwitter,
    emailVerified,
    // signInWithFacebook, // Commented out since it's not used in the current code
  } = useAuth();

  const onSubmit = (data) => {
    // Check if fields are empty
    if (!data.email || !data.password || !data.name) {
      // Set error messages for empty fields
      setError("email", { type: "manual", message: "Email is required" });
      setError("password", { type: "manual", message: "Password is required" });
      setError("name", { type: "manual", message: "Name is required" });
      return;
    }

    if (data.name.length < 6) {
      setError("name", {
        type: "manual",
        message: "Name must be at least 6 characters long",
      });
      return;
    }

    // Handle login logic here

    registerUser(data.email, data.password, data.name, location, navigate);

    // Reset the form after successful login
    if (user?.email) reset();
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
      <>
        {isLoading ? (
          <Loading />
        ) : !user?.email ? (
          // User is not signed in
          <>
            <motion.div
              transition={{ duration: 0.3, type: "ease" }}
              initial={
                isSmallScreen && isNewAuth
                  ? { x: -1000, opacity: 0 }
                  : { x: 0, opacity: 1 }
              }
              animate={
                isSmallScreen && isNewAuth
                  ? { x: 0, opacity: 1 }
                  : { x: 0, opacity: 1 }
              }
              exit={{ opacity: 0 }}
              layout
              className="w-full text-center space-y-4 mb-2 my-4">
              <h2 className="text-3xl md:text-4xl my-2 font-bold font-hero  text-gray-600 md:text-primary ">
                SignUp
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
                   >
                    <FaFacebookF />
                  </button>
                </li>
                <li className="bg-gray-200 hover:bg-primary  hover:text-gray-100 rounded-full w-[40px] md:w-[45px] h-[40px] md:h-[45px] grid place-content-center cursor-pointer transition-all">
                  <button onClick={handleTwitterSignIn} className="text-lg">
                    <FaXTwitter />
                  </button>
                </li>
              </ul>
              <p className="capitalize text-base font-hero  my-2 text-gray-600 md:text-gray-600 ">
                or use email password
              </p>
            </motion.div>
            <motion.form
              transition={{ duration: 0.3, type: "ease" }}
              initial={
                isSmallScreen && isNewAuth
                  ? { x: -1000, opacity: 0 }
                  : { x: 0, opacity: 1 }
              }
              animate={
                isSmallScreen && isNewAuth
                  ? { x: 0, opacity: 1 }
                  : { x: 0, opacity: 1 }
              }
              exit={{ opacity: 0 }}
              layout
              className="w-full my-4"
              onSubmit={handleSubmit(onSubmit)}>
              <div className="my-1 flex flex-col w-full space-y-1 md:space-y-2 font-hero  text-gray-600 md:text-gray-600">
                <label className="tracking-wide" htmlFor="name">
                  Name
                </label>
                <Controller
                  name="name"
                  control={control}
                  rules={{
                    required: "Name is required",
                    minLength: {
                      value: 6,
                      message: "Name must be at least 6 characters long",
                    },
                  }}
                  render={({ field }) => (
                    <>
                      <input
                        id="name"
                        {...field}
                        className="w-full border-[1px] p-2 rounded-md outline-primary  "
                        type="text"
                        autoComplete="on"
                      />
                      <span className="text-red-600 my-2 block text-sm  ">
                        {errors.name?.message}
                      </span>
                    </>
                  )}
                />
              </div>

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
                      {errors.email && (
                        <span className="text-red-600 my-2 block text-sm  ">
                          {errors.email?.message}
                        </span>
                      )}

                      {authError ===
                        "Firebase: Error (auth/email-already-in-use)." &&
                        !errors.email?.message && (
                          <span className="text-red-600 my-2 block text-sm  ">
                            This Email is already in use
                          </span>
                        )}
                    </>
                  )}
                />
              </div>
              <div className="my-1 flex flex-col w-full space-y-1 md:space-y-2 font-hero  text-gray-600 md:text-gray-600">
                <label className="tracking-wide font-hero" htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <Controller
                    name="password"
                    control={control}
                    rules={{
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters long",
                      },
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                        message:
                          "Password must include at least one uppercase and lowercase letter, and one number",
                      },
                    }}
                    render={({ field }) => (
                      <>
                        <input
                          id="password"
                          {...field}
                          className="w-full border-[1px] p-2 rounded-md outline-primary"
                          type={isPasswordVisible ? "text" : "password"}
                          autoComplete="on"
                        />
                        <span className="text-red-600 mt-2 block text-sm ">
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
              <div className="text-center flex flex-col mt-4">
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className=" md:block transition-all hideState  px-12 py-4 rounded-lg bg-primary border-2 border-primary hover:bg-transparent hover:text-primary md:w-max md:mx-auto text-white font-bold">
                    SignUp
                  </button>
                  <button
                    onClick={() => setIsNewAuth(!isNewAuth)}
                    className=" md:hidden ml-2 transition-all hideState  px-12 py-4 rounded-lg bg-primary border-2 border-primary hover:bg-transparent hover:text-primary x  md:mx-auto text-white font-bold">
                    Login
                  </button>
                </div>
              </div>
            </motion.form>
          </>
        ) : !user.emailVerified ? (
          // User is signed in but email is not verified
          <>
            {emailVerificationSent && !emailVerified && (
              // Email verification sent
              <div className="w-full min-h-[518px] h-full grid place-content-center text-primary">
                <h4 className="text-xl font-flow text-primary text-center">
                  Verification email has been sent. Please check your inbox.
                </h4>
              </div>
            )}
          </>
        ) : (
          // User is signed in and email is verified
          <div className="w-full  min-h-[518px] h-full grid place-content-center text-primary">
            <img
              src={checkMark}
              className="w-[45px] mx-auto my-5"
              alt="checkMark"
            />
            <h4 className="text-xl font-flow text-primary">
              SignUp successful
            </h4>
          </div>
        )}
      </>
    </>
  );
};

SignUp.propTypes = {
  isNewAuth: PropTypes.bool.isRequired,
  isSmallScreen: PropTypes.bool.isRequired,
  setIsNewAuth: PropTypes.func.isRequired,
};

export default SignUp;
