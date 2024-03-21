import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footter from "../../Components/Footer";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import HomeCss from "../../assets/CSS/Home.module.css";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";

const Testimonial = () => {
  const { user } = useAuth();
  const [captchaValue, setCaptchaValue] = useState("");
  const [verified, setVerified] = useState(false);

  const onChange = (value) => {
    setCaptchaValue(value);
    setVerified(true);
  };

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const apiUrl = import.meta.env.VITE_REACT_APP_SAVE_TESTIMONIAL;
    if (captchaValue && verified) {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify JSON content type
          // Add any other headers if required
        },
        body: JSON.stringify(data), // Convert data to JSON string
      };
      fetch(apiUrl, options)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          // Parse response JSON
          return response.json();
        })
        .then((data) => {
          // Handle successful response data
          alert("Your compliment was successfully submitted");
          console.log(data);
          reset();
        })
        .catch((error) => {
          // Handle errors
          console.error("There was a problem with the request:", error);
        });
    }
  };

  return (
    <>
      <div className="w-full py-[30px] md:py-[50px] relative overflow-hidden  min-h-[400px] testimonialbg">
        <div className="md:max-w-[960px] lg:max-w-[1280px]  -mb-[50px] md:mt-[20px] mx-auto p-2 text-left flex items-center min-h-[400px] ">
          <div className=" py-5  text-left">
            <p className="relative z-50 text-gray-100 font-inter   text-xl font-bold font-inter mb-2">
              Who We Are
            </p>
            <h2 className=" relative z-50  text-gray-100 font-bold text-3xl  md:text-4xl  font-inter tracking-widest">
              Designers, thinkers & collaborators
            </h2>
          </div>
          <div className="bg-gray-900/70 absolute inset-0 z-30"></div>
        </div>
      </div>
      <div className=" bg-gray-200 py-10 pb-16 mt-16">
        <div className="md:max-w-[960px] lg:max-w-[1280px] mx-auto p-2">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-600 text-center tracking-wide  md:text-balance md:px-12">
            If you are on our customers and would like to submit your
            testimonial, please use the form bellow. We greatly appreciate your
            feedback
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="py-5 mt-8 space-y-5 px-4 sm:px-2 md:px-0  ">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                autoComplete="true"
                placeholder="Your Name"
                className={`${
                  user && "text-gray-400"
                } outline-gray-950 outline outline-1 rounded p-2`}
                type="text"
                id="name"
                defaultValue={user?.displayName || ""}
                readOnly={user.email ? true : false}
                {...register("name", {
                  required: !user ? "Name is required!" : "",
                })}
              />
              {errors.name && (
                <p className="text-red-600">{errors.name.message}</p>
              )}
              <input
                autoComplete="true"
                placeholder="Your Email"
                className={`${
                  user && "text-gray-400"
                } outline-gray-950 outline outline-1 rounded p-2`}
                type="email"
                id="email"
                defaultValue={user?.email || ""}
                readOnly={user.email ? true : false}
                {...register("email", {
                  required: !user ? "Email is required!" : "",
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="text-red-600">{errors.email.message}</p>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                autoComplete="true"
                type="text"
                placeholder="Location"
                name="Location"
                className="outline rounded w-full outline-1 p-2"
                {...register("location", {
                  required: "Location is required!",
                })}
              />
              {errors.message && (
                <p className="text-red-600">{errors.message.message}</p>
              )}
              <input
                type="text"
                placeholder="Role"
                name="Role"
                className="outline rounded w-full outline-1 p-2"
                {...register("Role", {
                  required: "Role is required!",
                })}
              />
              {errors.message && (
                <p className="text-red-600">{errors.message.message}</p>
              )}
            </div>
            <div className="grid grid-cols-1  ">
              <textarea
                placeholder="Your Message Here"
                className="outline outline-1 rounded p-2 w-full min-h-[180px] max-h-[220px] "
                id="message"
                {...register("message", {
                  required: "Message is required!",
                  minLength: {
                    value: 15,
                    message: "Message must be at least 15 characters long.",
                  },
                })}
              />
              {errors.message && (
                <p className="text-red-600">{errors.message.message}</p>
              )}
            </div>
            <div className=" grid place-content-start">
              <p className="font-thin font-mono text-sm text-left">
                <span className="text-red-600">*</span>reCAPTCHA
              </p>
              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={onChange}
              />
            </div>
            <button
              disabled={!verified}
              className={` bg-primary px-10 py-3  my-6 font-bold  text-white hover:text-[#6E72DD]  hover:bg-transparent border-2 transition-colors duration-200 ease-linear border-primary hover:border-[#6E72DD]  rounded  cursor-pointer`}>
              <div className={`${HomeCss.separator} inline`}>Submit</div>
              <FontAwesomeIcon className="ml-[14px] " icon={faPaperPlane} />
            </button>
          </form>
        </div>
      </div>
      <Footter />
    </>
  );
};

export default Testimonial;
