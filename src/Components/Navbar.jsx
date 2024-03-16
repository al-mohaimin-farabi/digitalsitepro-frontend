import { AnimatePresence, motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/Images/logo_lite.svg";
import logo_dark from "../assets/Images/logo_dark.svg";
import { IoIosArrowDown, IoMdLogOut } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import NavCss from "../assets/CSS/Navbar.module.css";
import useAuth from "../Hooks/useAuth";
import { HashLink } from "react-router-hash-link";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const navbarRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [serviceActive, setServiceActive] = useState(false);
  // const [testimonialActive, setTestimonialActive] = useState(false);
  const { user, logout } = useAuth();

  const mobileNavVariants = {
    open: {
      opacity: 1,
      x: "0%",
      transition: { duration: 0.3, type: "tween" },
    },
    closed: {
      opacity: 0,
      x: "100%",
      transition: { duration: 0.6, type: "tween" },
    },
  };

  const ulVariant = {
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemsVariant = {
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.2 },
    },
    closed: {
      opacity: 0,
      x: 200,
      transition: { duration: 0.1 },
    },
  };

  const hamburgermenu = {
    top: {
      opacity: 1,
      x: 2,
      rotate: 45,
      transition: { duration: 0.3, type: "tween", ease: "easeOut" },
    },
    mid: {
      opacity: 0,
    },
    bottom: {
      opacity: 1,
      y: 0,
      rotate: -45,
      transition: { duration: 0.3, type: "tween", ease: "easeOut" },
    },
    closed: {
      opacity: 1,
      y: 0,
      x: 0,
      rotate: 0,
      transition: { duration: 0.3, type: "tween", ease: "easeOut" },
    },
    midClose: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.3,
        delay: 0.2,
        type: "tween",
        ease: "easeOut",
      },
    },
  };

  const arrow = {
    open: {
      rotate: 180,
      transition: { duration: 0.3 },
    },
    closed: {
      rotate: 0,
      transition: { duration: 0.3 },
    },
  };

  const scaleSubMenu = {
    open: {
      opacity: 1,
      height: 128,
      transition: { duration: 0.3 },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3 },
    },
  };

  const handeisMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
    setServiceActive(false);
    // setTestimonialActive(false);
  };

  // const handleTestimonilaOpen = () => {
  //   setServiceActive(false);
  //   setTestimonialActive(!testimonialActive);
  // };
  const handlSserviceOpen = () => {
    // setTestimonialActive(false);
    setServiceActive(!serviceActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 4 * 22);
    };

    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setServiceActive(false);
        // setTestimonialActive(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isHomeOrRoot =
    location.pathname !== "/" && location.pathname !== "/home";

  const isNavbarBg = isHomeOrRoot ? NavCss.navbar_bg : "";

  const positionClass = isHomeOrRoot
    ? "fixed top-0 left-0 right-0 z-[999999]"
    : "fixed top-0 left-0 right-0 z-[999999]";

  const scrolled = isScrolled && NavCss.active__bg;

  const isSmall = window.innerWidth < 960;

  return (
    <nav
      ref={navbarRef}
      className={`w-full  py-2 px-4 font-nav  ${
        scrolled ? "text-slate-900" : "text-white"
      }   ${!scrolled && isNavbarBg} ${positionClass} ${isSmall && scrolled} ${
        !isSmall && scrolled
      } ${scrolled && "shadow-lg "}`}>
      <div
        className={` flex md:max-w-[960px] lg:max-w-[1280px] mx-auto h-16 px-2   items-center py-10 my-2 rounded  `}>
        <NavLink
          to="/"
          className="flex justify-start items-center active hideState min-w-[140px]">
          <img
            loading="lazy"
            className="mx-2 max-w-16  "
            src={scrolled ? logo_dark : logo}
            alt="digital site pro logo"
          />
          <div className="hidden">
            <h2 className="font-semibold text-sm">
              DIGITALSITE <br />
            </h2>
            <h2 className="flex font-semibold text-sm">
              PRO
              <p
                className={`ml-1 w-[12px] h-[12px] rounded-full ${NavCss.circle_bg} animate-bounce`}></p>
            </h2>
          </div>
        </NavLink>

        {/* <div className="hidden md:flex justify-start "> */}
        <ul className="hidden w-full md:flex  justify-center space-x-0  sm:space-x-2 md:space-x-2 lg:space-x-8">
          <li className="p-2 text-base flex justify-center items-center ">
            <NavLink className={`${NavCss.menu_hovered}`} to="/">
              Home
            </NavLink>
          </li>

          <li className="p-2 text-base flex justify-start items-center">
            <NavLink className={`${NavCss.menu_hovered}`} to="/aboutus">
              About Us
            </NavLink>
          </li>

          <li className="p-2  text-base relative group cursor-pointer flex  items-center">
            <NavLink
              className={`${NavCss.menu_hovered}  hideState `}
              to="/services">
              Services
            </NavLink>
            <IoIosArrowDown className="transition-all duration-300 group-hover:rotate-180 ml-1 inline-block" />

            <div className="hidden absolute top-10 z-[999999] w-[200px]  py-2 text-black  group-hover:block  ">
              <ul className="bg-gray-200 shadow-lg p-2 rounded-md space-y-1">
                <li className="pl-3 py-2 hover:bg-black hover:text-white rounded-md">
                  <NavLink
                    className=" inline-block w-[100%]"
                    to="/services/webdevelopment">
                    Web Development
                  </NavLink>
                </li>
                <li className="pl-3 py-2 hover:bg-black hover:text-white rounded-md">
                  <NavLink
                    className=" inline-block w-[100%]"
                    to="/services/graphicsdesign/?category=all">
                    Graphics Design
                  </NavLink>
                </li>
                <li className="pl-3 py-2 hover:bg-black hover:text-white rounded-md">
                  <NavLink
                    className=" inline-block w-[100%]"
                    to="/services/videoedit">
                    Video Edit
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>

          <li className=" p-2 text-base relative group cursor-pointer flex items-center">
            <NavLink to="/testimonial" className={`${NavCss.menu_hovered}`}>
              Testimonial
            </NavLink>
            {/* <IoIosArrowDown className="transition-all duration-300 group-hover:rotate-180 ml-1 inline-block" />

              <div className="hidden absolute top-11 z-[999999] w-[150px] mt-2 py-2 text-black  group-hover:block ">
                <ul className="bg-gray-200 p-2 space-y-1 rounded-md w-ful  shadow-lg">
                  <li className="pl-3 py-2 hover:bg-black hover:text-white rounded-md">
                    <NavLink className=" inline-block w-[100%]" to="/demo1">
                      Lorem
                    </NavLink>
                  </li>
                  <li className="pl-3 py-2 hover:bg-black hover:text-white rounded-md">
                    <NavLink className=" inline-block w-[100%]" to="/demo2">
                      Ipsam
                    </NavLink>
                  </li>
                  <li className="pl-3 py-2 hover:bg-black hover:text-white rounded-md">
                    <NavLink className=" inline-block w-[100%]" to="/demo3">
                      Ammet
                    </NavLink>
                  </li>
                </ul>
              </div> */}
          </li>
        </ul>
        <ul className="hidden md:flex justify-end space-x-0  sm:space-x-2 md:space-x-2 lg:space-x-8 min-w-[140px] max-w-[140px]">
          <li className="  text-base flex items-center relative group cursor-pointer">
            {user?.email && user.emailVerified ? (
              <>
                <NavLink as={HashLink} className="hideState text-[35px] pr-0">
                  {user?.photoURL ? (
                    <img
                      src={user?.photoURL}
                      className="w-[45px] h-[45px] rounded-full border-2 "
                    />
                  ) : (
                    <FaRegUserCircle />
                  )}
                </NavLink>
                <div className="hidden absolute right-2 top-10   z-[999999] w-[170px] mt-2 py-2 text-black  group-hover:block  ">
                  <ul className="bg-gray-200 p-2 rounded-md w-full  shadow-lg space-y-1">
                    <li className="pl-3 py-2 hover:bg-black hover:text-white rounded-md ">
                      <NavLink
                        className="inline-block w-[100%]"
                        to="/dashboard">
                        Dashboard
                      </NavLink>
                    </li>
                    <li className="pl-3 py-2 hover:bg-black hover:text-white rounded-md ">
                      <NavLink
                        className="inline-block w-[100%]"
                        to="/makeproposal">
                        Make Proposal
                      </NavLink>
                    </li>
                    <li className="pl-3 py-2 hover:bg-black hover:text-white rounded-md">
                      <button
                        onClick={logout}
                        className="hideState flex items-center gap-1  w-[100%]">
                        Logout <IoMdLogOut />
                      </button>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <NavLink
                to="/login"
                className={`text-base font-bold tracking-wide text-center  ${
                  isScrolled ? "text-purple-bright" : "text-white"
                }  border-2 border-purple-bright hover:text-[#ffffff] hover:bg-purple-bright  py-2 px-6  min-w-[140px] transition-colors duration-200 ease-linear  hideState rounded-md`}>
                Login
              </NavLink>
            )}
          </li>
        </ul>
        {/* </div> */}

        <button
          onClick={handeisMenuOpen}
          className="ml-4  md:hidden text-4xl relative z-[555555] w-[35px]">
          <motion.div
            variants={hamburgermenu}
            animate={isMenuOpen ? "top" : "closed"}
            className={`w-[100%] h-[4px] my-[8px] ${
              scrolled && !isMenuOpen ? "bg-slate-900" : "bg-white"
            }  rounded-full origin-top-left`}></motion.div>
          <motion.div
            variants={hamburgermenu}
            animate={isMenuOpen ? "mid" : "midClose"}
            className={`w-[100%] h-[4px] my-[8px] ${
              scrolled && !isMenuOpen ? "bg-slate-900" : "bg-white"
            }    rounded-full`}></motion.div>
          <motion.div
            variants={hamburgermenu}
            animate={isMenuOpen ? "bottom" : "closed"}
            className={`w-[100%] h-[4px] my-[8px] ${
              scrolled && !isMenuOpen ? "bg-slate-900" : "bg-white"
            }   rounded-full origin-top-left`}></motion.div>
        </button>
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate={isMenuOpen ? "open" : "closed"}
            exit="closed"
            variants={mobileNavVariants}
            className={`md:hidden  ${NavCss.navbar_bg} text-white z-40  
           fixed top-0 right-0 left-[calc(40%-10px)] flex flex-col items-end  h-[calc(100vh+10px)] px-4 py-4 `}>
            <motion.ul
              variants={ulVariant}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col space-y-4 md:hidden w-full p-2 mt-20">
              <motion.li
                variants={itemsVariant}
                className="mx-2 p-2 text-base w-full">
                <NavLink to="/">Home</NavLink>
              </motion.li>
              <motion.li
                variants={itemsVariant}
                className="mx-2 p-2 text-base w-full">
                <NavLink to="/aboutus">AboutUs</NavLink>
              </motion.li>
              <motion.li
                variants={itemsVariant}
                className="mx-2 p-2 text-base overflow-hidden w-full">
                <NavLink
                  to="/services"
                  onClick={handlSserviceOpen}
                  className="flex justify-start items-center  ">
                  Services
                  <motion.span
                    variants={arrow}
                    animate={serviceActive ? "open" : "closed"}
                    className="ml-1 ">
                    <IoIosArrowDown></IoIosArrowDown>
                  </motion.span>
                </NavLink>

                <AnimatePresence>
                  {serviceActive && (
                    <motion.div
                      initial="closed"
                      animate={serviceActive ? "open" : "closed"}
                      exit="closed"
                      variants={scaleSubMenu}
                      className=" mt-2  text-black rounded-md shadow-lg origin-top bg-gray-200 w-[100%]">
                      <ul className="p-1 rounded-md w-full">
                        <li className="p-2 hover:bg-primary hover:text-white rounded-md">
                          <NavLink to="/demo1">Web Development</NavLink>
                        </li>
                        <li className="p-2 hover:bg-primary hover:text-white rounded-md">
                          <NavLink to="/services/graphicsdesign/?category=all">
                            Graphics Desing
                          </NavLink>
                        </li>
                        <li className="p-2 hover:bg-primary hover:text-white rounded-md">
                          <NavLink to="/demo3">Video Editing</NavLink>
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
              <motion.li
                variants={itemsVariant}
                className="mx-2 p-2 text-base w-full">
                <NavLink to="/testimonial">Testimonial</NavLink>
              </motion.li>

              <AnimatePresence>
                {user.email && user?.emailVerified && (
                  <motion.li
                    variants={itemsVariant}
                    className="mx-2 p-2 text-base w-full">
                    <NavLink to="/dashboard/accountsetting">Dashboard</NavLink>
                  </motion.li>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {user.email && user?.emailVerified && (
                  <motion.li
                    variants={itemsVariant}
                    className="mx-2 p-2 text-base w-full">
                    <NavLink to="/makeproposal">Make Proposal</NavLink>
                  </motion.li>
                )}
              </AnimatePresence>
              <motion.li variants={itemsVariant} className="mx-2 p-2 text-base">
                {user?.email && user?.emailVerified ? (
                  <NavLink
                    to={HashLink}
                    className="hideState w-full text-base  text-purple-bright  border-2 border-purple-bright hover:text-[#ffffff] hover:bg-purple-bright  py-2 px-4 transition-colors duration-200 ease-linear block text-center rounded-md"
                    onClick={logout}>
                    Logout
                  </NavLink>
                ) : (
                  <NavLink
                    to="/login"
                    className="hideState w-full text-base  text-purple-bright rounded-md border-2 border-purple-bright hover:text-[#ffffff] hover:bg-purple-bright  py-2 px-4 transition-colors duration-200 ease-linear block text-center ">
                    Login
                  </NavLink>
                )}
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
