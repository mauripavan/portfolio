import { BiRightArrowAlt } from "react-icons/bi";

const ContactSection = () => {
  return (
    <div
      id="contact"
      className="flex font-space tracking-wider min-h-screen items-center mx-28"
    >
      <div className="flex flex-1">
        <div className="flex-1">
          <div className="h-1.5 w-28 bg-white mb-6" />
          <p className="font-bold text-5xl w-3/4">
            Interested in working together?
          </p>
          <div className="flex mt-0.5 items-center">
            <p className="font-bold text-5xl">Let’s talk</p>
            <BiRightArrowAlt className="w-14 h-14 text-blue" />
          </div>
        </div>
        <div className="flex flex-1">
          <form className="flex flex-col flex-1 w-full">
            <div className="w-full h-16 mb-12 border-b-2 border-gray-20">
              <input
                className="w-full h-full bg-gray-50 focus:outline-none placeholder:font-bold placeholder:text-white placeholder:text-2xl text-2xl"
                placeholder="Enter your name"
              ></input>
            </div>
            <div className="w-full h-16 mb-12 border-b-2 border-gray-20">
              <input
                className="w-full h-full bg-gray-50 focus:outline-none placeholder:font-bold placeholder:text-white placeholder:text-2xl text-2xl"
                placeholder="Your email adress"
              ></input>
            </div>
            <textarea
              name="textarea"
              id="description"
              className="bg-gray-50 border-b-2 border-gray-20 focus:outline-none placeholder:font-bold placeholder:text-white placeholder:text-2xl"
              placeholder="Describe your project"
              rows={5}
            ></textarea>
            <div
              className="flex items-center gap-2 mt-12 border-b-2 border-gray-20 w-fit h-12 hover:border-white transition-all duration-200 cursor-pointer group"
            >
              <p>Contact me</p>
              <BiRightArrowAlt className="w-7 h-7 transition-all group-hover:translate-x-2 group-hover:text-blue" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
