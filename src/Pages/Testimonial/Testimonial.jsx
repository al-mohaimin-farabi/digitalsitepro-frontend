import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footter from "../../Components/Footer";
import { faPaperPlane, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import HomeCss from "../../assets/CSS/Home.module.css";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import TestimonialSlider from "./TestimonialSlider.jsx";
import testimonialBg from "../../assets/Images/background/testimonialpagebg.webp";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import AOS from "aos";
import "aos/dist/aos.css";

const Testimonial = () => {
  const { user } = useAuth();
  const [captchaValue, setCaptchaValue] = useState("");
  const [verified, setVerified] = useState(false);
  const modalWrapperRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);

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
    if (captchaValue && verified && user?.email) {
      data.photoURL = user?.photoURL;
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
          setModalOpen(true);
          console.log(data);
          reset();
        })
        .catch((error) => {
          // Handle errors
          console.error("There was a problem with the request:", error);
        });
    }
  };

  const cardData = [
    {
      heading: "Build meaningful relationships",
      pera: "We care about our clients and partners, and we're committed to building long-term relationships based on trust and respect.",
    },
    {
      heading: "Love what we do",
      pera: "We're passionate about digital marketing, and we love helping our clients succeed.",
    },
    {
      heading: "Better everyday",
      pera: "We're always striving to learn and grow so that we  can provide our clients with  the best possible service.",
    },
    {
      heading: "Deliver faithfully",
      pera: "We're committed to delivering on our promises and meeting our clients' expectations.",
    },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        modalWrapperRef.current &&
        !modalWrapperRef.current.contains(event.target)
      ) {
        // Clicked outside of modal inner, close modal
        setModalOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalWrapperRef]);

  return (
    <>
      {verified && user?.email && modalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ type: "fade", duration: 0.5 }}
          animate={modalOpen && { opacity: 1 }}
          className="bg-black/40 w-[100vw] origin-top h-[100vh] inset-0 fixed z-[5555555] flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={modalOpen && { opacity: 1, y: 0 }}
            transition={{ type: "fade", duration: 0.3 }}
            ref={modalWrapperRef}
            className="w-[calc(100vw-50px)] min-w-[250px] max-w-[450px] h-max mt-36  bg-white rounded-lg px-6 grid items-center shadow-lg">
            <div className="py-8 text-center font-inter">
              <p className="my-2 text-lg font-bold text-purple-bright">
                Your Testimonial Have Been Submitted
              </p>
              <span className="my-2 text-[12px] text-gray-600 font-normal">
                It Will Be Shown To Our Website One It Is Approved By Our Admin
              </span>
              <button
                onClick={() => setModalOpen(false)}
                className="text-[25px]  px-6 md:px-0 md:w-[45px]  md:h-[45px]  md:rounded-full md:border border-purple-bright shadow-xl grid place-content-center mx-auto  mt-6">
                <FontAwesomeIcon className="hidden md:block" icon={faXmark} />{" "}
                <span className="md:hidden text-base font-inter">close</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      <div className="py-5 md:py-10 mt-[96px] md:mt-[110px]  testimonialbgWrapper px-3   font-inter">
        <div className="w-full py-5  md:max-w-[960px] lg:max-w-[1280px] mx-auto">
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

      <div className=" py-5 md:py-10 px-1 font-inter">
        <div className="w-full px-2 md:px-1 py-2 md:max-w-[960px] lg:max-w-[1280px] mx-auto text-center">
          <h2 className="text-primary leading-[45px] md:leading-[58px] font-extrabold text-4xl md:text-5xl lg:text-5xl font-inter tracking-wide text-center my-2">
            Where Individual Pieces Form a Brilliant Picture
          </h2>
          <h4 className="font-semibold text-pretty text-base md:text-lg lg:text-xl text-center mt-6 font-inter">
            Digitalsitepro is your compass, guiding you with a steady hand. We
            understand the anxieties of carving a space online, and we&apos;re
            here to offer a supportive touch.
          </h4>
          <div className=" w-full my-4  md:max-w-[960px] lg:max-w-[1280px] mx-auto text-center relative overflow-hidden ">
            <img
              className="w-[60%]  mx-auto aspect-auto md:aspect-[4/3] lg:aspect-[16/9]"
              src={testimonialBg}
              alt="Employee taking feedback from customer"
            />
            <div className="absolute w-[60%] left-[50%] translate-x-[-50%]  h-full top-0 bg-gray-900/20 "></div>
          </div>
          <p className=" px-1 text-base md:text-lg lg:text-2xl text-left mt-6   font-inter text-justified">
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

      <div className=" py-16  testimonialbgWrapperTwo px-1 font-inter">
        <div className="w-full  md:max-w-[960px] lg:max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2  px-2 md:px-1 gap-16 ">
          <div className="content font-inter h-full place-content-center">
            <h2 className="text-white leading-[45px] md:leading-[58px] font-extrabold text-4xl md:text-5xl lg:text-5xl font-inter tracking-wide text-left my-2 capitalize">
              What we believe
            </h2>
            <p className="text-white font-normal text-base lg:text-lg  mt-6 text-justify">
              In the ever-evolving digital landscape,your voice can easily get
              lost. We believe every business deserves to be heard, no matter
              the size. That&apos;s why we craft personalized digital strategies
              that connect you with your dream audience, fostering meaningful
              connections and growth.
            </p>
          </div>
          <div className="grid grid-cols-2 py-8 gap-y-8 gap-x-8 justify-center items-start mt-5 overflow-hidden">
            {cardData.map((item, index) => (
              <Card
                key={index}
                item={item}
                gap={index % 2 == 0 ? "-mt-5" : "mt-5"}
              />
            ))}
          </div>
        </div>
      </div>

      <div className=" bg-gray-200  py-12 px-1 font-inter">
        <div className="md:max-w-[960px] lg:max-w-[1280px] mx-auto px-2 md:px-1">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-600 text-center tracking-wide  md:text-balance md:px-12">
            If you are on our customers and would like to submit your
            testimonial, please use the form bellow. We greatly appreciate your
            feedback
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="py-5 mt-8 space-y-5     ">
            {!user?.email && (
              <p className="text-red-600  mx-auto block text-left">
                <span className="font-extrabold">*</span>You Need To Login To
                Submit Testimonial
              </p>
            )}
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
                  defaultValue={user?.displayName}
                  readOnly={true}
                  disabled={!user?.email ? true : false}
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
                  readOnly={true}
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
              disabled={!verified && !user?.email}
              className={` px-10 py-3  my-6 font-bold border-2 transition-colors duration-200 ease-linear rounded  cursor-pointer ${
                !user.email
                  ? "bg-primary/40 text-white opacity-9"
                  : "bg-primary  text-white  hover:text-[#6E72DD]  hover:bg-transparent  border-primary hover:border-[#6E72DD]   "
              }`}>
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

const Card = ({ item, gap }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="center-center"
      className={`bg-[#1E1E1E] grid place-content-center rounded-md px-4 py-5 md:py-0 h-full md:min-h-[230px] md:max-h-[280px] ${gap}  `}>
      <h4 className="text-white  font-bold texl-base md:text-lg font-inter capitalize">
        {item.heading}
      </h4>
      <div className="h-[2px] bg-purple-bright w-[25%] rounded-full mt-1 mb-4"></div>
      <p className="text-white text-sm md:text-base font-inter">{item.pera}</p>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    pera: PropTypes.string.isRequired,
  }).isRequired,
  gap: PropTypes.string, // You can adjust this as per your requirement
};
