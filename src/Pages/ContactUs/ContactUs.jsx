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
  const [isSending, setIsSending] = useState(false);

  const service_id = import.meta.env.VITE_REACT_APP_SERVICE_ID;
  const template_id = import.meta.env.VITE_REACT_APP_TEMPLATE_ID;
  const public_key = import.meta.env.VITE_REACT_APP_PUBLIC_KEY;

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Captcha change handler
  const onChange = (value) => {
    setCaptchaValue(value);
    setVerified(true);
  };

  const onSubmit = (data) => {
    setIsSending(true);
    const templateParameter = {
      from_name: data.name,
      from_email: data.email,
      to_name: "DigitalSitePro",
      message: data.message,
      "g-recaptcha-response": captchaValue,
    };

    emailjs.send(service_id, template_id, templateParameter, public_key).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setIsSending(false);
        reset();
        alert("Message Sent Successfully");
        navigate("/");
      },
      (error) => {
        console.error("FAILED...", error);
        setIsSending(false);
        alert("Failed to send message, please try again later.");
      }
    );
  };

  return (
    <div className="mt-[80px] md:mt-[120px] mx-auto md:max-w-[960px] lg:max-w-[1280px] px-2 py-16">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="px-2 md:w-2/4 mx-auto font-flow">
        <h2 className={`text-2xl md:text-3xl font-bold text-white mb-8`}>
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
              user ? "text-gray-400" : ""
            } outline-gray-950 outline outline-1 rounded p-2`}
            type="text"
            id="name"
            defaultValue={user?.displayName || ""}
            readOnly={!!user?.displayName}
            {...register("name", {
              required: !user ? "Name is required!" : false,
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
              user ? "text-gray-400" : ""
            } outline-gray-950 outline outline-1 rounded p-2`}
            type="email"
            id="email"
            defaultValue={user?.email || ""}
            readOnly={!!user?.email}
            {...register("email", {
              required: !user ? "Email is required!" : false,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col space-y-3 mt-5 mb-3">
          <label className="text-lg" htmlFor="message">
            Message:
          </label>
          <textarea
            autoComplete="true"
            placeholder="Your Message Here"
            className="outline outline-1 rounded p-2 min-h-[150px] max-h-[220px]"
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
          disabled={!verified || isSending}
          className={`${
            isSending ? "bg-gray-400" : "bg-primary"
          } px-10 py-2 my-6 font-bold text-white hover:text-[#6E72DD] hover:bg-transparent border-2 transition-colors duration-200 ease-linear border-primary hover:border-[#6E72DD] rounded cursor-pointer`}>
          {isSending ? (
            <div className="flex items-center">
              <div className="loader mr-2"></div>
              Sending...
            </div>
          ) : (
            <div className="flex items-center">
              <span className={`${HomeCss.separator} inline`}>Send</span>
              <FontAwesomeIcon className="ml-[12px]" icon={faPaperPlane} />
            </div>
          )}
        </button>
      </form>

      {/* Loading spinner CSS */}
      <style>
        {`
          .loader {
            border: 4px solid #f3f3f3; 
            border-top: 4px solid #3498db; 
            border-radius: 50%;
            width: 18px;
            height: 18px;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default ContactUs;
