import ProjectCard from "../ProjectCard";
import usePortfolioSection from "./usePortfolioSection";

const PortfolioSection = () => {
  const { projects } = usePortfolioSection();
  return (
    <div id="portfolio" className="flex flex-1 min-h-screen bg-gray-10 font-space justify-center tracking-wider py-60 ">
      <div className="flex flex-col lg:flex-row flex-wrap mx-4 lg:mx-28">
        <div className="w-full lg:w-1/2">
          <p className="font-bold text-xl">
            <span className="text-blue">/ </span>MY PORTFOLIO
          </p>
          <p className="font-bold text-xl xl:text-5xl mt-6">
            Take a look at the latest projects I’ve done
          </p>
        </div>

        {projects.map((project, i) => {
          return (
            <ProjectCard
              key={i}
              index={i}
              technologies={project.technologies}
              title={project.title}
              description={project.description}
              link={project.link}
              images={project.images}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PortfolioSection;
