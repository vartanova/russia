import React from "react";
import { useTranslation } from "react-i18next";

const SwitchLocale = ({ travel__title, pt = "pt-3.5", isPending }) => {
  const { i18n } = useTranslation();
 
  const handleChangeLang = () => {
    const lang = i18n.language === "en" ? "ru" : "en";
    i18n.changeLanguage(lang);
  };

  return (
    <div className={`flex justify-between items-center ${pt}`}>
      <div className="flex gap-4">
        <button
          type="button"
          disabled={isPending}
          onClick={handleChangeLang}
          className={`${travel__title} cursor-pointer text-2xl max-[607px]:text-lg focus:underline underline-offset-3 decoration-1 under text-white`}
        >
          Ru
        </button>
        <button
          type="button"
          disabled={isPending}
          onClick={handleChangeLang}
          className={`${travel__title} cursor-pointer text-2xl max-[607px]:text-lg focus:underline underline-offset-3 decoration-1 under text-white`}
        >
          En
        </button>
      </div>
    </div>
  );
};

export default SwitchLocale;
