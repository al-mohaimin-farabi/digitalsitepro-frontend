import { motion } from "framer-motion";
import logo from "../assets/Images/logo_lite.svg";

const SuspenseLoader = () => {
  const svgVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: [0.1, 1, 0.1],
      repeat: Infinity,
      transition: {
        times: [0, 0.5, 1],
        duration: 1,
        repeat: Infinity,
        type: "keyframes",
        ease: "easeInOut",
      },
    },
  };

  // const pathVariants = {
  //   hidden: { opacity: 0, pathLength: 0, scale: 0 },
  //   visible: {
  //     opacity: 1,

  //     pathLength: 1,
  //     transition: { duration: 0.7, yoyo: Infinity }, // Also, include yoyo here
  //   },
  // };

  return (
    <div className="h-[100svh] grid place-content-center bg-black">
      <div className="w-full  h-full grid place-content-center ">
        <motion.img
          initial="hidden"
          animate="visible"
          variants={svgVariants}
          className="w-[80%] mx-auto"
          src={logo}
          alt=""
        />
      </div>
    </div>
  );
};

export default SuspenseLoader;
