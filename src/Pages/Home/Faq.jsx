import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import ContentHeader from "../../Components/ContentHeader";
import faq from "../../assets/Images/faq.svg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Faq = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const faqData = [
    {
      id: 1,
      question: "What services does Digital Site Pro offer?",
      answer:
        "Digital Site Pro offers a range of services including web development, video editing, graphics design, SEO, and digital marketing.",
    },
    {
      id: 2,
      question: "How can I request a quote for web development services?",
      answer:
        'To request a quote for web development services, please visit our "Contact" page and fill out the inquiry form. We\'ll get back to you as soon as possible.',
    },
    {
      id: 3,
      question: "Is Digital Site Pro experienced in digital marketing?",
      answer:
        "Yes, Digital Site Pro has extensive experience in digital marketing. We use proven strategies to enhance your online presence and drive results for your business.",
    },
    {
      id: 4,
      question:
        "What makes Digital Site Pro different from other digital agencies?",
      answer:
        "At Digital Site Pro, we focus on delivering high-quality services tailored to the unique needs of each client. Our team is dedicated to providing innovative solutions for web development, video editing, graphics design, SEO, and digital marketing.",
    },
  ];

  return (
    <div className="md:max-w-[960px] lg:max-w-[1280px] mx-auto px-2 md:px-0">
      <div id="faq" className="my-5 md:my-8 mb-10  px-2 py-2 font-flow">
        <ContentHeader title={"How we can help you"} />
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5  my-0 place-content-center">
          <div className="hidden md:flex justify-center items-end max-h-[404px]">
            <img loading="lazy" src={faq} className="w-full mx-auto  " alt="" />
          </div>
          <div className=" md:p-0">
            {faqData.map((q) => (
              <Accordion
                key={q.id}
                isOpen={openAccordion === q.id}
                toggleAccordion={toggleAccordion}
                {...q}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

const Accordion = ({ question, answer, id, isOpen, toggleAccordion }) => {
  return (
    <div className="mb-4 last:mb-0 bg-black shadow-md px-3 py-3 md:p-4  rounded-md  ">
      <button
        onClick={() => toggleAccordion(id)}
        className="flex justify-between items-center  w-full my-2 text-left">
        <p
          className={` ${
            isOpen ? "text-purple-bright" : "text-white"
          } text-sm sm:text-base md:text-lg`}>
          {id}. {question}
        </p>
        <motion.span
          initial={{ rotate: 0 }}
          animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
          className={`font-bold sm:font-extrabold  ${
            isOpen
              ? "text-purple-bright border-purple-bright"
              : "text-white border-white"
          } text-xl grid place-content-center h-[30px] w-[30px] rounded-full overflow-hidden border  p-1 md:text-base cursor-pointer `}>
          <FontAwesomeIcon icon={faArrowUp} />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            layout
            className="text-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              type: "tween",
              ease: "easeOut",
              duration: 0.4,
              properties: ["opacity", "height"],
            }}
            style={{ overflow: "hidden", transformStyle: "preserve-3d" }}>
            <span className="text-sm sm:text-base md:text-base">{answer}</span>
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
  isOpen: PropTypes.bool.isRequired,
  toggleAccordion: PropTypes.func.isRequired,
};
