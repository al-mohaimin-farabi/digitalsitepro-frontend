import { useForm, Controller } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Passreset = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const passResetVariants = {
    initial: {
      opacity: 0,
      y: "100%",
      transition: { duration: 0.3, type: "tween" },
    },
    animate: {
      opacity: 1,
      y: "0%",
      transition: { duration: 0.3, type: "tween" },
    },
    exit: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.3, type: "tween" },
    },
  };
  const passResetSend = {
    initial: {
      opacity: 0,
      y: "50%",
      transition: { duration: 0.3, type: "tween" },
    },
    animate: {
      opacity: 1,
      y: "0%",
      transition: { delay: 0.1, duration: 0.5, type: "tween" },
    },
    exit: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.5, type: "tween" },
    },
  };

  const { handleResetPassword, passResetEmailSend } = useAuth();

  const onSubmit = (data) => {
    handleResetPassword(data.email);
    reset();
  };

  return (
    <div className="mt-[104px] min-h-[calc(100svh-104px)] md:h-[calc(100svh-104px)] md:max-w-[960px] lg:max-w-[1280px] mx-auto px-4 py-5 ">
      <div className="max-w-[600px] mx-auto mt-28">
        <div className="my-1 flex flex-col w-full space-y-1 md:space-y-2 font-hero text-gray-600 md:text-gray-600">
          <AnimatePresence>
            {passResetEmailSend ? (
              <motion.div
                initial="initial"
                animate={"animate"}
                exit="exit"
                variants={passResetSend}
                className="space-y-6">
                <p className="text-center text-lg">
                  Password Reset Email Will Be Sent To Your Email, <br /> If It
                  Exists In Our Database
                </p>
                <NavLink
                  to="/home"
                  className="md:block transition-all hideState px-12 py-2 rounded-lg bg-primary border-2 border-primary hover:bg-transparent hover:text-primary md:w-max md:mx-auto text-white font-bold">
                  Return To Home
                </NavLink>
              </motion.div>
            ) : (
              <motion.form
                initial="initial"
                animate={"animate"}
                exit="exit"
                variants={passResetVariants}
                className="space-y-4 text-center"
                onSubmit={handleSubmit(onSubmit)}>
                <label className="tracking-wide" htmlFor="email">
                  Enter Your Email Address
                </label>
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address",
                    },
                  }}
                  render={({ field }) => (
                    <>
                      <input
                        id="email"
                        {...field}
                        placeholder="kevin@example.com"
                        className="w-full border-[1px] p-2 rounded-md outline-primary text-center"
                        type="email"
                        autoComplete="on"
                      />
                      <span className="text-red-600 my-2 block text-sm">
                        {errors.email?.message}
                      </span>
                    </>
                  )}
                />

                <button
                  type="submit"
                  className="md:block transition-all hideState px-12 py-2 rounded-lg bg-primary border-2 border-primary hover:bg-transparent hover:text-primary md:w-max md:mx-auto text-white font-bold">
                  Send Email{" "}
                  <FontAwesomeIcon className="ml-[6px]" icon={faPaperPlane} />
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Passreset;
