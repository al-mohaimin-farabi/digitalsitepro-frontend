import { NavLink } from "react-router-dom";
import logo from "../assets/Images/logo_lite.svg";
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
const Footter = () => {
  return (
    <div className="bg-black px-2 mt-10 md:mt-0">
      <div className=" py-8  md:max-w-[960px] lg:max-w-[1280px] mx-auto px-2">
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
          <div className="py-2 px-1 md:py-2 md:px-0 lg:p-2">
            <p className="uppercase font-bold text-white h-[70px] grid items-center">
              Services <br />
              &nbsp;
            </p>
            <ul className="space-y-4 ">
              <li className="text-white text-base hover:scale-110    origin-left cursor-pointer transition-transform">
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
          <div className="py-2 px-1 md:py-2 md:px-4 lg:p-2">
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
