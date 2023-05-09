import * as React from "react";
import { FaCode } from "react-icons/fa";
import { NavbarButtonType } from "./types";
import { scrollToSection } from "@component/utils/useScroll";

export const navbarButtons: NavbarButtonType[] = [
  {
    name: "Home",
    to: "home",
  },
  {
    name: "About",
    to: "about",
  },
  {
    name: "Portfolio",
    to: "portfolio",
  },
  {
    name: "Contact",
    to: "contact",
  },
];

const englishResume = "http://localhost:3000/Mauricio_Pavan_Resume.pdf";

const NavBar = () => {
  const downloadFile = (url: string) => {
    const fileName: any = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <div className="flex h-28 items-center justify-center font-space font-normal text-xl bg-gray-50">
      <div className="flex flex-1 w-full mx-28 justify-between tracking-wider">
        <div className="flex flex-1 items-center gap-2">
          <FaCode className="w-9 h-9 text-blue" />
          <p className="font-bold text-2xl"> Developer X</p>
        </div>
        <div className="flex flex-1 justify-center items-center hover:text-gray-0 transition duration-150">
          {navbarButtons.map((button, i) => {
            return (
              <div
                onClick={() => scrollToSection(button.to)}
                className={`flex flex-1 justify-center hover:text-white transition-all duration-10 cursor-pointer`}
              >
                <p className="text-center" key={i}>
                  {button.name}
                </p>
              </div>
            );
          })}
          <div
            onClick={() => downloadFile(englishResume)}
            className={`flex flex-1 justify-center hover:text-white transition-all duration-10 cursor-pointer`}
          >
            <p className="text-center peer">CV</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
