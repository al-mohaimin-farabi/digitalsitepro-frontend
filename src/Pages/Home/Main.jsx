import Services from "./Services";
import Experiance from "./Experiance";
import Ourwork from "./Ourwork";
import Fetures from "./Fetures";
import TechStack from "./TechStack";
import Testimonials from "./Testimonials";
import Calltoaction from "./Calltoaction";
import Faq from "./Faq";
import OurTeam from "./OurTeam";

import Marquee from "react-fast-marquee";
import facebook from "../../assets/Images/facebook-color-svgrepo-com.svg";
import instagram from "../../assets/Images/instagram-1-svgrepo-com.svg";
import linkedIn from "../../assets/Images/linkedin-svgrepo-com.svg";
import twitter from "../../assets/Images/logo-x-twitter.svg";
import youtube from "../../assets/Images/yt.png";
import tiktok from "../../assets/Images/tiktok-icon-white-1-logo-svgrepo-com.svg";
import thereds from "../../assets/Images/threads.svg";
import pinterest from "../../assets/Images/pinterest-svgrepo-com.svg";
import tumblr from "../../assets/Images/tumblr.svg";
import Footer from "../../Components/Footer";

// import facebook from "../../assets/Images/marquee-logo/facebook.png";
// import instagram from "../../assets/Images/marquee-logo/instagram.png";
// import linkedIn from "../../assets/Images/marquee-logo/linkedIn.png";
// import twitter from "../../assets/Images/marquee-logo/twitter.png";
// import youtube from "../../assets/Images/marquee-logo/youtube.png";
// import tiktok from "../../assets/Images/marquee-logo/tiktok.png";
// import thereds from "../../assets/Images/marquee-logo/thereds.png";
// import pinterest from "../../assets/Images/marquee-logo/pinterest.png";
// import tumblr from "../../assets/Images/marquee-logo/tumblr.png";

const Main = () => {
  return (
    <div className=" w-full">
      <main className=" md:max-w-[960px] lg:max-w-[1280px] mx-auto ">
        <Fetures />
        <Services />
        <TechStack />
        <Experiance />
        <Ourwork />
        <Testimonials />
        <Calltoaction />
        <OurTeam />
        <Faq />
      </main>
      <Marquee
        className="overflow-hidden my-5 md:my-16 py-4 font-mono grayscale  "
        speed={50}
        pauseOnHover="True"
        pauseOnClick="True"
        autoFill="True"
        gradient="True"
        gradientWidth={10}>
        <a
          className="flex justify-center items-center mx-4 text-slate-600 grayscale  text-sm md:text-4xl font-bold"
          href="https://www.facebook.com/profile.php?id=61555619364077&is_tour_dismissed=true"
          target="blank">
          <img
            loading="lazy"
            className="max-w-[40px] h-[40px] md:max-w-[45px] md:h-[45px] mx-2"
            src={facebook}
            alt=""
          />
          Facebook
        </a>
        <a
          className="flex justify-center items-center mx-4 text-slate-600 grayscale text-sm md:text-4xl font-bold"
          href="https://www.instagram.com/digitalsitepro/"
          target="blank">
          <img
            loading="lazy"
            className="max-w-[40px] h-[40px] md:max-w-[45px] md:h-[45px] mx-2"
            src={instagram}
          />
          Instagram
        </a>
        <a
          className="flex justify-center items-center mx-4 text-slate-600 grayscale text-sm md:text-4xl font-bold"
          href="https://twitter.com/Digitalsitepro"
          target="blank">
          <img
            loading="lazy"
            className="max-w-[40px] h-[40px] md:max-w-[45px] md:h-[45px] mx-2"
            src={twitter}
          />
          Twitter
        </a>
        <a
          className="flex justify-center items-center mx-4 text-slate-600 grayscale text-sm md:text-4xl font-bold"
          href="https://www.pinterest.com/digitalsitep/"
          target="blank">
          <img
            loading="lazy"
            className="max-w-[40px] h-[40px] md:max-w-[45px] md:h-[45px] mx-2"
            src={pinterest}
          />
          Pinterest
        </a>
        <a
          className="flex justify-center items-center mx-4 text-slate-600 grayscale text-sm md:text-4xl font-bold"
          href=""
          target="blank">
          <img
            loading="lazy"
            className="max-w-[40px] h-[40px] md:max-w-[45px] md:h-[45px] mx-2"
            src={linkedIn}
          />
          LinkedIn
        </a>
        <a
          className="flex justify-center items-center mx-4 text-slate-600 grayscale text-sm md:text-4xl font-bold"
          href=""
          target="blank">
          <img
            loading="lazy"
            className="max-w-[40px] h-[40px] md:max-w-[100%]  mx-2"
            src={youtube}
          />
        </a>
        <a
          className="flex justify-center items-center mx-4 text-slate-600 grayscale text-sm md:text-4xl font-bold"
          href=""
          target="blank">
          <img
            loading="lazy"
            className="max-w-[40px] h-[40px] md:max-w-[45px] md:h-[45px] mx-2"
            src={tiktok}
          />
          Tiktok
        </a>
        <a
          className="flex justify-center items-center mx-4 text-slate-600 grayscale text-sm md:text-4xl font-bold"
          href=""
          target="blank">
          <img
            loading="lazy"
            className="max-w-[40px] h-[40px] md:max-w-[45px] md:h-[45px] mx-2"
            src={thereds}
          />
          Thereds
        </a>
        <a
          className="flex justify-center items-center mx-4 text-slate-600 grayscale text-sm md:text-4xl font-bold"
          href="https://www.tumblr.com/digitalsitepro"
          target="blank">
          <img
            loading="lazy"
            className="max-w-[40px] h-[40px] md:max-w-[45px] md:h-[45px] mx-2"
            src={tumblr}
          />
          Tumblr
        </a>
      </Marquee>
      <Footer />
    </div>
  );
};

export default Main;
