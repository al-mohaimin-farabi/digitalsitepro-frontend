import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ContentHeader from "../../Components/ContentHeader";
import faq from "../../assets/Images/faq.svg";
import { useLayoutEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Faq = () => {
  const faqData = [
    {
      id: 1,
      question: "What services does DigitalSite Pro offer?",
      answer:
        "DigitalSite Pro offers a range of services including web development, video editing, graphics design, SEO, and digital marketing.",
    },
    {
      id: 2,
      question: "How can I request a quote for web development services?",
      answer:
        'To request a quote for web development services, please visit our "Contact" page and fill out the inquiry form. We\'ll get back to you as soon as possible.',
    },
    {
      id: 3,
      question: "Is DigitalSite Pro experienced in digital marketing?",
      answer:
        "Yes, DigitalSite Pro has extensive experience in digital marketing. We use proven strategies to enhance your online presence and drive results for your business.",
    },
    {
      id: 4,
      question:
        "What makes DigitalSite Pro different from other digital agencies?",
      answer:
        "At DigitalSite Pro, we focus on delivering high-quality services tailored to the unique needs of each client. Our team is dedicated to providing innovative solutions for web development, video editing, graphics design, SEO, and digital marketing.",
    },
  ];

  return (
    <div id="faq" className="my-5  px-2 py-2 font-flow">
      <ContentHeader title={"FAQ"} />
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5  my-0 md:my-10">
        <div className="hidden md:flex justify-center items-center">
          <img
            loading="lazy"
            src={faq}
            className="w-full mx-auto object-fit"
            alt=""
          />
        </div>
        <div className=" md:p-0">
          {faqData.map((q) => (
            <Accordion key={q.id} {...q} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;

const Accordion = ({ question, answer, id }) => {
  const [accordionOpen, setAccordionOpen] = useState(null);

  useLayoutEffect(() => {}, [accordionOpen]);

  return (
    <div className="mb-4 last:mb-0 bg-gray-100 shadow-md px-3 py-3 md:p-4  rounded-lg ">
      <button
        onClick={() => setAccordionOpen(accordionOpen === id ? null : id)}
        className="flex justify-between items-center  w-full my-2 text-left">
        <span className="text-primary text-sm sm:text-base md:text-lg">
          {question}
        </span>
        <motion.span
          initial={{ rotate: 0 }}
          animate={accordionOpen === id ? { rotate: 45 } : { rotate: 0 }}
          className={`font-bold sm:font-extrabold text-primary text-xl  p-1 md:text-2xl cursor-pointer `}>
          <FontAwesomeIcon icon={faPlus} />
        </motion.span>
      </button>
      <AnimatePresence>
        {accordionOpen === id && (
          <motion.div
            layout
            // Optimize layout shifts
            className=" text-gray-600 "
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              type: "tween",
              ease: "easeOut", // Gentle deceleration
              duration: 0.4, // Longer duration
              properties: ["opacity", "height"], // Coordinated animation
            }}
            style={{ overflow: "hidden", transformStyle: "preserve-3d" }} // Hardware acceleration
          >
            <span className="text-sm sm:text-base md:text-lg"> {answer}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

Accordion.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
