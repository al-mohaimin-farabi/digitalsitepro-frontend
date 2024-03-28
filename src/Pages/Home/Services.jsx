import ContentHeader from "../../Components/ContentHeader.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faChartLine,
  faClapperboard,
  faPalette,
  faBullhorn,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

import HomeCss from "../../assets/CSS/Home.module.css";

const Services = () => {
  return (
    <div className="services py-2  my-5 md:my-16 px-2 font-flow">
      <ContentHeader title="OUR SERVICES" />
      <div className="grid  grid-cols-1 md:grid-cols-3 gap-3 md:gap-0 ">
        <div
          className={`px-5 py-10 text-pretty text-justify text-base md:border-gray-200  ${HomeCss.servicesCardBg} text-white md:border-b-2`}>
          <FontAwesomeIcon
            className="text-purple-bright font-extrabold text-4xl"
            icon={faCode}
          />

          <h4 className=" text-white text-lg font-bold my-4">Web Deblopment</h4>
          <p className="w-full sm:w-4/5 mx-auto md:w-full text-justify text-sm text-gray-300 ">
            Elevate your online presence with our comprehensive web development
            services, covering front-end design, back-end functionality, and
            expertise in WordPress, Shopify, and Wix platforms
          </p>
        </div>
        <div
          className={`px-5 py-10 text-pretty text-justify text-base md:border-gray-200 md:border-x-2  ${HomeCss.servicesCardBg} text-white md:border-b-2`}>
          <FontAwesomeIcon
            className="text-purple-bright font-extrabold text-4xl"
            icon={faPalette}
          />

          <h4 className=" text-white text-lg font-bold my-4">
            Graphics Design
          </h4>
          <p className="w-full m:w-4/5 mx-auto md:w-full text-justify text-sm text-gray-300 ">
            Unlock the power of visual storytelling with our innovative graphic
            design solutions, where imagination knows no bounds. From
            captivating logos to breathtaking illustrations, our team of
            creative wizards transforms ideas into impactful visuals that leave
            a lasting impression.
          </p>
        </div>
        <div
          className={`px-5 py-10 text-pretty text-justify text-base md:border-gray-200 ${HomeCss.servicesCardBg} text-white  md:border-b-2`}>
          <FontAwesomeIcon
            className="text-purple-bright font-extrabold text-4xl"
            icon={faClapperboard}
          />

          <h4 className=" text-white text-lg font-bold my-4">Video Editing</h4>
          <p className="w-full sm:w-4/5 mx-auto md:w-full text-justify text-sm text-gray-300 ">
            Dive into the realm of visual enchantment with our video editing
            prowess. From raw footage to cinematic brilliance, we weave magic
            into every frame, crafting narratives that mesmerize and captivate
            audiences, one edit at a time.
          </p>
        </div>
        <div
          className={`px-5 py-10 text-pretty text-justify text-base ${HomeCss.servicesCardBg} text-white`}>
          <FontAwesomeIcon
            className="text-purple-bright font-extrabold text-4xl"
            icon={faChartLine}
          />

          <h4 className=" text-white text-lg font-bold my-4">SEO</h4>
          <p className="w-full sm:w-4/5 mx-auto md:w-full text-justify text-sm text-gray-300 ">
            Unleash the hidden potential of your digital kingdom with our SEO
            sorcery. We&apos;re not just optimizing, we&apos;re orchestrating a
            symphony of search supremacy, ensuring your online presence reigns
            supreme amidst the digital landscape
          </p>
        </div>
        <div
          className={`px-5 py-10 text-pretty text-justify text-base md:border-gray-200 md:border-x-2 ${HomeCss.servicesCardBg} text-white`}>
          <FontAwesomeIcon
            className="text-purple-bright font-extrabold text-4xl -rotate-45"
            icon={faBullhorn}
          />

          <h4 className=" text-white text-lg font-bold my-4">
            Degital Markting
          </h4>
          <p className="w-full sm:w-4/5 mx-auto md:w-full text-justify text-sm text-gray-300 ">
            Join the digital revolution with our innovative digital marketing
            strategies. We don&apos;t just market, we craft digital symphonies
            that resonate across channels, orchestrating an unforgettable
            journey for your brand in the ever-evolving online sphere.
          </p>
        </div>
        <div
          className={`px-5 py-10 text-pretty text-justify text-base  ${HomeCss.servicesCardBg} text-white`}>
          <FontAwesomeIcon
            className="text-purple-bright font-extrabold text-4xl "
            icon={faPenToSquare}
          />

          <h4 className=" text-white text-lg font-bold my-4">
            Content Writing
          </h4>
          <p className="w-full sm:w-[4/5] mx-auto md:w-full text-justify text-sm text-gray-300 ">
            Dive into a world where words wield magic and stories shape
            destinies. Our content writing isn&apos;t just about words;
            it&apos;s about weaving narratives that ignite imaginations, spark
            conversations, and leave an indelible mark on the digital landscape.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
