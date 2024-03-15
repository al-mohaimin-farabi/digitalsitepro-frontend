import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const tabs = [
  { id: "all", label: "All" },
  { id: "website", label: "Website" },
  { id: "graphics_design", label: "Graphics Design" },
  { id: "video_editing", label: "Video Editing" },
];

const Ourwork = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [allWorks, setAllWorks] = useState([]);
  const [filteredWorks, setFilteredWorks] = useState([]);

  const handleClick = (id) => {
    setActiveTab(id);
  };

  const fetchWork = async () => {
    const data = await fetch("/graphics.json");
    const work = await data.json();
    setAllWorks(work);
    setFilteredWorks(work);
  };

  useEffect(() => {
    fetchWork();
  }, []);

  useEffect(() => {
    if (activeTab === "all") {
      setFilteredWorks(allWorks);
    } else {
      console.log(activeTab);
      const filtered = allWorks.filter((work) => work.type === activeTab);
      setFilteredWorks(filtered);
    }
  }, [activeTab, allWorks]);

  return (
    <div className="my-5 md:my-5 py-2 overflow-hidden px-2">
      <div className="text-center space-x-2 space-y-1 py-2 ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleClick(tab.id)}
            className={`capitalize py-2 px-2 md:px-6  rounded-full relative ${
              activeTab === tab.id
                ? "text-white bg-primary"
                : "text-black hover:text-black/50"
            }`}>
            {tab.label === "All"
              ? "\u00A0\u00A0\u00A0\u00A0" +
                tab.label +
                "\u00A0\u00A0\u00A0\u00A0"
              : tab.label}
          </button>
        ))}
      </div>

      <motion.div
        transition={{ duration: 0.3 }}
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-5 py-2 gap-2 ">
        {filteredWorks.map((work) => (
          <Mockup key={work.id} work={work} />
        ))}
      </motion.div>
    </div>
  );
};

export default Ourwork;

const Mockup = ({ work }) => {
  const { buttons, name, img, subcategory } = work;

  return (
    <AnimatePresence>
      <motion.div
        transition={{ duration: 0.3 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        layout
        className="w-full mb-3">
        <div className="group overflow-hidden pointer rounded cursor-pointer">
          <img
            loading="lazy"
            className="rounded w-full h-48 group-hover:scale-110 transition-all duration-300"
            src={img}
            alt=""
          />
        </div>
        <div>
          <h2 className="text-xl mt-2 font-inter min-h-[56px]">{name}</h2>
          <ul className="flex flex-wrap items-center space-x-2 w-full mt-4">
            {buttons.map((button, index) => (
              <li className="my-2" key={index}>
                <NavLink
                  to={`/services/graphicsdesign/?category=${subcategory.toLowerCase()}`}
                  className="p-2 hideState dashboard_tab border border-purple-bright rounded-[100px] px-4 py-2 text-sm grid place-content-center">
                  {button}
                </NavLink>
              </li>
            ))}
            <li className="flex my-2">
              <Link
                className="rounded-[100px] px-4 py-2 text-sm"
                to="/services/graphicsdesign">
                More <FontAwesomeIcon className="ml-1" icon={faArrowRight} />
              </Link>
            </li>
          </ul>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

Mockup.propTypes = {
  work: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    buttons: PropTypes.array.isRequired,
    subcategory: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};
