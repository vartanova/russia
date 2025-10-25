import React from "react";
import { useTranslation } from "react-i18next";

const SwitchLocale = ({travel__title, pt="pt-3.5"}) => {

  const { i18n } = useTranslation();
  const handleChangeLangRu = () => {
    const ruLang = i18n.language === "en" ? "ru" : "ru";
    i18n.changeLanguage(ruLang);
  };

  const handleChangeLangEn = () => {
    const enLang = i18n.language === "ru" ? "en" : "en";
    i18n.changeLanguage(enLang);
  };
  
  return (
    <div className={`flex justify-between items-center ${pt}`}>
      <div className="flex gap-4">
        <button
          onClick={handleChangeLangRu}
          className={`${travel__title} cursor-pointer text-2xl max-[607px]:text-lg focus:underline underline-offset-3 decoration-1 under text-white`}
        >
          Ru
        </button>
        <button
          onClick={handleChangeLangEn}
          className={`${travel__title} cursor-pointer text-2xl max-[607px]:text-lg focus:underline underline-offset-3 decoration-1 under text-white`}
        >
          En
        </button>
      </div>
    </div>
  );
};

export default SwitchLocale;
