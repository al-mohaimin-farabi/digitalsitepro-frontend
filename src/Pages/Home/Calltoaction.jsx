import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import HomeCss from "../../assets/CSS/Home.module.css";
import { NavLink } from "react-router-dom";

const Calltoaction = () => {
  return (
    <div className={` relative mt-5 md:mt-16    text-center font-flow`}>
      <div className={`${HomeCss.overlay} py-6`}>
        <h4 className="my-2 text-white text-2xl md:text-4xl font-extrabold">
          Do You Have Any Project
        </h4>
        <button
          className={` bg-white px-6 md:px-10 py-2 lg:py-4 my-6 font-bold text-purple-bright hover:text-[#fff] hover:bg-transparent border-2 transition-colors duration-200 ease-linear border-purple-bright rounded-full  `}>
          <div className={`${HomeCss.separator} inline`}>
            <NavLink to="Contact">Contact Us</NavLink>
          </div>
          <FontAwesomeIcon className="ml-[12px] " icon={faPaperPlane} />
        </button>
      </div>
    </div>
  );
};

export default Calltoaction;
