import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationHE from "./he.json";

i18n.use(initReactI18next).init({
  resources: {
    he: {
      translation: translationHE,
    },
  },
  fallbackLng: "he",
  interpolation: {
    escapeValue: false,
  },
});
