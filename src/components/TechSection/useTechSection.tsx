import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiTypescript,
  SiStyledcomponents,
  SiRedux,
  SiGraphql,
  SiExpress,
  SiPostgresql,
  SiGithub,
  SiDocker,
  SiCss3,
  SiHtml5,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { ITechCardProps } from "../TechCard/types";

const useTechSection = () => {
  const technologies: ITechCardProps[] = [
    {
      name: "Javascript",
      description:
        "Interpreted programming language used primarily on the client-side to create interactive web pages.",
      icon: <IoLogoJavascript className="w-5 h-5 md:w-10 md:h-10" />,
    },
    {
      name: "Typescript",
      description:
        "Open-source programming language that adds types to JavaScript.",
      icon: <SiTypescript className="w-5 h-5 md:w-10 md:h-10" />,
    },
    {
      name: "React",
      description:
        "JavaScript library for building interactive and reusable user interfaces (UI).",
      icon: <FaReact className="w-5 h-5 md:w-10 md:h-10" />,
    },
    {
      name: "React Native",
      description:
        "Mobile development framework that allows creating native iOS and Android apps using JavaScript and React.",
      icon: <FaReact className="w-5 h-5 md:w-10 md:h-10" />,
    },
    {
      name: "HTML",
      description:
        "HTML is a markup language used to create web pages and web applications.",
      icon: <SiHtml5 className="w-5 h-5 md:w-10 md:h-10" />,
    },
    {
      name: "CSS",
      description:
        "CSS is a style language used to give style and design to web pages and web applications.",
      icon: <SiCss3 className="w-5 h-5 md:w-10 md:h-10" />,
    },
    {
      name: "Styled Components",
      description:
        "Library for React and React Native that allows writing inline styles in components.",
      icon: <SiStyledcomponents className="w-5 h-5 md:w-10 md:h-10" />,
    },
    {
      name: "Redux",
      description:
        "JavaScript library for managing an application's state in a single location.",
      icon: <SiRedux className="w-5 h-5 md:w-10 md:h-10" />,
    },
    {
      name: "GraphQL",
      description:
        "Query and manipulation language for data APIs, developed by Facebook.",
      icon: <SiGraphql className="w-5 h-5 md:w-10 md:h-10" />,
    },
    {
      name: "Node Js",
      description:
        "JavaScript runtime environment for building server-side applications.",
      icon: <FaNodeJs className="w-5 h-5 md:w-10 md:h-10" />,
    },
    {
      name: "Express",
      description: "Web application framework for Node.js.",
      icon: <SiExpress className="w-5 h-5 md:w-10 md:h-10" />,
    },
    {
      name: "PostgreSQL",
      description: "Open-source relational database management system.",
      icon: <SiPostgresql className="w-5 h-5 md:w-10 md:h-10" />,
    },
    {
      name: "Git",
      description: "Open-source distributed version control system.",
      icon: <SiGithub className="w-5 h-5 md:w-10 md:h-10" />,
    },
    {
      name: "Docker",
      description:
        "Software platform for creating, deploying, and running applications in containers.",
      icon: <SiDocker className="w-5 h-5 md:w-10 md:h-10" />,
    },
  ];
  return { technologies };
};

export default useTechSection;
