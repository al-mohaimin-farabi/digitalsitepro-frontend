import PropTypes from "prop-types";

const ContentHeader = ({ color = "primary", title }) => {
  return (
    <div className="p-2 mb-5 md:mb-10 text-center ">
      <h2
        className={`text-${color} text-xl md:text-2xl uppercase font-inter font-bold`}>
        {title}
      </h2>
      <div
        className={`bg-${color} w-[30%] mx-auto h-[3px] my-2 rounded-full`}></div>
    </div>
  );
};

export default ContentHeader;
ContentHeader.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
};
