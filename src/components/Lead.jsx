import React from "react";
import { useTranslation } from "react-i18next";

const Lead = () => {
  const { t } = useTranslation("lead");

  return (
    <div className="flex flex-col items-center justify-center gap-8 max-[400px]:gap-4 mb-16">
      <h1 className="font-black text-center max-[400px]:leading-11 max-[400px]:text-[40px] max-[400px]:max-w-[288px] min-[400px]:text-5xl min-[400px]:max-w-[360px] md:text-8xl md:max-w-[720px]">
        {t("title")}
      </h1>
      <p className="text-3xl text-center max-[400px]:text-base">{t("text")}</p>
    </div>
  );
};

export default Lead;
