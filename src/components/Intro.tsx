import React from "react";
import { useTranslation } from "react-i18next";


const Intro = () => {
    const { t } = useTranslation(["intro"]);
  
  return (
    <div className=" xl:pl-[100px]">
      <h1 className="font-black text-[32px] max-[490px]:max-w-52 leading-10 md:text-[54px] mb-10">
        {t("title")}
      </h1>
      <p className="mb-[33px] max-w-[690px]">
        {t("description.text")}
      </p>
      <div>
        <p className="text-xs">
          <span className="font-semibold">{t("description.stat1.item")}</span> {t("description.stat1.number")}
        </p>
        <p className="text-xs">
          <span className="font-semibold">
            {t("description.stat2.item")}
          </span>{" "}
          {t("description.stat2.number")}
        </p>
        <p className="text-xs">
          <span className="font-semibold">
            {t("description.stat3.item")}
          </span>{" "}
          {t("description.stat3.number")}
        </p>
        <p className="text-xs">
          <span className="font-semibold">{t("description.stat4.item")}</span> {t("description.stat4.number")}
        </p>
        <p className="text-xs">
          <span className="font-semibold">{t("description.stat5.item")}</span> {t("description.stat5.number")}
        </p>
      </div>
    </div>
  );
};

export default Intro;
