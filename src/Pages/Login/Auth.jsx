import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Login from "./Login.jsx";
import SignUp from "./Signup.jsx";
import useAuth from "../../Hooks/useAuth.jsx";

const Auth = () => {
  const [isNewAuth, setIsNewAuth] = useState(false);
  const [buttonDisable, setbuttonDisable] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 960);
  const { user, isLoading, setAuthError } = useAuth();

  //

  useEffect(() => {
    setAuthError("");
    if (isLoading) {
      setbuttonDisable(true);
    } else setbuttonDisable(false);

    if (user?.email && !user?.emailVerified) {
      setIsNewAuth(true);
    }

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 960);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isNewAuth]);

  return (
    <div className="mt-[110px]  sm:mt-[120px] md:mt-[104px] lg:mt-[96px] min-h-[calc(100svh-104px)] md:h-[calc(100svh-104px)] md:max-w-[960px] lg:max-w-[1280px] mx-auto px-4 py-5 grid content-center md:place-content-center">
      <div className=" grid grid-cols-1 place-content-center w-full  min-h-[518px] max-h-[627px] md:max-h-[100%] md:max-w-[940px] md:min-h-[627px]  rounded-md  overflow-hidden bg-gray-100 ">
        <div className=" min-h-[518px] md:min-h-[627px]  z-20  grid grid-cols-1 w-full md:grid-cols-2 md:gap-5 content-center  shadow-lg  ">
          <motion.div
            transition={{ duration: 0.5 }}
            layout
            className={`${
              isNewAuth && !isSmallScreen ? " md:order-2" : " md:order-1"
            } my-0 py-4 px-6 md:px-8 h-full grid content-center `}>
            <AnimatePresence>
              {!isNewAuth ? (
                <motion.div
                  className="min-h-[518px] md:h-auto flex flex-col justify-center items-center "
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}>
                  <Login
                    isNewAuth={isNewAuth}
                    setIsNewAuth={setIsNewAuth}
                    isSmallScreen={isSmallScreen}
                  />
                </motion.div>
              ) : (
                <motion.div
                  className="min-h-[518px] md:h-auto flex flex-col justify-center items-center  "
                  transition={{ duration: 0.2 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}>
                  <SignUp
                    isSmallScreen={isSmallScreen}
                    isNewAuth={isNewAuth}
                    setIsNewAuth={setIsNewAuth}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          <motion.div
            layout
            initial={{
              opacity: 0,
            }}
            transition={{ duration: 0.5 }}
            animate={
              isNewAuth & !isSmallScreen
                ? {
                    opacity: 1,
                    borderTopRightRadius: "90px",
                    borderBottomRightRadius: "90px",
                    borderTopLeftRadius: "6px",
                    borderBottomLeftRadius: "6px",
                  }
                : {
                    opacity: 1,
                    borderTopRightRadius: "6px",
                    borderBottomRightRadius: "6px",
                    borderTopLeftRadius: "90px",
                    borderBottomLeftRadius: "90px",
                  }
            }
            className={`${
              isNewAuth && !isSmallScreen ? " md:order-1" : "md:order-2"
            }  border-4  border-purple-bright    py-4 px-6 z-10 hidden full-bg  bg-black md:min-h-[627px] md:grid place-content-center text-center `}>
            <h2 className="text-4xl md:text-5xl text-purple-bright font-bold font-hero  my-2 z-50">
              Hello, Friends
            </h2>
            <p className="my-2 text-balance text-white break-words">
              {!isNewAuth
                ? "Register with your personal details to use all of our site features "
                : "Already Have An Account? Login to use all of our site features "}
            </p>

            <button
              className="transition-all hideState mt-4 px-12 py-4 rounded-md  bg-transparent border-2 border-purple-bright hover:bg-purple-bright  w-max mx-auto text-white font-bold"
              onClick={() => setIsNewAuth(!isNewAuth)}
              disabled={buttonDisable}>
              {!isNewAuth ? " SignUp" : "Login"}
            </button>
          </motion.div>
          {/* <div className="md:hidden absolute inset-0 login-bg -z-10"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Auth;
