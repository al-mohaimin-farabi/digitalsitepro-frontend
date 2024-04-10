import Wordpress_logo from "../../assets/Images/tech-stack/Wordpress_logo.webp";
import React_logo from "../../assets/Images/tech-stack/react-logo.webp";
import Elementor_logo from "../../assets/Images/tech-stack/elementor-logo.png";
import Divi_logo from "../../assets/Images/tech-stack/divi-logo.webp";
import Shopify_logo from "../../assets/Images/tech-stack/shopify-logo.webp";
import Pagefly_logo from "../../assets/Images/tech-stack/pagefly-logo.webp";
import Adobe_Premiere_Pro_logo from "../../assets/Images/tech-stack/Adobe_Premiere_Pro.webp";
import Adobe_After_Effects_logo from "../../assets/Images/tech-stack/Adobe-After-Effects-logo.webp";
import DaVinci_logo from "../../assets/Images/tech-stack/DaVinci-Resolve-Studio-logo.webp";
import Audacity_logo from "../../assets/Images/tech-stack/Audacity-Logo.webp";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import ContentHeader from "../../Components/ContentHeader";

// const logos = [
//   { name: "Wordpress", image: Wordpress_logo },
//   { name: "React", image: React_logo },
//   { name: "Elementor", image: Elementor_logo },
//   { name: "Divi", image: Divi_logo },
//   { name: "Shopify", image: Shopify_logo },
//   { name: "Pagefly", image: Pagefly_logo },
//   { name: "Adobe Premiere Pro", image: Adobe_Premiere_Pro_logo },
//   { name: "Adobe After Effects", image: Adobe_After_Effects_logo },
//   { name: "DaVinci Resolve Studio", image: DaVinci_logo },
//   { name: "Audacity", image: Audacity_logo },
// ];

const TechStack = () => {
  const rowOne = useRef(null);
  const rowTwo = useRef(null);
  const rowThree = useRef(null);

  const isrowOneInView = useInView(rowOne, { once: false });
  const isrowTwoInView = useInView(rowTwo, { once: false });
  const isrowThreeInView = useInView(rowThree, { once: false });

  const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const children = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: [0, 1.5, 1],
      transition: {
        duration: 0.2,
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  return (
    <div className="my-5 md:my-10 py-2 mx-2 px-2  overflow-hidden   rounded-md">
      <ContentHeader title="Our Tech Stack" />

      {/* 1st row */}
      <motion.div
        variants={parentVariants}
        initial="hidden"
        animate={isrowOneInView ? "visible" : "hidden"}
        ref={rowOne}
        className="flex flex-nowrap justify-center gap-5 md:gap-8">
        <motion.div
          variants={children}
          className="p-1 sm:p-2   flex flex-col  sm:flex-row justify-center  items-center rounded w-max  ">
          <img
            loading="lazy"
            className="w-12 m-1 sm:m-2"
            src={Wordpress_logo}
            alt="wordpress logo"
          />
          <h4 className="text-sm sm:text-base md:text-lg m-1 sm:m-2  text-white">
            Wordpress
          </h4>
        </motion.div>
        <motion.div
          variants={children}
          className="p-1 sm:p-2   flex flex-col  sm:flex-row  justify-center items-center rounded w-max  ">
          <img
            loading="lazy"
            className="w-12 m-1 sm:m-2"
            src={React_logo}
            alt="wordpress logo"
          />
          <h4 className="text-sm sm:text-base md:text-lg m-1 sm:m-2  text-white">
            React
          </h4>
        </motion.div>
        <motion.div
          variants={children}
          className="p-1 sm:p-2   flex flex-col  sm:flex-row justify-center  items-center rounded w-max  ">
          <img
            loading="lazy"
            className="w-12 m-1 sm:m-2"
            src={Elementor_logo}
            alt="wordpress logo"
          />
          <h4 className="text-sm sm:text-base md:text-lg m-1 sm:m-2  text-white">
            Elementor
          </h4>
        </motion.div>
      </motion.div>

      {/* 2nd row */}
      <motion.div
        variants={parentVariants}
        initial="hidden"
        animate={isrowTwoInView ? "visible" : "hidden"}
        ref={rowTwo}
        className="flex flex-nowrap justify-center gap-5 text-center md:gap-12 my-8">
        <motion.div
          variants={children}
          className="p-1 sm:p-2  flex flex-col  sm:flex-row justify-center  items-center rounded w-max  ">
          <img
            loading="lazy"
            className="w-12 m-1 sm:m-2"
            src={Divi_logo}
            alt="wordpress logo"
          />
          <h4 className="text-sm sm:text-base md:text-lg m-1 sm:m-2  text-white">
            Divi
          </h4>
        </motion.div>
        <motion.div
          variants={children}
          className="p-1 sm:p-2   flex flex-col  sm:flex-row justify-center  items-center rounded w-max  ">
          <img
            loading="lazy"
            className="w-12 m-1 sm:m-2"
            src={Pagefly_logo}
            alt="wordpress logo"
          />
          <h4 className="text-sm sm:text-base md:text-lg m-1 sm:m-2  text-white">
            PageFly
          </h4>
        </motion.div>
        <motion.div
          variants={children}
          className="p-1 sm:p-2   flex flex-col  sm:flex-row justify-center  items-center rounded w-max  ">
          <img
            loading="lazy"
            className="w-12 m-1 sm:m-2"
            src={Shopify_logo}
            alt="wordpress logo"
          />
          <h4 className="text-sm sm:text-base md:text-lg m-1 sm:m-2  text-white">
            Shopify
          </h4>
        </motion.div>
        <motion.div
          variants={children}
          className="p-1 sm:p-2   flex flex-col  sm:flex-row justify-center  items-center rounded w-max  ">
          <img
            loading="lazy"
            className="w-12 m-1 sm:m-2"
            src={Adobe_Premiere_Pro_logo}
            alt="wordpress logo"
          />
          <h4 className="text-sm sm:text-base md:text-lg m-1 sm:m-2  text-white">
            Adobe Premiere Pro
          </h4>
        </motion.div>
      </motion.div>

      {/* 3rd row */}
      <motion.div
        variants={parentVariants}
        initial="hidden"
        animate={isrowThreeInView ? "visible" : "hidden"}
        ref={rowThree}
        className="flex flex-nowrap justify-center gap-5 md:gap-8">
        <motion.div
          variants={children}
          className="p-1 sm:p-2   flex flex-col  sm:flex-row justify-center  items-center rounded w-max  ">
          <img
            loading="lazy"
            className="w-12 m-1 sm:m-2"
            src={Adobe_After_Effects_logo}
            alt="wordpress logo"
          />
          <h4 className="text-sm sm:text-base md:text-lg m-1 sm:m-2  text-white">
            After Effects
          </h4>
        </motion.div>
        <motion.div
          variants={children}
          className="p-1 sm:p-2   flex flex-col  sm:flex-row justify-center  items-center rounded w-max  ">
          <img
            loading="lazy"
            className="w-12 m-1 sm:m-2"
            src={DaVinci_logo}
            alt="wordpress logo"
          />
          <h4 className="text-sm sm:text-base md:text-lg m-1 sm:m-2  text-white">
            DaVinci
          </h4>
        </motion.div>
        <motion.div
          variants={children}
          className="p-1 sm:p-2   flex flex-col  sm:flex-row justify-center  items-center rounded w-max  ">
          <img
            loading="lazy"
            className="w-12 m-1 sm:m-2"
            src={Audacity_logo}
            alt="wordpress logo"
          />
          <h4 className="text-sm sm:text-base md:text-lg m-1 sm:m-2  text-white">
            Audacity
          </h4>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TechStack;
