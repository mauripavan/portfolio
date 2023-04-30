import ProjectCard from "../ProjectCard";
import usePortfolioSection from "./usePortfolioSection";

const PortfolioSection = () => {
  const { projects } = usePortfolioSection();
  return (
    <div className="flex flex-1 min-h-screen bg-gray-10 font-space tracking-wider py-60">
      <div className="flex flex-wrap mx-28">
        <div className="w-1/2">
          <p className="font-bold text-xl">
            <span className="text-blue">/ </span>MY PORTFOLIO
          </p>
          <p className="font-bold text-5xl mt-6">
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
            />
          );
        })}
      </div>
    </div>
  );
};

export default PortfolioSection;
