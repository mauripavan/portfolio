import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import TechCard from "@component/components/TechCard";
import useTechSection from "./useTechSection";

const TechSection = () => {
  const { technologies } = useTechSection();

  const handleScroll = (scrollOfset: number) => {
    const slider: any = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + scrollOfset;
  };

  return (
    <div
      id="stack"
      className="flex flex-1 min-h-screen font-space tracking-wider items-center mx-12 lg:mx-28 py-28"
    >
      <div className="flex flex-col flex-1">
        <p className="font-bold text-xl">
          <span className="text-blue">/ </span>TECH STACK
        </p>

        <div className="flex flex-1 justify-between items-end mt-6 mb-16 ">
          <p className="font-bold text-sm  md:texl-xl lg:text-3xl">
            Technologies I use to develop
          </p>
          <div className="flex gap-4">
            <div
              onClick={() => handleScroll(-700)}
              className="flex w-10 h-10 lg:h-20 lg:w-20 bg-gray-0 rounded-full items-center justify-center hover:bg-blue hover:scale-90 transition-all duration-300"
            >
              <FiChevronLeft className="w-3 h-3 lg:w-7 lg:h-7" />
            </div>
            <div
              onClick={() => handleScroll(700)}
              className="flex w-10 h-10 lg:h-20 lg:w-20 bg-blue rounded-full items-center justify-center hover:scale-90 transition-all duration-300"
            >
              <FiChevronRight className="w-3 h-3 lg:w-7 lg:h-7" />
            </div>
          </div>
        </div>
        <div id="slider" className="relative overflow-auto scroll scroll-smooth ">
          <div className="max-w-md min-w-0 ">
            <div className="flex gap-8 w-12">
              {technologies.map((card, i) => {
                return (
                  <TechCard
                    name={card.name}
                    description={card.description}
                    icon={card.icon}
                    key={i}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechSection;
