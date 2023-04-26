import Image from "next/image";
import { HiOutlineChevronDown } from "react-icons/hi";
import { TfiLinkedin } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import { images } from "@component/assets/images";
import HomeCard from "../HomeCard";
import { IHomeCardProps } from "../HomeCard/types";

const MainSection = () => {
  const { profile } = images;

  const cardsInfo: IHomeCardProps[] = [
    {
      title: "TECH STACK",
      description: `Discover the technologies I use to develop both, mobile apps and
        web sites, as well as the last proyects in which I've been working
        on.`,
      link: {
        name: "LEARN MORE",
        to: "",
      },
    },
    {
      title: "CONTACT ME",
      description: `Do you have something in mind to create? Let's chat! Complete the
        form, we can create amazing things togheter.`,
      link: {
        name: "COMPLETE FORM",
        to: "",
      },
    },
  ];

  return (
    <div
      className={
        "flex flex-1 font-space mx-28 tracking-wider min-h-screen relative pb-16"
      }
    >
      <div className={"flex flex-col flex-1  justify-center z-10"}>
        <div className="h-2 bg-white w-36 mb-12" />
        <p className="text-7xl font-bold">I'm Mauricio, Front End Dev</p>
        <p className="font-normal text-gray-30 mt-4 text-lg w-1/2">
          Welcome to my website. Let's take a look to some of my jobs!
        </p>
        <div className="flex items-center justify-center bg-blue h-32 w-32 rounded-full mt-20">
          <HiOutlineChevronDown className="w-12 h-12" />
        </div>
      </div>

      <div
        className={
          "flex flex-1 flex-col  justify-center items-end text-lg z-10"
        }
      >
        {cardsInfo.map((card) => {
          return (
            <HomeCard
              title={card.title}
              description={card.description}
              link={{
                name: card.link.name,
                to: card.link.to,
              }}
            />
          );
        })}

        <div className="w-3/5 mt-12">
          <p className="font-bold font-bold">FOLLOW ME</p>
          <div className="flex gap-4 mt-4 items-center">
            <TfiLinkedin className="w-7 h-7" />
            <FaGithub className="w-7 h-7" />
          </div>
        </div>
      </div>
      <Image
        src={profile}
        className="absolute bottom-0 w-1/2 z-0 left-[22%] h-full"
        alt={"profile"}
      />
    </div>
  );
};

export default MainSection;
