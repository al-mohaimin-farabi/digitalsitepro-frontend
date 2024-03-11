import Footter from "../../Components/Footer";

const Testimonial = () => {
  return (
    <>
      <div className="w-full pt-[50px] md:pt-[70px] relative overflow-hidden  min-h-[400px] testimonialbg">
        <div className="md:max-w-[960px] lg:max-w-[1280px]  -mb-[50px] md:mt-[20px] mx-auto p-2 text-left flex items-center min-h-[400px] ">
          <div className=" py-5  text-left">
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
      <div className=" bg-gray-200 py-10 pb-16 mt-16">
        <div className="md:max-w-[960px] lg:max-w-[1280px] mx-auto p-2">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-600 text-center tracking-wide  md:text-balance md:px-12">
            If you are on our customers and would like to submit your
            testimonial, please use the form bellow. We greatly appreciate your
            feedback
          </h2>
          <form className="py-5 mt-8 space-y-5 px-4 sm:px-2 md:px-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Name"
                name="Name"
                className="outline rounded w-full outline-1 p-2"></input>
              <input
                type="email"
                placeholder="Email"
                name="Email"
                className="outline rounded w-full outline-1 p-2"></input>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Location"
                name="Location"
                className="outline rounded w-full outline-1 p-2"></input>
              <input
                type="text"
                placeholder="Role"
                name="Role"
                className="outline rounded w-full outline-1 p-2"></input>
            </div>
            <div className="grid grid-cols-1  ">
              <textarea
                placeholder="Your Message Here"
                className="outline outline-1 rounded p-2 w-full min-h-[180px] max-h-[220px] "
                id="message"
              />
            </div>
            <input
              className="bg-slate-900 px-12 py-3 cursor-pointer hover:bg-transparent hover:text-slate-900 border-2 transition-all duration-300 border-slate-900 text-white rounded"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
      <Footter />
    </>
  );
};

export default Testimonial;
