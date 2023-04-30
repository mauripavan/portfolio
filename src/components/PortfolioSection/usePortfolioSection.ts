import { IProjectCard } from "../ProjectCard/types";

const usePortfolioSection = () => {
  const projects: IProjectCard[] = [
    {
      title: "F1 Prode",
      description: "Formula 1 App to check results and bet on results",
      technologies: ["React Native", "Expo"],
    },
    {
      title: "F1 Prode",
      description: "Formula 1 App to check results and bet on results",
      technologies: ["React Native", "Expo"],
    },
    {
      title: "F1 Prode",
      description: "Formula 1 App to check results and bet on results",
      technologies: ["React Native", "Expo"],
    },
  ];
  return {
    projects,
  };
};

export default usePortfolioSection;
