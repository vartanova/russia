import { t } from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import SwitchLocale from "../../components/SwitchLocale";
import { PiMagnifyingGlassThin } from "react-icons/pi";
import Table from "../../components/Table";
import BtnBack from "../../components/BtnBack";

const TravelRequestPage = () => {
  const { t } = useTranslation("travelrequestpage");

  return (
    <div className="travel__requests bg-[#2A2C2F] min-h-screen px-12 py-10 pb-20 flex flex-col gap-10">
      <div className="flex items-start">
        <div className="flex justify-between w-full max-sm:mb-5">
          <div>
            <h1 className="font-bold text-3xl mb-2.5">{t("title")}</h1>
            <p className="w-3/4">{t("subtitle")}</p>
          </div>
        </div>
        <SwitchLocale />
      </div>
      <div className="w-full flex items-center gap-2 border solid rounded-sm">
        <div className="pl-2.5">
          <PiMagnifyingGlassThin />
        </div>
        <input
          type="search"
          name=""
          id=""
          className=" w-full h-10 outline-none px-5 py-2.5 placeholder:text-white placeholder:text-xs"
        />
      </div>
      <Table />
      <div className="max-w-fit">
        <BtnBack />
      </div>
    </div>
  );
};

export default TravelRequestPage;
