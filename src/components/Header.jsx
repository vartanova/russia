import React from "react";
import logo from "./../assets/__logo.svg"

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <img className="max-[400px]:max-w-36" src={logo} alt="logo" />
      <div className="flex gap-4">
        <button className="cursor-pointer focus:underline underline-offset-3 decoration-1 under text-white text-2xl max-[400px]:text-lg">
          Ru
        </button>
        <button className="cursor-pointer focus:underline underline-offset-3 decoration-1 under text-white text-2xl max-[400px]:text-lg">
          En
        </button>
      </div>
    </div>
  );
};

export default Header;
