import Img_01 from "../../assets/Images/icon/Responsive-Design-Icon.svg";
import Img_02 from "../../assets/Images/icon/E-Com-Dev-Icon.svg";
import Img_03 from "../../assets/Images/icon/Creative-Web-App-Icon.svg";
import Img_04 from "../../assets/Images/icon/Creative-Website-Maintenance-&-Support-Icon-Design.svg";
import Img_05 from "../../assets/Images/icon/Creative-Website-Analytics-Icon-Design.svg";
import Img_06 from "../../assets/Images/icon/Creative-SEO-Icon.svg";
import Img_07 from "../../assets/Images/icon/Custom-Web-Dev-Icon.svg";
import Img_08 from "../../assets/Images/icon/CMS-Icon.svg";

const WebDevelopment = () => {
  const servicesCard = [
    {
      id: 1,
      img: Img_01,
      heading: "Responsive Web Design",
      descriptions:
        "Ensuring a seamless visual & interactive experience from desktops to mobile devices for exceptional user engagement.",
    },
    {
      id: 2,
      img: Img_02,
      heading: "E-Commerce Development",
      descriptions:
        "Crafting seamless digital marketplaces with ironclad paymentsecurity & streamlined inventory management for effortless online shopping experiences.",
    },
    {
      id: 3,
      img: Img_03,
      heading: "Web Application Development",
      descriptions:
        "Creating bespoke digital solutions that dynamically adapt to your unique business requirements for unparalleled online presence.",
    },
    {
      id: 4,
      img: Img_04,
      heading: "Website Maintenance & Support",
      descriptions:
        "Ensuring a seamless visual & interactive experience from desktops tomobile devices for exceptional user engagement.",
    },
    {
      id: 5,
      img: Img_05,
      heading: "Website Analytics",
      descriptions:
        "Harnessing the digital constellation, we sculpt insights from the cosmic dance of user interactions, painting a portrait of our website's voyage through the cyber cosmos.",
    },
    {
      id: 6,
      img: Img_06,
      heading: "SEO Optimization",
      descriptions:
        "Igniting a digital wildfire, we blaze trails through the SEO wilderness,  beckoning the algorithms to unveil our website's hidden treasures to  seekers of knowledge.",
    },
    {
      id: 7,
      img: Img_07,
      heading: "Custom Web Development",
      descriptions:
        "Crafting bespoke digital realms, we mold pixels & code into living tapestries, weaving the essence of your br&'s vision into an immersive online sanctuary.",
    },

    {
      id: 8,
      img: Img_08,
      heading: "Content Management Systems (CMS)",
      descriptions:
        "Architecting virtual kingdoms, we forge dynamic realms where content reigns supreme, empowering creators to shape narratives & captivate audiences with seamlessenchantment.",
    },
  ];

  return (
    <div className="mt-[130px] md:max-w-[960px] lg:max-w-[1280px] mx-auto my-10  py-2 px-4 md:px-2   md:py-0  ">
      <div className="grid gap-5 gird-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {servicesCard.map((service) => (
          <div key={service?.id} className="shadow-xl px-4 py-4 text-center">
            <img
              className="w-[100px] aspect-square max-w-[100px]  mx-auto"
              src={service?.img}
              alt={service?.heading}
            />
            <h4 className="my-2 h-[50px]  font-bold text-base">{service?.heading}</h4>
            <p className="text-sm text-wrap break-words ">
              {service?.descriptions}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebDevelopment;
