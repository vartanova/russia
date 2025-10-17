import React from "react";
import TravelPurpose from "../components/TravelPurpose";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const TravelRequest = () => {
  const { t } = useTranslation("travelpage");

  const { i18n } = useTranslation();
  const handleChangeLangRu = () => {
    const ruLang = i18n.language === "en" ? "ru" : "ru";
    i18n.changeLanguage(ruLang);
  };

  const handleChangeLangEn = () => {
    const enLang = i18n.language === "ru" ? "en" : "en";
    i18n.changeLanguage(enLang);
  };

  const handleSubmit = () => {
    alert("Новая поездка создана");
  };

  return (
    <div className="travel min-h-screen px-12 py-10 pb-20 flex flex-col items-center">
      <div className="w-auto px-9 py-9 border rounded-4xl backdrop-blur-lg bg-[#2a2c2f23] ">
        <div className="flex justify-between items-center pb-10 ">
          <h1 className="font-bold text-3xl">{t("title")}</h1>
          <div className="flex gap-4">
            <button
              onClick={handleChangeLangRu}
              className="cursor-pointer focus:underline underline-offset-3 decoration-1 under text-white"
            >
              Ru
            </button>
            <button
              onClick={handleChangeLangEn}
              className="cursor-pointer focus:underline underline-offset-3 decoration-1 under text-white"
            >
              En
            </button>
          </div>
        </div>
        <div className="mb-7">
          <p className="pb-2.5">{t("destination.p")}</p>
          <input
            type="text"
            name=""
            id=""
            placeholder={t("destination.placeholder")}
            className="bg-[#ffffff68] w-full h-10 border solid rounded-sm outline-none px-5 py-2.5 placeholder:text-white placeholder:text-xs"
          />
        </div>
        <div className="mb-7 flex gap-5">
          <div>
            <p className="pb-2.5">{t("datestart.p")}</p>
            <input
              type="text"
              name="dateStart"
              id="dateStart"
              placeholder={t("datestart.placeholder")}
              className="bg-[#ffffff68] px-5 py-2.5 border solid rounded-sm outline-none cursor-pointer placeholder:text-white placeholder:text-xs"
            />
          </div>
          <div>
            <p className="pb-2.5">{t("dateend.p")}</p>
            <input
              type="text"
              name="dateEnd"
              id="dateEnd"
              placeholder={t("dateend.placeholder")}
              className="bg-[#ffffff68] w-full px-5 py-2.5 border solid rounded-sm outline-none cursor-pointer placeholder:text-white placeholder:text-xs"
            />
          </div>
        </div>
        <div className="mb-7">
          <p className="pb-2.5">{t("purpose.p")}</p>
          <TravelPurpose />
        </div>
        <div className="mb-7">
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
