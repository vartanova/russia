import React from "react";
import { useTranslation } from "react-i18next";
import logo from "./../assets/__logo.svg";
import { Link } from "react-router-dom";
import SwitchLocale from "./SwitchLocale";

const Header = () => {

  const { t } = useTranslation("header");

  return (
    <div className="flex justify-between items-center">
      <nav className="flex gap-5 items-center">
        <a href="#">
          <img className="max-[400px]:max-w-36" src={logo} alt="logo" />
        </a>
        <Link
          to="/"
          className="pt-3.5 cursor-pointer focus:underline underline-offset-3 decoration-1 under text-white text-2xl max-[607px]:text-lg max-[400px]:hidden"
        >
          {t("nav.home")}
        </Link>
        <Link
          to="/travel"
          className="pt-3.5 cursor-pointer focus:underline underline-offset-3 decoration-1 under text-white text-2xl max-[607px]:text-lg max-[400px]:hidden"
        >
          {t("nav.travel")}
        </Link>
      </nav>

      <div className="flex gap-4">
        <SwitchLocale/>
      </div>
    </div>
  );
};

export default Header;
