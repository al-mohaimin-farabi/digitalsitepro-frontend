import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import PhoneInput from "react-phone-input-2";
import DashboardCss from "../../assets/CSS/Dashboard.module.css";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";

// import { useEffect, useState } from "react";

const AccountSetting = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");

  const onSubmit = (data) => {
    // Handle form submission logic here
    // e.g., send data to server for update
    const moredata = { ...data, phoneNumber, country };
    console.log(moredata);
  };

  const inputClass = DashboardCss.phone_input;

  return (
    <div className="py-0">
      <form
        className="text-center md:text-left p-2"
        onSubmit={handleSubmit(onSubmit)}>
        <div className="grid  grid-cols-1 md:grid-cols-4 gap-5">
          <div className="flex flex-col text-left">
            <label className="mb-2 font-[500] font-inter">Username</label>
            <input
              className="border p-2 rounded min-w"
              type="text"
              defaultValue={user.displayName}
              {...register("displayName", { required: true })}
            />
            {errors.username && (
              <span className="text-red-500 text-sm">
                {errors.username.message}
              </span>
            )}
          </div>
          <div className="flex flex-col text-left">
            <label className="mb-2 font-[500] font-inter">
              Add Phone Number
            </label>
            <PhoneInput
              autoFormat="false"
              inputClass={inputClass}
              country="bd"
              value={phoneNumber}
              onChange={(value, country) => {
                setPhoneNumber("+" + value);
                setCountry(country);
                // console.log(country);
                // console.log(e);
                // console.log("+" + value);
                // console.log(formattedValue);
              }}
            />
            {errors.phoneNumber && (
              <span className="text-red-500 text-sm">
                {errors.phoneNumber.type === "required"
                  ? "Phone number is required"
                  : errors.phoneNumber.type === "pattern"
                  ? "Invalid phone number format (10 digits expected)"
                  : "Invalid phone number format"}
              </span>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="md:block mx-auto md:mx-0 mt-8 md:mt-4 transition-all duration-300 text-white hideState px-10 py-2  rounded-lg bg-green-600 border-2 border-green-600 hover:bg-transparent hover:text-green-600 w-max   font-bold">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default AccountSetting;
