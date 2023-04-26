import * as React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaCode } from "react-icons/fa";
import { NavbarButtonType } from "./types";

const NavBar = () => {
  const navbarButtons: NavbarButtonType[] = [
    {
      name: "Home",
      to: "",
    },
    {
      name: "About",
      to: "",
    },
    {
      name: "Portfolio",
      to: "",
    },
    {
      name: "CV",
      to: "",
    },
  ];

  return (
    <div className="flex h-28 items-center justify-center font-space font-normal text-xl">
      <div className="flex w-full mx-28 justify-between tracking-wider">
        <div className="flex items-center gap-2">
          <FaCode className="w-9 h-9 text-blue" />
          <p className="font-bold text-2xl"> Developer X</p>
        </div>
        <div className="flex gap-x-10 text-gray-30 items-center">
          {navbarButtons.map((button) => {
            return <p>{button.name}</p>;
          })}
          <div>
            <RxHamburgerMenu className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
