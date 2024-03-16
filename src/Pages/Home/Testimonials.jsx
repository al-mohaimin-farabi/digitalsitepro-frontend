import ContentHeader from "../../Components/ContentHeader.jsx";
import person1 from "../../assets/Images/avatar/person1.webp";
import person2 from "../../assets/Images/avatar/person2.webp";
import person3 from "../../assets/Images/avatar/person3.webp";
import person4 from "../../assets/Images/avatar/person4.webp";
import bg1 from "../../assets/Images/background/testimonial-bg-1.webp";
import bg2 from "../../assets/Images/background/testimonial-bg-2.webp";
import bg3 from "../../assets/Images/background/testimonial-bg-3.webp";
import bg4 from "../../assets/Images/background/testimonial-bg-4.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  // const responsive = {
  //   0: { items: 1 },
  //   960: { items: 3 },
  // };

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,

    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2500,
    // cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    <div className="my-5 md:my-8 p-2 ">
      <ContentHeader title={"Testimonials"} />

      <div className="">
        <Slider {...settings}>
          {testimonialData.map((testimonial, index) => (
            <div key={index}>
              <div
                className="w-full  h-[420px] md:h-[480px] relative grid grid-cols-1 bg-fixed content-end bg-cover bg-center p-5 rounded-xl font-flow"
                style={{ backgroundImage: `url(${testimonial.bg})` }}>
                <div className="w-full relative bg-[#fff] rounded-xl shadow-2xl py-4 px-3  text-center font-mono md:h-[calc(480px-260px)] lg:h-[calc(480px-295px)] ">
                  <img
                    className="absolute top-0 -translate-y-1/2 left-[50%] -translate-x-1/2 w-[78px] h-[78px] rounded-full border-x-4 border-t-4 border-[#fff] border-b-4"
                    src={testimonial.img}
                    alt=""
                  />

                  <h4 className="font-bold mt-8">{testimonial.name}</h4>
                  <h6 className="font-thin">{testimonial.company}</h6>
                  <p className="text-sm my-2 text-pretty">
                    {testimonial.testimonial}
                  </p>
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
