import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <img src="src\assets\__logo.svg" alt="logo" />
      <div className="flex gap-4">
        <button className="cursor-pointer focus:underline underline-offset-3 decoration-1 under text-white text-2xl max-[320px]:text-lg">
          Ru
        </button>
        <button className="cursor-pointer focus:underline underline-offset-3 decoration-1 under text-white text-2xl max-[320px]:text-lg">
          En
        </button>
      </div>
    </div>
  );
};

export default Header;
