import { t } from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import SwitchLocale from "../../components/SwitchLocale";
import { PiMagnifyingGlassThin } from "react-icons/pi";
import Table from "../../components/Table";
import BtnBack from "../../components/BtnBack";

const TravelRequestPage = ({ travel__title = "travel__title", pt }) => {
  const { t } = useTranslation("travelrequestpage");

  return (
    <div className="travel__requests min-h-screen px-14 py-10 pb-20 flex flex-col gap-10 ">
      <div className="flex items-start">
        <div className="flex justify-between w-full max-sm:mb-5">
          <div>
            <h1
              className={`relative flex items-start font-bold leading-27 ${travel__title} text-9xl mb-4 w-[700px]`}
            >
              <div className="absolute top-1/7 right-1/45 flex items-center justify-center cursor-pointer h-1/3 bg-[#4e6813] rounded-lg transition-all duration-500 ease-in-out w-6 hover:w-35">
                <BtnBack />
              </div>
              {t("title")}
            </h1>
            <p className="w-1/2 travel__title">{t("subtitle")}</p>
          </div>
        </div>
        <div className={`${travel__title}`}>
          <SwitchLocale travel__title={`${travel__title}`} pt={`${pt}`} />
        </div>
      </div>
      <div className="flex flex-col gap-2 mx-40 px-9 py-9 border rounded-4xl backdrop-blur-lg bg-[#52525233]">
        <div className="w-full flex items-center rounded-lg bg-[#ffffff20]">
          <div className="pl-2.5">
            <PiMagnifyingGlassThin />
          </div>
          <input
            type="text"
            placeholder={t("placeholder")}
            className=" w-full h-10 outline-none px-2.5 placeholder:text-white placeholder:text-xs"
          />
        </div>
        <Table />
      </div>
    </div>
  );
};

export default TravelRequestPage;
