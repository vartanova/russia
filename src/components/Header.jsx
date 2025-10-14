import React from "react";
import { useTranslation } from "react-i18next";

import logo from "./../assets/__logo.svg";

const Header = () => {
  const { i18n, t } = useTranslation();
    const handleChangeLangRu = () => {
      const ruLang = i18n.language === "en" ? "ru" : "ru";
      i18n.changeLanguage(ruLang);
    };
  
    const handleChangeLangEn = () => {
      const enLang = i18n.language === "ru" ? "en" : "en";
      i18n.changeLanguage(enLang);
    };

  return (
    <div className="flex justify-between items-center">
      <img className="max-[400px]:max-w-36" src={logo} alt="logo" />
      <div className="flex gap-4">
        <button
          onClick={handleChangeLangRu}
          className="cursor-pointer focus:underline underline-offset-3 decoration-1 under text-white text-2xl max-[400px]:text-lg"
        >
          Ru
        </button>
        <button onClick={handleChangeLangEn} className="cursor-pointer focus:underline underline-offset-3 decoration-1 under text-white text-2xl max-[400px]:text-lg">
          En
        </button>
      </div>
    </div>
  );
};

export default Header;
