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
    <div className="travel__requests min-h-screen px-14 py-10 pb-20 flex flex-col gap-10 max-[500px]:px-7 max-[500px]:py-7">
      <div className="flex items-start">
        <div className="flex justify-between w-full max-sm:mb-5">
          <div className="max-[884px]:w-[300px]">
            <h1
              className={`relative flex items-start font-bold leading-27 ${travel__title} text-9xl mb-4 w-[700px] max-[884px]:text-7xl max-[884px]:leading-16 max-[500px]:text-2xl max-[500px]:mb-0`}
            >
              <div className="absolute top-1/7 right-1/45 flex items-center justify-center cursor-pointer h-1/3 bg-[#4e6813] rounded-lg transition-all duration-500 ease-in-out w-6 hover:w-35 max-[884px]:top-4/7 max-[884px]:right-75 max-[500px]:top-[126px] max-[500px]:left-[80px] max-[500px]:w-40">
                <BtnBack />
              </div>
              {t("title")}
            </h1>
            <p className="w-1/2 travel__title max-[884px]:w-1/1 max-[500px]:text-xs max-[500px]:w-2/3">{t("subtitle")}</p>
          </div>
        </div>
        <div className={`h-[170px] flex items-start max-[604px]:items-end max-[500px]:h-[80px] max-[500px]:absolute max-[500px]:top-[100px]`}>
          <SwitchLocale travel__title={`${travel__title}`} pt={`${pt}`} />
        </div>
      </div>
      <div className="flex flex-col gap-2 mx-40 p-9 border rounded-4xl backdrop-blur-lg bg-[#52525233] max-[884px]:mx-0 max-[450px]:p-4 max-[450px]:rounded-2xl">
        <div className="w-full flex items-center rounded-lg bg-[#ffffff20]">
          <div className="pl-2.5">
            <PiMagnifyingGlassThin />
          </div>
          <input
            type="text"
            placeholder={t("placeholder")}
            className=" w-full h-10 outline-none px-2.5 placeholder:text-white placeholder:text-xs max-[450px]:text-[8px] max-[450px]:placeholder:text-[8px] max-[450px]:h-6"
          />
        </div>
        <Table />
      </div>
    </div>
  );
};

export default TravelRequestPage;
