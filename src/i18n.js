import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../src/translation/en/translation.json";
import ru from "../src/translation/ru/translation.json";
// import rs from "../src/translation/rs/translation.json";
// import es from "../src/translation/es/translation.json";

export const language = [
  { code: "en", label: "English", flag: "En" },
  { code: "ru", label: "Русский", flag: "Ru" },
  // { code: "rs", label: "Srpski", flag: "Rs" },
  // { code: "es", label: "Spanish", flag: "Es" },
];

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  debug: false,
  resources: {
    en: { translation: en },
    ru: { translation: ru },
    // rs: { translation: rs },
    // es: { translation: es },
  },
  interpolation: {
    escapeValue: false,
  },
});
export default i18n;
