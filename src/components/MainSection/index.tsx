import Image from "next/image";
import { HiOutlineChevronDown } from "react-icons/hi";
import { TfiLinkedin } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import { images } from "@component/assets/images";
import HomeCard from "../HomeCard";
import { IHomeCardProps } from "../HomeCard/types";
import { scrollToSection } from "@component/utils/useScroll";
import { motion } from "framer-motion";
import { useState } from "react";

const MainSection = () => {
  const { profile } = images;
  const [cardsAnimationComplete, setCardsAnimationComplete] = useState(false);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -350, filter: "blur(20px)" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
      filter: "blur(0px)",
    },
  };

  const mainDesVariants = {
    hidden: { y: -200, opacity: 0 },
    visible: { y: 0, opacity: 1, transiton: { duration: 0.5 } },
  };

  const smallImageVariants = {
    hidden: {
      borderWidth: 1,
      borderColor: "transparent",
    },
    visible: {
      borderWidth: 1,
      borderColor: "white",
      transition: { duration: 10 },
    },
  };

  const handleAnimationComplete = () => {
    setCardsAnimationComplete(true);
  };

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
    <div id="home" className={"relative"}>
      <div
        className={
          "flex flex-col lg:flex-row flex-1 font-space mx-12 lg:mx-28 tracking-normal min-h-screen relative lg:pb-16 lg:tracking-wider"
        }
      >
        <div className={"flex flex-col flex-1 justify-center z-10"}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={mainDesVariants}
          >
            <div className="h-1 lg:h-2 bg-white w-24 lg:w-36 mb-6 lg:mb-12" />
            <p className="text-xl md:text-3xl lg:text-5xl 2xl:text-7xl font-bold w-5/6">
              I'm Mauricio, Full Stack Dev
            </p>
            <p className="font-normal text-gray-30 mt-4 text-sm w-1/2 ">
              Welcome to my website. Let's take a look to some of my jobs!
            </p>
          </motion.div>
          <motion.div
            animate={{
              boxShadow: [
                "0px 0px 30px rgba(255, 255, 255, 0.7)",
                "0px 0px 10px rgba(255, 255, 255, 0.7)",
                "0px 0px 30px rgba(255, 255, 255, 0.7)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            onClick={() => scrollToSection("about")}
            className="flex items-center justify-center bg-blue h-16 w-16 lg:h-32 lg:w-32 rounded-full mt-20 hover:scale-90 transition-transform"
          >
            <HiOutlineChevronDown className="w-6 h-6 lg:w-12 lg:h-12 animate-bounce" />
          </motion.div>
        </div>

        <div
          className={
            "flex flex-col flex-1 items-start lg:items-end text-lg z-10"
          }
        >
          <motion.div
            id="cardContainer"
            className="flex flex-col md:flex-row lg:flex-col gap-8 items-end"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            onAnimationComplete={handleAnimationComplete}
          >
            {cardsInfo.map((card, i) => {
              return (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  className="w-full md:w-3/5 border-b border-gray-0 mt-12"
                >
                  <HomeCard
                    key={i}
                    title={card.title}
                    description={card.description}
                    link={{
                      name: card.link.name,
                      to: card.link.to,
                    }}
                  />
                </motion.div>
              );
            })}
          </motion.div>

          {cardsAnimationComplete && (
            <motion.div
              className="flex flex-col w-3/5 mt-12"
              initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            >
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
            </motion.div>
          )}
        </div>
        <Image
          className="xs:hidden sm:hidden md:hidden lg:block lg:absolute lg:bottom-0 lg:w-1/2 2xl:w-[45rem] z-0 lg:left-[22%] h-full transition-all opacity-0 transform translate-y-full duration-1000"
          src={profile}
          alt={"profile"}
          onLoadingComplete={(image) => {
            image.classList.remove("translate-y-full");
            image.classList.remove("opacity-0");
          }}
        />
        <motion.div
          variants={smallImageVariants}
          initial="hidden"
          animate="visible"
          className="absolute top-0 right-0 flex bg-gray-0 h-32 w-32 md:h-52 md:w-52 rounded-full overflow-hidden lg:hidden"
        >
          <Image src={profile} alt={"profile"} className="absolute  " />
        </motion.div>
      </div>
    </div>
  );
};

export default MainSection;
