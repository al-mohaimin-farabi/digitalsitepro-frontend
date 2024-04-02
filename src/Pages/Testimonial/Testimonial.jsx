import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footter from "../../Components/Footer";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import HomeCss from "../../assets/CSS/Home.module.css";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import TestimonialSlider from "./TestimonialSlider.jsx";
import testimonialBg from "../../assets/Images/background/testimonialpagebg.webp";

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
      <div className="mt-[110px] py-10">
        <div className="w-full p-2 md:mx-w-[960px] lg:max-w-[1280px] mx-auto text-center">
          <h2 className="leading-[45px] md:leading-[55px] font-extrabold text-4xl md:text-5xl lg:text-5xl font-inter tracking-wide text-center my-2 font-inter">
            Where Individual Pieces Form a Brilliant Picture
          </h2>
          <h4 className="font-semibold text-base md:text-lg lg:text-xl text-center mt-6 break-words font-inter">
            Digitalsitepro is your compass, guiding you with a steady hand. We
            understand the anxieties of carving a space online, and we&apos;re
            here to offer a supportive touch.
          </h4>
          <div className=" w-full my-4  md:mx-w-[960px] lg:max-w-[1280px] mx-auto text-center relative overflow-hidden ">
            <img
              className="w-full h-[400px] mx-auto aspect-auto "
              src={testimonialBg}
              alt="Employee taking feedback from customer"
            />
            <div className="absolute w-[100%] left-[50%] translate-x-[-50%]  h-full top-0 bg-gray-700/20 "></div>
          </div>
          <p className="text-balance px-1 text-base md:text-lg lg:text-2xl text-left mt-6  break-words font-inter">
            Located in Chittagong, Bangladesh, Digitalsitepro leverages its team
            of accomplished professionals to deliver comprehensive solutions for
            your business&lsquo;s online and offline presence. With over a
            decade of experience, we possess an unparalleled understanding of
            the industry, consistently ranking among the leading technology
            service providers. Our agile and innovative approach, fostered by
            our streamlined team structure, empowers us to deliver exceptional
            results within today&lsquo;s dynamic business environment. Partner
            with Digitalsitepro and propel your organization to the forefront of
            its field.
          </p>
        </div>
      </div>

      <div className="py-16  testimonialbgWrapper ">
        <div className="w-full py-5 px-3 md:mx-w-[960px] lg:max-w-[1280px] mx-auto">
          <h2 className="text-white leading-[45px] md:leading-[58px] font-extrabold text-4xl md:text-5xl lg:text-5xl font-inter tracking-wide text-center my-2">
            What our client said <br /> about us .
          </h2>
          <p className="text-white font-semibold text-base md:text-lg lg:text-xl text-center mt-6 font-inter">
            More than a vendor, they became a trusted partner in our digital
            journey.
          </p>
        </div>
        <TestimonialSlider />
      </div>

      <div className=" py-16  testimonialbgWrapperTwo ">
        <div className="w-full md:mx-w-[960px] lg:max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 p-2 gap-5 ">
          <div className="content font-inter">
            <h2 className="text-white leading-[45px] md:leading-[58px] font-extrabold text-4xl md:text-5xl lg:text-5xl font-inter tracking-wide text-left my-2 capitalize">
              What we believe
            </h2>
            <p className="text-white font-normal text-base lg:text-lg text-left mt-6">
              In the ever-evolving digital landscape,your voice can easily get
              lost. We believe every business deserves to be heard, no matter
              the size. That&apos;s why we craft personalized digital strategies
              that connect you with your dream audience, fostering meaningful
              connections and growth.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 justify-center items-start mt-5">
            <div className="bg-[#1E1E1E] rounded-md px-4 py-8 min-h-[200px] max-h-[250px] -mt-5">
              <h4 className="text-white my-2 font-bold text-lg font-inter capitalize">
                Build meaningful relationships
              </h4>
              <div className="h-[2px] bg-purple-bright w-[25%] rounded-full my-2"></div>
              <p className="text-white font-inter">
                We care about our clients and partners, and we&apos;re committed
                to building long-term relationships based on trust and respect.
              </p>
            </div>
            <div className="bg-[#1E1E1E] rounded-md px-4 py-8  min-h-[200px] max-h-[250px] mt-5">
              <h4 className="text-white my-2 font-bold text-lg font-inter capitalize">
                Build meaningful relationships
              </h4>
              <div className="h-[2px] bg-purple-bright w-[25%] rounded-full my-2"></div>
              <p className="text-white font-inter">
                We care about our clients and partners, and we&apos;re committed
                to build long-term relationships based on trust and respect.
              </p>
            </div>
            <div className="bg-[#1E1E1E] rounded-md px-4 py-8  min-h-[200px] max-h-[250px] -mt-5">
              <h4 className="text-white my-2 font-bold text-lg font-inter capitalize">
                Build meaningful relationships
              </h4>
              <div className="h-[2px] bg-purple-bright w-[25%] rounded-full my-2"></div>
              <p className="text-white font-inter">
                We care about our clients and partners, and we&apos;re committed
                to build long-term relationships based on trust and respect.
              </p>
            </div>
            <div className="bg-[#1E1E1E] rounded-md px-4 py-8  min-h-[200px] max-h-[250px] mt-5">
              <h4 className="text-white my-2 font-bold text-lg font-inter capitalize">
                Build meaningful relationships
              </h4>
              <div className="h-[2px] bg-purple-bright w-[25%] rounded-full my-2"></div>
              <p className="text-white font-inter">
                We care about our clients and partners, and we&apos;re committed
                to build long-term relationships based on trust and respect.
              </p>
            </div>
            <div className="bg-[#1E1E1E] rounded-md px-4 py-8  min-h-[200px] max-h-[250px] -mt-5">
              <h4 className="text-white my-2 font-bold text-lg font-inter capitalize">
                Build meaningful relationships
              </h4>
              <div className="h-[2px] bg-purple-bright w-[25%] rounded-full my-2"></div>
              <p className="text-white font-inter">
                We care about our clients and partners, and we&apos;re committed
                to build long-term relationships based on trust and respect.
              </p>
            </div>
            <div className="bg-[#1E1E1E] rounded-md px-4 py-8  min-h-[200px] max-h-[250px] mt-5">
              <h4 className="text-white my-2 font-bold text-lg font-inter capitalize">
                Build meaningful relationships
              </h4>
              <div className="h-[2px] bg-purple-bright w-[25%] rounded-full my-2"></div>
              <p className="text-white font-inter">
                We care about our clients and partners, and we&apos;re committed
                to build long-term relationships based on trust and respect.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-gray-200  py-12 ">
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
              <div className="flex flex-col">
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
              </div>
              <div className="flex flex-col">
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
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col">
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
                {errors.location && (
                  <p className="text-red-600">{errors.location.message}</p>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="Role"
                  name="Role"
                  className="outline rounded w-full outline-1 p-2"
                  {...register("role", {
                    required: "Role is required!",
                  })}
                />
                {errors.role && (
                  <p className="text-red-600">{errors.role.message}</p>
                )}
              </div>
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
