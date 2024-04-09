import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import PhoneInput from "react-phone-input-2";
import DashboardCss from "../../assets/CSS/Dashboard.module.css";
import "react-phone-input-2/lib/style.css";
import { useEffect, useState } from "react";

const AccountSetting = () => {
  const { user, handleDisplayNameChange, userPhone, setUserPhone } = useAuth();
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [newCountry, setNewCountry] = useState("");

  const handlechange = (number, country) => {
    // Extract phone number and set it to newPhoneNumber state
    setNewCountry(country);
    setNewPhoneNumber(number);
    if (newPhoneNumber.length <= 7) {
      setError("phone", {
        type: "notValid",
        message: "Phone number is not valid",
      });
    } else {
      clearErrors("phone");
    }
  };

  const onSubmit = async (data) => {
    clearErrors("phone");

    // Check if display name is different
    if (user?.displayName !== data.displayName) {
      handleDisplayNameChange(data.displayName);
    }

    // Prepend country code if not already included
    // const formattedPhoneNumber = `+${newPhoneNumber}`;

    // Validate phone number
    if (newPhoneNumber.length <= 7) {
      setError("phone", {
        type: "notValid",
        message: "Phone number is not valid",
      });
      return;
    } else {
      clearErrors("phone");
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
        setUserPhone(newPhoneNumber); // Update userPhone with the formatted phone number
        console.log(responseData);
      }
    }
  };

  useEffect(() => {
    setNewPhoneNumber(userPhone);
  }, [userPhone]);

  const inputClass = DashboardCss.phone_input;

  return (
    <div className="py-0">
      <form
        className="text-center md:text-left p-2"
        onSubmit={handleSubmit(onSubmit)}>
        <div className="grid  grid-cols-1 md:grid-cols-4 gap-5">
          <div className="flex flex-col text-left">
            <label className="mb-2 font-[500] font-inter text-white">Username</label>
            <input
              className="border p-2 rounded min-w"
              type="text"
              defaultValue={user.displayName}
              {...register("displayName", { required: true })}
            />
            {errors.displayName && (
              <span className="text-red-500 text-sm">
                Username name is required
              </span>
            )}
          </div>
          <div className="flex flex-col text-left">
            <label className="mb-2 font-[500] font-inter text-white">
              Add Phone Number
            </label>
            <PhoneInput
              inputClass={inputClass}
              country={"bd"}
              value={userPhone ? userPhone : newPhoneNumber}
              onChange={handlechange}
            />
            {errors.phone && (
              <span className="text-red-500 text-sm">
                Phone number is not valid
              </span>
            )}
          </div>
        </div>

        <input
          type="submit"
          className="md:block mx-auto md:mx-0 mt-8 md:mt-4 transition-all duration-300 text-white hideState px-12 py-4  rounded bg-green-600 border-2 border-green-600 hover:bg-transparent hover:text-green-600 w-max   font-bold"
          value="Update Profile"
        />
      </form>
    </div>
  );
};

export default AccountSetting;
