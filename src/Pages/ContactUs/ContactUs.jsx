import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import HomeCss from "../../assets/CSS/Home.module.css";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [verified, setVerified] = useState(false);
  const [captchaValue, setCaptchaValue] = useState("");

  const service_id = import.meta.env.VITE_REACT_APP_SERVICE_ID;
  const template_id = import.meta.env.VITE_REACT_APP_TEMPLATE_ID;
  const public_key = import.meta.env.VITE_REACT_APP_PUBLIC_KEY;

  const onChange = (value) => {
    setCaptchaValue(value);
    setVerified(true);
  };

  // const [details, setDetails] = useState({ name: "", email: "" });

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // setDetails({ name: data.name, email: data.email });
    // console.log(details);
    // console.log(data);
    // return data;
    const templatePerameter = {
      from_name: data?.name,
      from_email: data?.email,
      to_name: "DigitalSitePro",
      message: data.message,
      "g-recaptcha-response": captchaValue,
    };

    emailjs.send(service_id, template_id, templatePerameter, public_key).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        reset();
        alert("Message Sent Successfuly");
        navigate("/");
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
  };

  return (
    <div className="mt-[80px] md:mt-[120px] mx-auto  md:max-w-[960px] lg:max-w-[1280px] px-2 py-16">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" px-2 md:w-2/4 mx-auto font-flow">
        <h2 className={`text-2xl md:text-3xl font-bold text-primary mb-8 `}>
          <span className={`${HomeCss.ContactUs}`}>Contact Us</span>
        </h2>
        <div className="flex flex-col space-y-3 my-5">
          <label className="text-lg" htmlFor="name">
            Name:
          </label>
          <input
            autoComplete="true"
            placeholder="Insert Your Name"
            className={`${
              user && "text-gray-400"
            } outline-gray-950 outline outline-1 rounded p-2`}
            type="text"
            id="name"
            defaultValue={user?.displayName || ""}
            readOnly={user.email ? true : false}
            {...register("name", {
              required: !user ? "Name is required!" : "",
            })}
          />
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}
        </div>
        <div className="flex flex-col space-y-3 my-5">
          <label className="text-lg" htmlFor="email">
            Email:
          </label>
          <input
            autoComplete="true"
            placeholder="Insert Your Email"
            className={`${
              user && "text-gray-400"
            } outline-gray-950 outline outline-1 rounded p-2`}
            type="email"
            id="email"
            defaultValue={user?.email || ""}
            readOnly={user.email ? true : false}
            {...register("email", {
              required: !user ? "Email is required!" : "",
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />
          {errors.email && (
            <p className="text-red-600">{errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col space-y-3 mt-5 mb-3">
          <label className="text-lg " htmlFor="message">
            Message:
          </label>
          <textarea
            autoComplete="true"
            placeholder="Your Message Here"
            className="outline outline-1 rounded p-2 min-h-[150px] max-h-[220px] "
            id="message"
            {...register("message", {
              required: "Message is required!",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters long.",
              },
            })}
          />
          {errors.message && (
            <p className="text-red-600">{errors.message.message}</p>
          )}
        </div>
        <p className="font-thin font-mono text-sm">
          <span className="text-red-600">*</span>reCAPTCHA
        </p>

        <ReCAPTCHA
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
          onChange={onChange}
        />

        <button
          disabled={!verified}
          className={` bg-primary px-10 py-2 my-6 font-bold  text-white hover:text-[#6E72DD]  hover:bg-transparent border-2 transition-colors duration-200 ease-linear border-primary hover:border-[#6E72DD]  rounded  cursor-pointer`}>
          <div className={`${HomeCss.separator} inline`}>Send</div>
          <FontAwesomeIcon className="ml-[12px] " icon={faPaperPlane} />
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
