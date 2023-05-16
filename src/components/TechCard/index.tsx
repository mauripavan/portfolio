import { ITechCardProps } from "./types";

const TechCard = (props: ITechCardProps) => {
  const { name, description, icon } = props;
  return (
    <div className="flex-none">
      <div className="flex flex-col justify-center bg-gray-0 w-[10rem] h-[16rem] md:w-[21rem] md:h-[25rem] lg:w-[27.2rem] lg:h-[31.4rem] rounded-3xl px-3 md:px-9 ">
        <div className="flex items-center justify-center w-10 h-10 bg-blue rounded-full md:w-20 md:h-20">
          {icon}
        </div>
        <p className="font-bold mt-6 mb-3 text-xs md:text-xl lg:text-4xl">{name}</p>
        <p className="text-gray-40 mb-10 h-20 md:h-36 text-xs md:text-lg lg:text-2xl">{description}</p>
        <div className="h-0.5 md:h-1.5 w-14 bg-white"></div>
      </div>
    </div>
  );
};

export default TechCard;
