import { NavLink } from "react-router-dom";
import HomeCss from "../../assets/CSS/Home.module.css";
import videoBgL from "../../assets/Video/heroBg_landscape.webm";
import videoBgP from "../../assets/Video/heroBg_portrait.webm";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Header = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isSmallScreen = innerWidth < 960;

  return (
    <header
      ref={ref}
      className={`${HomeCss.header_bg}  relative w-full py-16 px-0 overflow-hidden  h-[110vh] grid place-items-center`}>
      <div className="min-w-[100%] md:min-w-0 md:md:max-w-[960px] lg:max-w-[1280px]  py-12 grid place-items-center  text-center font-cardo text-balance z-[50]">
        <h1 className=" relative text-white md:-mt-[0px] lg:-mt-[50px]  md:mb-[10px] lg:mb-[20px] text-[32px] sm:text-[40px] md:text-[45px] font-extrabold my-2 px-1  uppercase tracking-widest text-pretty break-words ">
          Digital Site Pro <br />
          Studio <span className={`${HomeCss.gradient_text}`}>Live</span>
        </h1>
        <p className="px-1 my-4 md:my-2 lg:my-4 capitalize max-w-[380px] sm:max-w-[750px]  text-sm sm:text-base md:text-xl text-white font-normal text-balacne">
          Experience the joy of collaborative creativity with us, where every
          moment sparks magic for our beloved customers.
        </p>
        <div className="flex flex-wrap mt-10 md:mt-10 lg:mt-20   text-white items-center justify-center ">
          <NavLink
            className={`${HomeCss.text_shadow} md:text-xl rounded-md mx-4 bg-transparent py-3 px-8  border-2  border-purple-bright hover:bg-transparent transition-colors duration-200 ease-linear font-nav  hover:text-purple-bright `}
            to="/contact">
            Contact Us
          </NavLink>
          {/* <NavLink
            className={`${HomeCss.text_shadow} md:text-xl mx-4 bg-transparent px-4 py-3 border-2 border-white/80 text-purple-bright hover:border-purple-bright hover:text-purple-bright transition-colors duration-200 ease-linear  font-nav rounded-tl-lg rounded-br-lg font-bold`}
            to="/services ">
            Get Started
          </NavLink> */}
        </div>
      </div>
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
