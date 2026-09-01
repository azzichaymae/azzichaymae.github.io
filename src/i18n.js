import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: "en",
    resources: {
      en: { translation: require("./locales/en/translation.json") },
      fr: { translation: require("./locales/fr/translation.json") }
    }
  });

export default i18n;
