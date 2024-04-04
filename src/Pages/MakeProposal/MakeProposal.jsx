import { NavLink } from "react-router-dom";

const MakeProposal = () => {
  return (
    <div className="grid grid-cols-4 m-4">
      <div className="mt-[110px] md:h-[400px] md:w-[350px] grid place-content-center md:px-[40px]   bg-[#222121] rounded-3xl text-white font-inter border-4 border-[#6B3D96]">
        <img className="" src="" alt="" />

        <h2 className="my-4 font-bold text-2xl">Web Developmnet</h2>
        <p className="my-2 text-sm text-pretty">
          Elevate your online presence with our bespokeweb development solutions
          tailored toyour unique business needs.
        </p>
        <NavLink
          className="rounded-full mt-10 font-bold px-10 py-4 block w-max  text-white shadow-even"
          to="/">
          Read More
        </NavLink>
      </div>
    </div>
  );
};

export default MakeProposal;
