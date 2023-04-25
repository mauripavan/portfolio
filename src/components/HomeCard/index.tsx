import { BiRightArrowAlt } from "react-icons/bi";
import { IHomeCardProps } from "./types";

const HomeCard = (props: IHomeCardProps) => {
    const {description, link, title} = props
  return (
    <div className="w-3/5 border-b border-gray mt-12">
      <p className="font-bold">{title}</p>
      <p className="mt-4 mb-8 font-thin text-gray-light">
        {description}
      </p>
      <div className="flex items-center gap-2 mb-12 border-b-2 border-gray-dark w-fit h-12">
        <p>{link.name}</p>
        <BiRightArrowAlt className="w-7 h-7" />
      </div>
    </div>
  );
};

export default HomeCard;
