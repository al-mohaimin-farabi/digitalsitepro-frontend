import Payel from "../../assets/Images/Asraful.png";
import Farabi from "../../assets/Images/Farabi.png";
import Rabbi from "../../assets/Images/Rabbi.png";
import Faysal from "../../assets/Images/Faysal.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const OurTeam = () => {
  const payel = useRef(null);
  const farabi = useRef(null);
  const rabbi = useRef(null);
  const faysal = useRef(null);
  const content = useRef(null);

  const payelInView = useInView(payel, { once: true });
  const farabiInView = useInView(farabi, { once: true });
  const rabbiInView = useInView(rabbi, { once: true });
  const faysalInView = useInView(faysal, { once: true });
  const contentInView = useInView(content, { once: true });

  const card = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.2,
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  const contentAnimation = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.2, duration: 0.5 },
    },
  };

  return (
    <div className="my-5 py-5">
      <div className="grid gap-5 grid-cols-1  md:grid-cols-2">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 p-2 order-2 md:order-1">
          <div className="h-full flex flex-col justify-start items-end  w-full md:m-2">
            <motion.div
              ref={payel}
              variants={card}
              initial="hidden"
              animate={payelInView && "visible"}
              className="bg-gray-100 text-black px-2 w-full md:w-[80%] py-8 rounded  text-center  my-2">
              <div className="bg-gray-200 w-[95px] h-[95px] md:w-[130px] md:h-[130px] rounded-full mx-auto relative border-2">
                <img
                  className="w-[95px] h-[calc(100%+15px)] md:w-[145px] md:h-[calc(100%+25px)] rounded-full   absolute bottom-0 "
                  src={Payel}
                  alt="Ashraful Islam Payel Img"
                />
              </div>
              <h4 className="mt-6 mb-0 font-bold text-lg font-flow ">
                Ashraful Islam Payel
              </h4>
              <p className="text-base font-mono break-words  ">
                CEO (co-Founder)
              </p>
            </motion.div>
            <motion.div
              ref={farabi}
              variants={card}
              initial="hidden"
              animate={farabiInView && "visible"}
              className="bg-gray-100 text-black px-2 w-full md:w-[80%] py-8 rounded  text-center  my-2">
              <div className="bg-gray-200 w-[95px] h-[95px] md:w-[130px] md:h-[130px] rounded-full mx-auto relative">
                <img
                  className="w-[95px] h-[calc(100%+15px)] md:w-[165px] md:h-[calc(100%+20px)] rounded-full   absolute bottom-0 "
                  src={Farabi}
                  alt="Ashraful Islam Payel Img"
                />
              </div>
              <h4 className="mt-6 mb-0 font-bold text-lg font-flow">
                Al Mohaimin Farabi
              </h4>
              <p className="text-base font-mono text-wrap break-words  ">
                Tech Lead
              </p>
            </motion.div>
          </div>
          <div className="h-full flex flex-col justify-end items-start  w-full md:m-2 md:mt-10">
            <motion.div
              ref={rabbi}
              variants={card}
              initial="hidden"
              animate={rabbiInView && "visible"}
              className="bg-gray-100 text-black px-2 w-full md:w-[80%] py-8 rounded  text-center  my-2">
              <div className="bg-gray-200 w-[95px] h-[95px] md:w-[130px] md:h-[130px] rounded-full mx-auto relative">
                <img
                  className="w-[95px] h-[calc(100%+15px)] md:w-[145px] md:h-[calc(100%+25px)] rounded-full   absolute bottom-0 "
                  src={Rabbi}
                  alt="Ashraful Islam Payel Img"
                />
              </div>
              <h4 className="mt-6 mb-0 font-bold text-lg font-flow ">
                Fazlee Rabbi
              </h4>
              <p className="text-base font-mono text-wrap break-words  ">
                Managing Director (Founder)
              </p>
            </motion.div>
            <motion.div
              ref={faysal}
              variants={card}
              initial="hidden"
              animate={faysalInView && "visible"}
              className="bg-gray-100 text-black px-2 w-full md:w-[80%] py-8 rounded  text-center  my-2">
              <div className="bg-gray-200 w-[95px] h-[95px] md:w-[130px] md:h-[130px] rounded-full mx-auto relative">
                <img
                  className="w-[95px] h-[calc(100%+15px)] md:w-[145px] md:h-[calc(100%+25px)] rounded-full   absolute bottom-0 "
                  src={Faysal}
                  alt="Ashraful Islam Payel Img"
                />
              </div>
              <h4 className="mt-6 mb-0 font-bold text-lg font-flow">
                Al Faysal
              </h4>
              <p className="text-base font-mono text-wrap break-words  ">
                Media Creative Director
              </p>
            </motion.div>
          </div>
        </div>
        <motion.div
          ref={content}
          initial="hidden"
          animate={contentInView && "visible"}
          variants={contentAnimation}
          className="grid content-center p-2 order-1 md:order-2 text-center md:text-left">
          <h1 className="text-primary text-2xl md:text-3xl uppercase font-flow font-bold my-2">
            Our Team
          </h1>
          <p className="text-[#525B7A] text-sm sm:text-base md:text-xl lg:text-2xl my-2  w-full sm:w-3/4 mx-auto md:mx-0 md:w-[90%] text-balance ">
            Meet our talented team of experts at DigitalSite Pro. With a passion
            for innovation, we specialize in web development, graphic design,
            video editing, SEO, and digital marketing. Collaborate with us to
            transform your vision into a captivating online presence.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default OurTeam;
