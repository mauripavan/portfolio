import Image from "next/image";
import { HiOutlineChevronDown } from "react-icons/hi";
import { TfiLinkedin } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import { images } from "@component/assets/images";
import HomeCard from "../HomeCard";
import { IHomeCardProps } from "../HomeCard/types";
import { scrollToSection } from "@component/utils/useScroll";

const MainSection = () => {
  const { profile } = images;

  const cardsInfo: IHomeCardProps[] = [
    {
      title: "TECH STACK",
      description: `Discover the technologies I use to develop both, mobile apps and
        web sites, as well as the last projects in which I've been working
        on.`,
      link: {
        name: "LEARN MORE",
        to: "stack",
      },
    },
    {
      title: "CONTACT ME",
      description: `Do you have something in mind to create? Let's chat! Complete the
        form, we can create amazing things together.`,
      link: {
        name: "COMPLETE FORM",
        to: "contact",
      },
    },
  ];

  return (
    <div
      id="home"
      className={
        "flex flex-col lg:flex-row flex-1 font-space mx-12 lg:mx-28 tracking-normal min-h-screen relative lg:pb-16 lg:tracking-wider"
      }
    >
      <div className={"flex flex-col flex-1 justify-center z-10"}>
        <div className="h-2 bg-white w-36 mb-12" />
        <p className="text-xl md:text-3xl lg:text-7xl font-bold w-5/6">
          I'm Mauricio, Full Stack Dev
        </p>
        <p className="font-normal text-gray-30 mt-4 text-sm w-1/2 ">
          Welcome to my website. Let's take a look to some of my jobs!
        </p>
        <div
          onClick={() => scrollToSection("about")}
          className="flex items-center justify-center bg-blue h-16 w-16 lg:h-32 lg:w-32 rounded-full mt-20 hover:scale-90 transition-all duration-200"
        >
          <HiOutlineChevronDown className="w-6 h-6 lg:w-12 lg:h-12 animate-bounce" />
        </div>
      </div>

      <div
        className={"flex flex-col flex-1 items-start lg:items-end text-lg z-10"}
      >
        <div className="flex flex-col md:flex-row lg:flex-col gap-8 items-end">
          {cardsInfo.map((card, i) => {
            return (
              <HomeCard
                key={i}
                title={card.title}
                description={card.description}
                link={{
                  name: card.link.name,
                  to: card.link.to,
                }}
              />
            );
          })}
        </div>

        <div className="flex flex-col w-3/5 mt-12">
          <p className="font-bold font-bold">FOLLOW ME</p>
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

      <Image
        src={profile}
        className="relative lg:absolute bottom-0 w-3/4 z-0 left-[22%] h-full lg:w-1/2"
        alt={"profile"}
      />
    </div>
  );
};

export default MainSection;
