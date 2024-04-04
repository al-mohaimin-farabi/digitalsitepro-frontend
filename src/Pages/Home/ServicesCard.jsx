"use client";

import PropTypes from "prop-types";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";
import HomeCss from "../../assets/CSS/Home.module.css";
import { NavLink } from "react-router-dom";

const ServicesCard = ({ item }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="grid place-content-center ">
      <div
        className={`relative  grid p-3 md:p-1 grid-place-content-center grid-cols-1 text-center md:px-[40px] bg-[#222121] rounded-3xl text-white font-inter border-[4px] border-[#6B3D96] py-[30px]`}>
        <img
          className="my-4 w-[90px] h-[72px] place-self-center"
          src={item.img}
          alt=""
        />

        <h2 className="my-2 font-bold text-2xl">{item?.heading}</h2>
        <p className="my-4 text-sm text-wrap min-h-[110px]">{item?.peragraph}</p>
        <NavLink
          className={`${HomeCss.service_button} my-5 place-self-center rounded-full font-bold px-10 py-4 block w-max text-white border-2 border-purple-bright`}
          to={item?.link}>
          <span className={`z-50`}>Read More</span>
        </NavLink>
      </div>
    </motion.div>
  );
};

ServicesCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    heading: PropTypes.string,
    peragraph: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
};

export default ServicesCard;
