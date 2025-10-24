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
    <div className="bg-[#2A2C2F] min-h-screen px-12 py-10 pb-20 flex flex-col gap-10">
      <div className="flex justify-between items-center w-full max-sm:mb-5">
        <div>
          <h1 className="font-bold text-3xl mb-2.5">{t("title")}</h1>
          <p className="w-3/4">{t("subtitle")}</p>
        </div>
        <SwitchLocale />
      </div>
      <div className="w-full">
        {/* <PiMagnifyingGlassThin /> */}
        <input
          type="search"
          name=""
          id=""
          className="bg-[#ff6600] w-full h-10 border solid rounded-sm outline-none px-5 py-2.5 placeholder:text-white placeholder:text-xs"
        />
      </div>
        <Table />
        <BtnBack />
    </div>
  );
};

export default TravelRequestPage;
