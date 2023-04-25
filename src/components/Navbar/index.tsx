import * as React from "react";

const NavBar = () => {
  return (
    <div className="flex h-28 items-center justify-center font-space font-normal text-xl">
      <div className="flex w-full mx-28 justify-between tracking-wider">
        <p className="font-bold text-2xl">{"</>"} Developer X</p>
        <div className="flex gap-x-10 text-gray-light">
          <p>Home</p>
          <p>About</p>
          <p>Portfolio</p>
          <p>CV</p>
          <div>
            <p>Menu</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
