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

const Services = () => {
  return (
    <div className="services py-2  my-5 md:my-12 px-2 font-flow">
      <ContentHeader title="OUR SERVICES" />
      <div className="grid  grid-cols-1 md:grid-cols-3 ">
        <div className="p-4 text-center text-pretty md:border-gray-200 md:border-b-2">
          <FontAwesomeIcon
            className="text-primary font-extrabold text-4xl"
            icon={faCode}
          />

          <h4 className="text-primary text-lg font-bold my-4">
            Web Deblopment
          </h4>
          <p className="w-full sm:w-4/5 mx-auto md:w-full text-balance">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
            suscipit eveniet itaque sed quasi ullam accusamus iusto, praesentium
            amet vitae.
          </p>
        </div>
        <div className="p-4 text-center text-pretty md:border-gray-200 md:border-x-2 md:border-b-2">
          <FontAwesomeIcon
            className="text-primary font-extrabold text-4xl"
            icon={faPalette}
          />

          <h4 className="text-primary text-lg font-bold my-4">
            Graphics Design
          </h4>
          <p className="text-slate-900 text-base my-2 w-full sm:w-4/5 mx-auto md:w-full text-balance ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
            suscipit eveniet itaque sed quasi ullam accusamus iusto, praesentium
            amet vitae.
          </p>
        </div>
        <div className="p-4 text-center text-pretty md:border-gray-200 md:border-b-2">
          <FontAwesomeIcon
            className="text-primary font-extrabold text-4xl"
            icon={faClapperboard}
          />

          <h4 className="text-primary text-lg font-bold my-4">Video Editing</h4>
          <p className="w-full sm:w-4/5 mx-auto md:w-full text-balance">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
            suscipit eveniet itaque sed quasi ullam accusamus iusto, praesentium
            amet vitae.
          </p>
        </div>
        <div className="p-4 text-center text-pretty ">
          <FontAwesomeIcon
            className="text-primary font-extrabold text-4xl"
            icon={faChartLine}
          />

          <h4 className="text-primary text-lg font-bold my-4">SEO</h4>
          <p className="w-full sm:w-4/5 mx-auto md:w-full text-balance">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
            suscipit eveniet itaque sed quasi ullam accusamus iusto, praesentium
            amet vitae.
          </p>
        </div>
        <div className="p-4 text-center text-pretty md:border-gray-200 md:border-x-2 ">
          <FontAwesomeIcon
            className="text-primary font-extrabold text-4xl -rotate-45"
            icon={faBullhorn}
          />

          <h4 className="text-primary text-lg font-bold my-4">
            Degital Markting
          </h4>
          <p className="w-full sm:w-4/5 mx-auto md:w-full text-balance">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
            suscipit eveniet itaque sed quasi ullam accusamus iusto, praesentium
            amet vitae.
          </p>
        </div>
        <div className="p-4 text-center text-pretty  ">
          <FontAwesomeIcon
            className="text-primary font-extrabold text-4xl "
            icon={faPenToSquare}
          />

          <h4 className="text-primary text-lg font-bold my-4">
            Content Writing
          </h4>
          <p className="w-full sm:w-4/5 mx-auto md:w-full text-balance">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
            suscipit eveniet itaque sed quasi ullam accusamus iusto, praesentium
            amet vitae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
