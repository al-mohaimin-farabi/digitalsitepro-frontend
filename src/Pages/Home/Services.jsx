import ContentHeader from "../../Components/ContentHeader.jsx";
import img_01 from "../../assets/Images/Creative-Web-Development-Icons-for-Modern-Projects.svg";
import img_02 from "../../assets/Images/Creative-Graphic-Design-Icons-for-Every-Project.svg";
import img_03 from "../../assets/Images/Powerful-Video-Editing-Icons for Your Projectsn.svg";
import img_04 from "../../assets/Images/icon/WebDevelopment/Creative-SEO-Icon.svg";
import img_05 from "../../assets/Images/Creative-Web-Development-Icons-for-Modern-Projects.svg";
import img_06 from "../../assets/Images/Creative-Web-Development-Icons-for-Modern-Projects.svg";

import ServicesCard from "./ServicesCard.jsx";

const Services = () => {
  const serviceCard = [
    {
      id: 1,
      img: img_01,
      heading: "Web Devlopment",
      peragraph:
        "Elevate your online presence with our bespokeweb development solutions  tailored toyour unique business needs.",
      link: "/services/webdevelopment",
    },
    {
      id: 2,
      img: img_02,
      heading: "Graphics Design",
      peragraph:
        "Ignite  your brand's visual identity with our graphic design agency's expertise  in crafting stunning logos, branding materials,  and marketing  collateral.",
      link: "/services/graphicsdesign/?category=all",
    },
    {
      id: 3,
      img: img_03,
      heading: "Video Editing",
      peragraph:
        "Transform your  raw footage into polished masterpieces with our professional video  editing  services, tailored to your specific needs and vision.",
      link: "/services/videoedit",
    },
    {
      id: 4,
      img: img_04,
      heading: "SEO",
      peragraph:
        "Unleash the hidden potential of your digital kingdom with our SEO  sorcery. We're not just optimizing, we're orchestrating a symphony of  search supremacy, ensuring your online presence reigns supreme amidst  the digital landscape.",
      link: "/services/webdevelopment",
    },
    {
      id: 5,
      img: img_05,
      heading: "Digital Markting",
      peragraph:
        "Join the digital revolution with our innovative digital marketing  strategies. We don't just market, we craft digital symphonies that  resonate across channels, orchestrating an unforgettable journey for  your brand in the ever-evolving online sphere.",
      link: "/services/webdevelopment",
    },
    {
      id: 6,
      img: img_06,
      heading: "Content Writing",
      peragraph:
        "Dive into a world where words wield magic and stories shape destinies.  Our content writing isn't just about words; it's about weaving  narratives that ignite imaginations, spark conversations, and leave an  indelible mark on the digital landscape.",
      link: "/services/webdevelopment",
    },
  ];

  return (
    <div className="services py-2  my-5 md:my-16 px-1 md:px-2 font-flow bg-[#1e1e1e]">
      <div className="md:max-w-[960px] lg:max-w-[1280px] mx-auto px-2 md:px-1 py-16">
        <ContentHeader color="white" title="OUR SERVICES" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 gap-y-8 gap-x-8 ">
          {serviceCard.map((item) => (
            <ServicesCard key={item.id} item={item}></ServicesCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
