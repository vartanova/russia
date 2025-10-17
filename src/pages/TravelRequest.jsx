import React from "react";
import TravelPurpose from "../components/TravelPurpose";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SwitchLocale from "../components/SwitchLocale";

const TravelRequest = () => {
  const { t } = useTranslation("travelpage");

  const handleSubmit = () => {
    alert("Новая поездка создана");
  };

  return (
    <div className="travel min-h-screen px-12 py-10 pb-20 flex flex-col items-center">
      <div className="w-auto px-9 py-9 border rounded-4xl backdrop-blur-lg bg-[#2a2c2f23] max-md:w-[500px] max-sm:w-[300px] max-sm:text-xs">
        <div className="flex justify-between items-center mb-10 max-sm:mb-5">
          <h1 className="font-bold text-3xl">{t("title")}</h1>
          <SwitchLocale/>
        </div>
        <div className="mb-7 max-sm:mb-5">
          <p className="pb-2.5">{t("destination.p")}</p>
          <input
            type="text"
            name=""
            id=""
            placeholder={t("destination.placeholder")}
            className="bg-[#ffffff68] w-full h-10 border solid rounded-sm outline-none px-5 py-2.5 placeholder:text-white placeholder:text-xs"
          />
        </div>
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
        <div className="mb-7 max-sm:mb-5">
          <p className="pb-2.5">{t("purpose.p")}</p>
          <TravelPurpose />
        </div>
        <div className="mb-7 max-sm:mb-5">
          <p className="pb-2.5">{t("notes.p")}</p>
          <textarea
            type="text"
            name="notes"
            id="notes"
            className="bg-[#ffffff68] resize-none  w-full break-all border solid rounded-sm outline-none px-5 py-2.5 placeholder:text-white placeholder:text-xs"
            placeholder={t("notes.placeholder")}
          />
        </div>
        <div className="flex justify-between items-center">
          <Link to="/">
            <button type="button">
              <svg
                className="w-[20px] py-1.5 cursor-pointer outline-none focus:underline underline-offset-3 decoration-1 under"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="m15 19-7-7 7-7"
                />
              </svg>
            </button>
          </Link>
          <button
            type="submit"
            onClick={handleSubmit}
            className="px-5 py-1.5 cursor-pointer border solid rounded-sm outline-none focus:underline underline-offset-3 decoration-1 under"
          >
            {t("btn")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelRequest;
