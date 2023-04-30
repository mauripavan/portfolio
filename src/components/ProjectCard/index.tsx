import { FaGithub, FaCode } from "react-icons/fa";
import { IProjectCard } from "./types";

const ProjectCard = (props: IProjectCard) => {
  const { description, technologies, title, index } = props;
  return (
    <div className="flex justify-center w-1/2">
      <div
        className={`flex flex-col relative w-[35rem] h-[44rem] bg-gray-0 rounded-3xl p-8 overflow-hidden ${
          index != 0 && index % 2 === 1 ? "-mt-[30rem]" : "mt-12"
        }`}
      >
        <div className="flex w-full items-center justify-between">
          <FaGithub className="w-10 h-10" />
          <div className="flex gap-4">
            {technologies.map((tech, i) => {
              return (
                <div key={i} className="py-3.5 px-5 bg-gray-20 rounded-lg">
                  <p className="font-bold text-lg">{tech}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex items-center gap-2 mt-3">
          <FaCode className="w-9 h-9 text-blue" />
          <p className="font-bold text-3xl text-gray-40">{title}</p>
        </div>
        <p className="font-bold text-4xl mt-4">{description}</p>
        <div className="flex w-full h-[27rem] absolute bottom-0 right-0 -rotate-6">
          <div className="absolute left-0 bottom-0 z-20 bg-yellow w-1/2 h-4/6 rounded-xl" />
          <div className="absolute right-1/4 bottom-0 z-10 bg-orange w-2/3 h-5/6 rounded-xl" />
          <div className="absolute right-0 bottom-0 z-0 bg-blue w-3/4 h-full rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
