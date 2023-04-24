import * as React from "react";

const NavBar = () => {
  return (
    <div className="flex h-28 items-center justify-center font-oxygen font-normal">
      <div className="flex w-full mx-80 justify-between">
        <p className="font-bold">Developer X</p>
        <div className="flex gap-x-10">
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
