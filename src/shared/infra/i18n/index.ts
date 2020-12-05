// Global imports
import { initReactI18next } from "react-i18next";
import i18next, { LanguageDetectorAsyncModule } from "i18next";

// #region Local imports
import * as resources from "./locales";
// #endregion Local imports

const languageDetector: LanguageDetectorAsyncModule = {
  async: true,
  type: "languageDetector",
  detect: (cb: Function) => cb("en"),
  init: () => {},
  cacheUserLanguage: (lng) => {
    console.log(lng);
  },
};

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    resources: resources.default,
    ns: ["common"],
    defaultNS: "common",
  });

export const I18n = i18next;
