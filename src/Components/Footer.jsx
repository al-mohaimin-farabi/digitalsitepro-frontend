import { NavLink } from "react-router-dom";
import logo from "../assets/Images/logo_lite.svg";
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
const Footter = () => {
  const [isServicesActive, setIsServicesActive] = useState(false);
  const [isQuickLinkActive, setIsQuickLinkActive] = useState(false);

  const scale = {
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3 },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="bg-black px-3 md:px-2  md:mt-0">
      <div className=" py-8  md:max-w-[960px] lg:max-w-[1280px] mx-auto px-1">
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-4 text-white">
          <div className="flex flex-col justify-start items-start py-2 px-1 md:px-0 md:col-span-2 lg:col-span-1">
            <img className="max-w-16" src={logo} alt="" />

            <p className="text-sm my-2 py-5 font-hero text-pretty text-white md:pr-3 lg:pr-0">
              Unleash boundless creativity with our award-winning global digital
              agency. From bustling metropolises to serene landscapes, we craft
              unforgettable brand experiences worldwide. Join us on the
              forefront of innovation, where imagination knows no limits
            </p>
          </div>
          {/* footer mobile */}
          <motion.div
            layout
            className="md:hidden py-2 px-1 md:py-2 md:px-0 lg:p-2">
            <button
              className={`uppercase font-bold text-white py-4 border-b-[1px] w-full text-left mb-5 flex items-center justify-between ${
                isServicesActive ? "border-purple-bright" : "border-gray-500"
              }`}
              onClick={() => setIsServicesActive(!isServicesActive)}>
              <span>Services</span>
              <motion.span
                initial={false}
                animate={{ rotate: isServicesActive ? 180 : 0 }}
                transition={{ duration: 0.3 }}>
                <IoIosArrowDown
                  size={25}
                  className={`${
                    isServicesActive && "text-purple-bright"
                  } font-extrabold  mr-1 `}
                />
              </motion.span>
            </button>
            <AnimatePresence>
              {isServicesActive && (
                <motion.div
                  layout
                  initial="closed"
                  animate={isServicesActive ? "open" : "closed"}
                  exit="closed"
                  variants={scale}
                  className="overflow-hidden ">
                  <ul className="space-y-4   ">
                    <li className="text-white text-base hover:scale-110   origin-left cursor-pointer transition-transform">
                      <a href="" target="blank">
                        Custom Web & App Development
                      </a>
                    </li>
                    <li className="text-white text-base hover:scale-110    origin-left cursor-pointer transition-transform">
                      <a href="" target="blank">
                        Ui/Ux Design
                      </a>
                    </li>
                    <li className="text-white text-base hover:scale-110    origin-left cursor-pointer transition-transform">
                      <a href="" target="blank">
                        SEO Service
                      </a>
                    </li>
                    <li className="text-white text-base hover:scale-110    origin-left cursor-pointer transition-transform">
                      <NavLink to="/services/graphicsdesign">
                        Graphics Design
                      </NavLink>
                    </li>
                    <li className="text-white text-base hover:scale-110    origin-left cursor-pointer transition-transform">
                      <a href="" target="blank">
                        Content Writing
                      </a>
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            layout
            className="md:hidden py-2 px-1 md:py-2 md:px-0 lg:p-2">
            <button
              className={`uppercase font-bold text-white py-4 border-b-[1px] mb-5 w-full text-left flex items-center justify-between ${
                isQuickLinkActive ? "border-purple-bright" : "border-gray-500"
              }`}
              onClick={() => setIsQuickLinkActive(!isQuickLinkActive)}>
              <span>Quick Links</span>
              <motion.span
                initial={false}
                animate={{ rotate: isQuickLinkActive ? 180 : 0 }}
                transition={{ duration: 0.3 }}>
                <IoIosArrowDown
                  size={25}
                  className={`${
                    isQuickLinkActive && "text-purple-bright"
                  } font-extrabold  mr-1 `}
                />
              </motion.span>
            </button>
            <AnimatePresence>
              {isQuickLinkActive && (
                <motion.div
                  layout
                  initial="closed"
                  animate={isQuickLinkActive ? "open" : "closed"}
                  exit="closed"
                  variants={scale}
                  className="overflow-hidden ">
                  <ul className="space-y-4 ">
                    <li className="text-white text-base hover:scale-110    origin-left cursor-pointer transition-transform">
                      <NavLink
                        className="hideState dashboard_tab "
                        to="/aboutus">
                        About Us
                      </NavLink>
                    </li>
                    <li className="text-white text-base hover:scale-110    origin-left cursor-pointer transition-transform">
                      <NavLink
                        className="hideState dashboard_tab "
                        to="/services">
                        Our Work
                      </NavLink>
                    </li>
                    <li className="text-white text-base hover:scale-110    origin-left cursor-pointer transition-transform">
                      <NavLink
                        className="hideState dashboard_tab "
                        to="/testimonial">
                        Testimonial
                      </NavLink>
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* footer large screen */}
          <div className="hidden md:block py-2 px-1 md:py-2 md:px-0 lg:p-2">
            <p className="uppercase font-bold text-white h-[70px] grid items-center">
              Services <br />
              &nbsp;
            </p>
            <ul className="space-y-4 ">
              <li className="text-white text-base hover:scale-110   origin-left cursor-pointer transition-transform">
                <a href="" target="blank">
                  Custom Web & App Development
                </a>
              </li>
              <li className="text-white text-base hover:scale-110    origin-left cursor-pointer transition-transform">
                <a href="" target="blank">
                  Ui/Ux Design
                </a>
              </li>
              <li className="text-white text-base hover:scale-110    origin-left cursor-pointer transition-transform">
                <a href="" target="blank">
                  SEO Service
                </a>
              </li>
              <li className="text-white text-base hover:scale-110    origin-left cursor-pointer transition-transform">
                <NavLink to="/services/graphicsdesign">Graphics Design</NavLink>
              </li>
              <li className="text-white text-base hover:scale-110    origin-left cursor-pointer transition-transform">
                <a href="" target="blank">
                  Content Writing
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden md:block py-2 px-1 md:py-2 md:px-4 lg:p-2">
            <p className="uppercase font-bold text-white h-[70px] grid items-center">
              Quick Links <br />
              &nbsp;
            </p>
            <ul className="space-y-4 ">
              <li className="text-white text-base hover:scale-110    origin-left cursor-pointer transition-transform">
                <NavLink className="hideState dashboard_tab " to="/aboutus">
                  About Us
                </NavLink>
              </li>
              <li className="text-white text-base hover:scale-110    origin-left cursor-pointer transition-transform">
                <NavLink className="hideState dashboard_tab " to="/services">
                  Our Work
                </NavLink>
              </li>
              <li className="text-white text-base hover:scale-110    origin-left cursor-pointer transition-transform">
                <NavLink className="hideState dashboard_tab " to="/testimonial">
                  Testimonial
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="py-2 px-1 md:py-2 md:col-span-2 lg:col-span-1">
            <p className="uppercase font-bold text-white h-[70px] grid items-center">
              Contact <br />
              &nbsp;
            </p>
            <ul className="space-y-4 ">
              <li className="text-white text-base hover:scale-110    origin-left cursor-pointer transition-transform">
                <a href="mailto:digitalsitepro@gmail.com">
                  digitalsitepro@gmail.com
                </a>
              </li>
              <li className="text-white text-base cursor-pointer transition-transform flex flex-wrap">
                <span>Bangladesh:</span>
                <a
                  className="hover:scale-[1.03] origin-left break-words"
                  href="tel:+8801720867938"
                  target="blank">
                  +8801720867938,
                </a>
                <a
                  className=" hover:scale-[1.03] origin-left break-words"
                  href="tel:+8801720867938"
                  target="blank">
                  +8801782310773,
                </a>
                <a
                  className="hover:scale-[1.03] origin-left break-words"
                  href="tel:+8801720867938"
                  target="blank">
                  +8801609678851,
                </a>
                <a
                  className="hover:scale-[1.03] origin-left break-words"
                  href="tel:+8801720867938"
                  target="blank">
                  +8801881608076
                </a>
              </li>
            </ul>
            <ul className="flex space-x-4 mt-6">
              <li className="grid place-content-center w-[40px] h-[40px] bg-white hover:bg-primary rounded-full cursor-pointer   text-gray-900 hover:text-white transition-all duration-200 ease-linear">
                <a href="" target="blank">
                  <FaTwitter />
                </a>
              </li>
              <li className="grid place-content-center w-[40px] h-[40px] bg-white hover:bg-primary rounded-full cursor-pointer   text-gray-900 hover:text-white transition-all duration-200 ease-linear">
                <a href="" target="blank">
                  <FaFacebookF />
                </a>
              </li>
              <li className="grid place-content-center w-[40px] h-[40px] bg-white hover:bg-primary rounded-full cursor-pointer   text-gray-900 hover:text-white transition-all duration-200 ease-linear">
                <a href="" target="blank">
                  <FaInstagram />
                </a>
              </li>
              <li className="grid place-content-center w-[40px] h-[40px] bg-white hover:bg-primary rounded-full cursor-pointer   text-gray-900 hover:text-white transition-all duration-200 ease-linear">
                <a href="" target="blank">
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footter;
