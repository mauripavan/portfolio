import { ITechCardProps } from "./types";

const TechCard = (props: ITechCardProps) => {
  const { name, description, icon } = props;
  return (
    <div className="flex-none">
      <div className="flex flex-col justify-center bg-gray-0 w-[27.2rem] h-[31.4rem] rounded-3xl px-9">
        <div className="flex items-center justify-center w-20 h-20 bg-blue rounded-full">
          {icon}
        </div>
        <p className="text-4xl font-bold mt-6 mb-3">{name}</p>
        <p className="text-2xl text-gray-40 mb-10 h-36">{description}</p>
        <div className="h-1.5 w-14 bg-white"></div>
      </div>
    </div>
  );
};

export default TechCard;
