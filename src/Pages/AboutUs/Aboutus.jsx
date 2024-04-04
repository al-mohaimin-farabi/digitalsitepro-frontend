import Payel from "../../assets/Images/avatar/Asraful.webp";
import Farabi from "../../assets/Images/avatar/Farabi.webp";
import Rabbi from "../../assets/Images/avatar/Rabbi.webp";
import Faysal from "../../assets/Images/avatar/Faysal.webp";
import Footter from "../../Components/Footer";

const Aboutus = () => {
  const members = [
    {
      id: 1,
      name: "Fazlee Rabbi",
      email: "frbijoy019@gmail.com",
      img: Rabbi,
      role: "Managing Director (Founder) ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ratione.",
    },
    {
      id: 2,
      name: "Ashraful Isalm",
      email: "ashrafulislam@gmail.com",
      img: Payel,
      role: "CEO (Co-Founder)",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ratione.",
    },
    {
      id: 3,
      name: "Al Faysal",
      email: "alfaysalshagor@gmail.com",
      img: Faysal,
      role: "Media Creative Director",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ratione.",
    },
    {
      id: 4,
      name: "Al Mohaimin Farabi",
      email: "almohaiminfarabi.work@gmail.com",
      img: Farabi,
      role: "Tech Lead",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ratione.",
    },
  ];

  return (
    <>
      <div className="w-full py-[30px] md:py-[50px] relative overflow-hidden  min-h-[400px] aboutbg">
        <div className="md:max-w-[960px] lg:max-w-[1280px]  -mb-[70px] md:mt-[20px] mx-auto py-2 px-3 md:px-1 text-left flex items-center min-h-[400px] ">
          <div className=" py-5   text-left">
            <p className="relative z-50 text-gray-100 font-inter   text-xl font-bold font-inter mb-2">
              Who We Are
            </p>
            <h2 className=" relative z-50  text-gray-100 font-bold text-3xl  md:text-4xl  font-inter tracking-widest">
              Designers, thinkers & collaborators
            </h2>
          </div>
          <div className="bg-gray-900/70 absolute inset-0 z-30"></div>
        </div>
      </div>
      <div className=" md:max-w-[960px] lg:max-w-[1280px] mx-auto px-3 md:py-2 md:px-1 text-left   my-16 ">
        <h2 className="text-2xl sm:text-2xl font-normal font-inter text-[#301934] mb-4">
          We provide our top-notch creative services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 mt-8">
          <p className="text-base font-inter text-pretty break-words ">
            Digital Site Pro is a solution service provider committed to helping
            you establish a strong presence in the digital realm. We are the
            agency known for innovative thinking and pushing the limits of what
            is achievable.
          </p>
          <p className="text-base font-inter text-pretty break-words">
            Digital Site Pro: Your premier ally in conquering the digital
            frontier, pioneering innovation, and redefining possibilities.
            We&apos;re not just a service provider; we&apos;re your partners in
            transforming digital landscapes with unparalleled creativity and
            visionary thinking.
          </p>
        </div>
        <h2 className="text-[#301934] text-3xl font-inter font-normal  text-center mt-12">
          Our Team
          <span className="w-[calc(100%-60%)] sm:w-[20%] h-[2px] bg-[#301934] block mx-auto"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-12 pb-5">
          {members.map((member) => (
            <div key={member.id} className="p-2">
              <div className="bg-gray-200 w-[120px] h-[120px] rounded-full overflow-hidden mx-auto">
                <img className="w-[120px] h-[120px] " src={member.img} alt="" />
              </div>
              <h4 className="mt-4 mb-2 text-base font-semibold font-inter text-center">
                {member.name}
              </h4>
              <p className="text-base text-center">{member?.role}</p>
              <p className="text-base text-center mt-2">
                {member?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footter />
    </>
  );
};

export default Aboutus;
