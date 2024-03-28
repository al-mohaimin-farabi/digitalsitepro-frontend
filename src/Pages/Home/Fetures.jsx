import HomeCss from "../../assets/CSS/Home.module.css";
import fetureWeb from "../../assets/Images/Creative-Web-Development-Icons-for-Modern-Projects.svg";
import fetureGraphics from "../../assets/Images/Creative-Graphic-Design-Icons-for-Every-Project.svg";
import fetureVideoEdit from "../../assets/Images/Powerful-Video-Editing-Icons for Your Projectsn.svg";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Fetures = () => {
  const [doAnimation, setDoAnimation] = useState();

  const animateFeture = {
    intial: {
      opacity: 1,
      y: 100,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    animate: {
      opacity: 1,
      y: "0%",
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      const isSmall = window.innerWidth < 960;

      setDoAnimation(
        isSmall ? window.scrollY >= 1 * 10 : window.scrollY >= 5 * 22
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial="intial"
      animate={doAnimation ? "animate" : "initial"}
      variants={animateFeture}
      className="w-[100%]  mx-auto -mt-24 md:-mt-30 lg:-mt-36 mb-8 py-5 md:py-0 relative z-50  px-2">
      <div className="bg-[#F9FAFB] grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-5  rounded  shadow-feture font-flow">
        <div
          className={`${HomeCss.feture__box} text-center text-pretty px-4  lg:px-6 font-flow py-4 md:py-10 lg:py-12 `}>
          <div
            className={`${HomeCss.img__box}  mb-4 grid place-items-center mx-auto`}>
            <img
              loading="lazy"
              className="max-w-[70px]"
              src={fetureWeb}
              alt="web-devolopment-feture"
            />
          </div>
          <h4 className="font-bold text-base my-4 ">Web Devlopment</h4>

          <p className="w-full text-pretty break-words sm:w-4/5 mx-auto  md:w-full lg:w-full">
            Ignite your brand&apos;s visual identity with our graphic design
            agency&apos;s expertise in crafting stunning logos, branding
            materials, and marketing collateral.
          </p>
        </div>
        <div
          className={`${HomeCss.feture__box} text-center text-pretty px-4  lg:px-6 font-flow py-4 md:py-10 lg:py-12 md:border-x-2 md:border-dashed`}>
          <div
            className={`${HomeCss.img__box}  mb-4  grid place-items-center mx-auto`}>
            <img
              loading="lazy"
              className="max-w-[70px]"
              src={fetureGraphics}
              alt="graphic-design-feture"
            />
          </div>
          <h4 className="font-bold text-base my-4">Graphics Design</h4>

          <p className="w-full text-pretty break-words sm:w-4/5 mx-auto  md:w-full lg:w-full">
            Ignite your brand&apos;s visual identity with our graphic design
            agency&apos;s expertise in crafting stunning logos, branding
            materials, and marketing collateral.
          </p>
        </div>
        <div
          className={`${HomeCss.feture__box} text-center text-pretty px-4  lg:px-6 font-flow py-4 md:py-10 lg:py-12 `}>
          <div
            className={`${HomeCss.img__box}  mb-4  grid place-items-center mx-auto`}>
            <img
              loading="lazy"
              className="max-w-[60px] "
              src={fetureVideoEdit}
              alt="video-editing-feture"
            />
          </div>
          <h4 className="font-bold text-base my-4">Video Edit</h4>

          <div className="overflow-hidden">
            <p className="w-full text-pretty break-words sm:w-4/5 mx-auto  md:w-full lg:w-full">
              Ignite your brand&apos;s visual identity with our graphic design
              agency&apos;s expertise in crafting stunning logos, branding
              materials, and marketing collateral.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Fetures;

{
  /* <AnimatePresence>
  {isVideoHovered && (
    <motion.div
      className="overflow-hidden"
      initial="initial"
      animate={isVideoHovered ? "animate" : "intial"}
      exit="exit"
      variants={reveal}>
      <p className="w-full text-pretty break-words sm:w-4/5 mx-auto  md:w-full lg:w-full">
        Ignite your brand&apos;s visual identity with our graphic design
        agency&apos;s expertise in crafting stunning logos, branding materials,
        and marketing collateral.
      </p>
    </motion.div>
  )}
</AnimatePresence>; */
}
