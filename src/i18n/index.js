import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import az from "./locales/az.json";
import en from "./locales/en.json";
import ru from "./locales/ru.json";

const supportedLanguages = ["az", "en", "ru"];

const savedLanguage = localStorage.getItem("language");

i18n.use(initReactI18next).init({
    resources: {
        az: { translation: az },
        en: { translation: en },
        ru: { translation: ru },
    },
    lng: supportedLanguages.includes(savedLanguage)
        ? savedLanguage
        : "en",
    fallbackLng: "en",
    supportedLngs: supportedLanguages,
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;