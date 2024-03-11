import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="mt-[120px] h-[calc(100vh-120px)] flex items-center px-6">
      <div className="w-full md:max-w-[780px]  bg-primary/90 mx-auto h-[60%] rounded-lg grid place-content-center">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl text-gray-100 font-bold underline decoration-wavy underline-offset-8 my-2 font-mono">
            404
          </h1>
          <p className="my-8 font-mono text-gray-100 text-2xl">
            Page Not Fount
          </p>
          <NavLink
            to="/"
            className="hideState rounded text-gray-100 block my-6 border-2 border-gray-100 px-6 py-4 hover:bg-gray-100 hover:text-gray-900 font-mono">
            Return to home
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
