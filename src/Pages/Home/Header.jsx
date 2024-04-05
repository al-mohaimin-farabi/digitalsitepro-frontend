import { NavLink } from "react-router-dom";
import HomeCss from "../../assets/CSS/Home.module.css";
import videoBgL from "../../assets/Video/heroBg_landscape.webm";
import videoBgP from "../../assets/Video/heroBg_portrait.webm";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const titles = ["future", "new", "value"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    const intervalId = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2500);

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isSmallScreen = innerWidth < 960;

  return (
    <header
      ref={ref}
      className={`bg-black  relative w-full py-16 px-0 overflow-hidden  h-[100svh] md:h-[110vh] grid place-items-center`}>
      <motion.div
        layout
        className="min-w-[100%] md:min-w-[1020px] md:max-w-[1020px] lg:max-w-[1280px]  py-12 grid place-items-center  text-center font-inter text-balance z-[50]">
        {/* <h1 className=" relative text-white md:-mt-[0px] lg:-mt-[50px]  md:mb-[10px] lg:mb-[20px] text-[32px] sm:text-[40px] md:text-[45px] font-extrabold my-2 px-1  uppercase tracking-widest text-pretty break-words ">
          Digital Site Pro <br />
          Studio <span className={`${HomeCss.gradient_text}`}>Live</span>
        </h1> */}

        <TypeAnimation
          preRenderFirstString={true}
          wrapper="h1"
          sequence={[
            "Building",
            500,
            "Building Digital", //  Continuing previous Text
            500,
            "Building Digital Products",
            500,
            "Building Digital Products That ",
            500,
            "Building Digital Products That Transform",
            500,
            "Building Digital Products That Transform Businesses",
            500,
          ]}
          className="md:min-w-[720px] md:max-w-[720px] block text-white md:-mt-[0px] lg:-mt-[50px]  md:mb-[10px] lg:mb-[20px] text-[25px] sm:text-[40px] md:text-[45px] font-extrabold my-2 px-1   tracking-wide  text-wrap break-words "
          repeat={Infinity}
        />

        <p className="px-1 flex  my-4 md:my-2 lg:my-4 capitalize max-w-[380px] lg:min-w-[50px] sm:max-w-[750px] text-xl  md:text-3xl text-gray-400 font-bold text-left text-balance">
          We Think&nbsp;
          <motion.span
            initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and translate 20px down
            animate={{ opacity: 1, y: 0 }} // Fade in and translate to initial position
            exit={{ opacity: 0, y: -50 }} // Fade out and translate 20px up on exit
            transition={{ duration: 0.5 }}
            key={currentTitleIndex}
            className="text-purple-bright block w-[70px] text-left">
            {titles[currentTitleIndex]}
          </motion.span>
        </p>
        <div className="flex flex-wrap mt-10 md:mt-10 lg:mt-20   text-white items-center justify-center ">
          <NavLink
            className={`${HomeCss.text_shadow} md:text-bas font-bold rounded-md mx-4 bg-transparent py-3 min-w-[180px] px-6  border-2  border-purple-bright hover:bg-transparent transition-colors duration-200 ease-linear font-nav  hover:text-purple-bright `}
            to="/contact">
            Let&apos;s Talk
          </NavLink>
          {/* <NavLink
            className={`${HomeCss.text_shadow} md:text-xl mx-4 bg-transparent px-4 py-3 border-2 border-white/80 text-purple-bright hover:border-purple-bright hover:text-purple-bright transition-colors duration-200 ease-linear  font-nav rounded-tl-lg rounded-br-lg font-bold`}
            to="/services ">
            Get Started
          </NavLink> */}
        </div>
      </motion.div>
      {isSmallScreen ? (
        <motion.video
          style={{ y }}
          className="absolute inset-0  z-[20] h-[100%] w-full object-cover"
          src={videoBgP}
          autoPlay
          loop
          muted></motion.video>
      ) : (
        <motion.video
          style={{ y }}
          className="absolute inset-0  z-[20] h-[100%] w-full object-cover"
          src={videoBgL}
          autoPlay
          loop
          muted></motion.video>
      )}
    </header>
  );
};

export default Header;
