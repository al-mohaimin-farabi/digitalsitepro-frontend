import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const GraphicsDesign = () => {
  const tabs = [
    { id: 1, label: "All", category: "all" },
    { id: 2, label: "Flayer Design", category: "flayerdesign" },
    { id: 3, label: "Logo Design", category: "logodesign" },
  ];

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");

  const [activeTab, setActiveTab] = useState(
    tabs.find((tab) => tab.category === category)?.id || tabs[0].id
  );
  const [designs, setDesigns] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFetched, setIsFetched] = useState(true);
  const [imgPath, setImgPath] = useState("");
  const [filteredDesigns, setFilteredDesigns] = useState([]);
  const [galleryImg, setGalleryImg] = useState([]);
  // const [activeImg, setActiveImg] = useState([]);
  const modalWrapperRef = useRef(null);
  const fetchWork = async () => {
    const res = await fetch("/graphics.json");
    const data = await res.json();
    setDesigns(data.filter((work) => work.type === "graphics_design"));
    setFilteredDesigns(
      category === "all" || category == null || activeTab === 1
        ? data.filter((work) => work.type === "graphics_design")
        : data.filter(
            (work) =>
              work.type === "graphics_design" && work.subcategory === category
          )
    );
  };

  const handleTabChange = (id, category) => {
    setActiveTab(id);
    setFilteredDesigns(
      category === "all"
        ? designs.filter((work) => work.type === "graphics_design")
        : designs.filter((design) => design.subcategory === category)
    );
  };

  const showImage = (path, gallery) => {
    setIsModalOpen(true);
    setImgPath(path);
    setGalleryImg(gallery);
  };

  useEffect(() => {
    if (category === "all") {
      setFilteredDesigns(designs);
      setActiveTab(tabs[0].id);
    }
    if (isFetched) {
      fetchWork();
      setIsFetched(false);
    }

    function handleClickOutside(event) {
      if (
        modalWrapperRef.current &&
        !modalWrapperRef.current.contains(event.target)
      ) {
        // Clicked outside of modal inner, close modal
        setIsModalOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [category]);

  return (
    <>
      {isModalOpen && (
        <div className="bg-black/30 w-[100vw] h-[100vh] inset-0  fixed z-[5555555] grid place-content-center  ">
          <div
            ref={modalWrapperRef}
            className=" w-[calc(100%-20px)] mx-auto md:mx-0 sm:min-w-[320px] sm:max-w-[450px] md:min-w-[420px] md:max-w-[480px] lg:max-w-[580px]   bg-white shadow-lg grid place-content-center py-5 rounded px-2">
            <img
              // loading="lazy"
              className=" aspect-[4/3]   rounded  "
              src={imgPath}
              alt=""
            />
            <div className="mt-4 flex flex-wrap  justify-start gap-2 ">
              {isModalOpen &&
                galleryImg.map((img, index) => (
                  <img
                    // loading="lazy"
                    className={`max-w-[100px] cursor-pointer ${
                      imgPath === img
                        ? "border-2 border-purple-bright/80"
                        : "border-2 border-transparent"
                    } rounded`}
                    key={index}
                    onClick={() => setImgPath(img)}
                    src={img}
                    alt=""
                  />
                ))}
            </div>

            <button
              className="mt-5 grid place-content-center border border-purple-bright/60 rounded-full w-[40px] h-[40px] mx-auto "
              onClick={() => setIsModalOpen(false)}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        </div>
      )}
      <div className=" mt-[130px]"></div>

      <div className="md:max-w-[960px] lg:max-w-[1280px] mx-auto my-10  py-2 px-3 md:px-2 md:py-0  ">
        <div className="grid grid-cols-1 sm:grid-cols-5 md:grid-cols-6 gap-3 ">
          <div className="mb-8 mr-5">
            <ul className="flex w-full  sm:w-[148px] lg:w-[200px] flex-row sm:flex-col space-x-2 sm:space-x-0 sm:space-y-2 sm:border-r-2 h-[calc(100vh-130px)]  ">
              {tabs.map((tab) => (
                <li className="sm:w-[140px]" key={tab.id}>
                  <NavLink
                    to={`/services/graphicsdesign/?category=${tab.category}`}
                    onClick={() => handleTabChange(tab.id, tab.category)}
                    className={`${
                      activeTab === tab.id && "bg-gray-200"
                    } py-2 rounded w-full hideState dashboard_tab sm:block px-4 text-left`}>
                    {tab.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="sm:ml-[calc(146px-122px)] md:ml-0 sm:col-span-4 md:col-span-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 max-h-[calc(100vh-130px)]   pb-5">
            {filteredDesigns.map((design, index) => (
              <div
                key={index}
                className="bg-gray-100 p-2 rounded text-center h-max">
                <div className="img-box w-full  p-2 rounded group overflow-hidden cursor-pointer">
                  <img
                    onClick={() => showImage(design.img, design.gallery)}
                    className="rounded mx-auto group-hover:-translate-y-1.5 transition-all duration-300 "
                    src={design.img}
                    alt=""
                  />
                </div>
                <h2 className="text-lg mt-2 font-inter min-h-[56px]">
                  {design.name}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GraphicsDesign;
