import PropTypes from "prop-types";

const ContentHeader = ({ title }) => {
  return (
    <div className="p-2 mb-5 md:mb-10 text-center ">
      <h2 className="text-primary text-2xl md:text-3xl uppercase font-flow font-bold">
        {title}
      </h2>
      <div
        className={`bg-primary w-[50%] mx-auto h-[3px] my-2 rounded-md`}></div>
    </div>
  );
};

export default ContentHeader;
ContentHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
