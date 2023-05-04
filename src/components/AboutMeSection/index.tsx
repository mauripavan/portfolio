import { scrollToSection } from "@component/utils/useScroll";
import { BiRightArrowAlt } from "react-icons/bi";

const AboutMeSection = () => {
  return (
    <div
      id="about"
      className={"relative bg-gray-10 font-space tracking-wider "}
    >
      <div className="flex flex-1 min-h-screen mx-28">
        <div className="flex flex-1 items-center">
          <div>
            <p className="font-bold text-xl">
              <span className="text-blue">/ </span>ABOUT ME
            </p>
            <p className="font-bold text-5xl mt-6 mb-4">
              I’ve been developing websites & apps since 2022
            </p>
            <p className="text-lg text-gray-40 mb-12">
              I started to work as a developer after finishing my studies on
              Plataforma 5 - Cooding Bootcamp on 2022, an intensive training
              with more that 800 hours of study, where I learned the newest
              technologies on the market, to become a Full Stack Developer.
              Currently, I'm focused on the Front-End side, and I always keep
              learning to stay up to date with new technologies
            </p>
            <div
              onClick={() => scrollToSection("stack")}
              className="flex items-center gap-2 mb-12 border-b-2 border-gray-20 w-fit h-12 hover:border-white transition-all duration-200 cursor-pointer group"
            >
              <p>MORE ABOUT ME</p>
              <BiRightArrowAlt className="w-7 h-7 transition-all duration-200 group-hover:translate-x-2 group-hover:text-blue" />
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 justify-center items-end">
          <div className="flex w-4/5">
            <div className="flex flex-1 items-center gap-2">
              <p className="font-bold text-7xl">1</p>
              <p className="w-1/2 font-bold text-lg">Year of Experience</p>
            </div>
            <div className="flex flex-1 items-center gap-2">
              <p className="font-bold text-7xl">+8</p>
              <p className=" font-bold text-lg">Successful projects</p>
            </div>
          </div>
          <p className="w-4/5 text-lg text-gray-40 mt-4">
            During last year I've been working on several projects, which made
            me be sorounded of different world-wide teams and take my soft and
            technical skills to the next level.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
