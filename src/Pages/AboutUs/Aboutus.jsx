import Payel from "../../assets/Images/avatar/Asraful.webp";
import Farabi from "../../assets/Images/avatar/Farabi.webp";
import Rabbi from "../../assets/Images/avatar/Rabbi.webp";
import Faysal from "../../assets/Images/avatar/Faysal.webp";
import Footter from "../../Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import imgOne from "../../assets/Images/aboutus/about_us_img-1.webp";
import imgTwo from "../../assets/Images/aboutus/about_us_img-2.webp";
import imgThree from "../../assets/Images/aboutus/about_us_img-3.png";

import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect } from "react";

const staggerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: index * 0.1, // Adjust the delay time as needed
    },
  }),
};

const Aboutus = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const cardData = [
    {
      heading: "Build meaningful relationships",
      pera: "We care about our clients and partners, and we're committed to building long-term relationships based on trust and respect.",
    },
    {
      heading: "Better everyday",
      pera: "We're always striving tolearn and grow so that we can provide our clients with the best possible service.",
    },
    {
      heading: "Graphics Design",
      pera: "Designs that speak to your audience.We'll visually articulate your brand's purpose and create an emotional connection with your customers.",
    },
    {
      heading: "Deliver faithfully",
      pera: "We're committed to delivering on our promises and meeting our clients' expectations.",
    },
  ];

  const members = [
    {
      id: 1,
      name: "Fazlee Rabbi",
      email: "frbijoy019@gmail.com",
      img: Rabbi,
      role: "Managing Director (Founder) ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ratione.",
    },
    {
      id: 2,
      name: "Ashraful Isalm",
      email: "ashrafulislam@gmail.com",
      img: Payel,
      role: "CEO (Co-Founder)",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ratione.",
    },
    {
      id: 3,
      name: "Al Faysal",
      email: "alfaysalshagor@gmail.com",
      img: Faysal,
      role: "Media Creative Director",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ratione.",
    },
    {
      id: 4,
      name: "Al Mohaimin Farabi",
      email: "almohaiminfarabi.work@gmail.com",
      img: Farabi,
      role: "Tech Lead",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ratione.",
    },
    {
      id: 5,
      name: "Mubasshirul Islam Sabbir",
      email: "almohaiminfarabi.work@gmail.com",
      img: Farabi,
      role: "researcher",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ratione.",
    },
  ];

  const statements = [
    "We are always honest no matter what.",
    "We deep dive into every project to deliver excellence.",
    "We take ownership of what we do.",
    "We value long-term relationships above quick wins and want to bring lasting gains for you.",
    "We believe we can help you drive margins while remaining true to our ethical values.",
  ];

  return (
    <>
      <div className="md:max-w-[960px] lg:max-w-[1280px] mx-auto py-5 mt-[96px] md:mt-[112px]  px-3 md:px-1">
        {/* 1st */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5 md:my-10">
          <div className="flex flex-col justify-center overflow-hidden">
            <p
              className="text-white  font-semibold  md:text-lg lg:text-xl  my-2 font-inter text-xl relative c_underline w-max "
              data-aos="fade-right"
              data-aos-duration="700">
              Who We Are
            </p>
            <h2
              className="text-white  font-extrabold text-3xl md:text-4xl lg:text-5xl font-inter tracking-wide my-4 capitalize text-left"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="700">
              Designers, thinkers & collaborators
            </h2>
          </div>
          <div className="flex flex-col justify-center overflow-hidden">
            <img
              className="rounded w-full aspect-auto"
              src={imgOne}
              alt=""
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="700"
            />
          </div>
        </div>

        {/* 2nd */}
        <div className="overflow-hidden my-8 md:my-16">
          <div className="overflow-hidden">
            <h2
              className="text-white  font-extrabold text-3xl md:text-4xl lg:text-5xl font-inter tracking-wide my-4 capitalize text-left  "
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="700">
              We provide our top-notch creative services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 overflow-hidden">
            <div className="overflow-hidden flex items-center">
              <p
                className="text-white  overflow-hidden text-base md:text-lg lg:text-xl  my-2 font-inter relative text-justify  "
                data-aos="fade-up"
                data-aos-delay="150"
                data-aos-offset="150"
                data-aos-duration="700">
                Digital Site Pro is a solution service provider committed to
                helping you establish a strong presence in the digital realm. We
                are the agency known for innovative thinking and pushing the
                limits of what is achievable. Digital Site Pro: Your premier
                ally in conquering the digital frontier, pioneering innovation,
                and redefining possibilities. We&lsquo;re not just a service
                provider; we&lsquo;re your partners in transforming digital
                landscapes with unparalleled creativity and visionary thinking.
              </p>
            </div>
            <div className="">
              <img
                src={imgTwo}
                className="w-max mx-auto aspect-auto rounded "
                alt=""
                data-aos="zoom-in"
                data-aos-delay="150"
                data-aos-duration="700"
                data-aos-offset="180"
              />
            </div>
          </div>
        </div>

        {/* team */}
        <div className="verflow-hidden my-5 md:my-16 font-inter">
          <div className="flex flex-col justify-center overflow-hidden">
            <h2
              className=" text-white relative w-max  font-extrabold text-3xl md:text-4xl lg:text-5xl font-inter tracking-wide my-4 capitalize text-left c_underline"
              data-aos="fade-right"
              data-aos-duration="700">
              Our team
            </h2>
            <p
              className="text-white  font-semibold text-base md:text-lg lg:text-xl  my-2 font-inter   w-max"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="700">
              Our web service team is ready to help you
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-5">
            {members.map((member, index) => (
              <motion.div
                key={member?.id}
                variants={staggerVariants}
                initial="hidden"
                whileInView="visible"
                custom={index}
                className="bg-[#1E1E1E] p-5 flex gap-2 rounded">
                <div className="overflow-hidden bg-purple-900/60 px-2 w-max rounded">
                  <img
                    className="w-[100px] h-[120px] aspect-[16/9] object-cover"
                    src={member?.img}
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="text-white font-semibold capitalize">
                    {member?.name}
                  </h4>
                  <p className="text-white text-[14px] capitalize">
                    {member?.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 4th */}

      <div className=" verflow-hidden testimonialbgWrapperTwo my-5 py-5 md:py-24 font-inter">
        <div className="w-full overflow-hidden px-3 md:px-1 md:max-w-[960px] lg:max-w-[1280px] mx-auto">
          <div className="verflow-hidden ">
            <h2
              className=" text-white    font-extrabold text-3xl md:text-4xl lg:text-5xl font-inter text-center tracking-wide my-4 capitalize  "
              data-aos="fade-up"
              data-aos-duration="700">
              We live by powerful values
            </h2>
          </div>
          <div className="flex verflow-hidden flex-col justify-center items-center my-16">
            <div className="space-y-10 flex flex-col justify-center text-left verflow-hidden px-1 md:px-0 mt-5">
              {statements.map((statement, index) => (
                <div
                  className="text-white  flex items-center  gap-5 "
                  key={index}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-offset={window.innerWidth < 768 ? "200" : "250"}
                  data-aos-delay={(index + 1) * 30}>
                  <span className="text-3xl md:text-5xl lg:text-6xl font-extrabold metal_number">
                    {index + 1}
                  </span>
                  <h1 className="text-base md:text-xl lg:text-2xl font-bold ">
                    {statement}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="md:max-w-[960px] lg:max-w-[1280px] mx-auto py-5  px-3 md:px-1">
        {/* 5th */}
        <div className="verflow-hidden py-5 font-inter">
          <div className="grid grid-cols-1 place-content-center md:grid-cols-2  gap-5 md:gap-8 lg:gap-10  ">
            <div className="content font-inter h-full place-content-center  ">
              <div className="overflow-hidden">
                <h2
                  className="text-white leading-[45px] md:leading-[58px] font-extrabold text-3xl md:text-4xl lg:text-5xl font-inter tracking-wide text-left my-2 capitalize"
                  data-aos="fade-up"
                  data-aos-delay="100">
                  What we believe
                </h2>
                <p
                  className="text-white font-normal text-base lg:text-lg  mt-6 text-justify"
                  data-aos="fade-up"
                  data-aos-delay="200">
                  In the ever-evolving digital landscape,your voice can easily
                  get lost. We believe every business deserves to be heard, no
                  matter the size. That&apos;s why we craft personalized digital
                  strategies that connect you with your dream audience,
                  fostering meaningful connections and growth.
                </p>
              </div>
              <div className="overflow-hudden">
                <img
                  className="rounded mx-auto md:w-[40%] my-2 aspect-auto"
                  src={imgThree}
                  alt=""
                  data-aos="fade-up"
                  data-aos-offset={"250"}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 py-8 gap-5 md:gap-4  lg:gap-8  justify-center items-start mt-5 overflow-hidden">
              {cardData.map((item, index) => (
                <Card
                  key={index}
                  index={index}
                  item={item}
                  gap={index % 2 == 0 ? "md:-mt-5" : "md:mt-5"}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footter />
    </>
  );
};

export default Aboutus;

const Card = ({ item, gap, index }) => {
  return (
    <div
      className={`lg:py-8 lg:px-5 px-4 py-6 ${gap} h-full rounded-3xl bg-[#1E1E1E]`}
      data-aos="fade-up"
      data-aos-offset={window.innerWidth <= 768 ? "150" : "220"}
      data-aos-delay={index * 50}>
      <h2 className="text-white text-base font-semibold inline-block  c_underline relative  text-wrap break-words">
        {item.heading}
      </h2>
      <p className="text-white my-4 md:text-[14px] lg:text-base text-balance">
        {item.pera}
      </p>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    pera: PropTypes.string.isRequired,
  }).isRequired,
  gap: PropTypes.string,
  index: PropTypes.number,
  // You can adjust this as per your requirement
};
