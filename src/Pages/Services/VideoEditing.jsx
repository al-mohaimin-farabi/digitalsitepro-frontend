import Img_01 from "../../assets/Images/icon/VideoEditing/Color-Grading-Icons.svg";
import Img_02 from "../../assets/Images/icon/VideoEditing/video-editing-company-&-grapich.svg";
import Img_03 from "../../assets/Images/icon/VideoEditing/Capture-Every-Emotion-Wedding-Video-Editing-Icons-for-Lasting-Memories.svg";
import Img_04 from "../../assets/Images/icon/VideoEditing/Social-media-marketing-icon-design-template-vector-illustration-for-graphic-and-web-design.svg";
import Img_05 from "../../assets/Images/icon/VideoEditing/Powerful-Vlogging-Video-Editing-Icons.svg";
import Img_06 from "../../assets/Images/icon/VideoEditing/Ignite-Engagement-YouTube-Video-Editing-Icons-for-Captivating-Content.svg";
import Img_07 from "../../assets/Images/icon/VideoEditing/Captures-attention-and-emphasizes-the-use-of-icons-specifically-for-Reels-video-editing.svg";

const VideoEditing = () => {
  const servicesCard = [
    {
      id: 1,
      img: Img_01,
      heading: "Color-Grading",
      descriptions:
        "Unlock the hidden magic of your footage. Color Grading: Transform your videos with cinematic depth, vibrant emotions, and a look that captivates.",
    },
    {
      id: 2,
      img: Img_02,
      heading: "BrandStory Clip",
      descriptions:
        "We create captivating video clips that connect with your audience and amplify your brand message.",
    },
    {
      id: 3,
      img: Img_03,
      heading: "Visionary Wedding Cinematic Alchemy",
      descriptions:
        "Transform your love story into a timeless masterpiece. We weave light, emotion, and artistry to craft a film that transcends the ordinary.",
    },
    {
      id: 4,
      img: Img_04,
      heading: "Social Media Video Editor",
      descriptions:
        "Craft captivating social media videos that resonate. Effortless editing tools to make your stories shine.",
    },
    {
      id: 5,
      img: Img_05,
      heading: "Vlog Editing Studio",
      descriptions:
        "We help you create professional-looking vlogs that engage your audience and grow your channel.",
    },
    {
      id: 6,
      img: Img_06,
      heading: "Youtuber's Studio",
      descriptions:
        "Your one-stop shop for creating stellar YouTube videos. Edit, optimize, and publish content that wows your audience and grows your channel.",
    },
    {
      id: 7,
      img: Img_07,
      heading: "Reels video editing ",
      descriptions:
        "Transform your clips into captivating stories that stop the scroll and grow your audience.",
    },

    // {
    //   id: 8,
    //   img: Img_08,
    //   heading: "Vloging video",
    //   descriptions:
    //     "Architecting virtual kingdoms, we forge dynamic realms where content reigns supreme, empowering creators to shape narratives & captivate audiences with seamlessenchantment.",
    // },
    // {
    //   id: 9,
    //   img: Img_09,
    //   heading: "Vloging video",
    //   descriptions:
    //     "Architecting virtual kingdoms, we forge dynamic realms where content reigns supreme, empowering creators to shape narratives & captivate audiences with seamlessenchantment.",
    // },
    // {
    //   id: 10,
    //   img: Img_10,
    //   heading: "Vloging video",
    //   descriptions:
    //     "Architecting virtual kingdoms, we forge dynamic realms where content reigns supreme, empowering creators to shape narratives & captivate audiences with seamlessenchantment.",
    // },
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
            <h4 className="my-2 h-[50px]  font-bold text-base capitalize">
              {service?.heading}
            </h4>
            <p className="text-sm text-wrap break-words ">
              {service?.descriptions}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoEditing;
