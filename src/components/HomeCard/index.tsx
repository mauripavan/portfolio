import { scrollToSection } from "@component/utils/useScroll";
import { BiRightArrowAlt } from "react-icons/bi";
import { IHomeCardProps } from "./types";

const HomeCard = (props: IHomeCardProps) => {
  const { description, link, title } = props;
  return (
    <div className="w-3/5 border-b border-gray-0 mt-12">
      <p className="font-bold">{title}</p>
      <p className="mt-4 mb-8 font-thin text-gray-30">{description}</p>
      <div
        onClick={() => scrollToSection(link.to)}
        className="flex items-center gap-2 mb-12 w-fit h-12 border-b-2 border-gray-20 hover:border-white transition-all duration-200 cursor-pointer group"
      >
        <p>{link.name}</p>
        <BiRightArrowAlt className="w-7 h-7 transition-all duration-200 group-hover:translate-x-2 group-hover:text-blue" />
      </div>
    </div>
  );
};

export default HomeCard;
