import React from "react";
import { useTranslation } from "react-i18next";

const TravelDate = () => {
  const { t } = useTranslation("travelpage");

  return (
    <div className="mb-7 flex gap-5 max-md:flex-col max-sm:gap-2.5 max-sm:mb-5">
      <div>
        <p className="pb-2.5">{t("datestart.p")}</p>
        <input
          type="text"
          name="dateStart"
          id="dateStart"
          placeholder={t("datestart.placeholder")}
          className="bg-[#ffffff68] px-5 py-2.5 border solid rounded-sm outline-none cursor-pointer placeholder:text-white placeholder:text-xs max-md:w-full"
        />
      </div>
      <div>
        <p className="pb-2.5">{t("dateend.p")}</p>
        <input
          type="text"
          name="dateEnd"
          id="dateEnd"
          placeholder={t("dateend.placeholder")}
          className="bg-[#ffffff68] px-5 py-2.5 border solid rounded-sm outline-none cursor-pointer placeholder:text-white placeholder:text-xs max-md:w-full"
        />
      </div>
    </div>
  );
};

export default TravelDate;
