import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footter from "../../Components/Footer";
import {
  faArrowRight,
  faPaperPlane,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import HomeCss from "../../assets/CSS/Home.module.css";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import TestimonialSlider from "./TestimonialSlider.jsx";
// import testimonialBg from "../../assets/Images/background/testimonialpagebg.webp";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import imgOne from "../../assets/Images/testimonial/testimonial-image-1.webp";
import imgTwo from "../../assets/Images/testimonial/testimonial-image-2.svg";
import { NavLink } from "react-router-dom";

const Testimonial = () => {
  const { user } = useAuth();
  const [captchaValue, setCaptchaValue] = useState("");
  const [verified, setVerified] = useState(false);
  const modalWrapperRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [loginAlret, setLoginAlert] = useState(false);

  const onChange = (value) => {
    setCaptchaValue(value);
    setVerified(true);
  };

  const handleLoginAlert = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    setLoginAlert(true); // Set the state to trigger login alert
  };

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (!user.email) {
      setLoginAlert(true);
      return;
    }

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
      heading: "Custom web & app development",
      pera: "Ready to solve your unique business challenges? Our custom web and app solutions streamline your operations,elevate customer experiences,and unlock serious growth.",
    },
    {
      heading: "User experience design",
      pera: "Let our UX expertise work for you. We craft intelligent interfaces that guide users seamlessly towards their goals, increasing engagement and satisfaction.",
    },
    {
      heading: "Graphics Design",
      pera: "Designs that speak to your audience.We'll visually articulate your brand's purpose and create an emotional connection with your customers.",
    },
    {
      heading: "Video editing ",
      pera: "Unleash the power of exceptional content.  Refine every detail, craft captivating visuals, and leave a lasting impact.  Let's craft content that resonates and elevates your brand.",
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
        setLoginAlert(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalWrapperRef]);

  useEffect(() => {
    AOS.init();
  }, []);

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
            className="w-[calc(100vw-50px)] min-w-[250px] max-w-[450px] h-max mt-36  bg-white rounded-md  px-6 grid items-center shadow-lg">
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
                <FontAwesomeIcon className="hidden md:block" icon={faXmark} />
                <span className="md:hidden text-base font-inter">close</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {loginAlret && !user?.email && (
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
            className="w-[calc(100vw-50px)] min-w-[250px] max-w-[450px] h-max mt-36  bg-white rounded-md  px-6 grid items-center shadow-lg">
            <div className="py-8 text-center font-inter">
              <p className="my-2 text-lg font-bold text-purple-bright">
                You Need To Login or Signup To Submit Testimonial
              </p>

              <button
                onClick={() => setLoginAlert(false)}
                className="text-[25px]  px-6 md:px-0 md:w-[45px]  md:h-[45px]  md:rounded-full md:border border-purple-bright shadow-xl grid place-content-center mx-auto  mt-6">
                <FontAwesomeIcon className="hidden md:block" icon={faXmark} />{" "}
                <span className="md:hidden text-base font-inter">close</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      <div className="mt-[96px] md:mt-[110px] px-4 md:px-1 py-5 w-full mx-auto md:max-w-[960px] lg:max-w-[1280px]  ">
        <div className="grid md:grid-cols-2 place-content-center gap-5 my-5 md:my-10">
          <div className="my-auto overflow-hidden">
            <h2
              className="text-white text-center md:text-left leading-[45px] overflow-hidden md:leading-[58px] font-extrabold text-3xl md:text-4xl lg:text-5xl font-inter tracking-wide  mb-6 capitalize"
              data-aos="fade-up"
              data-aos-delay="100">
              We are hungry for your success
            </h2>
            <img
              src={imgOne}
              className=" w-[80%] md:w-[90%] block mx-auto  md:hidden"
              alt=""
              data-aos-delay="200"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            />
            <p
              className="text-white text-center md:text-left text-xl my-2"
              data-aos="fade-up"
              data-aos-delay="150">
              Digitalsitepro is your compass, guiding you with a steady hand. We
              understand the anxieties of carving a space online, and we&apos;re
              here to offer a supportive touch.
            </p>
          </div>
          <div className="flex justify-center md:justify-center overflow-hidden">
            <img
              src={imgOne}
              className=" w-[80%] md:w-[65%] hidden md:block"
              alt=""
              data-aos-delay="200"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            />
          </div>
        </div>
      </div>

      <div className="px-4 md:px-1 py-5 my-5 md:my-10 w-full mx-auto md:max-w-[960px] lg:max-w-[1280px] overflow-hidden">
        <img
          className="w-[90%] md:w-[50%] mx-auto"
          src={imgTwo}
          alt=""
          data-aos="zoom-out-up"
          data-aos-delay="200"
          data-aos-duration="500"
          data-aos-offset="250"
          data-aos-anchor-placement="top-bottom"
        />
        <p
          className="text-white font-normal text-base lg:text-lg  mt-6 text-justify "
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-offset={window.innerWidth < 768 ? "200" : "200"}>
          Located in Chittagong, Bangladesh, Digitalsitepro leverages its team
          of accomplished professionals to deliver comprehensive solutions for
          your business&apos;s online and offline presence. With over a decade
          of experience, we possess an unparalleled understanding of the
          industry, consistently ranking among the leading technology service
          providers. Our agile and innovative approach, fostered by our
          streamlined team structure, empowers us to deliver exceptional results
          within today&apos;s dynamic business environment. Partner with
          Digitalsitepro and propel your organization to the forefront of its
          field.
        </p>
      </div>

      <div className=" py-5  bg-black px-1 font-inter">
        <div className="w-full  md:max-w-[960px] lg:max-w-[1280px] mx-auto grid grid-cols-1 place-content-center my-5 md:my-10   px-2 md:px-1  ">
          <div
            className="content font-inter h-full place-content-center overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="false">
            <h2 className="text-white leading-[45px] md:leading-[58px] font-extrabold text-3xl md:text-4xl lg:text-5xl font-inter tracking-wide my-2 capitalize text-center">
              Our way of making a positive impact
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 py-8 gap-5 md:gap-10  justify-center items-start mt-5 overflow-hidden">
            {cardData.map((item, index) => (
              <Card
                direction={index % 2 == 0 ? "fade-right" : "fade-left"}
                placement={
                  index % 2 == 0 ? "md:justify-end  " : "md:justify-start "
                }
                key={index}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>

      <div className=" md:px-1 py-5 pb-20 md:pb-24  bg-black  font-inter">
        <div className="w-full  md:max-w-[960px] lg:max-w-[1280px] mx-auto grid grid-cols-1   px-3 md:px-1 gap-5 ">
          <div className="w-full md:w-[70%] mx-auto">
            <h2
              className="text-white leading-[45px] md:leading-[58px] font-extrabold text-3xl md:text-4xl lg:text-5xl font-inter tracking-wide mb-4 capitalize text-center"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-offset={window.innerWidth < 768 ? "300" : "250"}>
              Let’s work together
            </h2>
            <p
              className="text-white text-center  text-xl my-2  mx-auto"
              data-aos="fade-up"
              data-aos-delay="150"
              data-aos-offset={window.innerWidth < 768 ? "300" : "250"}>
              Ready to rock the business world together? Let&apos;s shake hands
              and dive into the awesomeness of teamwork
            </p>
          </div>
          <div className="overflow-hidden mt-10 flex flex-col space-y-5 md:space-y-0 md:flex-row  space-x-0 md:space-x-5 text-white justify-center items-center">
            <NavLink
              className="block p-4 w-[220px] max-w-[280px] border-2 border-purple-bright rounded-full text-center text-base bg-purple-bright hover:bg-transparent hover:text-white transition-all duration-300"
              to="/makeproposal"
              data-aos-duration="500"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="false"
              data-aos-offset="150">
              Request a proposal
            </NavLink>
            <span
              className="text-2xl"
              data-aos-duration="500"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="false"
              data-aos-offset="150">
              OR
            </span>
            <NavLink
              className="block p-4 w-[220px] max-w-[280px] border-2 rounded-full text-center text-base bg-transparent hover:bg-purple-bright hover:border-purple-bright hover:text-white transition-all duration-300"
              to="/services"
              data-aos-duration="500"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="false"
              data-aos-offset="150">
              See our services
            </NavLink>
          </div>
        </div>
      </div>

      <div className="py-5 md:py-10  md:min-h-[calc(100vh-110px)] grid place-content-center  testimonialbgWrapper px-3   font-inter">
        <div className="w-full py-5  overflow-hidden md:max-w-[960px] lg:max-w-[1280px] mx-auto">
          <h2
            className="text-white hidden md:block overflow-hidden leading-[45px] md:leading-[58px] font-extrabold text-3xl md:text-4xl  font-inter tracking-wide text-center my-2"
            data-aos="fade-up"
            data-aos-once="false"
            data-aos-offset={window.innerWidth < 768 ? "300" : "250"}>
            What our client said <br /> about us .
          </h2>
          <h2
            className="text-white  md:hidden overflow-hidden leading-[45px] md:leading-[58px] font-extrabold text-3xl md:text-4xl  font-inter tracking-wide text-center my-2"
            data-aos="fade-up"
            data-aos-once="false"
            data-aos-offset={window.innerWidth < 768 ? "300" : "250"}>
            What our client said about us .
          </h2>
          <p
            className="text-white overflow-hidden font-semibold text-base md:text-lg lg:text-xl text-center mt-6 font-inter"
            data-aos-once="false"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-offset="200">
            More than a vendor, they became a trusted partner in our digital
            journey.
          </p>
        </div>
        <TestimonialSlider />
      </div>
      <div
        className=" bg-gray-200  py-12 px-1 font-inter"
        data-aos="fade-up"
        data-aos-offset={window.innerWidth < 768 ? "300" : "250"}>
        <div className="md:max-w-[960px] lg:max-w-[1280px] mx-auto px-2 md:px-1 overflow-hidden">
          <h2
            className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-600 overflow-hidden text-center tracking-wide  md:text-balance md:px-12"
            data-aos="fade-up">
            If you are on our customers and would like to submit your
            testimonial, please use the form bellow. We greatly appreciate your
            feedback
          </h2>

          <form
            onSubmit={user?.email ? handleSubmit(onSubmit) : handleLoginAlert}
            className=" mt-8 space-y-5     ">
            {!user?.email && (
              <p
                className="text-red-600  mx-auto block text-left"
                data-aos="fade-up">
                <span className="font-extrabold">*</span>You Need To Login To
                Submit Testimonial
              </p>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div
                className="flex flex-col"
                data-aos="fade-up"
                data-aos-delay="50">
                <input
                  autoComplete="true"
                  placeholder="Your Name"
                  className={`${
                    user && "text-gray-400"
                  } outline-gray-950 bg-white outline outline-1 rounded p-2`}
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
              <div
                className="flex flex-col"
                data-aos="fade-up"
                data-aos-delay="100">
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
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
              data-aos="fade-up"
              data-aos-delay="150">
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
            <div
              className="grid grid-cols-1  "
              data-aos="fade-up"
              data-aos-delay="200">
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
            <div
              className=" grid place-content-start"
              data-aos="fade-up"
              data-aos-delay="250">
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
              className={` px-10 py-3  mt-6 font-bold border-2 transition-colors duration-200 ease-linear rounded  cursor-pointer ${
                !user.email
                  ? "bg-primary/40 text-white opacity-9"
                  : "bg-primary  text-white  hover:text-[#6E72DD]  hover:bg-transparent  border-primary hover:border-[#6E72DD]   "
              }`}
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-once="false">
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

const Card = ({ item, direction, placement }) => {
  return (
    <div className={`w-full flex overflow-hidden ${placement}`}>
      <div
        className={`bg-[#1E1E1E]  md:mx-0 overflow-hidden md:w-[80%]  font-inter flex min-h-[260px] md:min-h-[300px] flex-col justify-between  rounded-2xl py-10    gap-5  relative`}
        data-aos={direction}
        data-aos-anchor-placement="top-bottom"
        data-aos-offset={window.innerWidth < 768 ? "200" : "200"}>
        <div className="px-8  ">
          <h4 className="text-white relative mb-4 w-max font-bold texl-base md:text-lg font-inter capitalize c_underline">
            {item.heading}
            {/* <div className="h-[2px] bg-purple-bright w-[120px] rounded-full mt-2 mb-4"></div> */}
          </h4>

          <p className="text-white text-sm md:text-base font-inter text-balance">
            {item.pera}
          </p>
        </div>

        <div className="border-t hover:bg-purple-bright transition-all duration-300 border-gray-400 px-8 absolute bottom-0 w-full  py-5 group ">
          <NavLink
            className="text-white font-semibold w-full h-full flex items-center"
            to="/">
            <span>Learn more</span>
            <FontAwesomeIcon
              className="ml-1 group-hover:translate-x-1.5 transition-all duration-300"
              icon={faArrowRight}
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    pera: PropTypes.string.isRequired,
  }).isRequired,
  direction: PropTypes.string,
  placement: PropTypes.string, // You can adjust this as per your requirement
};
