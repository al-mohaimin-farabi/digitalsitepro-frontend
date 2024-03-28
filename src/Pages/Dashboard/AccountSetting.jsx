import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import PhoneInput from "react-phone-input-2";
import DashboardCss from "../../assets/CSS/Dashboard.module.css";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";

const AccountSetting = () => {
  const { user, handleDisplayNameChange, userPhone, setUserPhone } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [newCountry, setNewCountry] = useState("");

  const handlechange = (value, country) => {
    // Extract phone number and set it to newPhoneNumber state
    setNewPhoneNumber(value);
    setNewCountry(country);
  };

  const onSubmit = async (data) => {
    try {
      if (user?.displayName !== data.displayName) {
        handleDisplayNameChange(data.displayName);
      }
      if (user?.email && user?.emailVerified) {
        const response = await fetch(
          `http://localhost:5000/users/${user.email}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              displayName: data.displayName,
              phoneNumber: newPhoneNumber,
              country: newCountry,
            }),
          }
        );
        if (!response.ok) {
          throw new Error("Failed to update user");
        }

        const responseData = await response.json();
        if (!userPhone?.length >= 5) {
          setUserPhone(newPhoneNumber);
        }
        console.log(responseData);
      }
    } catch (error) {
      console.error("Error updating user:", error.message);
    }
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
            {errors.displayName && (
              <span className="text-red-500 text-sm">
                Display name is required
              </span>
            )}
          </div>
          <div className="flex flex-col text-left">
            <label className="mb-2 font-[500] font-inter">
              Add Phone Number
            </label>
            <PhoneInput
              inputClass={inputClass}
              country={"bd"}
              value={newPhoneNumber}
              onChange={handlechange}
            />
          </div>
        </div>

        <button
          type="submit"
          className="md:block mx-auto md:mx-0 mt-8 md:mt-4 transition-all duration-300 text-white hideState px-10 py-2  rounded bg-green-600 border-2 border-green-600 hover:bg-transparent hover:text-green-600 w-max   font-bold">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default AccountSetting;
