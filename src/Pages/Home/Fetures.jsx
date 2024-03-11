import HomeCss from "../../assets/CSS/Home.module.css";
import fetureWeb from "../../assets/Images/feture-web.png";
import fetureGraphics from "../../assets/Images/feture-graphics.png";
import fetureVideoEdit from "../../assets/Images/feture-videoEdit.png";
const Fetures = () => {
  return (
    <div className="w-[100%]  mx-auto -mt-24 md:-mt-32 lg:-mt-36 mb-8 py-5 md:py-0 relative z-50  px-2">
      <div className="bg-[#F9FAFB] grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-5  rounded  shadow-feture font-flow">
        <div
          className={`${HomeCss.feture__box} text-center text-pretty px-4  lg:px-6 font-flow py-4 md:py-10 lg:py-12 `}>
          <div
            className={`${HomeCss.img__box}  mb-4 grid place-items-center mx-auto`}>
            <img
              loading="lazy"
              className="w-max"
              src={fetureWeb}
              alt="web-devolopment-feture"
            />
          </div>
          <h4 className="font-bold text-base my-4 ">Web Devlopment</h4>
          <p className="w-full sm:w-4/5 mx-auto  md:w-full lg:w-full">
            Whether you have a team of 2 or 200, our shared team inboxes keep
            everyone on the same page and in the loop.
          </p>
        </div>
        <div
          className={`${HomeCss.feture__box} text-center text-pretty px-4  lg:px-6 font-flow py-4 md:py-10 lg:py-12 md:border-x-2 md:border-dashed`}>
          <div
            className={`${HomeCss.img__box}  mb-4  grid place-items-center mx-auto`}>
            <img
              loading="lazy"
              className="w-max"
              src={fetureGraphics}
              alt="graphic-design-feture"
            />
          </div>
          <h4 className="font-bold text-base my-4">Graphics Design</h4>
          <p className="w-full sm:w-4/5 mx-auto  md:w-full lg:w-full">
            An all-in-one customer service platform that helps you balance
            everything your customers need to be happy.
          </p>
        </div>
        <div
          className={`${HomeCss.feture__box} text-center text-pretty px-4  lg:px-6 font-flow py-4 md:py-10 lg:py-12 `}>
          <div
            className={`${HomeCss.img__box}  mb-4  grid place-items-center mx-auto`}>
            <img
              loading="lazy"
              className="w-max"
              src={fetureVideoEdit}
              alt="video-editing-feture"
            />
          </div>
          <h4 className="font-bold text-base my-4">Video Edit</h4>
          <p className="w-full sm:w-4/5 mx-auto  md:w-full lg:w-full">
            Measure what matters with Untitled’s easy-to-use reports. You can
            filter, export, and drilldown on the data in a couple clicks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Fetures;
