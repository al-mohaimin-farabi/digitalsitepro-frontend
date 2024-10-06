
import Slider from "react-slick";

const Testing = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    arrows: true,

    centerPadding: "10px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <div className="bg-white mt-[110px] max-w-[1280px] mx-auto  ">
      <Slider {...settings}>
        <div className="h-16 w-16 bg-red-600">
          <h3>1</h3>
        </div>
        <div className="h-16 w-16 bg-red-600">
          <h3>2</h3>
        </div>
        <div className="h-16 w-16 bg-red-600">
          <h3>3</h3>
        </div>
        <div className="h-16 w-16 bg-red-600">
          <h3>4</h3>
        </div>
        <div className="h-16 w-16 bg-red-600">
          <h3>5</h3>
        </div>
        <div className="h-16 w-16 bg-red-600">
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default Testing;
