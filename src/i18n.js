import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";



i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "ru",
    fallbackLng: ["ru", "en"],
    debug: true,
    ns: ["lead", "intro", "places", "cover", "footer", "leadText", "header", "travelpage", "travelpurpose", "error"],
    backend: {
      loadPath: "locales/{{lng}}/{{ns}}.json",
    },

  });

export default i18n;
