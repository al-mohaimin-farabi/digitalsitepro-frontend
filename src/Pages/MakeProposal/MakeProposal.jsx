// mew proposal, now accept rar and zip file
import { Controller, useForm } from "react-hook-form";
import HomeCss from "../../assets/CSS/Home.module.css";
import DashboardCss from "../../assets/CSS/Dashboard.module.css";
import useAuth from "../../Hooks/useAuth";
import PhoneInput from "react-phone-input-2";
import { useEffect, useState } from "react";
import "react-phone-input-2/lib/style.css";
import Dropzone from "react-dropzone";
import { faCloudArrowUp, faXmark } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MakeProposal = () => {
  const { user, userPhone } = useAuth();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState("");
  const {
    control,
    reset,
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  // Handle phone number change
  const handlechange = (value) => {
    setPhoneNumber(value);
    if (value.length <= 7) {
      setError("phone", {
        type: "notValid",
        message: "Phone number is not valid",
      });
    } else {
      clearErrors("phone");
    }
  };

  // Handle file drop
  const onDrop = (acceptedFiles) => {
    setFileError(""); // Clear previous errors

    if (acceptedFiles.length > 1) {
      setFileError("Only one file can be uploaded");
      return;
    }

    const acceptedFileTypes = [
      "application/zip",
      "application/x-rar-compressed",
      "application/x-zip-compressed",
      "multipart/x-zip",
    ];

    const validFile =
      acceptedFiles[0] &&
      (acceptedFileTypes.includes(acceptedFiles[0].type) ||
        acceptedFiles[0].name.endsWith(".zip") ||
        acceptedFiles[0].name.endsWith(".rar"));

    if (validFile) {
      const MAX_FILE_SIZE_MB = 200; // 200 MB
      const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;
      const fileSize = acceptedFiles[0].size;

      if (fileSize > MAX_FILE_SIZE_BYTES) {
        setFileError(
          `File exceeds file size limit (max ${MAX_FILE_SIZE_MB} MB)`
        );
        setFile(null);
      } else {
        setFile(acceptedFiles[0]);
        setFileError(""); // Clear any existing file error
      }
    } else {
      setFileError("Only zip or rar file uploads are allowed");
    }
  };

  // Clear selected file
  const selectFile = (e) => {
    e.preventDefault(); // Prevent default behavior to avoid triggering form submit
    setFile(null);
  };

  // Submit proposal data
  const onSubmit = async (data) => {
    if (phoneNumber.length <= 5) {
      setError("phone", {
        type: "notValid",
        message: "Phone number is not valid",
      });
      return;
    }

    const combinedData = { ...data, phoneNumber };
    const formData = new FormData();
    formData.append("name", combinedData.name);
    formData.append("email", combinedData.email);
    formData.append("phoneNumber", combinedData.phoneNumber);
    formData.append("category", combinedData.category);
    formData.append("details", combinedData.details);
    if (file) {
      formData.append("file", file); // Append file to FormData
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/makeproposal",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Proposal submitted successfully:", response.data);
      alert("Proposal submitted successfully");
      reset();
      setFile(null);
      setPhoneNumber("");
    } catch (error) {
      console.error("Error submitting proposal:", error.response || error);
      alert("Failed to submit proposal, please try again.");
    }
  };

  useEffect(() => {
    setPhoneNumber(userPhone ? userPhone : phoneNumber);
  }, [userPhone]);

  return (
    <div className="w-full md:max-w-[960px] mx-auto lg:max-w-[1280px] px-2 md:px-1 mt-[96px] md:mt-[110px] py-5 md:py-16">
      <form className="w-full" onSubmit={handleSubmit(onSubmit)} action="#">
        <h2 className={`text-2xl md:text-3xl font-bold text-white mb-8`}>
          <span className={`${HomeCss.ContactUs}`}>Fill out the form</span>
        </h2>
        <div className="grid grid-cols-1 gap-5 md:gap-8 md:grid-cols-2 w-full">
          {/* Name Input */}
          <div className="flex flex-col space-y-3 my-2">
            <label className="text-lg text-white" htmlFor="nameInput">
              Name<span className="text-red-600">*</span>
            </label>
            <input
              autoComplete="true"
              placeholder="Insert Your Name"
              className={`${
                user && "text-gray-400"
              } outline-gray-400 outline outline-1 rounded-md p-2`}
              type="text"
              id="nameInput"
              name="name"
              defaultValue={user?.displayName}
              readOnly={user.email ? true : false}
              {...register("name", {
                required: !user ? "Name is required!" : "",
              })}
            />
            {errors.name && (
              <p className="text-red-600">{errors.name.message}</p>
            )}
          </div>

          {/* Email Input */}
          <div className="flex flex-col space-y-3 my-2">
            <label className="text-lg text-white" htmlFor="emailInput">
              Email<span className="text-red-600">*</span>
            </label>
            <input
              autoComplete="true"
              placeholder="Insert Your Email"
              className={`${
                user && "text-gray-400"
              } outline-gray-400 outline outline-1 rounded-md p-2`}
              type="email"
              id="emailInput"
              name="email"
              defaultValue={user?.email || ""}
              readOnly={user.email ? true : false}
              {...register("email", {
                required: "Email is required!",
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Phone Number Input */}
        <div className="grid grid-cols-1 gap-5 md:gap-8 md:grid-cols-2 w-full">
          <div className="flex flex-col space-y-3 my-2">
            <label className="text-lg text-white">
              Phone Number<span className="text-red-600">*</span>
            </label>
            <PhoneInput
              inputClass={DashboardCss.phone_input}
              country={"bd"}
              value={phoneNumber}
              onChange={handlechange}
              inputProps={{ required: true }}
            />
            {errors.phone && (
              <p className="text-red-600">{errors.phone.message}</p>
            )}
          </div>

          {/* Category Select */}
          <div className="flex flex-col space-y-3 my-2">
            <label className="text-lg text-white" htmlFor="categorySelect">
              Select Category<span className="text-red-600">*</span>
            </label>
            <Controller
              name="category"
              control={control}
              defaultValue=""
              rules={{ required: "Category is required!" }}
              render={({ field }) => (
                <select
                  className={`${
                    user && "text-black"
                  } outline-gray-400 text-black outline outline-1 rounded-md p-2`}
                  {...field}
                  id="categorySelect"
                  required>
                  <option value="" disabled>
                    --Select Category--
                  </option>
                  <option className="text-black" value="video_editing">
                    Video Editing
                  </option>
                  <option className="text-black" value="graphics_design">
                    Graphics Design
                  </option>
                  <option className="text-black rounded" value="website_design">
                    Website Design
                  </option>
                </select>
              )}
            />
            {errors.category && (
              <p className="text-red-600">{errors.category.message}</p>
            )}
          </div>
        </div>

        {/* Project Description and File Upload */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          <div className="flex flex-col space-y-3 mt-2 mb-3">
            <label className="text-lg text-white" htmlFor="detailsInput">
              Explain Shortly About Your Project
              <span className="text-red-600">*</span>
            </label>
            <textarea
              autoComplete="true"
              placeholder="Project Description Here"
              className="outline outline-1 outline-gray-400 rounded-md p-2 min-h-[180px] max-h-[220px]"
              id="detailsInput"
              name="details"
              {...register("details", {
                required: "Description is required!",
                minLength: {
                  value: 10,
                  message: "Description must be at least 10 characters long.",
                },
              })}
            />
            {errors.details && (
              <p className="text-red-600">{errors.details.message}</p>
            )}
          </div>

          {/* File Upload */}
          <div className="flex flex-col space-y-3 mt-2 mb-3 w-full">
            <label className="text-lg opacity-0" htmlFor="fileInput">
              Upload File<span className="text-red-600">*</span>
            </label>
            <div className="outline-green-500 bg-green-500/30 outline outline-1 h-full rounded-md min-w-full grid place-content-center">
              <Dropzone
                onDrop={onDrop}
                multiple={false} // Ensure only one file is allowed
                accept={{
                  "application/zip": [".zip"],
                  "application/x-rar-compressed": [".rar"],
                }}>
                {({ getRootProps, getInputProps }) => (
                  <div
                    className="text-[40px] md:text-[75px] text-white grid place-content-center text-center min-w-full"
                    {...getRootProps()}>
                    <input {...getInputProps()} />
                    {!file && (
                      <>
                        <FontAwesomeIcon
                          className="mx-auto text-[50px] md:text-[60px] text-green-700/70"
                          icon={faCloudArrowUp}
                        />
                        <p className="text-gray-200 text-base md:text-lg font-inter">
                          Drag and drop file here <br /> or
                        </p>
                        <button
                          type="button"
                          className="mt-2 text-purple-bright/80 underline text-base md:text-lg font-semibold font-inter">
                          Choose from computer
                        </button>
                      </>
                    )}
                    {fileError && (
                      <span className="text-red-600 text-sm">{fileError}</span>
                    )}
                  </div>
                )}
              </Dropzone>
              {file && (
                <>
                  <div className="mx-auto mb-4 text-center">
                    <p className="text-lg font-semibold text-gray-800">
                      Uploaded File:
                    </p>
                    <p className="text-sm text-gray-600">{file.name}</p>
                  </div>
                  <button
                    onClick={selectFile}
                    className="mx-auto mb-4 h-[40px] w-[40px] grid place-content-center bg-red-600 text-white py-2 px-4 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 rounded-full">
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="rounded-md font-semibold font-inter border-2 border-purple-bright hover:bg-transparent hover:text-purple-bright transition-colors duration-300 bg-purple-bright text-white px-12 py-4 mt-5">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default MakeProposal;
