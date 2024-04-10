import Services from "./Services";
import Experiance from "./Experiance";
import Ourwork from "./Ourwork";
import TechStack from "./TechStack";
import Testimonials from "./Testimonials";
import Calltoaction from "./Calltoaction";
import Faq from "./Faq";
// import OurTeam from "./OurTeam";
import Footer from "../../Components/Footer";
import Marquee from "react-fast-marquee";

import facebook from "../../assets/Images/marquee-logo/facebook.webp";
import instagram from "../../assets/Images/marquee-logo/instagram.webp";
import linkedIn from "../../assets/Images/marquee-logo/linkedin.webp";
import twitter from "../../assets/Images/marquee-logo/x.webp";
import youtube from "../../assets/Images/marquee-logo/youtube.webp";
import tiktok from "../../assets/Images/marquee-logo/tiktok.webp";
import thereds from "../../assets/Images/marquee-logo/thereds.webp";
import pinterest from "../../assets/Images/marquee-logo/pinterest.webp";
import tumblr from "../../assets/Images/marquee-logo/tumblr.webp";
import Fetures from "./Fetures";

const Main = () => {
  return (
    <div className="w-full ">
      <Fetures />
      <Services />
      <Faq />
      <main className=" md:max-w-[960px] lg:max-w-[1280px] mx-auto px-2 md:px-0">
        {/* <Experiance /> */}
        <Ourwork />
        <Testimonials />
        <TechStack />
        {/* <OurTeam /> */}
      </main>
      <Calltoaction />
      <Marquee
        className="overflow-hidden mb-5 md:mb-14 py-4 font-mono  bg-white "
        speed={50}
        pauseOnHover="True"
        pauseOnClick="True"
        autoFill="True"
        gradient="True"
        gradientWidth={10}>
        <a
          target="blank"
          href="https://www.facebook.com/profile.php?id=61555619364077"
          className="flex justify-center items-center text-slate-600 font-bold cursor-pointer mx-6">
          <img
            loading="lazy"
            className="max-w-[105px] md:max-w-[150px]     "
            src={facebook}
            alt="Facebook Logo"
          />
        </a>
        <a
          target="blank"
          href="https://www.instagram.com/digitalsitepro/"
          className="flex justify-center items-center text-slate-600 font-bold cursor-pointer mx-6">
          <img
            loading="lazy"
            className="max-w-[105px] md:max-w-[150px]     "
            src={instagram}
            alt="Instagram Logo"
          />
        </a>
        <a
          target="blank"
          href="https://www.linkedin.com/in/almohaiminfarabi/"
          className="flex justify-center items-center text-slate-600 font-bold cursor-pointer mx-6">
          <img
            loading="lazy"
            className="max-w-[105px] md:max-w-[150px]     "
            src={linkedIn}
            alt="LinkedIn Logo"
          />
        </a>
        <a
          target="blank"
          href="https://twitter.com/Digitalsitepro"
          className="flex justify-center items-center text-slate-600 font-bold cursor-pointer mx-0">
          <img
            loading="lazy"
            className="max-w-[105px] md:max-w-[150px]     "
            src={twitter}
            alt="Twitter Logo"
          />
        </a>
        <a
          target="blank"
          href="https://www.youtube.com/channel/UCiqozKPVLIsEoi0ZCZuL-2w"
          className="flex justify-center items-center text-slate-600 font-bold cursor-pointer mx-6">
          <img
            loading="lazy"
            className="max-w-[105px] md:max-w-[150px]     "
            src={youtube}
            alt="YouTube Logo"
          />
        </a>
        <a
          target="blank"
          href="https://www.tiktok.com/@digitalsitepro"
          className="flex justify-center items-center text-slate-600 font-bold cursor-pointer mx-6">
          <img
            loading="lazy"
            className="max-w-[105px] md:max-w-[150px]     "
            src={tiktok}
            alt="TikTok Logo"
          />
        </a>
        <a
          target="blank"
          href="https://www.threads.net/@digitalsitepro"
          className="flex justify-center items-center text-slate-600 font-bold cursor-pointer mx-6">
          <img
            loading="lazy"
            className="max-w-[105px] md:max-w-[150px]     "
            src={thereds}
            alt="The Reds Logo"
          />
        </a>
        <a
          target="blank"
          href="https://www.pinterest.com/digitalsitep/"
          className="flex justify-center items-center text-slate-600 font-bold cursor-pointer mx-6">
          <img
            loading="lazy"
            className="max-w-[105px] md:max-w-[150px]     "
            src={pinterest}
            alt="Pinterest Logo"
          />
        </a>
        <a
          target="blank"
          href="https://www.tumblr.com/blog/digitalsitepro"
          className="flex justify-center items-center text-slate-600 font-bold cursor-pointer mx-6">
          <img
            loading="lazy"
            className="max-w-[105px] md:max-w-[150px]     "
            src={tumblr}
            alt="Tumblr Logo"
          />
        </a>
      </Marquee>
      <Footer />
    </div>
  );
};

export default Main;
