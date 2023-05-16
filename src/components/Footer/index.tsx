import Image from "next/image";
import { images } from "@component/assets/images";
import { TfiLinkedin } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import { BiRightArrowAlt } from "react-icons/bi";
import { navbarButtons } from "../Navbar";
import { scrollToSection } from "@component/utils/useScroll";

const Footer = () => {
  const { profile } = images;

  return (
    <div className="flex flex-col flex-1 min-h-[70vh] bg-gray-10 font-space tracking-wider border-t border-gray-40">
      <div className="flex flex-col md:flex-row flex-1 mx-12 md:mx-28 items-start md:items-center border-b border-gray-40">
        <div className="flex flex-1 h-full">
          <div className="flex items-center gap-4">
            <div className="relative flex bg-gray-0 h-24 w-24 lg:h-32 lg:w-32 rounded-full overflow-hidden">
              <Image src={profile} alt={"profile"} className="absolute  " />
            </div>
            <div>
              <p className="font-extrabold text-xl lg:text-3xl">
                Mauricio Pavan
              </p>
              <p className="font-normal text-lg lg:text-2xl text-gray-40 mt-4">
                Full Stack Developer
              </p>
              <div className="flex gap-4 mt-4 items-center hover:text-neutral-0">
                <a
                  href="https://www.linkedin.com/in/mauriciopavan/"
                  target={"_blank"}
                >
                  <TfiLinkedin className="w-7 h-7 hover:-translate-y-2 transition-all duration-200 hover:text-white" />
                </a>
                <a href="https://github.com/mauripavan" target={"_blank"}>
                  <FaGithub className="w-7 h-7 hover:-translate-y-2 transition-all duration-200 hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-1 h-full justify-end">
          <div className="flex flex-col justify-center">
            <div className="flex items-center">
              <p className="font-bold text-2xl lg:text-5xl">Get in touch</p>
              <BiRightArrowAlt className="w-10 h-10 lg:w-14 lg:h-14 text-blue" />
            </div>
            <div className="flex flex-col lg:flex-row mt-8 gap-8">
              <div className="flex flex-fit flex-col">
                <p className="font-bold text-gray-40">EMAIL ME:</p>
                <div className="flex items-center h-10 border-b-4 border-gray-20 text-md lg:text-xl font-extrabold hover:border-white transition-all duration-200 cursor-pointer group">
                  <a href="mailto:mauriciopavan60@gmail.com">
                    <p>mauriciopavan60@gmail.com</p>
                  </a>
                  <BiRightArrowAlt className="w-4 h-4 lg:w-8 lg:h-8 transition-all duration-200 group-hover:translate-x-2 group-hover:text-blue" />
                </div>
              </div>
              <div className="flex flex-fit flex-col">
                <p className="font-bold text-gray-40">CALL ME:</p>
                <div className="flex items-center h-10 border-b-4 border-gray-20 text-md lg:text-xl font-extrabold hover:border-white transition-all duration-200 cursor-pointer group">
                  <a href="tel:(+54)1123983428">
                    <p>(+54)1123983428</p>
                  </a>
                  <BiRightArrowAlt className="w-4 h-4 lg:w-8 lg:h-8 transition-all duration-200 group-hover:translate-x-2 group-hover:text-blue" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mx-12 md:mx-28 h-20 items-center justify-between">
        <div className="flex w-full lg:w-1/2 text-sm lg:text-lg gap-4 hover:text-gray-0 transition duration-150">
          {navbarButtons.map((button, i) => {
            return (
              <div
                key={i}
                onClick={() => scrollToSection(button.to)}
                className="flex flex-1 justify-center hover:text-white transition duration-150 cursor-pointer"
              >
                <p>{button.name}</p>
              </div>
            );
          })}
        </div>
        <div>
          <p className="text-md lg:text-lg">Designed by Mauricio Pavan</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
