import useAuth from "../../Hooks/useAuth";
import DashboardCss from "../../assets/CSS/Dashboard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import Dropzone from "react-dropzone";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const actions = [
  { id: 1, label: "Account Settings", to: "/dashboard/accountsetting" },
  { id: 2, label: "Order History", to: "/dashboard/orderhistory" },
];

const Dashboard = () => {
  const { user } = useAuth();
  const [error, setError] = useState("");
  const modalWrapperRef = useRef(null);
  const [activeTab, setActiveTab] = useState(actions[0].id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [file, setFile] = useState(null);

  // const modalRef = useRef();

  const handeAccountSettings = (id) => {
    setActiveTab(id);
  };

  const changeAvatar = () => {
    setError("");
    setIsModalOpen(true);
    setFile(null);
  };

  // const cloudName = import.meta.env.VITE_REACT_APP_CLOUD_NAME;
  // const api_key = import.meta.env.VITE_REACT_APP_API_KEY;
  // const api_secret = import.meta.env.VITE_REACT_APP_API_SECRET;
  // const upload_preset = import.meta.env.VITE_REACT_APP_UPLOAD_PRESET;

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 1) {
      console.error("Only one image can be uploaded.");
      setError("Only one image can be uploaded");
      return;
    }
    const acceptedImageTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/gif",
      "image/bmp",
      "image/webp",
    ];
    const validFile =
      acceptedFiles[0] && acceptedImageTypes.includes(acceptedFiles[0].type);

    if (validFile) {
      // Validate image size and set error if too large
      const MAX_FILE_SIZE = 1000; // 1mb
      const reader = new FileReader();
      reader.onload = (event) => {
        const image = new Image();
        image.onload = () => {
          const width = image.width;
          const height = image.height;
          const fileSize = event.target.result.byteLength;

          if (fileSize > MAX_FILE_SIZE) {
            setError("Image exceeds file size limit (max 1 MB)");
            setFile(null); // Clear file selection if size is invalid
          } else if (width > 500 || height > 500) {
            setError("Image dimensions are too large (max 500px x 500px)");
            setFile(null); // Clear file selection if dimensions are invalid
          } else {
            setFile(acceptedFiles[0]); // Set valid image file
            setError(null); // Clear any previous errors
          }
        };
        image.src = event.target.result;
      };
      reader.readAsDataURL(acceptedFiles[0]);
    } else {
      setError("Only image uploads are allowed");
      console.error("Only image uploads are allowed.");
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
  };

  useEffect(() => {
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
  }, [modalWrapperRef]);

  return (
    <>
      {isModalOpen && (
        <div className="bg-black/30 w-[100vw] h-[100vh] inset-0  fixed z-[5555555] grid place-content-center ">
          <div
            ref={modalWrapperRef}
            className="w-[calc(100vw-50px)] md:min-w-[670px] md:max-w-[700px] max-h-[570px] min-h-[390px] md:min-h-[490px] bg-white rounded-lg px-6 grid items-center shadow-lg">
            <div className="-mt-1   border-[2px] border-dashed border-purple-bright/50 min-h-[170px] md:min-h-[350px] rounded-lg grid place-content-center text-center">
              <Dropzone onDrop={onDrop}>
                {({ getRootProps, getInputProps }) => (
                  <div
                    className="text-[40px] md:text-[75px] text-primary min-w-[100%]  md:min-w-[635px] "
                    {...getRootProps()}>
                    <input {...getInputProps()} />
                    {!file && (
                      <FontAwesomeIcon
                        className="mx-auto"
                        icon={faCloudArrowUp}
                      />
                    )}
                    <div className="flex flex-col">
                      {!file && (
                        <>
                          <p className="text-gray-600 text-base md:text-lg font-semibold font-inter">
                            Drag and drop file here <br /> or
                          </p>
                          <button className="mt-2 text-purple-bright/80 underline text-base md:text-lg font-semibold font-inter ">
                            Choose from computer
                          </button>
                          {error && (
                            <span className="text-red-600 text-sm">
                              {error}
                            </span>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                )}
              </Dropzone>
              {file && (
                <>
                  <div className="relative mx-auto">
                    <img
                      className="mb-4 max-w-[350px] max-h-[200px] mx-auto border rounded-lg"
                      src={URL.createObjectURL(file)}
                      alt="Uploaded image"
                    />
                    <button
                      onClick={changeAvatar}
                      className="absolute -top-2 -right-2 bg-red-600 h-[30px] w-[30px] grid place-content-center rounded-full text-white">
                      <FontAwesomeIcon icon={faXmark} />
                    </button>
                  </div>
                  <button
                    className="text-purple-bright/80 underline text-lg font-semibold font-inter "
                    onClick={handleUpload}>
                    Upload {file.name}
                  </button>
                </>
              )}
            </div>

            <button
              onClick={() => setIsModalOpen(false)}
              className="text-[25px] md:text-[35px] px-6 md:px-0 md:w-[60px]  md:h-[60px]  md:rounded-full md:border border-purple-bright/50 shadow-xl grid place-content-center mx-auto -mt-8">
              <FontAwesomeIcon className="hidden md:block" icon={faXmark} />{" "}
              <span className="md:hidden text-base font-inter">close</span>
            </button>
          </div>
        </div>
      )}

      <div
        className={`${DashboardCss.wrapper} mt-[120px] md:max-w-[960px] lg:max-w-[1280px] mx-auto p-2`}>
        <div className="w-full border-[1px]  p-2 rounded">
          <div className={`${DashboardCss.bg_box} h-[150px] rounded relative`}>
            <div className="absolute left-[20px] bottom-[-30px]">
              <img
                className="w-[120px] h-[120px] rounded-full border-2 border-gray-100 "
                src={user?.photoURL}
                alt="user photo"
              />
              <button
                onClick={changeAvatar}
                className="bg-gray-100 w-[30px] h-[30px]  text-black rounded absolute right-[8px] -top-[3px] border-[1px]">
                <FontAwesomeIcon icon={faPen} />
              </button>
            </div>
          </div>
          <div className="user_info mx-[5px] mt-[40px] mb-[10px]">
            <div className="top flex justify-between items-center ">
              <h4 className="text-2xl font-bold font-inter  ">
                {user?.displayName}
              </h4>
              <button className="options border-[1px] border-gray-100 py-2 px-4 rounded">
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            </div>
            <div className="bottom mt-2">
              <p className="text-sm bg-gray-200 text-blue-900 w-max px-2 rounded">
                {user?.email}
              </p>
            </div>
          </div>
        </div>
        <div className="actions border-[1px]  p-2   rounded my-6 text-center grid content-center">
          <ul className="flex flex-wrap  space-x-2">
            {actions.map((action) => (
              <li key={action.id}>
                <NavLink
                  to={action.to}
                  onClick={() => handeAccountSettings(action.id)}
                  className={`${
                    activeTab == action.id && "bg-gray-200 px-4"
                  } py-2 rounded hideState dashboard_tab block`}>
                  {action.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
