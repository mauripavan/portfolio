import { FaGithub, FaCode } from "react-icons/fa";
import { IProjectCard } from "./types";
import Image from "next/image";

const ProjectCard = (props: IProjectCard) => {
  const { description, technologies, title, index, link, images } = props;
  return (
    <div className="flex justify-center w-full lg:w-1/2">
      <div
        className={`flex flex-col relative w-full h-[40rem] lg:h-[43rem] lg:w-5/6 xl:w-[35rem] xl:h-[44rem] bg-gray-0 rounded-3xl p-8 overflow-hidden hover:scale-105 transition-all duration-200 group mt-12 ${
          index != 0 && index % 2 === 1 ? "lg:-mt-[30rem]" : "lg:mt-12"
        }`}
      >
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-2 group/item">
            <a href={link} target={"_blank"} className="peer z-20">
              <FaGithub className="w-7 h-7 xl:w-10 xl:h-10 hover:scale-90 hover:opacity-50 transition-all duration-200" />
            </a>
            <p className="opacity-0 text-xs xl:text-base -translate-x-24 peer-hover:translate-x-0 peer-hover:opacity-100 transition-all duration-200 ease-out z-10">
              See code
            </p>
          </div>
          <div className="flex gap-4">
            {technologies.map((tech, i) => {
              return (
                <div key={i} className="flex items-center py-1.5 px-1.5 lg:py-3 lg:px-3 xl:py-3.5 xl:px-5 bg-gray-20 rounded-lg">
                  <p className="font-bold text-xs xl:text-lg">{tech}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex items-center gap-2 mt-3">
          <FaCode className="w-5 h-5 xl:w-9 xl:h-9 text-blue" />
          <p className="font-bold text-lg xl:text-3xl text-gray-40">{title}</p>
        </div>
        <p className="font-bold text-lg xl:text-3xl mt-4">{description}</p>
        <div className="flex w-full h-[27rem] absolute bottom-0 right-0 -rotate-6">
          <div className="absolute left-0 bottom-0 z-20 w-1/2 h-4/6 rounded-4xl group-hover:scale-110 transition-all duration-500 bg-orange">
            <Image src={images[3]} alt={"visual1"} className="rounded-4xl w-full h-full" />
          </div>
          <div className="absolute right-1/4 bottom-0 z-10 w-2/3 h-5/6 rounded-4xl group-hover:scale-110 transition-all duration-500">
            <Image src={images[2]} alt={"visual2"} className="rounded-4xl w-full h-full" />
          </div>
          <div className="absolute right-0 bottom-0 z-0 w-3/4 h-full rounded-4xl group-hover:scale-110 transition-all duration-500">
            <Image src={images[1]} alt={"visual3"} className="rounded-4xl w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
