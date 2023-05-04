import * as React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
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
    name: "CV",
    to: "",
  },
];
const NavBar = () => {
  return (
    <div className="flex h-28 items-center justify-center font-space font-normal text-xl">
      <div className="flex w-full mx-28 justify-between tracking-wider">
        <div className="flex flex-1 items-center gap-2">
          <FaCode className="w-9 h-9 text-blue" />
          <p className="font-bold text-2xl"> Developer X</p>
        </div>
        <div className="flex flex-1 items-center hover:text-gray-0 transition duration-150">
          {navbarButtons.map((button, i) => {
            return (
              <div
                onClick={() => scrollToSection(button.to)}
                className="flex flex-1 justify-center hover:text-white transition duration-150 cursor-pointer"
              >
                <p key={i}>{button.name}</p>
              </div>
            );
          })}
          <div>
            <RxHamburgerMenu className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
