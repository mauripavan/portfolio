import { images } from "@component/assets/images";
import { IProjectCard } from "../ProjectCard/types";

const usePortfolioSection = () => {
  const { f1Prode1, f1Prode2, f1Prode3, turnoWeb1, turnoWeb2, turnoWeb3 } =
    images;

  const projects: IProjectCard[] = [
    {
      title: "F1 Prode",
      description: "Formula 1 App to check results and bet on results",
      technologies: ["React Native", "Expo"],
      link: "https://github.com/mauripavan/f1-prode",
      images: { 1: f1Prode1, 2: f1Prode2, 3: f1Prode3 },
    },
    {
      title: "Turno Web - Cooming Soon",
      description: "Book shifts for companies with physical branches",
      technologies: ["ReactJS", "NodeJs"],
      link: "https://github.com/mauripavan/my-turno",
      images: { 1: turnoWeb1, 2: turnoWeb2, 3: turnoWeb3 },
    },
  ];
  return {
    projects,
  };
};

export default usePortfolioSection;
