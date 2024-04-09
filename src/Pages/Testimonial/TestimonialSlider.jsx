import person1 from "../../assets/Images/avatar/person1.webp";
import person2 from "../../assets/Images/avatar/person2.webp";
import person3 from "../../assets/Images/avatar/person3.webp";
import person4 from "../../assets/Images/avatar/person4.webp";

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

const TestimonialSlider = () => {
  const testimonialData = [
    {
      name: "John Smith",
      img: person1,
      company: "ABC Corporation",
      testimonial:
        "Exceptional experience with ABC Corporation; unparalleled dedication to quality and attention to detail.",
    },
    {
      name: "Sarah Johnson",
      img: person2,
      company: "XYZ Tech Solutions",
      testimonial:
        "XYZ Tech Solutions navigates complex tech challenges, delivering outstanding results with knowledge and responsiveness.",
    },
    {
      name: "Emily Davis",
      img: person3,
      company: "Tech Innovators Inc.",
      testimonial:
        "Tech Innovators Inc. benefits greatly from XYZ Corp's expertise, with innovative solutions that exceed expectations.",
    },
    {
      name: "Michael Rodriguez",
      img: person4,
      company: "Global Enterprises Ltd.",
      testimonial:
        "Collaborating with XYZ Corp at Global Enterprises Ltd. is a pleasure, with excellent results under tight deadlines.",
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
    slidesToShow: 3,
    className: "center",
    centerMode: true,
    centerPadding: "6px",
    slidesToScroll: 1,
    initialSlide: 1,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="100"
      className="my-5 md:my-8 p-2 overflow-hidden ">
      <div className={` w-full mx-auto px-2 py-5  `}>
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}>
          {testimonialData.map((testimonial, index) => (
            <div
              key={index}
              className={`${HomeCss.testimonialBg}  min-w-full  px-4 py-7 `}>
              <div className=" rounded bg-white h-[380px]  w-[320px] md:h-[350px] md:min-w-[95%] lg:min-h-[250px] lg:max-h-[300px] lg:min-w-[95%]  mx-auto  py-6  px-8 md:px-10 flex flex-col justify-between md:justify-evenly">
                <img className="w-[20px] " src={quote} alt="" />
                <p className="font-inter text-center text-pretty break-words w-[100%] my-4 text-sm md:text-lg">
                  {testimonial?.testimonial}
                </p>
                <div className="flex flex-col md:flex-row  justify-between  space-x-2 items-center -mt-5 md:mt-0">
                  <div className="flex items-center">
                    <div className={`${HomeCss.layer} `}>
                      <img
                        className="rounded-md overflow-hidden max-w-[30px] md:max-w-[50px] "
                        src={testimonial?.img}
                        alt={testimonial?.name}
                      />
                    </div>
                    <div className="px-5">
                      <h4 className="font-extrabold text-xl md:text-sm font-inter">
                        {testimonial?.name}
                      </h4>
                      <h6 className="text-sm md:text-sm font-semibold font-inter text-gray-800">
                        {testimonial?.company}
                      </h6>
                    </div>
                  </div>
                  <div className=" flex mt-5 md:mt-0 space-x-0">
                    <button
                      className=" my-2 mx-2 text-sm  px-2 py-2"
                      onClick={previous}>
                      <FontAwesomeIcon icon={faAngleLeft} />
                    </button>
                    <button
                      className=" my-2 mx-2 text-sm  px-2 py-2"
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

export default TestimonialSlider;
