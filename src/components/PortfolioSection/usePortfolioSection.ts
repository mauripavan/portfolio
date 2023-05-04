import { IProjectCard } from "../ProjectCard/types";

const usePortfolioSection = () => {
  const projects: IProjectCard[] = [
    {
      title: "F1 Prode",
      description: "Formula 1 App to check results and bet on results",
      technologies: ["React Native", "Expo"],
      link: 'https://github.com/mauripavan/f1-prode'
    },
    {
      title: "Flow Delta",
      description: "Real State website with Adminsitrator section",
      technologies: ["ReactJS", "NodeJs"],
      link: 'https://github.com/mauripavan/Flow-Delta'
    },
  ];
  return {
    projects,
  };
};

export default usePortfolioSection;
