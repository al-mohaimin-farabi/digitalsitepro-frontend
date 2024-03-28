import ContentHeader from "../../Components/ContentHeader.jsx";
import person1 from "../../assets/Images/avatar/person1.webp";
import person2 from "../../assets/Images/avatar/person2.webp";
import person3 from "../../assets/Images/avatar/person3.webp";
import person4 from "../../assets/Images/avatar/person4.webp";
import bg1 from "../../assets/Images/background/testimonial-bg-1.webp";
import bg2 from "../../assets/Images/background/testimonial-bg-2.webp";
import bg3 from "../../assets/Images/background/testimonial-bg-3.webp";
import bg4 from "../../assets/Images/background/testimonial-bg-4.webp";
import quote from "../../assets/Images/quote.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeCss from "../../assets/CSS/Home.module.css";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

// import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";

const Testimonials = () => {
  const testimonialData = [
    {
      name: "John Smith",
      img: person1,
      company: "ABC Corporation",
      testimonial:
        "Exceptional experience with ABC Corporation; unparalleled dedication to quality and attention to detail.",
      bg: bg1,
    },
    {
      name: "Sarah Johnson",
      img: person2,
      company: "XYZ Tech Solutions",
      testimonial:
        "XYZ Tech Solutions navigates complex tech challenges, delivering outstanding results with knowledge and responsiveness.",
      bg: bg2,
    },
    {
      name: "Emily Davis",
      img: person3,
      company: "Tech Innovators Inc.",
      testimonial:
        "Tech Innovators Inc. benefits greatly from XYZ Corp's expertise, with innovative solutions that exceed expectations.",
      bg: bg3,
    },
    {
      name: "Michael Rodriguez",
      img: person4,
      company: "Global Enterprises Ltd.",
      testimonial:
        "Collaborating with XYZ Corp at Global Enterprises Ltd. is a pleasure, with excellent results under tight deadlines.",
      bg: bg4,
    },
  ];

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
  };

  return (
    <div className="my-5 md:my-8 p-2 ">
      <ContentHeader title={"Testimonials"} />

      <div
        className={`${HomeCss.testimonialBg} w-full mx-auto px-5 pt-5 pb-10 md:p-10 `}>
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}>
          {testimonialData.map((testimonial, index) => (
            <div key={index} className="w-full">
              <div className="rounded bg-white h-[580px] md:h-full w-full md:max-w-[660px] lg:max-w-[960px] mx-auto   py-6  px-10 flex flex-col justify-evenly">
                <img className="w-[70px] " src={quote} alt="" />
                <p className="font-inter text-pretty break-words w-[100%] my-16 text-lg md:text-2xl">
                  {testimonial?.testimonial}
                </p>
                <div className="flex flex-col md:flex-row  justify-between  space-x-2 items-center -mt-5 md:mt-0">
                  <div className="flex items-center">
                    <div className={`${HomeCss.layer} `}>
                      <img
                        className="rounded-md overflow-hidden max-w-[100px] md:max-w-[135px] "
                        src={testimonial?.img}
                        alt={testimonial?.name}
                      />
                    </div>
                    <div className="p-5">
                      <h4 className="font-extrabold text-xl md:text-2xl font-inter">
                        {testimonial?.name}
                      </h4>
                      <h6 className="text-sm md:text-base font-semibold font-inter text-gray-800">
                        {testimonial?.company}
                      </h6>
                    </div>
                  </div>
                  <div className=" flex  pr-5 mt-5 md:mt-0 space-x-10">
                    <button
                      className=" my-2 mx-2 text-2xl  px-5 py-2"
                      onClick={previous}>
                      <FontAwesomeIcon icon={faAngleLeft} />
                    </button>
                    <button
                      className=" my-2 mx-2 text-2xl  px-5 py-2"
                      onClick={next}>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
