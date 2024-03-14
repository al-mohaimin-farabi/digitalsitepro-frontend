import Wordpress_logo from "../../assets/Images/Wordpress_logo.png";
import React_logo from "../../assets/Images/react-logo.png";
import Elementor_logo from "../../assets/Images/elementor-logo.png";
import Divi_logo from "../../assets/Images/divi-logo.png";
import Shopify_logo from "../../assets/Images/shopify-logo.png";
import Pagefly_logo from "../../assets/Images/pagefly-logo.png";
import Adobe_Premiere_Pro_logo from "../../assets/Images/Adobe_Premiere_Pro.png";
import Adobe_After_Effects_logo from "../../assets/Images/Adobe-After-Effects-logo.png";
import DaVinci_logo from "../../assets/Images/DaVinci-Resolve-Studio-logo.png";
import Audacity_logo from "../../assets/Images/Audacity-Logo.png";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

const TechStack = () => {
  const TechStack = useRef(null);
  const isInView = useInView(TechStack, { once: true });

  const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const children = {
    hidden: { opacity: 0, x: -150 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  return (
    <div className="my-5 md:my-10 py-2 px-2  rounded-md">
      {/* <ContentHeader title={"Our Tech Stack"} /> */}
      <div className="p-2 my-4 text-center">
        <h2 className="text-primary text-2xl md:text-3xl    uppercase font-flow font-bold">
          Our Tech Stack
        </h2>
        <div
          className={`bg-primary w-[50%] mx-auto h-[3px] my-2 rounded-md`}></div>
      </div>
      <motion.div
        variants={parentVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        ref={TechStack}
        className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-5 font-mono pt-6 pb-8  ">
        <motion.div
          variants={children}
          className="p-1 sm:p-2 bg-gray-100 flex flex-col sm:flex-row  justify-start items-center rounded ">
          <img
            loading="lazy"
            className="w-12 m-1 sm:m-2"
            src={Wordpress_logo}
            alt="wordpress logo"
          />
          <h4 className="text-sm sm:text-base md:text-lg m-1 sm:m-2 text-black">
            Wordpress
          </h4>
          {/* <p className="text-sm text-gray-300"></p> */}
        </motion.div>
        <motion.div
          variants={children}
          className="p-1 sm:p-2 bg-gray-100 flex flex-col sm:flex-row justify-start items-center rounded">
          <img
            loading="lazy"
            className="w-12 m-1 sm:m-2"
            src={React_logo}
            alt="React logo"
          />

          <h4 className="text-sm sm:text-base md:text-lg m-1 sm:m-2 text-black">
            React
          </h4>
          {/* <p className="text-sm text-gray-300"></p> */}
        </motion.div>
        <motion.div
          variants={children}
          className="p-1 sm:p-2 bg-gray-100 flex flex-col sm:flex-row justify-start items-center rounded">
          <img
            loading="lazy"
            className="w-12 m-1 sm:m-2"
            src={Elementor_logo}
            alt="wordpress logo"
          />

          <h4 className="text-sm sm:text-base md:text-lg m-1 sm:m-2 text-black">
            Elementor
          </h4>
          {/* <p className="text-sm text-gray-300"></p> */}
        </motion.div>
        <motion.div
          variants={children}
          className="p-1 sm:p-2 bg-gray-100 flex flex-col sm:flex-row justify-start items-center rounded">
          <img
            loading="lazy"
            className="w-12 m-1 sm:m-2"
            src={Divi_logo}
            alt="Divi logo"
          />

          <h4 className=" text-sm sm:text-base md:text-lg m-1 sm:m-2 text-black">
            Divi
          </h4>
          {/* <p className="text-sm text-gray-300"></p> */}
        </motion.div>
        <motion.div
          variants={children}
          className=" p-1 sm:p-2 bg-gray-100 flex flex-col sm:flex-row justify-start items-center rounded">
          <img
            loading="lazy"
            className="w-12 m-1 sm:m-2"
            src={Shopify_logo}
            alt="Shopify logo"
          />

          <h4 className="text-sm sm:text-base md:text-lg m-1 sm:m-2 text-black">
            Shopify
          </h4>
          {/* <p className="text-sm text-gray-300"></p> */}
        </motion.div>
        <motion.div
          variants={children}
          className=" p-1 sm:p-2 bg-gray-100 flex flex-col sm:flex-row justify-start items-center rounded">
          <img
            loading="lazy"
            className="w-12 m-1 sm:m-2"
            src={Pagefly_logo}
            alt="PageFly logo"
          />

          <h4 className="text-sm sm:text-base md:text-lg m-1 sm:m-2 text-black">
            PageFly
          </h4>
          {/* <p className="text-sm text-gray-300"></p> */}
        </motion.div>
        <motion.div
          variants={children}
          className=" p-1 sm:p-2 bg-gray-100 flex flex-col sm:flex-row justify-start items-center rounded ">
          <img
            loading="lazy"
            className="w-12 m-1 sm:m-2"
            src={Adobe_Premiere_Pro_logo}
            alt="Adobe Premiere Pro logo"
          />

          <h4 className="text-sm text-center sm:text-base md:text-lg m-1 sm:m-2 text-black">
            Adobe Premiere Pro
          </h4>
          {/* <p className="text-sm text-gray-300"></p> */}
        </motion.div>
        <motion.div
          variants={children}
          className=" p-1 sm:p-2 bg-gray-100 flex flex-col sm:flex-row justify-start items-center rounded">
          <img
            loading="lazy"
            className="w-12 m-1 sm:m-2"
            src={Adobe_After_Effects_logo}
            alt="After Effects logo"
          />

          <h4 className="text-sm sm:text-base md:text-lg m-1 sm:m-2 text-black">
            After Effects
          </h4>
          {/* <p className="text-sm text-gray-300"></p> */}
        </motion.div>
        <motion.div
          variants={children}
          className="lg:col-start-2 p-1 sm:p-2 bg-gray-100 flex flex-col sm:flex-row justify-start items-center rounded">
          <img
            loading="lazy"
            className="w-12 m-1 sm:m-2"
            src={DaVinci_logo}
            alt="DaVinci logo"
          />

          <h4 className="text-sm sm:text-base md:text-lg m-1 sm:m-2 text-black">
            DaVinci
          </h4>
          {/* <p className="text-sm text-gray-300"></p> */}
        </motion.div>
        <motion.div
          variants={children}
          className="sm:col-start-2 md:col-start-2 lg:col-auto p-1 sm:p-2 bg-gray-100 flex flex-col sm:flex-row justify-start items-center rounded">
          <img
            loading="lazy"
            className="w-12 m-1 sm:m-2"
            src={Audacity_logo}
            alt="Audacity logo"
          />

          <h4 className="text-sm sm:text-base md:text-lg m-1 sm:m-2 text-black">
            Audacity
          </h4>
          {/* <p className="text-sm text-gray-300"></p> */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TechStack;
