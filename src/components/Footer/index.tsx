import Image from "next/image";
import { images } from "@component/assets/images";
import { TfiLinkedin } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import { BiRightArrowAlt } from "react-icons/bi";

const Footer = () => {
  const { profile } = images;

  return (
    <div className="flex flex-col flex-1 min-h-[70vh] bg-gray-10 font-space tracking-wider border-t border-gray-40">
      <div className="flex flex-1 mx-28 items-center border-b border-gray-40">
        <div className="flex flex-1 h-full">
          <div className="flex items-center gap-4">
            <div className="relative flex bg-gray-0 h-32 w-32 rounded-full overflow-hidden">
              <Image src={profile} alt={"profile"} className="absolute" />
            </div>
            <div>
              <p className="font-extrabold text-4xl">Mauricio Pavan</p>
              <p className="font-normal text-2xl text-gray-40 mt-4">
                Full Stack Developer
              </p>
              <div className="flex gap-4 mt-4 items-center">
                <TfiLinkedin className="w-7 h-7" />
                <FaGithub className="w-7 h-7" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-1 h-full justify-end">
          <div className="flex flex-col justify-center">
            <div className="flex items-center">
              <p className="font-bold text-5xl">Get in touch</p>
              <BiRightArrowAlt className="w-14 h-14 text-blue" />
            </div>
            <div className="flex mt-8 gap-8">
              <div className="flex flex-fit flex-col">
                <p className="font-bold text-gray-40">EMAIL ME:</p>
                <div className="flex items-center h-10 border-b-4 border-gray-20 text-xl font-extrabold">
                  <p>mauriciopavan60@gmail.com</p>
                  <BiRightArrowAlt className="w-8 h-8" />
                </div>
              </div>
              <div className="flex flex-fit flex-col">
                <p className="font-bold text-gray-40">CALL ME:</p>
                <div className="flex items-center h-10 border-b-4 border-gray-20 text-xl font-extrabold">
                  <p>(+54)1123983428</p>
                  <BiRightArrowAlt className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mx-28 h-20 items-center justify-between">
        <div className="flex text-xl gap-4">
          <p>Home</p>
          <p>About</p>
          <p>Tech Stack</p>
          <p>Projects</p>
          <p>Contact</p>
        </div>
        <div>
          <p>Copyright © Mauricio Pavan | Designed by Mauricio Pavan</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
