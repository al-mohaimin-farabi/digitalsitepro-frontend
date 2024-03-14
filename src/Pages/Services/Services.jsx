import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faChartLine,
  faClapperboard,
  faPalette,
  faBullhorn,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import Footter from "../../Components/Footer";

const Services = () => {
  return (
    <>
      <div className="md:max-w-[960px] lg:max-w-[1280px] mx-auto mt-[130px] py-2 px-3 md:p-2 font-inter my-8">
        <h2 className="text-primary text-2xl md:text-3xl uppercase font-inter tracking-wide mb-2">
          Digital Site Pro Services
        </h2>
        <p className="text-gray-600 font-inter  mb-4 text-lg flex items-center">
          Make your dream project with us
          <span className="ml-2 w-[20px] h-[2px] bg-gray-600 block"></span>
        </p>
        <div className="grid  grid-cols-1 md:grid-cols-3 mt-5 gap-5">
          <div className="py-4 px-6 text-left text-balance bg-gray-100 rounded">
            <FontAwesomeIcon
              className="text-primary/80 font-extrabold text-4xl"
              icon={faCode}
            />

            <h4 className="text-primary/80 text-lg font-bold my-4">
              Web Deblopment
            </h4>
            <p className="w-full sm:w-4/5 mx-auto md:w-full text-balance  text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
              suscipit eveniet itaque sed quasi ullam accusamus iusto,
              praesentium amet vitae.
            </p>
            <NavLink
              className="mt-6 block underline font-normal text-base tracking-wide text-gray-800"
              to="/services/webdevelopment">
              View Work
            </NavLink>
          </div>
          <div className="py-4 px-6 text-left text-balance bg-gray-100  rounded ">
            <FontAwesomeIcon
              className="text-primary/80 font-extrabold text-4xl"
              icon={faPalette}
            />

            <h4 className="text-primary/80 text-lg font-bold my-4">
              Graphics Design
            </h4>
            <p className=" text-base my-2 w-full sm:w-4/5 mx-auto md:w-full text-balance text-gray-600 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
              suscipit eveniet itaque sed quasi ullam accusamus iusto,
              praesentium amet vitae.
            </p>
            <NavLink
              className="mt-6 block underline font-normal text-base tracking-wide text-gray-800"
              to="/services/graphicsdesign?category=all">
              View Work
            </NavLink>
          </div>
          <div className="py-4 px-6 text-left text-balance bg-gray-100 rounded ">
            <FontAwesomeIcon
              className="text-primary/80 font-extrabold text-4xl"
              icon={faClapperboard}
            />

            <h4 className="text-primary/80 text-lg font-bold my-4">
              Video Editing
            </h4>
            <p className="w-full sm:w-4/5 mx-auto md:w-full text-balance text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
              suscipit eveniet itaque sed quasi ullam accusamus iusto,
              praesentium amet vitae.
            </p>
            <NavLink
              className="mt-6 block underline font-normal text-base tracking-wide text-gray-800"
              to="videoedit">
              View Work
            </NavLink>
          </div>
          <div className="py-4 px-6 text-left text-balance bg-gray-100 rounded">
            <FontAwesomeIcon
              className="text-primary/80 font-extrabold text-4xl"
              icon={faChartLine}
            />

            <h4 className="text-primary/80 text-lg font-bold my-4">SEO</h4>
            <p className="w-full sm:w-4/5 mx-auto md:w-full text-balance text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
              suscipit eveniet itaque sed quasi ullam accusamus iusto,
              praesentium amet vitae.
            </p>
            <NavLink
              className="mt-6 block underline font-normal text-base tracking-wide text-gray-800"
              to="seo">
              View Work
            </NavLink>
          </div>
          <div className="py-4 px-6 text-left text-balance bg-gray-100 rounded ">
            <FontAwesomeIcon
              className="text-primary/80 font-extrabold text-4xl -rotate-45"
              icon={faBullhorn}
            />

            <h4 className="text-primary/80 text-lg font-bold my-4">
              Degital Markting
            </h4>
            <p className="w-full sm:w-4/5 mx-auto md:w-full text-balance text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
              suscipit eveniet itaque sed quasi ullam accusamus iusto,
              praesentium amet vitae.
            </p>
            <NavLink
              className="mt-6 block underline font-normal text-base tracking-wide text-gray-800"
              to="degitalmarkting">
              View Work
            </NavLink>
          </div>
          <div className="py-4 px-6 text-left text-balance bg-gray-100 rounded ">
            <FontAwesomeIcon
              className="text-primary/80 font-extrabold text-4xl "
              icon={faPenToSquare}
            />

            <h4 className="text-primary/80 text-lg font-bold my-4">
              Content Writing
            </h4>
            <p className="w-full sm:w-4/5 mx-auto md:w-full text-balance text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
              suscipit eveniet itaque sed quasi ullam accusamus iusto,
              praesentium amet vitae.
            </p>
            <NavLink
              className="mt-6 block underline font-normal text-base tracking-wide text-gray-800"
              to="contentwriting">
              View Work
            </NavLink>
          </div>
        </div>
      </div>
      <Footter />
    </>
  );
};

export default Services;
