import React from "react";
import { useTranslation } from "react-i18next";

const TravelPurpose = () => {
  const { t } = useTranslation("travelpage");

  return (
    <div className="w-full max-w-sm min-w-[200px]">
      <div className="relative">
        <select className=" w-full px-5 py-2.5 bg-[#ffffff68] text-sm max-sm:text-xs border solid rounded-sm outline-none appearance-none cursor-pointer">
          <option className="travel__purpose_item text-xs">
            {t("purpose.item1")}
          </option>
          <option className="travel__purpose_item text-xs">
            {t("purpose.item2")}
          </option>
          <option className="travel__purpose_item text-xs">
            {t("purpose.item3")}
          </option>
          <option className="travel__purpose_item text-xs">
            {t("purpose.item4")}
          </option>
        </select>
        <svg
          className="w-5 h-5 absolute top-[25%] right-1.5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m8 15 4 4 4-4m0-6-4-4-4 4"
          />
        </svg>
      </div>
    </div>
  );
};

export default TravelPurpose;
