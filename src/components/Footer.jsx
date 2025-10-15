import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("footer");
  
  return (
    <div className="flex justify-between max-[768px]:flex-col">
      <nav className="flex gap-5 max-[768px]:flex-col max-[768px]:text-2xl max-[768px]:mb-12">
        <a href="https://yandex.ru/maps">{t("link.item1")}</a>
        <a href="https://yandex.ru/pogoda">{t("link.item2")}</a>
        <a href="https://rasp.yandex.ru">{t("link.item3")}</a>
        <a href="https://calendar.yandex.ru">{t("link.item4")}</a>
        <a href="https://travel.yandex.ru">{t("link.item5")}</a>
      </nav>
      <div className="text-[14px]">{t("text")}</div>
    </div>
  );
};

export default Footer;
