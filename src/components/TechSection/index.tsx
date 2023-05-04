import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import TechCard from "@component/components/TechCard";
import useTechSection from "./useTechSection";
import { useEffect, useRef } from "react";

const TechSection = () => {
  const { technologies } = useTechSection();

  const cardContainerRef = useRef(null);

  const handleScroll = (scrollOfset: number) => {
    const slider: any = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + scrollOfset;
  };

  return (
    <div
      id="stack"
      className="flex flex-1 min-h-screen font-space tracking-wider items-center mx-28 py-28"
    >
      <div className="flex flex-col flex-1">
        <p className="font-bold text-xl">
          <span className="text-blue">/ </span>TECH STACK
        </p>

        <div className="flex flex-1 justify-between items-end mt-6 mb-16 ">
          <p className="font-bold text-5xl">Technologies I use to develop</p>
          <div className="flex gap-4">
            <div
              onClick={() => handleScroll(-700)}
              className="flex w-20 h-20 bg-gray-0 rounded-full items-center justify-center"
            >
              <FiChevronLeft className="w-7 h-7" />
            </div>
            <div
              onClick={() => handleScroll(700)}
              className="flex w-20 h-20 bg-blue rounded-full items-center justify-center"
            >
              <FiChevronRight className="w-7 h-7" />
            </div>
          </div>
        </div>
        <div id="slider" ref={cardContainerRef} className="relative overflow-x-scroll scroll scroll-smooth">
          <div  className="flex gap-8 max-w-4xl">
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
  );
};

export default TechSection;
